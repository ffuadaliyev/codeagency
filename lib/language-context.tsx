'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Language = 'az' | 'en' | 'ru'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (az: string | ReactNode, en: string | ReactNode, ru?: string | ReactNode) => string | ReactNode
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('az')

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language
    if (savedLang && (savedLang === 'az' || savedLang === 'en' || savedLang === 'ru')) {
      setLanguageState(savedLang)
    }
  }, [])

  // Save language to localStorage when it changes
  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
  }

  // Translation helper function
  const t = (az: string | ReactNode, en: string | ReactNode, ru?: string | ReactNode) => {
    if (language === 'az') return az
    if (language === 'en') return en
    return ru || en // Fallback to English if Russian not provided
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
