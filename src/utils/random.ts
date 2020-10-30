export function getRandomNumbers(min: number, max: number, count: number = 1): number[] {
    const result: number[] = []
    while (result.length < Math.round(count)) {
        const random = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!result.includes(random))
            result.push(random)
    }
    return result
}
