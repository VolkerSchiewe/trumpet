import type { ThemeColor } from "$lib/types/colors";

export function getTextColorClass(color: ThemeColor): string {
    return {
        magenta: 'text-theme-magenta',
        blue: 'text-theme-blue',
        yellow: 'text-theme-yellow',
        green: 'text-theme-green'
    }[color];
}
export function getBgColorClass(color: ThemeColor): string {
    return {
        magenta: 'bg-theme-magenta',
        blue: 'bg-theme-blue',
        yellow: 'bg-theme-yellow',
        green: 'bg-theme-green'
    }[color];
}