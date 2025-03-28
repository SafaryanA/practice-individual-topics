/*
1.  Создайте класс Person с полями name, age и методом greet().
2.  Реализуйте класс BankAccount с deposit() и withdraw().
3.  Создайте класс Rectangle с методами getArea() и getPerimeter().
4.  Напишите класс Employee, расширяющий Person, с зарплатой.
5.  Реализуйте класс Library, хранящий список книг.
6.  Создайте Movie, содержащий информацию о фильме.
7.  Реализуйте класс Student с методом getGrade().
8.  Напишите класс Product, содержащий цену и метод getDiscountedPrice().
9.  Создайте Animal, а затем Dog, Cat, наследующие его.
10. Напишите Vehicle и создайте подклассы Bike, Car.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 1.  Создайте класс Person с полями name, age и методом greet().
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name,
            this.age = age;
    }
    Person.prototype.greet = function () {
        return "My name is ".concat(this.name, ", I am ").concat(this.age, " years old.");
    };
    return Person;
}());
// 2.  Реализуйте класс BankAccount с deposit() и withdraw().
var BankAccount = /** @class */ (function () {
    function BankAccount() {
        this.balance = 4500;
    }
    BankAccount.prototype.deposit = function (value) {
        this.balance += value;
        return this.balance;
    };
    BankAccount.prototype.withdraw = function (value) {
        if (this.balance - value >= 0) {
            this.balance -= value;
            return this.balance;
        }
        return "insufficient funds";
    };
    return BankAccount;
}());
var bankAccountAm = new BankAccount();
console.log(bankAccountAm.withdraw(2000));
console.log(bankAccountAm.withdraw(45000));
// 3.  Создайте класс Rectangle с методами getArea() и getPerimeter().
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width, this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    Rectangle.prototype.getPerimeter = function () {
        return 2 * (this.width + this.height);
    };
    return Rectangle;
}());
// 4.  Напишите класс Employee, расширяющий Person, с зарплатой.
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, wages) {
        var _this = _super.call(this, name, age) || this;
        _this.wages = wages;
        return _this;
    }
    return Employee;
}(Person));
// 5.  Реализуйте класс Library, хранящий список книг.
var Library = /** @class */ (function () {
    function Library() {
        this.listBook = ["Война и мир", "1984", "Лолита"];
    }
    Library.prototype.addBook = function (val) {
        this.listBook.push(val);
        return this.listBook;
    };
    return Library;
}());
var listBook = new Library;
listBook.addBook("Звук и ярость");
console.log(listBook);
var Movie = /** @class */ (function () {
    function Movie() {
        this.films = [
            {
                title: "Мэйфейрские ведьмы",
                genre: ["Сериал", "Драма", "Ужасы", "Фэнтези"],
                status: "Идет показ",
                translation: "Многоголосый",
                channel: "AMC",
                releaseDate: 2023,
                country: "США",
                director: ["Логан Кибенс", "Хайфа Аль-Мансур", "Аксель Кэролин"],
                Actors: ["Александра Даддарио", "Тонгай Арнольд Чириса", "Джек Хьюстон", "Гарри Хэмлин", "Бен Фельдман", "Алисса Джиррелс", "Ханна Калуэлл", "Джеральдин Сингер", "Деннис Буцикарис", "Олив Элиз Аберкромби"],
                durationFilm: "1-45 S"
            },
            {
                "title": "Дом дракона",
                "genre": ["Сериал", "Фэнтези", "Драма", "Приключения"],
                "status": "Идет показ",
                "translation": "Профессиональный",
                "channel": "HBO",
                "releaseDate": 2022,
                "country": "США",
                "director": ["Мигель Сапочник", "Грег Яйтанс", "Клер Килнер"],
                "Actors": ["Пэдди Консидайн", "Мэтт Смит", "Оливия Кук", "Эмма Д’Арси", "Рис Иванс"],
                "durationFilm": "1-60 S"
            },
            {
                "title": "Очень странные дела",
                "genre": ["Сериал", "Фантастика", "Детектив", "Триллер"],
                "status": "Идет показ",
                "translation": "Дубляж",
                "channel": "Netflix",
                "releaseDate": 2016,
                "country": "США",
                "director": ["Мэтт Даффер", "Росс Даффер"],
                "Actors": ["Вайнона Райдер", "Дэвид Харбор", "Финн Вулфхард", "Милли Бобби Браун", "Гейтен Матараццо"],
                "durationFilm": "1-50 S"
            },
            {
                "title": "Мандалорец",
                "genre": ["Сериал", "Фантастика", "Боевик", "Приключения"],
                "status": "Завершен",
                "translation": "Профессиональный",
                "channel": "Disney+",
                "releaseDate": 2019,
                "country": "США",
                "director": ["Джон Фавро", "Дэйв Филони", "Рик Фамуйива"],
                "Actors": ["Педро Паскаль", "Джина Карано", "Карл Уэзерс", "Вернер Херцог", "Ник Нолти"],
                "durationFilm": "1-40 S"
            },
            {
                "title": "Ведьмак",
                "genre": ["Сериал", "Фэнтези", "Драма", "Приключения"],
                "status": "Идет показ",
                "translation": "Дубляж",
                "channel": "Netflix",
                "releaseDate": 2019,
                "country": "США, Польша, Венгрия",
                "director": ["Алик Сахаров", "Шарлотта Брэндстром", "Алекс Гарсия Лопес"],
                "Actors": ["Генри Кавилл", "Аня Чалотра", "Фрейя Аллан", "Джоэи Бэти", "Мими Ндивени"],
                "durationFilm": "1-55 S"
            }
        ];
    }
    return Movie;
}());
var movies = new Movie;
console.log(movies.films);
// 7.  Реализуйте класс Student с методом getGrade().
var Student = /** @class */ (function () {
    function Student() {
        this.grade = 0;
    }
    Student.prototype.getGrade = function (val) {
        return this.grade = val;
    };
    return Student;
}());
// 8.  Напишите класс Product, содержащий цену и метод getDiscountedPrice().
var Product = /** @class */ (function () {
    function Product() {
        this.price = 134;
    }
    Product.prototype.getDiscountedPrice = function (discount) {
        var newPrice = (this.price * discount) / 100;
        console.log("with a ".concat(discount, " percent discount it will be ").concat(newPrice));
    };
    return Product;
}());
// 9.  Создайте Animal, а затем Dog, Cat, наследующие его.
var AnimalOne = /** @class */ (function () {
    function AnimalOne() {
        this.howManyPaws = 4;
    }
    return AnimalOne;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(howManyPaws) {
        var _this = _super.call(this) || this;
        _this.makesSounds = "гаф гаф гаф";
        return _this;
    }
    return Dog;
}(AnimalOne));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(howManyPaws) {
        var _this = _super.call(this) || this;
        _this.makesSounds = "мяу, мяу мяу";
        return _this;
    }
    return Cat;
}(AnimalOne));
// 10. Напишите Vehicle и создайте подклассы Bike, Car.
var Vehicle = /** @class */ (function () {
    function Vehicle(manyWheels) {
        this.manyWheels = manyWheels;
    }
    return Vehicle;
}());
var Bike = /** @class */ (function (_super) {
    __extends(Bike, _super);
    function Bike() {
        var _this = _super.call(this, 2) || this;
        _this.seats = 2;
        return _this;
    }
    return Bike;
}(Vehicle));
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        var _this = _super.call(this, 4) || this;
        _this.seats = 4;
        return _this;
    }
    return Car;
}(Vehicle));
