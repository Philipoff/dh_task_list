import "reflect-metadata";
import {ClientAPI} from "~/data/models/api/ClientAPI";
import {useOvcApi} from "~/hooks/useOvcApi";

export class ProjectsAPI extends ClientAPI {
    async getPreviews() {
        return await useOvcApi(this.path + '/getPreviews', {method: 'POST', body: {order: {order: 'ASC'}}})
    }

    async getPreviewsByTopics(projectTopics: any[]) {
        return await useOvcApi(this.path + '/getPreviewsByTopics', {method: 'POST', body: {topics: projectTopics, order: {order: 'ASC'}}})
    }

    async getProjectBySlug(slug: string) {
        return await useOvcApi(this.path + '/getBySlug?slug=' + slug, {method: 'GET'})
    }
}
