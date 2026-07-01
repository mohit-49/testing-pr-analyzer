'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { NationLanguages } from './languages'
import "./google-translate.css";

declare global {
  interface Window {
    googleTranslateElementInit: () => void
    google: any
  }
}

const GoogleTranslate = () => {
  const [open, setOpen] = useState(false)
  const [selectedLang, setSelectedLang] = useState('en')

  useEffect(() => {
    if (typeof window === 'undefined') return

    const savedLang = localStorage.getItem('selectedLanguage')
    if (savedLang) setSelectedLang(savedLang)

    if (!window.googleTranslateElementInit) {
      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          { pageLanguage: 'en' },
          'google_translate_element'
        )
      }

      if (!document.getElementById('google-translate-script')) {
        const script = document.createElement('script')
        script.id = 'google-translate-script'
        script.src =
          '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
        script.async = true
        document.body.appendChild(script)
      }
    }

    const interval = setInterval(() => {
      const combo = document.querySelector('.goog-te-combo') as HTMLSelectElement
      if (combo && savedLang) {
        combo.value = savedLang
        combo.dispatchEvent(new Event('change'))
        clearInterval(interval)
      }
    }, 300)

    return () => clearInterval(interval)
  }, [])

  const changeLanguage = (code: string) => {
    const combo = document.querySelector('.goog-te-combo') as HTMLSelectElement
    if (combo) {
      combo.value = code
      combo.dispatchEvent(new Event('change'))
    }

    setSelectedLang(code)
    localStorage.setItem('selectedLanguage', code)
    setOpen(false)
  }

  return (
    <div className="lang-wrapper notranslate">
      <button
        className="lang-btn"
        onClick={() => setOpen(!open)}
        aria-label="Language Selector"
      >
        <Image src="/icon/translate-icon.svg" alt="Lang" width={28} height={28} />
      </button>

      {open && (
        <select
          className="lang-select"
          value={selectedLang}
          onChange={(e) => changeLanguage(e.target.value)}
        >
          {NationLanguages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.name}
            </option>
          ))}
        </select>
      )}

      {/* hidden google container */}
      <div id="google_translate_element" style={{ display: 'none' }} />
    </div>
  )
}

export default GoogleTranslate
