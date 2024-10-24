import 'reflect-metadata';

import('reflect-metadata').then(() => {
    console.log("Reflect metadata imported!")
    console.log("Use following public values:")
    console.log(useRuntimeConfig().public)
})

export default defineEventHandler((event) => {
})