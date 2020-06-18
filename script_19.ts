interface ClockInterface2 {
  tick(): void;
}

interface ClockConstructor {
  new(hour: number, minute: number): ClockInterface2;
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface2
{
  return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface2
{
  constructor(h: number, m: number) { }
  tick() {
    console.log("beep beep");
  }
}

class AnalogClock implements ClockInterface2
{
  constructor(h: number, m: number) { }
  tick() {
    console.log("tick tick");
  }
}