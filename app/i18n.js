import { createInstance } from 'i18next';
import { initReactI18next } from 'react-i18next/initReactI18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import {i18nConfig} from '@/i18nConfig';
// const I18NextHttpBackend = require('i18next-http-backend');

export default async function initTranslations(
    locale,
    namespaces,
    i18nInstance,
    resources
) {
    i18nInstance = i18nInstance || createInstance();

    i18nInstance.use(initReactI18next);

    if (!resources) {
        i18nInstance.use(
            resourcesToBackend(
                (language, namespace) =>
                    import(`@/locales/${language}/${namespace}.json`)
            )
        );
    }

    await i18nInstance.init({
        lng: locale,
        resources,
        fallbackLng: i18nConfig.defaultLocale,
        supportedLngs: i18nConfig.locales,
        defaultNS: namespaces[0],
        fallbackNS: namespaces[0],
        ns: namespaces,
        preload: resources ? [] : i18nConfig.locales,
        serializeConfig: false,
        // use: [I18NextHttpBackend],

    });

    return {
        i18n: i18nInstance,
        resources: i18nInstance.services.resourceStore.data,
        t: i18nInstance.t
    };
}
