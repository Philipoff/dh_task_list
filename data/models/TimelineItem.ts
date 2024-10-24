import "reflect-metadata";
import {FetchModel} from "~/data/models/api/FetchModel";
import {Entity} from "~/data/decorators/Entity";
import {Column} from "~/data/decorators/Column";
import {ClientAPI} from "~/data/models/api/ClientAPI";
import {TimelineTopic} from "~/data/models/TimelineTopic";

@Entity()
export class TimelineItem extends FetchModel {
    api = new ClientAPI('/timeline/timelineItems')

    @Column()
    title!: string

    @Column({type: Date})
    date!: Date

    @Column()
    dateReadable!: string

    @Column()
    addition_description?: string

    @Column()
    description?: string

    @Column({type: TimelineTopic})
    topic!: TimelineTopic
}
