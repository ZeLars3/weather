import { useEffect, useState } from 'react'

export const useDarkMode = (): Array<string | (() => void)> => {
  const [theme, setTheme] = useState<string>('light')

  const setMode = (mode: string): void => {
    window.localStorage.setItem('theme', mode)

    setTheme(mode)
  }

  const themeToggler = (): void => {
    theme === 'light' ? setMode('dark') : setMode('light')
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme')

    localTheme && setTheme(localTheme)
  }, [])

  return [theme, themeToggler]
}
