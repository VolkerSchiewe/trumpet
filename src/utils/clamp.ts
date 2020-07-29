
export function clamp(number: number, lower: number, upper: number) {
    number = number <= upper ? number : upper
    number = number >= lower ? number : lower
    return number
}