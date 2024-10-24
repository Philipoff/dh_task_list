import {Entity} from "~/data/decorators/Entity";
import {Column} from "~/data/decorators/Column";
import {FetchModel} from "~/data/models/api/FetchModel";
import {ClientAPI} from "~/data/models/api/ClientAPI";

@Entity()
export class Picture extends FetchModel {
    api = new ClientAPI('')

    @Column()
    path!: string

    @Column()
    caption?: string

    get url() {
        if (this.path.includes('http')) {
            return this.path
        }

        return useRuntimeConfig().public.apiHost + '/' + this.path
    }
}