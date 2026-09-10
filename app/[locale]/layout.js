import "../../styles/globals.css";
import Footer from "@/components/footer/Footer";
import ScrollUp from "@/components/ui/buttons/scrollUp/scrollUp";
import TranslationsProvider from "@/lib/TranslationsProvider";
import initTranslations from "@/app/i18n";
import {NotificationProvider} from "@/providers/NotificationProvider";
import TemplateStyles from "@/utils/TemplateStyles";

const i18nNamespaces = ['common']

export default async function RootLayout({children, params}) {
  const {locale} = await params;

  const title_am = "Արթուր Մրտեյան";
  const title_en = "Artur Mrteyan";
  const title_ru = "Артур Мртеян";

  const title = locale === "en" ? title_en : locale === "ru" ? title_ru : title_am;

  const {resources} = await initTranslations(locale, ['common'])

  return (
    <TranslationsProvider resources={resources} locale={locale} namespaces={i18nNamespaces}>
      <html lang="en">
      <head>
        <TemplateStyles/>
        <meta name="theme-color" content="#000000"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link
          href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"/>
        <title>{title}</title>
      </head>
      <body className="overflow-x-hidden bg-black-500">
      <NotificationProvider>
        <ScrollUp/>
        {children}
        <Footer/>
      </NotificationProvider>
      </body>
      </html>
    </TranslationsProvider>
  );
};