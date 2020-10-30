import {GetStaticPropsContext} from "next";
import I18nProvider, {I18nProviderProps} from 'next-translate/I18nProvider'
import useTranslationNext from 'next-translate/useTranslation'

import React from "react";

const defaultLanguage = "de"
type Namespaces = { [key: string]: {} }

async function importNamespaces(lang: string | string[], namespaces: string[] = []) {
    const pageNamespaces = await Promise.all(
        namespaces.map((ns) =>
            import(`./locales/${lang}/${ns}.json`).then((m) => m.default)
        )
    )

    return namespaces.reduce((obj: Namespaces, ns, i) => {
        obj[ns] = pageNamespaces[i]
        return obj
    }, {})
}

export async function getI18nProps(ctx: GetStaticPropsContext<{ lang?: string }>, namespaces: string[]): Promise<I18nProviderProps> {
    const lang = ctx.params?.lang || defaultLanguage

    return {
        lang,
        namespaces: await importNamespaces(lang, namespaces),
    }
}

export function withI18n<Props = {}>(Component: React.FC<Props>) {
    function WithI18n({lang, namespaces, ...props}: I18nProviderProps & Props) {
        return (
            <I18nProvider lang={lang} namespaces={namespaces}>
                {/*// @ts-ignore*/}
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
        const translatedTerm = t(term ? `${namespace}:${term}` : "");
        // Trim namespace in case no translation was found
        return translatedTerm.split(":")[translatedTerm.split(":").length - 1]
    }
}