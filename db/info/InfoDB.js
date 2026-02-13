const startDate = new Date(2022, 11, 1); // 01.12.2023 (months 0-based)

function getYearsFlooredToHalf_byMs(start = startDate, now = new Date()) {
	const msInYear = 1000 * 60 * 60 * 24 * 365.25; // accounts for leap years roughly
	const diffMs = now.getTime() - start.getTime();
	const years = diffMs / msInYear;
	const flooredHalf = Math.floor(years * 2) / 2;
	return Number(flooredHalf.toFixed(1)); // e.g. 1.5
}

const year = getYearsFlooredToHalf_byMs();


const InfoDB = {
	id: 1,
	status: 1,
	translation: [
		{name: "Իմ Մասին", description: `Ես Front-End Վեբ Ծրագրավորող եմ՝ React.js, Next.js, TypeScript և Tailwind CSS-ի միջոցով արագ արձագանքող, մասշտաբային հավելվածներ ստեղծելու ${year}+ տարվա գործնական փորձով։ Ես կենտրոնանում եմ մաքուր կոդի և ինտուիտիվ օգտագործողի ինտերֆեյսների ստեղծման վրա։`, key: 'am'},
		{name: "About Me", description: `I’m a Front-End Web Developer with ${year}+ years of hands-on experience building responsive, scalable applications using React.js, Next.js, TypeScript, and Tailwind CSS. I focus on creating clean code and intuitive user interfaces.`, key: 'en'},
		{name: "Обо Мне", description: `Я Front-End Веб-разработчик с более чем ${year} практическим опытом создания адаптивных масштабируемых приложений с использованием React.js, Next.js, TypeScript и Tailwind CSS. Я стремлюсь создавать чистый код и интуитивно понятные пользовательские интерфейсы.`, key: 'ru'},
	]
};

export default InfoDB;