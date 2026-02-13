import {locale} from "@/lib/locale";

export const Translation = (t, n) => {
	return t?.find(i => i?.key === locale())?.[`${n}`]
}