package clock

import "fmt"

type Clock struct {
	hour   int
	minute int
}

func New(hour, minute int) Clock {
	if minute >= 60 {
		hour += minute / 60
		minute = minute % 60
	}
	if minute < 0 {
		hour += minute / 60
		minute = -1 * (minute % 60)
	}
	if minute <= -60 {
	}

	if hour >= 24 {
		hour %= 24
	}

	if hour < 0 {
		hour = 24 + (hour % 24)
	}
	return Clock{
		hour:   hour,
		minute: minute,
	}
}

func (clock Clock) String() string {
	return fmt.Sprintf("%02d:%02d", clock.hour, clock.minute)
}

<<<<<<< HEAD
func (clock *Clock) Add(minutes int) *Clock {
	return clock
}

func (clock *Clock) Substract(minutes int) *Clock {
	return clock
=======
func (clock Clock) Add(minutes int) Clock {
	updatedClock := New(clock.hour, clock.minute)
	updatedClock.minute += minutes
	if updatedClock.minute > 60 {
		updatedClock.hour += clock.minute / 60
		updatedClock.minute = clock.minute % 60
	}
	if updatedClock.hour > 24 {
		updatedClock.hour = clock.hour % 24
	}
	return updatedClock
}

func (clock Clock) Subtract(minutes int) Clock {
	updatedClock := New(clock.hour, clock.minute)
	updatedClock.minute -= minutes
	if updatedClock.minute < 0 {
		updatedClock.hour += (clock.minute - 60) / 60
		updatedClock.minute = 60 + clock.minute%60
	}
	if updatedClock.hour < 0 {
		updatedClock.hour = 24 + (clock.hour % 24)
	}
	return updatedClock
>>>>>>> 211b3c9ea62e5c11aa0ca572526a8a90dc953937
}
