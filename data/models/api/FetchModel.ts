import "reflect-metadata";
import {ClientAPI} from "~/data/models/api/ClientAPI";
import {BaseModel} from "~/data/models/BaseModel";

export abstract class FetchModel extends BaseModel {
    public api!: ClientAPI
    static $api: ClientAPI

    async all() {
        return this.api.all()
    }
}
