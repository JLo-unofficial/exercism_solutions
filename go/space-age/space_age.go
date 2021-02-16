package space

type Planet string

const EarthSecondsInYear = 365.25*24*60*60

var PlanetYearConverter = map[Planet]float64 {
    "Earth": 1.0 * EarthSecondsInYear,
    "Mercury": 0.2408467 * EarthSecondsInYear,
    "Venus": 0.61519726 * EarthSecondsInYear,
    "Mars": 1.8808158 * EarthSecondsInYear,
    "Jupiter": 11.862615 * EarthSecondsInYear,
    "Saturn": 29.447498 * EarthSecondsInYear,
    "Uranus": 84.016846 * EarthSecondsInYear,
    "Neptune": 164.79132 * EarthSecondsInYear,
}


func Age(seconds float64, planet Planet) float64 {
  return seconds/PlanetYearConverter[planet]
}
