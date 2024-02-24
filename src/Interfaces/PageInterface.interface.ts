export interface Page {
    title: string,
    description: string,
    texts: string[],
    buttons: Array<{
        title: string,
        description: string,
    }>
}

export interface Pages {
    [page: string]: Page
}

export interface Lang {
    [lang: string]: Pages
}