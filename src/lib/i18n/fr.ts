import type { Dict } from './en';

const fr: Dict = {
	code: 'fr',
	name: 'Français',
	meta: {
		title: 'Richard Litang • Ingénieur logiciel',
		description:
			'Richard Litang — ingénieur logiciel full-stack, je construis des produits ancrés dans l’IA, de bout en bout.',
		ogDescription: 'Ingénieur full-stack, des produits ancrés dans l’IA, de bout en bout.'
	},
	nav: {
		about: 'à propos',
		work: 'parcours',
		builds: 'projets',
		stack: 'stack',
		contact: 'contact',
		status: 'ouvert aux offres'
	},
	hero: {
		eyebrow: 'basé en Belgique',
		log: 'Ingénieur full-stack, je construis des produits ancrés dans l’IA, de bout en bout',
		statusLabel: 'statut',
		statusValue: 'ouvert aux postes mid–senior',
		focusLabel: 'focus',
		focusValue: 'ingénierie produit full-stack · IA',
		linksLabel: 'liens',
		github: 'github',
		linkedin: 'linkedin',
		email: 'e-mail'
	},
	about: {
		eyebrow: 'à propos',
		title: 'C’est dans le désordre du milieu que je suis le plus utile.',
		paragraphs: [
			'Je suis ingénieur logiciel full-stack et travaille principalement avec TypeScript, Node.js, React et PostgreSQL. J’ai livré du logiciel en production dans une startup healthtech soutenue par Y Combinator (Dashlabs.ai, W21) et dans un SaaS de la construction en forte croissance (BuildPass) — workflows de laboratoire clinique, opérations de chantier, pipelines asynchrones et fonctionnalités IA qui tiennent en production, pas seulement en démo.',
			'Je suis le plus fort dans le désordre du milieu de l’ingénierie produit : workflows flous, goulots d’étranglement opérationnels et fonctionnalités techniquement « terminées » mais encore pénibles à utiliser. Donnez-moi un problème mal défini : je détermine ce qui compte vraiment, je tranche de façon pragmatique et je pousse jusqu’à ce que ce soit réellement utilisable.',
			'Avant le logiciel, j’ai tenu des quarts dans une centrale électrique 24/7 — promu chef de quart en quelques années, dans une salle où la fiabilité, la responsabilité et des passations propres comptaient à chaque poste. Cela façonne encore ma manière de travailler : je prends en charge les problèmes ambigus, je coordonne des éléments mouvants et je m’assure que les choses tiennent en conditions réelles.'
		]
	},
	work: {
		eyebrow: 'journal de travail',
		title: 'Ce que j’ai livré.',
		roles: [
			{
				title: 'Ingénieur logiciel',
				meta: 'Melbourne, AU (à distance) · oct. 2024 – févr. 2026',
				tasks: [
					'Piloté « Lighthouse », un flux de livraison dédié aux demandes clients urgentes et aux workflows adaptés à chaque marché, en livrant les changements de workflow, de tableau de bord et de configuration qui ont accompagné le lancement de l’entreprise sur le marché américain.',
					'Travaillé sur des workflows produit assistés par IA — génération de modèles, analyse de documents, planification et suggestions d’actions — en utilisant l’IA pour améliorer les flux opérationnels existants.',
					'Livré et maintenu le module Plant & Equipment destiné aux sous-traitants (registres, liaison des checklists, workflows de validation en plusieurs étapes), permettant à des centaines d’entreprises de construction et à leurs sous-traitants de gérer eux-mêmes leurs équipements.',
					'Mené le projet Photos Uplift de la conception à l’implémentation : bascule des exports photo lourds vers des tâches de fond asynchrones et refonte de l’UX avec organisation des dossiers par glisser-déposer, annotations, fils de discussion et horodatage des métadonnées.',
					'Amélioré la fiabilité et les performances de la plateforme : optimisation des formulaires React, réglage des requêtes GraphQL et du cache, remplacement des traductions lentes chargées côté serveur par un bundling au build, extension de l’instrumentation Sentry aux chemins critiques et suppression des boucles de retry API en cascade.',
					'Contribué à la vélocité de l’équipe en accompagnant l’arrivée de nouveaux ingénieurs et en pair programming pour débloquer mes collègues ; référent technique sur plusieurs modules, avec plus de 200 correctifs, fonctionnalités et améliorations livrés.',
					'Remporté le hackathon interne à la tête d’une équipe pluridisciplinaire : un prototype d’import en masse assisté par IA, capable de mapper les données de tableurs clients vers les schémas internes, réduisant la préparation de plusieurs heures à quelques minutes.'
				]
			},
			{
				title: 'Ingénieur logiciel full-stack · YC W21',
				meta: 'Manille, PH (à distance) · mars 2022 – sept. 2024',
				tasks: [
					'Responsable des modules EHR/EMR : saisie des résultats patients, collecte des informations patients, portail patient et portails clients B2B ; contributions sur l’ensemble de la plateforme, dont les certificats de résultats dynamiques, les rendez-vous, le système de caisse et l’authentification.',
					'Conçu et développé de zéro un système intégré de gestion de file d’attente patients, fluidifiant les opérations du laboratoire, réduisant les temps d’attente et ouvrant une nouvelle source de revenus B2B.',
					'Réduit la charge backend en ajoutant du cache sur les chemins critiques, en déportant les opérations lourdes vers des files de tâches de fond, en ajustant les schémas et index MongoDB et en optimisant les requêtes à fort volume — permettant de descendre de gamme la base de données et de réduire les coûts d’infrastructure.',
					'Migré les workflows de recherche de la plateforme vers MongoDB Atlas Search, améliorant la pertinence et la scalabilité tout en réduisant la pression sur les requêtes de la base principale.',
					'Refactorisé les API centrales supportant des workflows de laboratoire clinique à fort volume, éliminant les goulots d’étranglement et améliorant le débit jusqu’à 10x en période de pointe.'
				]
			},
			{
				title: 'Chef de quart, exploitation de centrale électrique',
				meta: 'THPAL Nickel Corporation · Philippines · févr. 2017 – nov. 2021',
				tasks: [
					'Encadré une équipe d’ingénieurs et d’opérateurs dans une centrale électrique en fonctionnement continu 24/7, avec zéro arrêt non programmé pendant 3 ans grâce à une réponse aux incidents en temps réel, une analyse des causes racines et des passations rigoureuses.',
					'Conduit des améliorations préventives, résolu des problèmes opérationnels complexes et standardisé des procédures de quart adoptées par l’ensemble des équipes.',
					'Diagnostiqué pannes et incidents sur le traitement des eaux, le turbo-alternateur, la chaudière et le système de manutention du charbon.',
					'Formé les opérateurs juniors.',
					'Produit les rapports quotidiens de la section PSU (power station unit).'
				]
			}
		]
	},
	projects: {
		eyebrow: 'projets sélectionnés',
		title: 'Construit pour apprendre.',
		moreLabel: 'autres projets',
		live: 'en ligne',
		code: 'code',
		flagships: [
			{
				blurb:
					'Entraîne un modèle de churn sur n’importe quelle table client — en gardant le LLM hors de la prédiction.',
				highlights: [
					'Le LLM n’intervient qu’à la frontière sémantique : il mappe des colonnes arbitraires vers un contrat de features standard.',
					'La prédiction reste du ML classique : XGBoost par jeu de données, explications SHAP, validation sur échantillon retenu.',
					'Un seul pipeline ingère des tables structurellement différentes, sans aucun mapping de colonnes écrit à la main.'
				]
			},
			{
				blurb:
					'Un studio vidéo local-first : une histoire en entrée, une vidéo narrée et rendue en sortie.',
				highlights: [
					'Système multi-surface — application web Studio, CLI, serveur MCP, adaptateurs de fournisseurs, schémas Zod partagés.',
					'L’IA transforme une histoire en plan de production structuré ; la narration tourne en local, Remotion effectue le rendu.',
					'Protégé par une chaîne de qualité complète et une preuve de rendu déterministe.'
				]
			}
		],
		more: [
			{
				oneliner:
					'Une intelligence locative pour trouver un logement avec moins de mauvaises surprises.',
				highlights: [
					'Convertit une demande de recherche en langage naturel en recherche locative structurée.',
					'Classe les annonces et expose les éléments justifiant les résultats forts, possibles, confirmés ou rejetés.',
					'Conserve les logements sauvegardés localement dans le navigateur par défaut.'
				]
			},
			{
				oneliner:
					'Des investigations support où chaque affirmation est sourcée — ou transmise à un humain.',
				highlights: [
					'Un vrai pipeline RAG sur les documents importés : recherche dense, expansion des candidats littéraux, reranking optionnel.',
					'Routage déterministe entre les modes documents seuls, documents plus contexte, et revue humaine.',
					'La faillibilité de l’IA est un état de premier plan (needs_human_review) ; livré avec des ADR, un modèle de menaces et une chaîne de vérification.'
				]
			},
			{
				oneliner: 'Un site de SEO programmatique recherché et publié par un agent.',
				highlights: [
					'Un « Hunter Agent » recherche des outils en autonomie, analyse les avis et publie des comparatifs structurés.',
					'Recherche sémantique sur le catalogue via pgvector ; Turnstile invisible contre les bots.'
				]
			},
			{
				oneliner: 'Une extension Chrome qui lie chaque nouvel onglet à un seul engagement.',
				highlights: [
					'Chaque nouvel onglet affiche l’unique tâche à laquelle vous êtes engagé, transformant le moment de distraction en recentrage.',
					'Un flux de capture vers « À suivre » permet de planifier vite sans casser l’engagement en cours.'
				]
			}
		]
	},
	skills: {
		eyebrow: 'stack',
		title: 'Outils du quotidien.',
		labels: [
			'langages',
			'frontend',
			'backend & données',
			'ingénierie ia',
			'cloud & infra',
			'tests & observabilité'
		]
	},
	contact: {
		eyebrow: 'contact',
		title: 'Un problème épineux ?',
		sub: 'Je suis ouvert aux postes d’ingénieur logiciel mid-senior. Le SaaS et les produits IA sont mon terrain, mais tout workflow bancal m’intéresse.',
		cta: 'Écrivez-moi'
	},
	footer: {
		built: 'Réalisé par Richard Litang. Libre et',
		openSource: 'open source'
	}
};

export default fr;
