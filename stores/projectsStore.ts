import {defineStore} from "pinia";
import {ProjectTopic} from "~/data/models/ProjectTopic";
import {Tech} from "~/data/models/Tech";
import {Project} from "~/data/models/Project";
import {TimelineItem} from "~/data/models/TimelineItem";
const projects = [
    {
        "_id": "62966e5df37ab8268bfecca8",
        "title": "О скудости контекста в цифровой гуманитаристике",
        "slug": "chekdeli",
        "color": "#ffdb58",
        "isVisible": true,
        "topics": [
            {
                "_id": "62972254ee720813326ef8c1",
                "title": "Размышления",
                "slug": "js/ts",
                "color": "#0044cc",
                "__v": 0,
                "isVisible": true
            },
        ],
        "techs": [
            "Vue",
            "Git",
            "Bootstrap-Vue",
            "ExpressJS"
        ],
        "description": "Колонка академической руководительницы магистратуры по DH в ИТМО Полины Колозариди про то, как тяжело даётся синхронность критического подхода и прикладного действия",
        "photos": [],
        "link": "https://sysblok.ru/blog/o-skudosti-konteksta-v-cifrovoj-gumanitaristike/",
        "behance": "https://www.behance.net/gallery/123385669/chekdeli-veb-prilozhenie-chtoby-delit-cheki",
        "developTime": "14.08.2024",
        "pictures": [
            "upload/chekdeli_1656381171110.png",
            "upload/chekdeli_1656381415884.png",
            "upload/chekdeli_1656381419289.png",
            "upload/chekdeli_1656381423046.png"
        ]
    },
    {
        "_id": "629674def37ab8268bfeccb7",
        "title": "Стрит-арт в галерее и в цифре",
        "slug": "elektrik24",
        "color": "#3cb2fd",
        "isVisible": true,
        "topics": [
            {
                "_id": "62971dd6ee720813326ef8a2",
                "title": "Выставка",
                "slug": "frontend",
                "color": "#1f9193",
                "__v": 0,
                "isVisible": true
            },
            {
                "_id": "6297227aee720813326ef8c7",
                "title": "IT",
                "slug": "js/ts",
                "color": "#d1b500",
                "__v": 0,
                "isVisible": true
            }
        ],
        "techs": [
            "Bootstrap-Vue",
            "Vue",
            "Flask"
        ],
        "description": "Остаётся ли стрит-арт таковым, если его перенести с улиц в цифру? Как расширяются границы научных исследований стрит-арта? Читайте новый текст DH ИТМО о выставке уличного искусства «Палимпсест», созданной на стыке классики и новаторства",
        "photos": [],
        "link": "https://sysblok.ru/blog/blog_dh_center/strit-art-v-galeree-i-v-cifre/",
        "behance": "https://www.behance.net/gallery/122909963/elektrik24",
        "developTime": "07.06.2024",
        "pictures": []
    },
    {
        "_id": "6297737908923f49718ee0ea",
        "title": "Выставка «Исчезнет или превратится»: как куратор воспроизводит семейную память",
        "slug": "overcreated",
        "color": "#0acd17",
        "isVisible": true,
        "topics": [
            {
                "_id": "62971dd6ee720813326ef8a2",
                "title": "Выставка",
                "slug": "other",
                "color": "#1f9193",
                "__v": 0,
                "isVisible": true
            },
            {
                "_id": "62972254ee720813326ef8c1",
                "title": "Размышления",
                "slug": "js/ts",
                "color": "#0044cc",
                "__v": 0,
                "isVisible": true
            },
            {
                "_id": "629722ceee720813326ef8cd",
                "title": "Фестиваль",
                "slug": "uiux",
                "color": "#0052bd",
                "__v": 0,
                "isVisible": true
            },
        ],
        "techs": [
            "NestJS",
            "Vue",
            "Vite",
            "TypeScript"
        ],
        "description": "Эссе-рассуждение по итогам кураторской экскурсии с Ксенией Диодоровой, куратором выставки «Исчезнет или превратится» из программы фестиваля искусств Востока DAIRAFEST ‘VII. Поговорили о работе кураторов и о месте человека, традиции и метафоры в экспозиции.",
        "photos": [],
        "developTime": "28.02.2024",
        "github": "https://github.com/",
        "link": "https://sysblok.ru/blog/blog_dh_center/vystavka-ischeznet-ili-prevratitsja-kak-kurator-vosproizvodit-semejnuju-pamjat/",
        "pictures": []
    },
    {
        "pictures": [],
        "_id": "629780fa08923f49718ee3d8",
        "title": "Техника — это хорошо? Интервью с преподавателями и студентами курса «Цифровой субъект / цифровой объект» ",
        "slug": "dve_kapli",
        "color": "#f0815c",
        "isVisible": true,
        "topics": [
            {
                "_id": "62971dfdee720813326ef8a8",
                "title": "Интервью",
                "slug": "hack",
                "color": "#ff7000",
                "__v": 0,
                "isVisible": true
            },
            {
                "_id": "62972254ee720813326ef8c1",
                "title": "Размышления",
                "slug": "vk_mini_apps",
                "color": "#0044cc",
                "__v": 0,
                "isVisible": true
            },
            {
                "_id": "6297227aee720813326ef8c7",
                "title": "IT",
                "slug": "js/ts",
                "color": "#d1b500",
                "__v": 0,
                "isVisible": true
            },
        ],
        "techs": [
            "VKUI",
            "VK API",
            "React"
        ],
        "description": "Кто создает цифровое пространство? Какими могут в нем быть объекты и субъекты и что нам дает понимание таковых?",
        "photos": [],
        "developTime": "11.01.2024",
        "github": "https://sysblok.ru/blog/blog_dh_center/tehnika-jeto-horosho-intervju-s-prepodavateljami-i-studentami-kursa-cifrovoj-subekt-cifrovoj-obekt/",
        "link": "https://vk.com/app7752313_223632391"
    },
    {
        "pictures": [],
        "_id": "6297816e08923f49718ee3ec",
        "title": "Как непредвзято изучать организации? Интервью с Лёней Юлдашевым",
        "slug": "cifrovoy_dvoynik",
        "color": "#8e4def",
        "isVisible": true,
        "topics": [
            {
                "_id": "62971dfdee720813326ef8a8",
                "title": "Интервью",
                "slug": "backend",
                "color": "#ff7000",
                "__v": 0,
                "isVisible": true
            }
        ],
        "techs": [
            "MongoDB",
            "React",
            "VKUI",
            "VK API"
        ],
        "description": "Разговор о связи социологии организаций и Digital Humanities, обоснованной теории и возможности соединить прикладные и академические исследования.",
        "photos": [],
        "link": "https://sysblok.ru/blog/kak-nepredvzjato-izuchat-organizacii-intervju-s-ljonej-juldashevym/",
        "developTime": "22.12.2023"
    },
    {
        "_id": "6297817208923f49718ee3f0",
        "title": "Три взгляда на визуализации: сделать смысл вещей и явлений (не)видимым",
        "slug": "boisrouge",
        "color": "#028a00",
        "isVisible": true,
        "topics": [
            {
                "_id": "62972254ee720813326ef8c1",
                "title": "Размышления",
                "slug": "vk_mini_apps",
                "color": "#0044cc",
                "__v": 0,
                "isVisible": true
            }
        ],
        "techs": [
            "Flask",
            "MongoDB",
            "HTML/CSS/JS"
        ],
        "description": "Критика, теория, чувственность, визуальное мышление, превращение в изображения и почти художественное эссе о визуализациях.",
        "photos": [],
        "developTime": "17.05.2023",
        "link": "https://sysblok.ru/blog/tri-vzgljada-na-vizualizacii-sdelat-smysl-veshhej-i-javlenij-ne-vidimym/",
        "pictures": []
    }
]

export const useProjectsStore = defineStore("projects", {
    state: () => ({
        projectTopics: [] as ProjectTopic[],
        techs: [] as Tech[],
        projects: [] as Project[],
    }),
    actions: {
        async fetchProjectTopics() {
            let response = [
                {
                    "_id": "62971dd6ee720813326ef8a2",
                    "title": "Выставка",
                    "slug": "frontend",
                    "color": "#1f9193",
                    "__v": 0,
                    "isVisible": true
                },
                {
                    "_id": "62971dfdee720813326ef8a8",
                    "title": "Интервью",
                    "slug": "backend",
                    "color": "#ff7000",
                    "__v": 0,
                    "isVisible": true
                },
                {
                    "_id": "62972254ee720813326ef8c1",
                    "title": "Размышления",
                    "slug": "python",
                    "color": "#0044cc",
                    "__v": 0,
                    "isVisible": true
                },
                {
                    "_id": "6297227aee720813326ef8c7",
                    "title": "IT",
                    "slug": "js/ts",
                    "color": "#d1b500",
                    "__v": 0,
                    "isVisible": true
                },
                {
                    "_id": "629722ceee720813326ef8cd",
                    "title": "Фестиваль",
                    "slug": "vk_mini_apps",
                    "color": "#0052bd",
                    "__v": 0,
                    "isVisible": true
                }
            ]
            // @ts-ignore
            this.projectTopics = response
        },
        deselectAllTopics() {
            this.projectTopics.forEach(i => i.selected = false)
        },
        selectAllTopics() {
            this.projectTopics.forEach(i => i.selected = true)
        },
        async fetchTechs() {
            this.techs = [];
        },
        /**
         * @deprecated
         **/
        async fetchProjects() {
            // @ts-ignore
            this.projects = projects
        },
        async fetchProjectsByTopics(topics: ProjectTopic[]) {
            // @ts-ignore
            this.projects = projects
            // @ts-ignore
            topics = topics.map(topic => topic._id)
            if (topics.length > 0) {
                // @ts-ignore
                this.projects = this.projects.filter(project => (project.topics.filter(x => topics.includes(x._id))).length >= 1)
            }
        }
    },

    getters: {
        isAnyTopicSelected(): boolean {
            return this.projectTopics.some(p => p.selected)
        }
    }
})
