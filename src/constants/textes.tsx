import { ICODETHIS_URL } from "./constants";

export type Language = "fr" | "en";

export type Study = {
	period: string;
	type: string;
	location: string;
	description: string;
	classes?: string[];
	internships?: Experience[];
};

export type Experience = {
	period: string;
	role: string;
	company: string;
	site?: string;
	description: string[];
};

export type Project = {
	title: string;
	description: string;
	image: string;
	imageAlt: string;
	technologies: string[];
	githubUrl?: string;
	website?: string;
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
		resumeButton: string;
		aboutButton: string;
		contactButton: string;
		downloadResumeFr: string;
		downloadResumeEn: string;
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

		internships: string;
		showAllInternships: string;
		showLessInternships: string;
	};

	contact: {
		label: string;
		title: string;
		description: string;
		emailButton: string;
		emailLabel: string;
		socialLabel: string;
		githubDescription: string;
		linkedinDescription: string;
		icodethisDescription: string;
		cv: string;
		emailSubject: string;
		emailBody: string;
	};

	studies: Study[];
	experiences: Experience[];

	projectsSection: {
		label: string;
		title: string;
		viewWebsite: string;
		viewGithub: string;
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
			resumeButton: "Consulter mon CV",
			aboutButton: "À propos de moi",
			contactButton: "Me contacter",
			downloadResumeFr: "CV français",
			downloadResumeEn: "English CV",
		},

		contact: {
			label: "Contact",
			title: "Travaillons ensemble",
			description:
				"Une question, une proposition ou une occasion professionnelle? Écrivez-moi directement par courriel.",
			emailButton: "M’écrire par courriel",

			emailLabel: "Écrivez-moi",
			socialLabel: "Retrouvez-moi également sur",
			githubDescription: "Projets et code source",
			linkedinDescription: "Parcours professionnel",
			icodethisDescription: "Défis et interfaces",
			cv: "Voir mon CV",
			emailSubject: "Contact depuis votre portfolio",
			emailBody: "Bonjour Adrien,\n\nJe vous contacte concernant...\n\n",
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
			internships: "Stages",
			showAllInternships: "Voir tous les stages",
			showLessInternships: "Afficher moins de stages",
		},

		studies: [
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
			{
				period: "2024",
				type: "Propédeutique en informatique",
				location: "Université de Sherbrooke",
				description:
					"Pour accéder à la maîtrise en informatique, j’ai suivi pendant trois sessions une version accélérée du baccalauréat en informatique afin d’acquérir les connaissances fondamentales nécessaires.",
			},
			{
				period: "2019 — 2022",
				type: "Baccalauréat en chimie, régime coopératif",
				location: "Université de Sherbrooke",
				description:
					"Formation universitaire en chimie comprenant des cours théoriques, des travaux pratiques en laboratoire et quatre stages en milieu professionnel.",
				internships: [
					{
						period: "Mai 2022 — Août 2022",
						role: "Stagiaire en recherche en biologie",
						company: "Commissariat à l’Énergie Atomique (CEA)",
						site: "Grenoble, France",
						description: [""],
					},
					{
						period: "Septembre 2021 — Décembre 2021",
						role: "Stagiaire en synthèse de peptides",
						company:
							"Institut de pharmacologie de Sherbrooke (IPS)",
						site: "Sherbrooke",
						description: [""],
					},
					{
						period: "Janvier 2021 — Avril 2021",
						role: "Stagiaire en recherche en chimie organique",
						company: "OmegaChem",
						site: "Lévis",
						description: [""],
					},
					{
						period: "Mai 2020 — Août 2020",
						role: "Stagiaire en électrochimie",
						company: "Laboratoire du Pre. Gessie Brisard",
						site: "Université de Sherbrooke",

						description: [""],
					},
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
			viewWebsite: "Voir le site",
			viewGithub: "Voir sur GitHub",
			viewAllProjects: "Voir tous mes projets sur GitHub",
		},

		projects: [
			{
				title: "ICodeThis",
				description:
					"Une courte description du projet, du problème résolu et de ce que tu as personnellement développé.",
				image: "/assets/icodethissample.png",
				imageAlt: "Aperçu du premier projet",
				technologies: ["JavaScript", "HTML", "CSS"],
				website: ICODETHIS_URL,
			},
			{
				title: "RtPartition",
				description:
					"Une description concise expliquant l’objectif du projet et les technologies utilisées pour le réaliser.",
				image: "/assets/rtpartition.png",
				imageAlt: "Aperçu du troisième projet",
				technologies: ["C++", "Lomse", "Qt"],
				githubUrl: "https://github.com/AdrienGagnon/RtPartition",
			},
			{
				title: "Ancien site web",
				description:
					"Une brève présentation des fonctionnalités principales et des apprentissages réalisés pendant le développement.",
				image: "/assets/oldsite.png",
				imageAlt: "Aperçu du deuxième projet",
				technologies: ["React", "HTML", "CSS"],
				githubUrl:
					"https://github.com/AdrienGagnon/adrien-gagnon-portfolio",
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
			resumeButton: "View my résumé",
			aboutButton: "About me",
			contactButton: "Contact me",
			downloadResumeFr: "CV français",
			downloadResumeEn: "English CV",
		},

		contact: {
			label: "Contact",
			title: "Let’s work together",
			description:
				"Have a project, an opportunity, or simply want to connect? Feel free to get in touch.",
			emailButton: "Send an email",
			emailLabel: "Get in touch",
			socialLabel: "You can also find me on",
			githubDescription: "Projects and source code",
			linkedinDescription: "Professional experience",
			icodethisDescription: "UI challenges and designs",
			cv: "View my CV",
			emailSubject: "Contact from your portfolio",
			emailBody: "Hello Adrien,\n\nI am reaching out regarding...\n\n",
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
			internships: "Internships",
			showAllInternships: "View all internships",
			showLessInternships: "Show fewer internships",
		},

		studies: [
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
			{
				period: "2024",
				type: "Computer Science Preparatory Program",
				location: "Université de Sherbrooke",
				description:
					"To qualify for the master’s degree in computer science, I completed an accelerated version of the computer science bachelor’s program over three semesters to acquire the required foundational knowledge.",
			},
			{
				period: "2019 — 2022",
				type: "Bachelor’s Degree in Chemistry, Co-op Program",
				location: "Université de Sherbrooke",
				description:
					"University education in chemistry combining theoretical courses, laboratory work, and professional internships.",
				internships: [
					{
						period: "May 2022 — August 2022",
						role: "Stagiaire en recherche en biologie",
						company: "Commissariat à l’Énergie Atomique (CEA)",
						site: "Grenoble, France",
						description: [""],
					},
					{
						period: "September 2021 — December 2021",
						role: "Stagiaire en synthèse de peptides",
						company:
							"Institut de pharmacologie de Sherbrooke (IPS)",
						site: "Sherbrooke",
						description: [""],
					},
					{
						period: "January 2021 — April 2021",
						role: "Stagiaire en recherche en chimie organique",
						company: "OmegaChem",
						site: "Lévis",
						description: [""],
					},
					{
						period: "May 2020 — August 2020",
						role: "Stagiaire en électrochimie",
						company: "Laboratoire du Pre. Gessie Brisard",
						site: "Université de Sherbrooke",

						description: [""],
					},
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
			viewWebsite: "View website",
			viewGithub: "View on GitHub",
			viewAllProjects: "View all my projects on GitHub",
		},

		projects: [
			{
				title: "ICodeThis",
				description:
					"Une courte description du projet, du problème résolu et de ce que tu as personnellement développé.",
				image: "/assets/icodethissample.png",
				imageAlt: "Aperçu du premier projet",
				technologies: ["JavaScript", "HTML", "CSS"],
				website: ICODETHIS_URL,
			},
			{
				title: "RtPartition",
				description:
					"Une description concise expliquant l’objectif du projet et les technologies utilisées pour le réaliser.",
				image: "/assets/rtpartition.png",
				imageAlt: "Aperçu du troisième projet",
				technologies: ["C++", "Lomse", "Qt"],
				githubUrl: "https://github.com/AdrienGagnon/RtPartition",
			},
			{
				title: "Ancien site web",
				description:
					"Une brève présentation des fonctionnalités principales et des apprentissages réalisés pendant le développement.",
				image: "/assets/oldsite.png",
				imageAlt: "Aperçu du deuxième projet",
				technologies: ["React", "HTML", "CSS"],
				githubUrl:
					"https://github.com/AdrienGagnon/adrien-gagnon-portfolio",
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
