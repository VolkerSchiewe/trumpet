declare module 'next-translate/I18nProvider' {
    export default function I18nProvider(props: {
        lang: string;
        namespaces: object;
        children: ReactNode;
    }): ReactElement;
}