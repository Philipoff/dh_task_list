import "reflect-metadata";
import {FetchModel} from "~/data/models/api/FetchModel";
import {ClientAPI} from "~/data/models/api/ClientAPI";
import {Column} from "~/data/decorators/Column";
import {Entity} from "~/data/decorators/Entity";

@Entity()
export class Tech extends FetchModel {
    api = new ClientAPI('/projects/techs')

    @Column()
    title!: string

    @Column()
    slug!: string

    static async all() {
        return (await Tech.$api.all())
            .map((t: Tech) => new Tech().fromJSON(t))
    }
}
