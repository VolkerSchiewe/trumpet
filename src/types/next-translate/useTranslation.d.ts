declare module 'next-translate/useTranslation' {
    export default function useTranslation(): {
        t: (key: string, query?: { [name: string]: string | number }) => string;
        lang: string;
    };
}