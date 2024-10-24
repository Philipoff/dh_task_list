import {defineStore} from "pinia";
import type {Variant} from "~/data/types/theme";
import {useColorMode} from "#imports";

export const useThemeStore = defineStore("theme", {
    state: () => ({
        variant: "green" as Variant,
        theme: useColorMode()
    }),
    actions: {
        setVariant(v: Variant) {
            if (process.client) {
                document.documentElement.classList.remove(`${this.variant}-variant`)
                document.documentElement.classList.add(`${v}-variant`)
            }

            this.variant = v
        },
        setProjectAccentColor(color: string) {
            if (process.client) {
                document.body.style.setProperty("--accent-project", color)
            }
        }
    }
})
