import { Loading } from "./Loading.interface"
import { Landing } from "./Landing.interface"
import { Home } from "./Home.interface"
import { Projects } from "./Projects.interface"
import { Contact } from "./Contact.interface"
import { System } from "./System.interface"

export interface Button {
    title: string,
    footer: string,
    callback: string
}

export interface Input {
    name: string,
    placeholder: string,
    type: string
}

export interface Form {
    title: string,
    inputs: Array<Input>,
    submit: Button
}

export interface Page {
    title: string,
    footer: string,
}

export interface application {
    landing: Landing,
    loading: Loading,
    home: Home,
    projects: Projects,
    contact: Contact,
    system: System,
    notFound: Page
}