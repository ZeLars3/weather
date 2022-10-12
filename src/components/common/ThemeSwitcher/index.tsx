import { FC } from 'react'
import { IoIosSunny } from 'react-icons/io'
import { RiMoonClearFill } from 'react-icons/ri'

import { Color } from 'enums'
import { IThemeSwitcher } from 'types'

export const ThemeSwitcher: FC<IThemeSwitcher> = ({
  theme,
  toggleTheme,
}) =>
  theme === 'light' ? (
    <IoIosSunny
      cursor="pointer"
      onClick={toggleTheme}
      color={Color.yellow}
      size={25}
    />
  ) : (
    <RiMoonClearFill
      cursor="pointer"
      onClick={toggleTheme}
      color={Color.yellow}
      size={25}
    />
  )
