import "../../styles/globals.css";
import Footer from "@/components/footer/Footer";
import ScrollUp from "@/components/ui/buttons/scrollUp/scrollUp";
import TranslationsProvider from "@/lib/TranslationsProvider";
import initTranslations from "@/app/i18n";

export const metadata = {
	title: "Artur Mrteyan",
};

const i18nNamespaces = ['common']

export default async function RootLayout({children, params}) {
	const awaitedParams = await params;
	const locale = awaitedParams.locale;

	const {resources} = await initTranslations(locale, ['common'])

	return (
		<TranslationsProvider resources={resources} locale={locale} namespaces={i18nNamespaces}>
			<html lang="en">
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com"/>
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
				<link
					href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
					rel="stylesheet"/>
				<title>Artur Mrteyan</title>
			</head>
			<body className="overflow-x-hidden bg-black-500">
			<ScrollUp/>
			{children}
			<Footer/>
			</body>
			</html>
		</TranslationsProvider>
	);
};