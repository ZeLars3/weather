import { FC } from 'react'
import { IoIosSunny } from 'react-icons/io'
import { RiMoonClearFill } from 'react-icons/ri'

import { Color } from 'enums'

interface IPropsType {
  theme: any;
  toggleTheme: any;
}

export const ThemeSwitcher: FC<IPropsType> = ({
  theme,
  toggleTheme,
}) => {
  return theme === 'light' ? (
    <IoIosSunny
      onClick={toggleTheme}
      color={Color.yellow}
      size={25}
    />
  ) : (
    <RiMoonClearFill
      onClick={toggleTheme}
      color={Color.yellow}
      size={25}
    />
  )
}
