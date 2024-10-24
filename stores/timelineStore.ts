import {defineStore} from "pinia";
import {TimelineTopic} from "~/data/models/TimelineTopic";
import {TimelineItem} from "~/data/models/TimelineItem";

const dhEvents = [
    {
        "id": "6380f0ab6eeb337405af9909",
        "title": "DH-лекторий в культурном квартале Брусницын",
        "description": "Раз в две недели по субботам преподаватели DH-центра ИТМО будут читать <a href=\"https://t.me/dhcenter\" target=\"_blank\">лекции</a>. Расписание встреч: 19 октября, 2, 16, 30 ноября, 14 и 28 декабря. За анонсами следите в телеграм-канале DH-центра.",
        "date": "2022-11-25T00:00:00.000Z",
        "dateReadable": "Октябрь-декабрь 2024",
        "topic": "629915e16d58cf46a87930e1",
        "color": "#c835fd",
        "__v": 0
    },
    {
        "id": "637e7d966eeb337405af9838",
        "title": "Гуманитарные проблемы актуальных наук: цифровая дисциплина и проект",
        "description": "Конференция Международного центра цифровых гуманитарных <a href=\"https://dh.itmo.ru/april-conference-2024\" target=\"_blank\">исследований</a> Университета ИТМО в Петербурге и онлайн.",
        "date": "2022-11-23T00:00:00.000Z",
        "dateReadable": "15−17 апреля 2024",
        "topic": "629915e16d58cf46a87930e1",
        "color": "#c835fd",
        "__v": 0
    },
    {
        "id": "63756a346eeb337405af97fa",
        "title": "Аналитическое чтение",
        "description": "О том, какие процедуры и навыки помогут сделать <a href=\"https://www.youtube.com/watch?v=5Xa47R6gOOI\" target=\"_blank\">текст</a> доступным и как распутать сложную цепь биографических, культурных, политических контекстов, стоящих за текстом.",
        "date": "2022-08-20T00:00:00.000Z",
        "dateReadable": "Апрель 2024",
        "topic": "629915f16d58cf46a87930e4",
        "color": "#fd7135",
        "__v": 0
    },
    {
        "id": "62d404cb36cbc053722eb65f",
        "title": "Видеоигра — новый формат игр в искусстве",
        "description": "Почему музеи и галереи приобретают <a href=\"https://ncca-spb.timepad.ru/event/2849326/\" target=\"_blank\">видеоигры</a> в свои коллекции, а биеннале современного искусства демонстрируют в качестве арт-объектов? В дискуссии про видеоигры и их место в мире искусства участвовали преподаватели нашей магистерской программы.",
        "date": "2022-07-10T00:00:00.000Z",
        "dateReadable": "Апрель 2024",
        "topic": "629915e16d58cf46a87930e1",
        "color": "#c835fd",
        "__v": 0
    },
    {
        "id": "629925fd6cb8092462231818",
        "title": "Практики чтения",
        "description": "Вместе с коллегами из Центра полевых исследований МВШСЭН разобрались, какие <a href=\"https://dhlab-event.timepad.ru/event/2813567/\" target=\"_blank\">метаморфозы</a> сегодня переживают практики чтения.",
        "date": "2022-04-26T00:00:00.000Z",
        "dateReadable": "Март 2024",
        "topic": "629915f16d58cf46a87930e4",
        "color": "#fd7135",
        "__v": 0
    },
    {
        "id": "629925ba6cb8092462231815",
        "title": "Прогулка по коридору памяти: впечатление, архивирование, глитч",
        "description": "<a href=\"https://ges-2.org/a-walk-down-memory-lane-impression-archiving-glitching\" target=\"_blank\">Обсудили</a>, чем отличаются память человека и машины, как люди фиксируют себя сами, как их запоминают другие и как это делает нейросеть.",
        "date": "2022-01-26T00:00:00.000Z",
        "dateReadable": "Март 2024",
        "topic": "6299119a031ee5e09d849a0f",
        "color": "#4d82ff",

        "__v": 0
    },
    {
        "id": "629925946cb8092462231812",
        "title": "Цифровая усталость",
        "description": "О том, как <a href=\"https://www.youtube.com/watch?v=Wt6FOnL2gzQ\" target=\"_blank\">цифровое окружение</a> меняет наше понимание усталости и зачем её изучать.",
        "date": "2022-01-01T00:00:00.000Z",
        "dateReadable": "Декабрь 2023",
        "topic": "629915f16d58cf46a87930e4",
        "color": "#fd7135",
        "__v": 0
    }
]
const topics = [
    {
        "id": "6299119a031ee5e09d849a0f",
        "title": "Лекция",
        "color": "#4d82ff",
        "__v": 0
    },
    {
        "id": "629915e16d58cf46a87930e1",
        "title": "Конференция",
        "color": "#c835fd",
        "__v": 0
    },
    {
        "id": "629915f16d58cf46a87930e4",
        "title": "Открытый семинар",
        "color": "#fd7135",
        "__v": 0
    },
]
export const useTimelineStore = defineStore('timelineStore', {
    state: () => ({
        timelineTopics: [],
        timelineItems: []
    }),
    actions: {
        async fetchTimelineTopics() {
            // @ts-ignore
            this.timelineTopics = topics
        },
        async fetchTimelineItems() {
            // @ts-ignore
            this.timelineItems = dhEvents
        }
    },
    getters: {
        filteredTimelineItems(): TimelineItem[] {
            const selectedTopicIds = this.timelineTopics.map(t => t["id"])
            console.log(selectedTopicIds)

            return this.timelineItems.filter(tItem => selectedTopicIds.includes(tItem["topic"]))
        },
        // isAnyTopicSelected(): boolean {
            // return this.timelineTopics.some(t => t.selected)
        // }
    }
})
