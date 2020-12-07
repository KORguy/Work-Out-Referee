class workoutplan {
  constructor(name, list) {
    this.name = name;
    this.list = list;
    this.pointer = 0;
    this.size = list.length;
  }
  next() {
    let temp = (this.pointer + 1) % this.size;
    if (this.list[temp].cycle > 0) {
      return this.list[temp].name;
    }
    return false;
  }
  pop() {
    this.list[this.pointer].cycle--;
    if (this.next()) {
      this.pointer = (this.pointer + 1) % this.size;

      return this.list[this.pointer];
    } else {
      return false;
    }
  }
}

export default workoutplan;
