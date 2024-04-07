import { Button, Page } from "./Generic.interface"

export interface Home extends Page {
    text: string,
    buttons: Array<Button>
}