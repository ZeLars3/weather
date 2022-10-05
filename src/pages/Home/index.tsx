import { FC } from 'react'
import { ThemeProvider } from 'styled-components'

import {
  CalendarContainer,
  Search,
  WeatherContainer,
} from 'components'
import { Selector, ThemeSwitcher } from 'components/common'
import { themeDark, themeLight } from 'assets/styles/theme'
import { useDarkMode } from 'hooks'

import {
  AppGlass,
  AppName,
  Container,
  ThemeWrapper,
  Wrapper,
} from './styled'

export const Home: FC = () => {
  const [theme, themeToggler] = useDarkMode()
  const themeMode =
    theme === 'light' ? themeLight : themeDark

  return (
    <ThemeProvider theme={themeMode}>
      <Wrapper>
        <AppGlass>
          <Container>
            <ThemeWrapper>
              <AppName>Weather ⛅</AppName>
              <Selector />
              <ThemeSwitcher
                theme={theme}
                toggleTheme={themeToggler}
              />
            </ThemeWrapper>
            <Search />
            <CalendarContainer />
            <WeatherContainer />
          </Container>
        </AppGlass>
      </Wrapper>
    </ThemeProvider>
  )
}
