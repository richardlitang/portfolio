import type { Dict } from './en';

const nl: Dict = {
	code: 'nl',
	name: 'Nederlands',
	meta: {
		title: 'Richard Litang • Software engineer',
		description:
			'Richard Litang — full-stack software engineer die AI-onderbouwde producten van begin tot eind bouwt.',
		ogDescription: 'Full-stack engineer die AI-onderbouwde producten bouwt, van begin tot eind.'
	},
	nav: {
		about: 'over',
		work: 'werk',
		builds: 'projecten',
		stack: 'stack',
		contact: 'contact',
		status: 'open voor functies'
	},
	hero: {
		eyebrow: 'gevestigd in België',
		log: 'Full-stack engineer die AI-onderbouwde producten bouwt, van begin tot eind',
		statusLabel: 'status',
		statusValue: 'open voor mid–senior functies',
		focusLabel: 'focus',
		focusValue: 'full-stack productengineering · AI',
		linksLabel: 'links',
		github: 'github',
		linkedin: 'linkedin',
		email: 'e-mail'
	},
	about: {
		eyebrow: 'over',
		title: 'In het rommelige midden werk ik het best.',
		paragraphs: [
			'Ik ben full-stack software engineer en werk voornamelijk met TypeScript, Node.js, React en PostgreSQL. Ik leverde productiesoftware op bij een YC-gesteunde healthtech-startup (Dashlabs.ai, W21) en bij een snelgroeiende construction-tech SaaS (BuildPass) — workflows voor klinische labs, werfoperaties, asynchrone pipelines en AI-functies die het houden in productie, niet alleen in demo’s.',
			'Ik ben op mijn sterkst in het rommelige midden van productengineering: onduidelijke workflows, operationele knelpunten en functies die technisch “af” zijn maar nog steeds frustrerend werken. Geef me een vaag probleem en ik zoek uit wat er echt toe doet, maak pragmatische keuzes en duw het door tot het echt bruikbaar is.',
			'Vóór software draaide ik shiften in een 24/7 elektriciteitscentrale — binnen enkele jaren bevorderd tot shiftsupervisor, in een ruimte waar betrouwbaarheid, eigenaarschap en nette overdrachten elke shift telden. Dat bepaalt nog steeds hoe ik werk: ik neem verantwoordelijkheid voor vage problemen, stem af tussen bewegende delen en zorg dat dingen standhouden in echte omstandigheden.'
		]
	},
	work: {
		eyebrow: 'werklog',
		title: 'Wat ik heb opgeleverd.',
		roles: [
			{
				title: 'Software engineer',
				meta: 'Melbourne, AU (remote) · okt. 2024 – feb. 2026',
				tasks: [
					'Leidde “Lighthouse”, een toegewijde delivery-stroom voor urgente klantvragen en marktspecifieke workflows, met de workflow-, dashboard- en configuratiewijzigingen die de Amerikaanse marktlancering ondersteunden.',
					'Werkte aan AI-ondersteunde productworkflows voor templategeneratie, documentanalyse, planning en actiesuggesties, waarbij AI bestaande operationele flows verbeterde.',
					'Leverde en onderhield de Plant & Equipment-module voor onderaannemers (registers, checklistkoppeling, meerstaps goedkeuringsworkflows), waardoor honderden bouwbedrijven en hun onderaannemers hun materieel zelf konden beheren.',
					'Trok het Photos Uplift-project van ontwerp tot implementatie: zware foto-exports verplaatst naar asynchrone achtergrondtaken en de UX herbouwd met drag-and-drop mapindeling, annotaties, gesprekken en metadata-stempeling.',
					'Verbeterde de betrouwbaarheid en performance van het platform: React-formulieren geoptimaliseerd, GraphQL-queries en caching afgestemd, trage server-opgehaalde vertalingen vervangen door build-time bundling, Sentry-instrumentatie uitgebreid naar kritieke paden en cascaderende API-retryloops geëlimineerd.',
					'Hielp het teamtempo verhogen door engineers in te werken en met pair programming collega’s te deblokkeren; fungeerde als domeinexpert over meerdere modules, met 200+ opgeleverde fixes, features en verbeteringen.',
					'Won de bedrijfshackathon als leider van een cross-functioneel team: een AI-ondersteund bulk-importprototype dat spreadsheetdata van klanten naar interne schema’s mapte en de opzet terugbracht van uren naar minuten.'
				]
			},
			{
				title: 'Full-stack software engineer · YC W21',
				meta: 'Manila, PH (remote) · mrt. 2022 – sep. 2024',
				tasks: [
					'Eigenaar van de EHR/EMR-modules voor invoer van patiëntresultaten, intake van patiëntgegevens, het patiëntenportaal en B2B-klantportalen; droeg platformbreed bij, waaronder dynamische resultaatcertificaten, afspraken, het kassasysteem en authenticatie.',
					'Bouwde vanaf nul een volledig geïntegreerd wachtrijbeheersysteem voor patiënten, dat laboratoriumoperaties stroomlijnde, wachttijden verkortte en een nieuwe B2B-inkomstenstroom opende.',
					'Verlaagde de backendbelasting met caching op kritieke codepaden, zware operaties naar achtergrondwachtrijen, afstemming van MongoDB-schema’s en -indexen en optimalisatie van high-volume queries — waardoor een lagere databasetier volstond en de infrastructuurkosten daalden.',
					'Migreerde de zoekworkflows van het platform naar MongoDB Atlas Search, wat relevantie en schaalbaarheid verbeterde en de druk op de hoofddatabase verlaagde.',
					'Refactorde kern-API’s voor high-volume workflows in klinische labs, verwijderde uitvoeringsknelpunten en verbeterde de doorvoer tot 10x tijdens piekuren.'
				]
			},
			{
				title: 'Shiftsupervisor, exploitatie elektriciteitscentrale',
				meta: 'THPAL Nickel Corporation · Filipijnen · feb. 2017 – nov. 2021',
				tasks: [
					'Leidde een shiftteam van ingenieurs en operatoren in een 24/7 continu draaiende elektriciteitscentrale, met drie jaar zonder ongeplande stilstand dankzij realtime incidentrespons, root-cause-analyse en gedisciplineerde overdrachten.',
					'Voerde preventieve systeemverbeteringen door, loste complexe operationele problemen op en standaardiseerde shiftprocedures die door alle ploegen werden overgenomen.',
					'Verhielp storingen in de waterbehandeling, de stoomturbinegenerator, de ketel en het kolentransportsysteem.',
					'Leidde junior operatoren op.',
					'Leverde de dagelijkse rapportages voor de PSU-sectie (power station unit).'
				]
			}
		]
	},
	projects: {
		eyebrow: 'geselecteerde projecten',
		title: 'Gebouwd om te leren.',
		moreLabel: 'meer projecten',
		live: 'live',
		code: 'code',
		flagships: [
			{
				blurb:
					'Traint een churn-model op elke klantentabel — en houdt het LLM buiten de voorspelling.',
				highlights: [
					'Het LLM werkt alleen op de semantische grens en mapt willekeurige kolommen op een standaard feature-contract.',
					'De voorspelling blijft klassieke ML: XGBoost per dataset, SHAP-uitleg, validatie op een apart gehouden set.',
					'Eén pipeline verwerkt structureel verschillende tabellen zonder handgeschreven kolommappings.'
				]
			},
			{
				blurb: 'Een local-first videostudio: verhaal erin, ingesproken en gerenderde video eruit.',
				highlights: [
					'Multi-surface systeem — Studio-webapp, CLI, MCP-server, provider-adapters, gedeelde Zod-schema’s.',
					'AI maakt van een verhaal een gestructureerd productieplan; de vertelstem draait lokaal, Remotion rendert.',
					'Beschermd door een volledige quality gate en een deterministisch portfoliobewijs.'
				]
			}
		],
		more: [
			{
				oneliner: 'Huurintelligentie om woningen te vinden met minder verrassingen.',
				highlights: [
					'Zet een zoekopdracht in natuurlijke taal om in een gestructureerde zoektocht naar huurwoningen.',
					'Rangschikt woningen en toont het bewijs achter sterke, mogelijke, bevestigde en afgewezen resultaten.',
					'Bewaart opgeslagen woningen standaard lokaal in de browser.'
				]
			},
			{
				oneliner: 'Supportonderzoek waarbij elke bewering een bron heeft — of naar een mens gaat.',
				highlights: [
					'Een echte RAG-pipeline over geüploade documenten: dense retrieval, letterlijke kandidaatuitbreiding, optionele reranking.',
					'Deterministische routering tussen alleen-documenten, documenten-plus-context en menselijke review.',
					'Feilbaarheid van AI is een eersteklas needs_human_review-status; met ADR’s, een threat model en een verify gate.'
				]
			},
			{
				oneliner: 'Een programmatische SEO-site, onderzocht en gepubliceerd door een agent.',
				highlights: [
					'Een “Hunter Agent” onderzoekt zelfstandig tools, analyseert reviews en publiceert gestructureerde vergelijkingen.',
					'Semantisch zoeken over de catalogus via pgvector; onzichtbare Turnstile tegen bots.'
				]
			},
			{
				oneliner: 'Een Chrome-extensie die elk nieuw tabblad aan één belofte koppelt.',
				highlights: [
					'Elk nieuw tabblad toont de ene taak waaraan je je hebt verbonden, waardoor het moment van afdwalen een herfocus wordt.',
					'Een capture-naar-“Volgende”-flow houdt plannen snel zonder de huidige belofte te breken.'
				]
			}
		]
	},
	skills: {
		eyebrow: 'stack',
		title: 'Dagelijkse toolset.',
		labels: [
			'talen',
			'frontend',
			'backend & data',
			'ai-engineering',
			'cloud & infra',
			'testing & observability'
		]
	},
	contact: {
		eyebrow: 'contact',
		title: 'Een lastig probleem?',
		sub: 'Ik sta open voor mid-senior software engineering functies. SaaS en AI-producten zijn vertrouwd terrein, maar elke rommelige workflow is welkom.',
		cta: 'Mail me'
	},
	footer: {
		built: 'Gemaakt door Richard Litang. Gratis en',
		openSource: 'open source'
	}
};

export default nl;
