export const toCelsius = (value: number): string => {
  return (value - 273).toString()
}

export const toFahrenheit = (value: number): string => {
  return (value * 1.8 + 32).toString()
}
