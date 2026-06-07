// 1. Tạo lớp cha Animal
class Animal {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    public makeSound(): void {
        console.log(`${this.name} đang phát ra âm thanh...`);
    }
}

// 2. Tạo lớp con Dog kế thừa từ Animal sử dụng từ khóa 'extends'
class Dog extends Animal {
    public breed: string; // Thuộc tính riêng của lớp Dog (Giống chó)

    // Constructor của lớp con
    constructor(name: string, breed: string) {
        // BẮT BUỘC: Gọi super() để chuyển 'name' lên cho constructor của lớp cha xử lý
        super(name); 
        this.breed = breed;
    }

    // Ghi đè (Override) phương thức makeSound của lớp cha để phù hợp với con chó
    public override makeSound(): void {
        console.log(`${this.name} (${this.breed}) sủa: Gâu gâu!`);
    }

    // Phương thức riêng của lớp Dog
    public fetch(): void {
        console.log(`${this.name} đang chạy đi nhặt bóng...`);
    }
}

// ---- Thử nghiệm sử dụng ----

// Tạo một đối tượng từ lớp cha
const genericAnimal = new Animal("Quái thú");
genericAnimal.makeSound(); // Output: Quái thú đang phát ra âm thanh...

console.log("---");

// Tạo một đối tượng từ lớp con
const myDog = new Dog("Cậu Vàng", "Shiba Inu");
// Lớp con tự động có phương thức makeSound (đã được ghi đè) và thuộc tính name từ cha
myDog.makeSound(); // Output: Cậu Vàng (Shiba Inu) sủa: Gâu gâu!
myDog.fetch();     // Output: Cậu Vàng đang chạy đi nhặt bóng...