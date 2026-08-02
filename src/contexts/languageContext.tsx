import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useState,
} from "react";

import type { ReactNode } from "react";

import { content, type Language } from "~/constants/textes";

type LanguageContextValue = {
	language: Language;
	text: (typeof content)[Language];
	changeLanguage: (language: Language) => void;
};

type LanguageProviderProps = {
	children: ReactNode;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(
	undefined,
);

function detectLanguage(): Language {
	if (typeof window === "undefined") {
		return "fr";
	}

	const savedLanguage = window.localStorage.getItem("portfolio-language");

	if (savedLanguage === "fr" || savedLanguage === "en") {
		return savedLanguage;
	}

	const browserLanguages =
		window.navigator.languages.length > 0
			? window.navigator.languages
			: [window.navigator.language];

	const usesFrench = browserLanguages.some((browserLanguage) =>
		browserLanguage.toLowerCase().startsWith("fr"),
	);

	return usesFrench ? "fr" : "en";
}

export function LanguageProvider({ children }: LanguageProviderProps) {
	const [language, setLanguage] = useState<Language>("fr");

	useEffect(() => {
		const detectedLanguage = detectLanguage();

		setLanguage(detectedLanguage);
		document.documentElement.lang = detectedLanguage;
	}, []);

	const changeLanguage = useCallback((newLanguage: Language) => {
		setLanguage(newLanguage);

		window.localStorage.setItem("portfolio-language", newLanguage);

		document.documentElement.lang = newLanguage;
	}, []);

	const value = useMemo<LanguageContextValue>(
		() => ({
			language,
			text: content[language],
			changeLanguage,
		}),
		[language, changeLanguage],
	);

	return (
		<LanguageContext.Provider value={value}>
			{children}
		</LanguageContext.Provider>
	);
}

export function useLanguage(): LanguageContextValue {
	const context = useContext(LanguageContext);

	if (context === undefined) {
		throw new Error(
			"useLanguage doit être utilisé dans un LanguageProvider.",
		);
	}

	return context;
}
