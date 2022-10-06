export const CALENDAR_CONFIG = {
  clientId: process.env.REACT_APP_CALENDAR_ID as string,
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY as string,
  scope: 'https://www.googleapis.com/auth/calendar.events',
  discoveryDocs: [
    'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
  ],
}
