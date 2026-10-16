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
					title: "Լեզուներ և ֆրեյմվորքներ",
					items: [
						"JavaScript (ES6+)",
						"TypeScript",
						"React.js",
						"Next.js",
						"HTML5",
						"CSS3",
					],
				},
				{
					id: 2,
					title: "Վիճակի կառավարում և տվյալների ստացում",
					items: [
						"TanStack Query",
						"Redux Toolkit",
						"Zustand",
						"MobX",
						"Axios",
						"Fetch",
					],
				},
				{
					id: 3,
					title: "UI գրադարաններ և ստիլիզացիա",
					items: [
						"Tailwind CSS",
						"MUI",
						"Ant Design",
						"Styled Components",
						"Framer Motion",
					],
				},
				{
					id: 4,
					title: "Ձևեր և վալիդացիա",
					items: [
						"React Hook Form",
						"Yup",
						"Zod",
					],
				},
				{
					id: 5,
					title: "Backend ծանոթություն",
					items: [
						"Node.js",
						"REST APIs",
						"JWT",
						"MongoDB",
						"Laravel/PHP",
						"SQL",
					],
				},
				{
					id: 6,
					title: "AI գործիքներ",
					items: [
						"Claude Code",
						"Cursor",
						"ChatGPT",
						"Gemini",
						"Grok",
						"DeepSeek",
						"Prompt engineering",
					],
				},
				{
					id: 7,
					title: "Գործիքներ",
					items: [
						"Git",
						"GitHub",
						"GitLab",
						"Vite",
						"pnpm",
						"ESLint",
						"Husky",
						"Slack",
					],
				},
				{
					id: 8,
					title: "Դիզայն",
					items: [
						"Figma",
						"Adobe Photoshop",
						"Canva",
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
					title: "Languages & Frameworks",
					items: [
						"JavaScript (ES6+)",
						"TypeScript",
						"React.js",
						"Next.js",
						"HTML5",
						"CSS3",
					],
				},
				{
					id: 2,
					title: "State Management & Data Fetching",
					items: [
						"TanStack Query",
						"Redux Toolkit",
						"Zustand",
						"MobX",
						"Axios",
						"Fetch",
					],
				},
				{
					id: 3,
					title: "UI Libraries & Styling",
					items: [
						"Tailwind CSS",
						"MUI",
						"Ant Design",
						"Styled Components",
						"Framer Motion",
					],
				},
				{
					id: 4,
					title: "Forms & Validation",
					items: [
						"React Hook Form",
						"Yup",
						"Zod",
					],
				},
				{
					id: 5,
					title: "Backend Familiarity",
					items: [
						"Node.js",
						"REST APIs",
						"JWT",
						"MongoDB",
						"Laravel/PHP",
						"SQL",
					],
				},
				{
					id: 6,
					title: "AI Tools",
					items: [
						"Claude Code",
						"Cursor",
						"ChatGPT",
						"Gemini",
						"Grok",
						"DeepSeek",
						"Prompt engineering",
					],
				},
				{
					id: 7,
					title: "Tools",
					items: [
						"Git",
						"GitHub",
						"GitLab",
						"Vite",
						"pnpm",
						"ESLint",
						"Husky",
						"Slack",
					],
				},
				{
					id: 8,
					title: "Design",
					items: [
						"Figma",
						"Adobe Photoshop",
						"Canva",
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
					title: "Языки и фреймворки",
					items: [
						"JavaScript (ES6+)",
						"TypeScript",
						"React.js",
						"Next.js",
						"HTML5",
						"CSS3",
					],
				},
				{
					id: 2,
					title: "Управление состоянием и получение данных",
					items: [
						"TanStack Query",
						"Redux Toolkit",
						"Zustand",
						"MobX",
						"Axios",
						"Fetch",
					],
				},
				{
					id: 3,
					title: "UI-библиотеки и стилизация",
					items: [
						"Tailwind CSS",
						"MUI",
						"Ant Design",
						"Styled Components",
						"Framer Motion",
					],
				},
				{
					id: 4,
					title: "Формы и валидация",
					items: [
						"React Hook Form",
						"Yup",
						"Zod",
					],
				},
				{
					id: 5,
					title: "Знакомство с Backend",
					items: [
						"Node.js",
						"REST APIs",
						"JWT",
						"MongoDB",
						"Laravel/PHP",
						"SQL",
					],
				},
				{
					id: 6,
					title: "AI-инструменты",
					items: [
						"Claude Code",
						"Cursor",
						"ChatGPT",
						"Gemini",
						"Grok",
						"DeepSeek",
						"Промпт-инжиниринг",
					],
				},
				{
					id: 7,
					title: "Инструменты",
					items: [
						"Git",
						"GitHub",
						"GitLab",
						"Vite",
						"pnpm",
						"ESLint",
						"Husky",
						"Slack",
					],
				},
				{
					id: 8,
					title: "Дизайн",
					items: [
						"Figma",
						"Adobe Photoshop",
						"Canva",
					],
				},
			],
		},
	],
};