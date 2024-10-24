import {useThemeStore} from "@/stores/themeStore";
import type {Variant} from "~/data/types/theme";

export default defineNuxtRouteMiddleware((to) => {
    const setupVariant = (to.meta?.variant || "green") as Variant;

    const {setVariant} = useThemeStore()

    setVariant(setupVariant)
})
