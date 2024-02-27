export interface Button {
    title: string,
    description: string,
    callback: string,
    buttons: Array<Button>
}

export interface Texts {
    title: string,
    texts: string[]
}

export interface Page {
    title: string,
    description: string,
    texts: {[text: string]: Texts},
    buttons: Array<Button>
}

export interface Pages {
    [page: string]: Page
}

export interface Lang {
    [lang: string]: Pages
}