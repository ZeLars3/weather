import { FC, Key, useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { gapi } from 'gapi-script'

import { Event } from 'components/common'
import { CLIENT_CONFIG } from 'constants/clientConfig'

import {
  CalendarMessage,
  CalendarWrapper,
  EventItem,
  GoogleButton,
} from './styled'

export const CalendarContainer: FC = () => {
  const [isAuth, setIsAuth] = useState <boolean>(false)
  const [events, setEvents] = useState <any>([])

  const handleClick = (): void => {
    gapi.load('client:auth2', () => {
      gapi.client.init({
        apiKey: CLIENT_CONFIG.apiKey,
        clientId: CLIENT_CONFIG.clientId,
        discoveryDocs: CLIENT_CONFIG.discoveryDocs,
        scope: CLIENT_CONFIG.scopes,
        plugin_name: 'chat',
      })

      gapi.auth2
        .getAuthInstance()
        .signIn()
        .then(() => {
          gapi.client.calendar.events
            .list({
              calendarId: 'primary',
              timeMin: new Date().toISOString(),
              showDeleted: false,
              singleEvents: true,
              maxResults: 10,
              orderBy: 'startTime',
            })
            .then(
              (response: {
                result: {
                  items: {
                    id: string,
                    summary: string,
                  },
                },
              }) => {
                const events = response.result.items
                console.log(events)
                setEvents(events)
                setIsAuth(true)
              },
            )
        })
    })
  }

  return (
    <CalendarWrapper>
      {!isAuth && (
        <GoogleButton onClick={handleClick}>
          <FcGoogle size={30} />
          Sign in with Google
        </GoogleButton>
      )}
      {events?.map(
        (event: {
          id: Key | null | undefined,
          summary: string,
        }) => (
          <EventItem key={event.id}>
            <Event description={event.summary} />
          </EventItem>
        ),
      )}
      {!isAuth && (
        <CalendarMessage>
          Now You haven`t any events
        </CalendarMessage>
      )}
    </CalendarWrapper>
  )
}
