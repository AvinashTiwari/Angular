class Car {
  // color: string;
  // year: number;

  // constructor() {
  //   this.color = 'red';
  //   this.year = 2000;
  // }

  color = 'red';
  year = 2000;

  drive() {
    console.log('Vroom');
  }
}

const myCar = new Car('red', 2000);
myCar.drive();

console.log(myCar.color, myCar.year); // 'red', 2000
