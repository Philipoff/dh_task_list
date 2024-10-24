import {useOvcApi} from "~/hooks/useOvcApi";
import "reflect-metadata";

export class ClientAPI {
    path!: string
    methods: string[] = ['all']

    constructor (path: string) {
        this.path = path
    }

    async all() {
        return await useOvcApi(this.path + '/getAll', {method: "POST"})
    }
}
