import { application } from '../../Interfaces/Generic.interface';
import Loading from './Loading.json';
import Landing from './Landing.json';
import Home from './Home.json';
import Projects from './Projects.json';
import Contact from './Contact.json';
import NotFound from './NotFound.json';

// Import system's pages
import System from './System.json';
import Languages from './system/Languages.json';
import Modes from './system/Modes.json';
import Sound from './system/Sound.json';
import Attributions from './system/Attributions.json';
import Nier from './system/Nier.json';
import LegalNotice from './system/LegalNotice.json';


export const PagesEN: application = {
    loading: Loading,
    landing: Landing,
    home: Home,
    projects: Projects,
    contact: Contact,
    system: {
        ...System,
        subpages: {
            languages: Languages,
            modes: Modes,
            sound: Sound,
            attributions: Attributions,
            nier: Nier,
            legalNotice: LegalNotice
        }
    },
    notFound: NotFound
}