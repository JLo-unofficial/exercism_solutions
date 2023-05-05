// An enum should be helpful for this exercise.
pub const Planet = enum {
    Mercury,
    Venus,
    Earth,
    Mars,
    Jupiter,
    Saturn,
    Uranus,
    Neptune,
};

pub const SpaceAge = struct {
    seconds: f64,

    pub fn init(seconds: isize) SpaceAge {
        return SpaceAge{ .seconds = @intToFloat(f64, seconds) };
    }

    fn getOrbitalPeriodInSecondsFromEarthYearsOf(planet: Planet) f64 {
        const earthYearsInSeconds: f64 = 31557600.0;
        return SpaceAge.getOrbitalPeriodInEarthYearsOf(planet) * earthYearsInSeconds;
    }

    fn getOrbitalPeriodInEarthYearsOf(planet: Planet) f64 {
        return switch (planet) {
            .Mercury => 0.2408467,
            .Venus => 0.61519726,
            .Earth => 1.0,
            .Mars => 1.8808158,
            .Jupiter => 11.862615,
            .Saturn => 29.447498,
            .Uranus => 84.016846,
            .Neptune => 164.79132,
        };
    }

    pub fn onMercury(self: SpaceAge) f64 {
        return self.seconds / SpaceAge.getOrbitalPeriodInSecondsFromEarthYearsOf(Planet.Mercury);
    }

    pub fn onVenus(self: SpaceAge) f64 {
        return self.seconds / SpaceAge.getOrbitalPeriodInSecondsFromEarthYearsOf(Planet.Venus);
    }

    pub fn onEarth(self: SpaceAge) f64 {
        return self.seconds / SpaceAge.getOrbitalPeriodInSecondsFromEarthYearsOf(Planet.Earth);
    }

    pub fn onMars(self: SpaceAge) f64 {
        return self.seconds / SpaceAge.getOrbitalPeriodInSecondsFromEarthYearsOf(Planet.Mars);
    }

    pub fn onJupiter(self: SpaceAge) f64 {
        return self.seconds / SpaceAge.getOrbitalPeriodInSecondsFromEarthYearsOf(Planet.Jupiter);
    }

    pub fn onSaturn(self: SpaceAge) f64 {
        return self.seconds / SpaceAge.getOrbitalPeriodInSecondsFromEarthYearsOf(Planet.Saturn);
    }

    pub fn onUranus(self: SpaceAge) f64 {
        return self.seconds / SpaceAge.getOrbitalPeriodInSecondsFromEarthYearsOf(Planet.Uranus);
    }

    pub fn onNeptune(self: SpaceAge) f64 {
        return self.seconds / SpaceAge.getOrbitalPeriodInSecondsFromEarthYearsOf(Planet.Neptune);
    }
};
