import { Button, Page } from "./Generic.interface"

export interface Languages extends Page {
    buttons: Array<Button>
}

export interface Modes extends Page {
    buttons: Array<Button>
}

export interface Sound extends Page {
    buttons: Array<Button>
}

export interface Attributions extends Page {
}

export interface Nier extends Page {
}

export interface LegalNotice extends Page {
}

export interface System extends Page {
    buttons: Array<Button>,
    subpages: {
        languages: Languages,
        modes: Modes,
        sound: Sound,
        attributions: Attributions,
        nier: Nier,
        legalNotice: LegalNotice
    }
}