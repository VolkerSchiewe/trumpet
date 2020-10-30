declare module 'next-translate/I18nProvider' {
    import {PropsWithChildren, ReactElement} from "react";

    export interface I18nProviderProps {
        lang: string;
        namespaces: object;
    }

    export default function I18nProvider(props: PropsWithChildren<I18nProviderProps>): ReactElement;
}