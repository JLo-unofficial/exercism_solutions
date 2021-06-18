const orbitalPeriod = {
    'mercury': 0.2408467,
    'venus': 0.61519726,
    'earth': 1.0,
    'mars': 1.8808158,
    'jupiter': 11.862615,
    'saturn': 29.447498,
    'uranus': 84.016846,
    'neptune': 164.79132,
}

const SECONDS_IN_MINUTE = 60.0;
const MINUTES_IN_HOUR = 60.0;
const HOURS_IN_DAY = 24.0;
const DAYS_IN_YEAR = 365.25;
const SECONDS_IN_YEAR = SECONDS_IN_MINUTE * MINUTES_IN_HOUR * HOURS_IN_DAY * DAYS_IN_YEAR;

export const age = (planet, ageInSeconds) => {
    const preciseAge = (ageInSeconds / orbitalPeriod[planet]) / SECONDS_IN_YEAR;
    // reduce preciseAge to 2 decimal places
    return Math.round(preciseAge * 100) / 100;
}
