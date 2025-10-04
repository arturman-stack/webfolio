"use client";
import React, {useState, useEffect} from "react";
import languages from "@/db/languages/LanguagesDB";
import Image from "next/image";
import {checkWindow} from "@/utils/GlobalWindow";
import {usePathname, useRouter} from "next/navigation";
import {useTranslation} from "react-i18next";
import LanguagesSkeleton from "@/components/ui/skeletons/languages/LanguagesSkeleton";
import {useLinkStatus} from "next/link";
import {AiOutlineLoading3Quarters} from "react-icons/ai";

function Languages() {
	const {i18n} = useTranslation();
	const locale = i18n.language;
	const [open, setOpen] = useState(false);
	const [loading, setLoading] = useState(false);
	const [activeLang, setActiveLang] = useState(null);
	const currentPathname = usePathname();
	const router = useRouter();
	const {pending} = useLinkStatus();
	console.log(pending, 'loading');

	// Close dropdown on outside click
	useEffect(() => {
		const handleClickOutside = (e) => {
			if (!e.target.closest(".language-menu")) {
				setOpen(false);
			}
		};
		document.addEventListener("click", handleClickOutside);
		return () => document.removeEventListener("click", handleClickOutside);
	}, []);

	useEffect(() => {
		if (languages) {
			const lang = languages?.find(item => item.slug === locale);
			setActiveLang(lang);
		}
		// eslint-disable-next-line
	}, [languages]);

	const handleChange = (slug, id) => {
		checkWindow && sessionStorage.setItem("language_id", id);
		checkWindow && sessionStorage.setItem("language_key", slug);

		const days = 30;
		const date = new Date();

		date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
		const expires = `; expires=${date.toUTCString()}`;

		document.cookie = `NEXT_LOCALE=${slug};expires=${expires};path=/`;

		router.push(currentPathname.replace(`/${locale}`, `/${slug}`));

		router.refresh();
	}

	const handleLanguageChange = async (lang) => {
		setLoading(true);
		setActiveLang(lang);
		setOpen(false);

		// TODO: add your locale switch logic here (e.g. router.push or i18n.changeLanguage)
		try {
			await handleChange(lang?.slug, lang?.id);
		} finally {
			// Give router time to refresh before hiding loading
			setTimeout(() => setLoading(false), 3000);
		}
	};

	return (
		<div className="relative language-menu">
			{/* Active language (Burger style button) */}
			{!activeLang ? <LanguagesSkeleton/> : (
				<button
					onClick={() => setOpen(!open)}
					className={`flex items-center gap-[.5vw] p-[.5vw] rounded-full duration-300 hover:bg-gray-100/20 transition ${open ? "bg-gray-100/20" : "bg-gray-100/10"}`}
				>
					{loading ? <AiOutlineLoading3Quarters className="w-[2vw] h-[2vw] text-gray-100 animate-spin"/> : (
						<Image
							src={activeLang?.image}
							alt={activeLang?.slug}
							width={250}
							height={250}
							className="w-[2vw] h-[2vw] min-w-[2vw] min-h-[2vw] rounded-full object-cover"
						/>
					)}
					<span
						className={`text-[1vw] mr-[.5vw] font-medium text-white-100 ${loading ? "blur-[3px]" : ""}`}>{activeLang?.slug.toUpperCase()}</span>
				</button>
			)}
			{/* Dropdown */}
			<div
				className={`absolute left-0 mt-3 w-max rounded-3xl border border-[#ffffff26] bg-[#ffffff14] backdrop-blur-[24px] shadow-lg overflow-hidden transform transition-all duration-300 ${
					open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
				}`}
			>
				{languages
					.filter((lang) => lang.id !== activeLang?.id)
					.map((lang) => (
						<button
							key={lang?.id}
							onClick={() => handleLanguageChange(lang)}
							className="flex items-center gap-[.5vw] p-[.5vw] w-full hover:bg-gray-100/20 transition"
						>
							<Image
								src={lang?.image}
								alt={lang?.slug}
								width={250}
								height={250}
								className="w-[2vw] h-[2vw] min-w-[28px] min-h-[28px] rounded-full object-cover"
							/>
							<span className="text-[1vw] mr-[.5vw] font-medium text-white-100">{lang?.slug.toUpperCase()}</span>
						</button>
					))}
			</div>
		</div>
	);
}

export default Languages;
