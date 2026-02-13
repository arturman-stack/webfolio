import {useTranslation} from "react-i18next";

export function locale() {
    const {i18n} = useTranslation();
    return i18n.language
}
