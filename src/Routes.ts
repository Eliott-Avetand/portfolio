import Contact from "./Views/Contact/Contact";
import Home from "./Views/Home/Home";
import Projects from "./Views/Projects/Projects";
import System from "./Views/System/System";

export const customRoutes = [
    { path: '/home', component: Home },
    { path: '/projects', component: Projects },
    { path: '/contact', component: Contact },
    { path: '/system', component: System }
];