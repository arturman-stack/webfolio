import karas_am from "@/images/websites/karas/karas_am.png";
import karas_en from "@/images/websites/karas/karas_en.png";
import karas_ru from "@/images/websites/karas/karas_ru.png";
import tumanyanshaurma_am from "@/images/websites/tumanyanshaurma/tumanyanshaurma_am.png";
import tumanyanshaurma_en from "@/images/websites/tumanyanshaurma/tumanyanshaurma_en.png";
import tumanyanshaurma_ru from "@/images/websites/tumanyanshaurma/tumanyanshaurma_ru.png";

const websites = [
  {
    id: 1,
    title: "karas.am",
    translation: [
      {
        title: "Կարաս",
        image: karas_am,
        href: "https://karas.am/",
        key: 'am'
      },
      {
        title: "Karas",
        image: karas_en,
        href: "https://karas.am/",
        key: 'en'
      },
      {
        title: "Карас",
        image: karas_ru,
        href: "https://karas.am/",
        key: 'ru'
      },
    ]
  },
  {
    id: 2,
    title: "tumanyanshaurma.am",
    translation: [
      {
        title: "Թումանյան Շաուրմա",
        image: tumanyanshaurma_am,
        href: "https://www.tumanyanshaurma.am/",
        key: 'am'
      },
      {
        title: "Tumanyan Shaurma",
        image: tumanyanshaurma_en,
        href: "https://www.tumanyanshaurma.am/",
        key: 'en'
      },
      {
        title: "Туманян Шаверма",
        image: tumanyanshaurma_ru,
        href: "https://www.tumanyanshaurma.am/",
        key: 'ru'
      },
    ]
  },
];

export default websites;