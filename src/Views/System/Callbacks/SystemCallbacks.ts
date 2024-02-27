import styles from '../../../Views/System/System.module.scss';

const languageCallback = () => {
    const allZones = document.querySelectorAll<HTMLDivElement>(`.${styles.zone2}`);
    const zone = document.querySelector<HTMLDivElement>(`.${styles.languages}`);

    if (allZones)
        allZones.forEach(zone => zone.style.display = "none");
    if (zone)
        zone.style.display = "flex";
}

const modeCallback = () => {
    const allZones = document.querySelectorAll<HTMLDivElement>(`.${styles.zone2}`);
    const zone = document.querySelector<HTMLDivElement>(`.${styles.modes}`);

    if (allZones)
        allZones.forEach(zone => zone.style.display = "none");
    if (zone)
        zone.style.display = "flex";
}

const legalNoticeCallback = () => {
    const allZones = document.querySelectorAll<HTMLDivElement>(`.${styles.zone2}`);
    const zone = document.querySelector<HTMLDivElement>(`.legalNotice`);

    if (allZones)
        allZones.forEach(zone => zone.style.display = "none");
    if (zone)
        zone.style.display = "flex";
}

const nierCallback = () => {
    const allZones = document.querySelectorAll<HTMLDivElement>(`.${styles.zone2}`);
    const zone = document.querySelector<HTMLDivElement>(`.nier`);

    if (allZones)
        allZones.forEach(zone => zone.style.display = "none");
    if (zone)
        zone.style.display = "flex";
}

const attributionsCallback = () => {
    const allZones = document.querySelectorAll<HTMLDivElement>(`.${styles.zone2}`);
    const zone = document.querySelector<HTMLDivElement>(`.attributions`);

    if (allZones)
        allZones.forEach(zone => zone.style.display = "none");
    if (zone)
        zone.style.display = "flex";
}

export const callbacks: { [key: string]: () => void } = {
    languageCallback,
    modeCallback,
    legalNoticeCallback,
    nierCallback,
    attributionsCallback
}