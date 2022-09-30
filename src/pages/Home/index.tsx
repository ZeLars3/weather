import { ThemeProvider } from 'styled-components'

import { Search, WeatherContainer } from 'components'
import { useDarkMode } from 'hooks'
import { themeDark, themeLight } from 'assets/styles/theme'
import { ThemeSwitcher } from 'components/common'

import {
  AppGlass,
  AppName,
  Container,
  ThemeWrapper,
  Wrapper,
} from './styled'

export const Home = () => {
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
              <ThemeSwitcher
                theme={theme}
                toggleTheme={themeToggler}
              />
            </ThemeWrapper>
            <Search />
            <WeatherContainer />
          </Container>
        </AppGlass>
      </Wrapper>
    </ThemeProvider>
  )
}
