import {GetStaticPropsContext} from "next";
import I18nProvider from 'next-translate/I18nProvider'
import useTranslationNext from 'next-translate/useTranslation'

import * as React from "react";

// const allLanguages = ["de"]
const defaultLanguage = "de"

async function importNamespaces(lang: string | string[], namespaces: string[] = []) {
    const pageNamespaces = await Promise.all(
        namespaces.map((ns) =>
            import(`./locales/${lang}/${ns}.json`).then((m) => m.default)
        )
    )

    return namespaces.reduce((obj: any, ns, i) => {
        obj[ns] = pageNamespaces[i]
        return obj
    }, {})
}

export async function getI18nProps(ctx: GetStaticPropsContext, namespaces: any) {
    const lang = ctx.params?.lang || defaultLanguage

    return {
        lang,
        namespaces: await importNamespaces(lang, namespaces),
    }
}

export function withI18n<T>(Component: React.FC<T>) {
    function WithI18n(props: any) {
        return (
            <I18nProvider lang={props.lang} namespaces={props.namespaces}>
                <Component {...props} />
            </I18nProvider>
        )
    }

    return WithI18n
}

export function useTranslation(namespace: string = "common") {
    const {t} = useTranslationNext()

    return (term: string) => {

        if (term?.includes(":"))
            console.warn("Term included namespace!")
        const translatedTerm =  t(term ? `${namespace}:${term}` : "");
        // Trim namespace in case no translation was found
        return translatedTerm.split(":")[translatedTerm.split(":").length -1]
    }
}