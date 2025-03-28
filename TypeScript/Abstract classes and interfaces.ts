	/* 
	1.  Создайте абстрактный класс Animal с abstract методом makeSound().
	2.  Напишите интерфейс Shape с методом getArea().
	3.  Реализуйте Employee как абстрактный класс с salary.
	4.  Создайте интерфейс Playable для объектов, которые можно проигрывать.
	5.  Реализуйте Transport как абстрактный класс.
	6.  Напишите интерфейс Readable с read().
	7.  Создайте GameCharacter с абстрактным attack().
	8.  Реализуйте Device, абстрактный класс с turnOn().
	9.  Напишите Car, который реализует Vehicle.
	10. Создайте MusicPlayer, реализующий Playable.
	*/

	// 1. Абстрактный класс Animal с абстрактным методом makeSound().
abstract class Animal {
  abstract makeSound(): void;
}

// 2. Интерфейс Shape с методом getArea().
interface Shape {
  getArea(): number;
}

class Square implements Shape {
  constructor(private side: number) {}

  getArea(): number {
    return this.side * this.side;
  }
}

// 3. Абстрактный класс Employee с salary.
abstract class Employee {
  protected salary: number;

  constructor(salary: number) {
    this.salary = salary;
  }

  abstract getSalary(): number;
}

// 4. Интерфейс Playable для объектов, которые можно проигрывать.
interface Playable {
  play(): void;
  pause(): void;
  stop(): void;
}

// 5. Абстрактный класс Transport.
abstract class Transport {
  protected model: string;

  constructor(model: string) {
    this.model = model;
  }

  abstract move(): void;
}

// 6. Интерфейс Readable с read().
interface Readable {
  read(): void;
}

// 7. Абстрактный класс GameCharacter с методом attack().
abstract class GameCharacter {
  protected health: number;

  constructor(health: number) {
    this.health = health;
  }

  abstract attack(enemy: GameCharacter): void;
}

// 8. Абстрактный класс Device с turnOn().
abstract class Device {
  abstract turnOn(): void;
}

	// 9. Класс Car, реализующий интерфейс Vehicle.
	interface Vehicle {
		startEngine(): void;
		stopEngine(): void;
	}

	class Car implements Vehicle {
		startEngine(): void {
			console.log("Двигатель запущен.");
		}

		stopEngine(): void {
			console.log("Двигатель остановлен.");
		}
	}

// 10. Класс MusicPlayer, реализующий Playable.
class MusicPlayer implements Playable {
  play(): void {
    console.log("Музыка играет.");
  }

  pause(): void {
    console.log("Музыка на паузе.");
  }

  stop(): void {
    console.log("Музыка остановлена.");
  }
}

// Тестирование
const square = new Square(4);
console.log(square.getArea()); // 16

const car = new Car();
car.startEngine(); // "Двигатель запущен."
car.stopEngine(); // "Двигатель остановлен."

const player = new MusicPlayer();
player.play(); // "Музыка играет."
player.pause(); // "Музыка на паузе."
player.stop(); // "Музыка остановлена."
