export default {
    en: {
        name: 'English',
        load: () => { return import('./en.json') },
    },
    es: {
        name: 'España',
        load: () => { return import('./es.json') },
    },
    ru: {
        name: 'Русский',
        load: () => { return import('./ru.json') },
    },
}
