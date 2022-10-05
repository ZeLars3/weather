import { FC } from 'react'
import { IoIosSunny } from 'react-icons/io'
import { RiMoonClearFill } from 'react-icons/ri'

import { Color } from 'enums'

interface IPropsType {
  theme: string | (() => void)
  toggleTheme: any
}

export const ThemeSwitcher: FC<IPropsType> = ({
  theme,
  toggleTheme,
}) => {
  return theme === 'light'
    ? (
    <IoIosSunny
      cursor='pointer'
      onClick={toggleTheme}
      color={Color.yellow}
      size={25}
    />
      )
    : (
    <RiMoonClearFill
      cursor='pointer'
      onClick={toggleTheme}
      color={Color.yellow}
      size={25}
    />
      )
}
