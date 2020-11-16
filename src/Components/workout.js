class workout {
  constructor(name, frequency, cycle) {
    this.name = name;
    this.frequency = frequency;
    this.cycle = cycle;
  }
  setFrequency(val) {
    this.frequency = val;
  }
  decrementCycle() {
    this.cyle--;
  }
}

export default workout;
