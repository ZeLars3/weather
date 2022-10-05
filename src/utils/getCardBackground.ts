import { BACKGROUND } from 'constants/index'
import { WeatherType } from 'enums'

export const getCardBackground = (
  weatherType: string,
): string => {
  switch (weatherType) {
    case WeatherType.Clear:
      return BACKGROUND.ClearSky
    case WeatherType.Rain:
      return BACKGROUND.Rain
    case WeatherType.Clouds:
      return BACKGROUND.Clouds
    case WeatherType.Tornado:
      return BACKGROUND.Тornado
    case WeatherType.Squall:
      return BACKGROUND.Squall
    case WeatherType.Snow:
      return BACKGROUND.Snow
    case WeatherType.Drizzle:
      return BACKGROUND.Drizzle
    case WeatherType.Thunderstorm:
      return BACKGROUND.Thunderstorm
    default:
      return BACKGROUND.Default
  }
}
