class Car2 {
  public color: string;
  private year: number;

  constructor(color: string, year: number) {
    this.color = color;
    this.year = year;
  }

  drive() {
    this.putInGear();
    this.pressPedal();
    this.turnWheel();
  }

  private putInGear() {}

  private pressPedal() {}

  private turnWheel() {}
}

const myCar = new Car2('red', 2000);
myCar.drive();

myCar.drive();
myCar.putInGear();

console.log(myCar.color, myCar.year); // 'red', 2000
