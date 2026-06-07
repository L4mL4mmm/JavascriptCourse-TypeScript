// 1. Tạo lớp cha Shape
class Shape {
    // Phương thức mặc định của lớp cha, trả về 0 vì chưa biết là hình gì
    public calculateArea(): number {
        return 0;
    }
}

// 2. Lớp con Rectangle (Hình chữ nhật) kế thừa từ Shape
class Rectangle extends Shape {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        super(); // Gọi constructor của lớp cha Shape
        this.width = width;
        this.height = height;
    }

    // Ghi đè phương thức để tính diện tích hình chữ nhật
    public override calculateArea(): number {
        return this.width * this.height;
    }
}

// 3. Lớp con Circle (Hình tròn) kế thừa từ Shape
class Circle extends Shape {
    private radius: number;

    constructor(radius: number) {
        super(); // Gọi constructor của lớp cha Shape
        this.radius = radius;
    }

    // Ghi đè phương thức để tính diện tích hình tròn
    public override calculateArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

// ---- Thử nghiệm Tính Đa Hình ----

// Tạo danh sách các hình học khác nhau nhưng quy về cùng kiểu dữ liệu là Shape
const shapes: Shape[] = [
    new Rectangle(10, 20), // Hình chữ nhật: 10 * 20 = 200
    new Circle(5),         // Hình tròn: PI * 5^2 ~ 78.54
    new Rectangle(5, 5)    // Hình vuông (cũng là HCN): 5 * 5 = 25
];

// Duyệt qua danh sách và gọi CÙNG MỘT PHƯƠNG THỨC calculateArea()
// Mỗi đối tượng tự biết cách tính diện tích chính xác của riêng nó nhờ Tính Đa Hình
shapes.forEach((shape, index) => {
    console.log(`Hình thứ ${index + 1} có diện tích là: ${shape.calculateArea().toFixed(2)}`);
});