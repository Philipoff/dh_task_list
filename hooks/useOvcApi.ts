export const useOvcApi = async (path: string, options: any): Promise<any> => {
    return await $fetch(useRuntimeConfig().public.apiUrl + path, options)
}
