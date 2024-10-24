export const HexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        }
        : null
}

export const getContrastColor = (color: string) => {
    const rgb = HexToRgb(color)
    if (rgb) {
        const o = Math.round(((rgb.r * 299) + (rgb.g * 587) + (rgb.b * 114)) / 1000)
        return (o > 125) ? 'black' : 'white'
    }
    return 'black'
}

export const makeMoreContrast = (theme: string, color: string) => {
    const rgb = HexToRgb(color)

    if (rgb) {
        const centerDelta = (Math.abs(128 - rgb.r) + Math.abs(128 - rgb.g) + Math.abs(128 - rgb.b)) / 3

        if (rgb?.r + rgb?.g + rgb?.b > 382 && theme === 'light') {
            rgb.r -= centerDelta
            rgb.g -= centerDelta
            rgb.b -= centerDelta
        }

        if (rgb?.r + rgb?.g + rgb?.b < 382 && theme === 'dark') {
            rgb.r += centerDelta
            rgb.g += centerDelta
            rgb.b += centerDelta
        }

        return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`
    }

    return color
}
