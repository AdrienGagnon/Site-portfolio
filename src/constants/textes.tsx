export type Language = "fr" | "en";

export type Study = {
	period: string;
	type: string;
	location: string;
	description: string;
	classes?: string[];
};

export type Experience = {
	period: string;
	role: string;
	company: string;
	description: string[];
};

export type Project = {
	title: string;
	description: string;
	image: string;
	imageAlt: string;
	technologies: string[];
	githubUrl?: string;
};

type LocalizedContent = {
	navigation: {
		about: string;
		experience: string;
		education: string;
		projects: string;
		contact: string;
		languageLabel: string;
	};

	hero: {
		eyebrow: string;
		jobTitle: string;
		description: string;
		aboutButton: string;
		contactButton: string;
	};

	about: {
		label: string;
		title: string;
		first: string;
		second: string;
	};

	career: {
		label: string;
		experienceTitle: string;
	};

	education: {
		label: string;
		studiesTitle: string;
		relevantClasses: string;
		showAllClasses: string;
		showLessClasses: string;
	};

	contact: {
		label: string;
		title: string;
		description: string;
		emailButton: string;
	};

	studies: Study[];
	experiences: Experience[];

	projectsSection: {
		label: string;
		title: string;
		description: string;
		viewProject: string;
		viewAllProjects: string;
	};

	projects: Project[];
};

export const content: Record<Language, LocalizedContent> = {
	fr: {
		navigation: {
			about: "À propos",
			experience: "Expérience",
			education: "Éducation",
			projects: "Projets",
			contact: "Me contacter",
			languageLabel: "Choisir la langue",
		},

		hero: {
			eyebrow: "Bonjour, je suis",
			jobTitle: "Développeur logiciel",
			description:
				"Je conçois des logiciels fiables, efficaces et adaptées aux besoins des utilisateurs. Curieux et polyvalent, j’aime résoudre des problèmes complexes et apprendre de nouvelles technologies.",
			aboutButton: "À propos de moi",
			contactButton: "Me contacter",
		},

		contact: {
			label: "Contact",
			title: "Travaillons ensemble",
			description:
				"Une question, une proposition ou une occasion professionnelle? Écrivez-moi directement par courriel.",
			emailButton: "M’écrire par courriel",
		},

		about: {
			label: "À propos",
			title: "Qui suis-je?",
			first: "Développeur informatique originaire de Sherbrooke et récemment diplômé d’une maîtrise en informatique, je souhaite relever de nouveaux défis. Curieux, efficace et reconnu pour mon esprit d’équipe, je m’adapte rapidement à de nouveaux environnements et j’aborde les problèmes complexes avec rigueur. Mon parcours m’a permis d’acquérir une solide expérience, autant en recherche qu’en milieu industriel.",
			second: "Je cherche constamment à développer mes compétences, à découvrir de nouvelles technologies et à participer à des projets stimulants.",
		},

		career: {
			label: "Mon parcours",
			experienceTitle: "Expérience professionnelle",
		},

		education: {
			label: "Mes études",
			studiesTitle: "Éducation",
			relevantClasses: "Cours suivis",
			showAllClasses: "Voir tous les cours",
			showLessClasses: "Afficher moins",
		},

		studies: [
			{
				period: "2019 — 2022",
				type: "Baccalauréat en chimie, régime coopératif",
				location: "Université de Sherbrooke",
				description:
					"Formation universitaire en chimie comprenant des cours théoriques, des travaux pratiques en laboratoire et des stages en milieu professionnel.",
			},
			{
				period: "2024",
				type: "Propédeutique en informatique",
				location: "Université de Sherbrooke",
				description:
					"Pour accéder à la maîtrise en informatique, j’ai suivi pendant trois sessions une version accélérée du baccalauréat en informatique afin d’acquérir les connaissances fondamentales nécessaires.",
			},
			{
				period: "2025 — 2026",
				type: "Maîtrise en informatique de type cours",
				location: "Université de Sherbrooke",
				description:
					"Ce programme comprend trois sessions de cours avancés en informatique, suivies d’un stage semblable à ceux d’un parcours coopératif. J’y ai étudié de nombreux sujets liés au développement logiciel, à l’intelligence artificielle, aux réseaux et aux systèmes informatiques.",
				classes: [
					"Informatique cognitive",
					"Techniques d’apprentissage",
					"Applications Internet et mobilité",
					"Modèles hiérarchiques pour l’apprentissage machine de données spatiotemporelles",
					"Algorithmes et structures de données",
					"Sécurité et cryptographie",
					"Processus concurrents et parallélisme",
					"Techniques et outils de développement",
					"Télématique",
					"Théorie du calcul",
					"Conception de systèmes temps réel",
					"Réseaux neuronaux",
				],
			},
		],

		experiences: [
			{
				period: "Janvier 2026 — Mai 2026",
				role: "Développeur logiciel",
				company: "M5 Technologies",
				description: [
					"Développement orienté objet en C++ sur des plateformes Linux embarquées, selon une approche Agile.",
					"Intégration de tests pour une application VoIP comprenant la gestion de protocoles de télécommunication comme SIP, TCP, UDP et HTTP, ainsi que leur exécution dans TeamCity.",
					"Utilisation de plusieurs langages, notamment Perl, C# et Python, et d’outils comme Visual Studio Code, Wireshark, PuTTY et Git.",
				],
			},
		],

		projectsSection: {
			label: "Mes réalisations",
			title: "Quelques projets",
			description:
				"Voici une sélection de projets réalisés dans le cadre de mes études, de mes expériences professionnelles et de mon apprentissage personnel.",
			viewProject: "Voir le projet",
			viewAllProjects: "Voir tous mes projets sur GitHub",
		},

		projects: [
			{
				title: "Nom du premier projet",
				description:
					"Une courte description du projet, du problème résolu et de ce que tu as personnellement développé.",
				image: "/projects/project-1.webp",
				imageAlt: "Aperçu du premier projet",
				technologies: ["React", "TypeScript", "Node.js"],
				githubUrl: "https://github.com/AdrienGagnon",
			},
			{
				title: "Nom du deuxième projet",
				description:
					"Une brève présentation des fonctionnalités principales et des apprentissages réalisés pendant le développement.",
				image: "/projects/project-2.webp",
				imageAlt: "Aperçu du deuxième projet",
				technologies: ["C++", "Linux", "Git"],
				githubUrl: "https://github.com/AdrienGagnon",
			},
			{
				title: "Nom du troisième projet",
				description:
					"Une description concise expliquant l’objectif du projet et les technologies utilisées pour le réaliser.",
				image: "/projects/project-3.webp",
				imageAlt: "Aperçu du troisième projet",
				technologies: ["Python", "SQL", "MongoDB"],
			},
		],
	},

	en: {
		navigation: {
			about: "About",
			experience: "Experience",
			education: "Education",
			projects: "Projects",
			contact: "Contact me",
			languageLabel: "Choose language",
		},

		hero: {
			eyebrow: "Hello, I am",
			jobTitle: "Software Developer",
			description:
				"I design reliable and efficient software solutions tailored to users’ needs. Curious and versatile, I enjoy solving complex problems and learning new technologies.",
			aboutButton: "About me",
			contactButton: "Contact me",
		},

		contact: {
			label: "Contact",
			title: "Let’s work together",
			description:
				"Have a question, a proposal, or a professional opportunity? Feel free to contact me directly by email.",
			emailButton: "Send me an email",
		},

		about: {
			label: "About",
			title: "Who am I?",
			first: "I am a software developer from Sherbrooke and a recent graduate with a master’s degree in computer science. I am looking for new professional challenges. Curious, efficient, and recognized for my teamwork skills, I adapt quickly to new environments and approach complex problems with rigor. My background has allowed me to gain solid experience in both research and industrial settings.",
			second: "I am constantly looking to improve my skills, discover new technologies, and contribute to challenging projects.",
		},

		career: {
			label: "My background",
			experienceTitle: "Professional experience",
		},

		education: {
			label: "My studies",
			studiesTitle: "Education",
			relevantClasses: "Relevant courses",
			showAllClasses: "View all courses",
			showLessClasses: "Show less",
		},

		studies: [
			{
				period: "2019 — 2022",
				type: "Bachelor’s Degree in Chemistry, Co-op Program",
				location: "Université de Sherbrooke",
				description:
					"University education in chemistry combining theoretical courses, laboratory work, and professional internships.",
			},
			{
				period: "2024",
				type: "Computer Science Preparatory Program",
				location: "Université de Sherbrooke",
				description:
					"To qualify for the master’s degree in computer science, I completed an accelerated version of the computer science bachelor’s program over three semesters to acquire the required foundational knowledge.",
			},
			{
				period: "2025 — 2026",
				type: "Course-Based Master’s Degree in Computer Science",
				location: "Université de Sherbrooke",
				description:
					"This program consists of three semesters of advanced computer science courses followed by an internship similar to those offered through a cooperative education program. I studied a wide range of topics related to software development, artificial intelligence, networks, and computer systems.",
				classes: [
					"Cognitive Computing",
					"Machine Learning Techniques",
					"Internet and Mobile Applications",
					"Hierarchical Models for Machine Learning on Spatiotemporal Data",
					"Algorithms and Data Structures",
					"Security and Cryptography",
					"Concurrent Processes and Parallelism",
					"Development Techniques and Tools",
					"Telematics",
					"Theory of Computation",
					"Real-Time Systems Design",
					"Neural Networks",
				],
			},
		],

		experiences: [
			{
				period: "January 2026 — May 2026",
				role: "Software Developer",
				company: "M5 Technologies",
				description: [
					"Object-oriented C++ development on embedded Linux platforms using an Agile approach.",
					"Integrated tests for a VoIP application involving telecommunications protocols such as SIP, TCP, UDP, and HTTP, with automated execution through TeamCity.",
					"Worked with several languages, including Perl, C#, and Python, and tools such as Visual Studio Code, Wireshark, PuTTY, and Git.",
				],
			},
		],

		projectsSection: {
			label: "My work",
			title: "Selected projects",
			description:
				"Here is a selection of projects completed through my studies, professional experience, and personal learning.",
			viewProject: "View project",
			viewAllProjects: "View all my projects on GitHub",
		},

		projects: [
			{
				title: "First project name",
				description:
					"A short description of the project, the problem it solves, and what you personally developed.",
				image: "/projects/project-1.webp",
				imageAlt: "Preview of the first project",
				technologies: ["React", "TypeScript", "Node.js"],
				githubUrl: "https://github.com/AdrienGagnon",
			},
			{
				title: "Second project name",
				description:
					"A brief overview of the main features and the skills developed while working on this project.",
				image: "/projects/project-2.webp",
				imageAlt: "Preview of the second project",
				technologies: ["C++", "Linux", "Git"],
				githubUrl: "https://github.com/AdrienGagnon",
			},
			{
				title: "Third project name",
				description:
					"A concise description of the project’s objective and the technologies used to build it.",
				image: "/projects/project-3.webp",
				imageAlt: "Preview of the third project",
				technologies: ["Python", "SQL", "MongoDB"],
			},
		],
	},
};

export const skills = [
	"C++",
	"Java",
	"Python",
	"SQL",
	"PHP",
	"MongoDB",
	"C#",
	"Linux",
	"HTML",
	"CSS",
	"JavaScript",
	"TypeScript",
	"React",
	"Node.js",
	"Git",
];
