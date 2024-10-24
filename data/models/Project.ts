import "reflect-metadata";
import {FetchModel} from "~/data/models/api/FetchModel";
import {Column} from "~/data/decorators/Column";
import {Entity} from "~/data/decorators/Entity";
import {ProjectTopic} from "~/data/models/ProjectTopic";
import {Tech} from "~/data/models/Tech";
import {ProjectsAPI} from "~/data/models/api/ProjectsAPI";
import {Picture} from "~/data/models/Picture";

@Entity()
export class Project extends FetchModel {
    static $api: ProjectsAPI
    api = new ProjectsAPI('/projects/projects')

    @Column()
    title!: string

    @Column()
    slug!: string

    @Column()
    color!: string

    @Column()
    description!: string

    @Column()
    developTime?: number

    @Column({type: [Picture]})
    pictures?: Picture[]

    @Column({type: [ProjectTopic]})
    topics?: ProjectTopic[]

    @Column({type: [Tech]})
    techs?: Tech[]


    @Column()
    fullDescription?: string

    @Column()
    link?: string

    @Column()
    github?: string

    @Column()
    behance?: string

    get plain_techs() {
        return this.techs?.map(t => t.title).join(', ') || ''
    }

    get beautiful_link() {
        if (!this.link) {
            return ''
        }

        const _t = this.link.replaceAll(new RegExp('^https?://', 'g'), '').trim()
        if (_t[_t.length - 1] === '/') {
            return _t.slice(0, _t.length - 1)
        }
    }

    /**
     * @deprecated
     * Теперь везде используется previewsByTopics
     **/
    static async previews() {
        return (await Project.$api.getPreviews())
            .map((t: Project) => new Project().fromJSON(t))
    }

    static async previewsByTopics(topics: ProjectTopic[]) {
        return (await Project.$api.getPreviewsByTopics(topics))
            .map((t: Project) => new Project().fromJSON(t))
    }

    static async fetchBySlug(slug: string) {
        const _r = await Project.$api.getProjectBySlug(slug)
        if (!_r) {
            return null
        }
        return new Project().fromJSON(_r)
    }
}
