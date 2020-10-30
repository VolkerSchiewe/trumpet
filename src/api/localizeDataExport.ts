import registration from "../locales/de/registration.json"

export function localizeDataExport(data: any) {
    return data.reduce((acc: any[], user: {}) => {
        const localizedUser = {}
        Object.keys(user).forEach(key => {
            // @ts-ignore
            const translation = registration[user[key]]
            // @ts-ignore
            localizedUser[registration[key]] = translation || user[key]
        })
        acc.push(localizedUser)
        return acc
    }, [])
}