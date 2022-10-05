import { FC } from 'react'
import ApiCalendar from 'react-google-calendar-api'
import { FcGoogle } from 'react-icons/fc'

import { CALENDAR_CONFIG } from 'constants/index'

import { CalendarWrapper, GoogleButton } from './styled'

const apiCalendar: ApiCalendar = new ApiCalendar(
  CALENDAR_CONFIG,
)

export const CalendarContainer: FC = () => {
  const handleItemClick = (name: string) => (): void => {
    return name === 'sign-in'
      ? apiCalendar.handleAuthClick()
      : apiCalendar.handleSignoutClick()
  }
  return (
    <CalendarWrapper>
      <GoogleButton onClick={handleItemClick('sign-in')}>
        <FcGoogle size={30} />
        Sign in with Google
      </GoogleButton>
      Now You haven`t any events
    </CalendarWrapper>
  )
}
