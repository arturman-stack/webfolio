const startDate = new Date(2022, 6, 1); // 01.07.2022 (months 0-based)

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
		{
			name: "Իմ Մասին",
			description: `Front-End ծրագրավորող եմ՝ JavaScript, TypeScript, React.js և Next.js-ի միջոցով ժամանակակից, մասշտաբային և բարձր արտադրողականությամբ վեբ հավելվածներ ստեղծելու ${year}+ տարվա փորձով։ IT ոլորտ եմ մտել մինչև AI գործիքների լայն տարածումը, ուստի իմ ինժեներական հիմքը կառուցել եմ նախ և առաջ հիմունքների վրա, իսկ այսօր այդ հիմքը զուգակցում եմ ժամանակակից AI գործիքների հետ՝ ավելի արագ աշխատելու՝ առանց որակի նկատմամբ վերահսկողությունը կորցնելու։ Կենտրոնանում եմ մաքուր ճարտարապետության, հարմարվողական և հասանելի UI-ի, բազմալեզու ինտերֆեյսների և արտադրողականության վրա։ Փորձ ունեմ արտադրանքի ամբողջ ցիկլում՝ գաղափարից մինչև տեղակայում, ներառյալ authentication, վճարային ինտեգրացիաներ, SEO և բարդ ֆիլտրացիա։`,
			key: 'am'
		},
		{
			name: "About Me",
			description: `Front-End Developer with ${year}+ years of experience building modern, scalable, and high-performance web applications with JavaScript, TypeScript, React.js, and Next.js. I entered the IT industry before AI tools became mainstream, so I built my engineering foundations on fundamentals first, and I now combine that foundation with modern AI tools to work faster without losing control of quality. Focused on clean architecture, responsive and accessible UI, multilingual interfaces, and performance. Experienced in the full product cycle, from concept to deployment, including authentication, payment integrations, SEO, and complex filtering.`,
			key: 'en'
		},
		{
			name: "Обо Мне",
			description: `Front-End разработчик с опытом более ${year} лет в создании современных, масштабируемых и высокопроизводительных веб-приложений на JavaScript, TypeScript, React.js и Next.js. Я пришёл в IT до того, как AI-инструменты стали массовыми, поэтому сначала выстроил инженерный фундамент на базовых знаниях, а сегодня сочетаю его с современными AI-инструментами, чтобы работать быстрее, не теряя контроля над качеством. Фокусируюсь на чистой архитектуре, адаптивном и доступном UI, многоязычных интерфейсах и производительности. Имею опыт полного цикла разработки продукта, от идеи до деплоя, включая аутентификацию, платёжные интеграции, SEO и сложную фильтрацию.`,
			key: 'ru'
		},
	]
};

export default InfoDB;