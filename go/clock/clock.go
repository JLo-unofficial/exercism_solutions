package clock

type Clock struct {
	hour   int
	minute int
}

func New(hour, minute int) Clock {
	return Clock{
		hour:   hour,
		minute: minute,
	}
}

func (clock Clock) String() string {
	return ""
}

func (clock Clock) Add(minutes int) Clock {
	return Clock{
		hour:   clock.hour,
		minute: clock.minute,
	}
}

func (clock Clock) Substract(minutes int) Clock {
	return Clock{
		hour:   clock.hour,
		minute: clock.minute,
	}
}
