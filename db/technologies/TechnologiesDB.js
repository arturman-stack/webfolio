import {BiLogoTypescript} from "react-icons/bi";
import {RiBearSmileFill, RiJavascriptFill, RiNextjsFill, RiTailwindCssFill} from "react-icons/ri";
import {FaCss3Alt, FaGitAlt, FaHtml5, FaReact} from "react-icons/fa";
import {SiRedux} from "react-icons/si";
import {GiElephant} from "react-icons/gi";

const className = "text-[3vw]";

export const technologies = [
	{
		id: 1,
		status: 1,
		name: "JavaScript",
		icon: <RiJavascriptFill className={`${className} text-[#F0DB4F]`}/>,
		color: "text-[#F0DB4F]"
	},
	{
		id: 2,
		status: 1,
		name: "React.js",
		icon: <FaReact className={`${className} text-[#61DBFB]`}/>,
		color: "text-[#61DBFB]"
	},
	{
		id: 3,
		status: 1,
		name: "Next.js",
		icon: <RiNextjsFill className={`${className} text-[#FFFFFF]`}/>,
		color: "text-[#FFFFFF]"
	},
	{
		id: 4,
		status: 1,
		name: "Zustand",
		icon: <RiBearSmileFill className={`${className} text-[#2D52C1]`}/>,
		color: "text-[#2D52C1]"
	},
	{
		id: 5,
		status: 1,
		name: "Redux Toolkit",
		icon: <SiRedux className={`${className} text-[#764abc]`}/>,
		color: "text-[#764abc]"
	},
	{
		id: 6,
		status: 1,
		name: "TypeScript",
		icon: <BiLogoTypescript className={`${className} text-[#007acc]`}/>,
		color: "text-[#007acc]"
	},
	// {
	// 	id: 7,
	// 	status: 1,
	// 	name: "PHP",
	// 	icon: <GiElephant className={`${className} text-[#474A8A]`}/>,
	// 	color: "text-[#474A8A]"
	// },
	{
		id: 8,
		status: 1,
		name: "Tailwind CSS",
		icon: <RiTailwindCssFill className={`${className} text-[#06b6d4]`}/>,
		color: "text-[#06b6d4]"
	},
	{
		id: 9,
		status: 1,
		name: "HTML5",
		icon: <FaHtml5 className={`${className} text-[#e34c26]`}/>,
		color: "text-[#e34c26]"
	},
	{
		id: 10,
		status: 1,
		name: "CSS3",
		icon: <FaCss3Alt className={`${className} text-[#264de4]`}/>,
		color: "text-[#264de4]"
	},
	{
		id: 11,
		status: 1,
		name: "Git",
		icon: <FaGitAlt className={`${className} text-[#F1502F]`}/>,
		color: "text-[#F1502F]"
	},
];

export const technologiesDB = {
	id: 1,
	status: 1,
	translation: [
		{
			key: "am",
			title: "Տեխնոլոգիաներ",
			categories: [
				{
					id: 1,
					title: "Front-End",
					items: [
						"JavaScript",
						"TypeScript",
						"React.js",
						"Next.js",
						"HTML",
						"CSS",
					],
				},
				{
					id: 2,
					title: "Վիճակի կառավարում",
					items: [
						"Redux",
						"Redux Toolkit",
						"Zustand",
						"MobX",
					],
				},
				{
					id: 3,
					title: "UI / Styling",
					items: [
						"CSS3",
						"Tailwind CSS",
						"MUI (Material UI)",
						"Ant Design",
						"SCSS",
					],
				},
				{
					id: 4,
					title: "Գործիքներ",
					items: [
						"Git",
						"REST API",
						"Axios",
						"Fetch",
						"React Query",
						"Vite",
						"Webpack",
					],
				},
			],
		},
		{
			key: "en",
			title: "Technologies",
			categories: [
				{
					id: 1,
					title: "Front-End",
					items: [
						"JavaScript",
						"TypeScript",
						"React.js",
						"Next.js",
						"HTML",
						"CSS",
					],
				},
				{
					id: 2,
					title: "State Management",
					items: [
						"Redux",
						"Redux Toolkit",
						"Zustand",
						"MobX",
					],
				},
				{
					id: 3,
					title: "UI / Styling",
					items: [
						"CSS3",
						"Tailwind CSS",
						"MUI (Material UI)",
						"Ant Design",
						"SCSS",
					],
				},
				{
					id: 4,
					title: "Tools",
					items: [
						"Git",
						"REST API",
						"Axios",
						"Fetch",
						"React Query",
						"Vite",
						"Webpack",
					],
				},
			],
		},
		{
			key: "ru",
			title: "Технологии",
			categories: [
				{
					id: 1,
					title: "Front-End",
					items: [
						"JavaScript",
						"TypeScript",
						"React.js",
						"Next.js",
						"HTML",
						"CSS",
					],
				},
				{
					id: 2,
					title: "Управление состоянием",
					items: [
						"Redux",
						"Redux Toolkit",
						"Zustand",
						"MobX",
					],
				},
				{
					id: 3,
					title: "UI / Стилизация",
					items: [
						"CSS3",
						"Tailwind CSS",
						"MUI (Material UI)",
						"Ant Design",
						"SCSS",
					],
				},
				{
					id: 4,
					title: "Инструменты",
					items: [
						"Git",
						"REST API",
						"Axios",
						"Fetch",
						"React Query",
						"Vite",
						"Webpack",
					],
				},
			],
		},
	],
};
