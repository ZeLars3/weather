import { FC, Key, useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { gapi } from 'gapi-script'

import { Event } from 'components/common'

import { CalendarWrapper, GoogleButton } from './styled'

const CLIENT_ID =
  '1021282737273-77imv05jk5k9qfl278er8fhiroc84mrg.apps.googleusercontent.com'
const API_KEY = 'AIzaSyCEzKkf6rVOw1HKlvscRGTdz-p2a62GG6k'
const DISCOVERY_DOCS = [
  'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
]
const SCOPES =
  'https://www.googleapis.com/auth/calendar.events'

export const CalendarContainer: FC = () => {
  const [isAuth, setIsAuth] = useState <boolean>(false)
  const [events, setEvents] = useState([])

  const handleClick = (): void => {
    gapi.load('client:auth2', () => {
      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
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
            .then((response: { result: { items: any } }) => {
              const events = response.result.items
              setEvents(events)
              setIsAuth(true)
            })
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
          id: Key | null | undefined
          summary: string
        }) => (
          <li style={{ display: 'block' }} key={event.id}>
            <Event description={event.summary} />
          </li>
        ),
      )}
      {!isAuth && <h3>Now You haven`t any events</h3>}
    </CalendarWrapper>
  )
}
