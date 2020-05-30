import {NextPageContext} from "next";
// @ts-ignore
import I18nProvider from 'next-translate/I18nProvider'
// @ts-ignore
import useTranslationNext from 'next-translate/useTranslation'

import * as React from "react";

const allLanguages = ["de"]
const defaultLanguage = "de"

async function importNamespaces(lang: string, namespaces: string[] = []) {
    const pageNamespaces = await Promise.all(
        namespaces.map((ns) =>
            import(`../locales/${lang}/${ns}.json`).then((m) => m.default)
        )
    )

    return namespaces.reduce((obj: any, ns, i) => {
        obj[ns] = pageNamespaces[i]
        return obj
    }, {})
}

interface I18nNextContext extends NextPageContext {
    params?: {
        lang: string
    }
}

export async function getI18nProps(ctx: I18nNextContext, namespaces: any) {
    const lang = ctx.params?.lang || defaultLanguage

    return {
        lang,
        namespaces: await importNamespaces(lang, namespaces),
    }
}

export function withI18n(Component: React.FC) {
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
        return t(term ? `${namespace}:${term}` : "");
    }
}