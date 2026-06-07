// 1. Tạo lớp trừu tượng PaymentMethod bằng từ khóa 'abstract'
abstract class PaymentMethod {
    public amount: number;

    constructor(amount: number) {
        this.amount = amount;
    }

    // Định nghĩa phương thức trừu tượng: KHÔNG CÓ THÂN HÀM (không có cặp dấu {})
    // Bắt buộc các lớp con cụ thể phải tự triển khai chi tiết logic.
    public abstract processPayment(): void;

    // Lớp trừu tượng vẫn có thể chứa các phương thức thông thường có thân hàm
    public printReceipt(): void {
        console.log(`Hóa đơn: Đã xử lý giao dịch trị giá ${this.amount}$.`);
    }
}

// 2. Lớp con cụ thể: CreditCardPayment
class CreditCardPayment extends PaymentMethod {
    private cardNumber: string;

    constructor(amount: number, cardNumber: string) {
        super(amount); // Chuyển số tiền lên cho lớp cha
        this.cardNumber = cardNumber;
    }

    // BẮT BUỘC phải triển khai (implement) phương thức trừu tượng từ lớp cha
    public override processPayment(): void {
        console.log(`[Thẻ Tín Dụng] Đang kết nối ngân hàng...`);
        console.log(`[Thẻ Tín Dụng] Đã thanh toán thành công ${this.amount}$ bằng thẻ: ****-****-****-${this.cardNumber.slice(-4)}`);
    }
}

// 3. Lớp con cụ thể: PaypalPayment
class PaypalPayment extends PaymentMethod {
    private email: string;

    constructor(amount: number, email: string) {
        super(amount);
        this.email = email;
    }

    // BẮT BUỘC phải triển khai (implement) phương thức trừu tượng từ lớp cha
    public override processPayment(): void {
        console.log(`[PayPal] Đang xác thực tài khoản PayPal: ${this.email}...`);
        console.log(`[PayPal] Chuyển tiền thành công: Đã trừ ${this.amount}$ từ ví PayPal.`);
    }
}

// ---- Thử nghiệm sử dụng ----

// LƯU Ý LỚN: Bạn KHÔNG THỂ khởi tạo trực tiếp lớp trừu tượng (Dòng dưới đây sẽ lỗi biên dịch nếu mở ra)
// const invalidPayment = new PaymentMethod(100); 

// Chúng ta khởi tạo các lớp con cụ thể:
const payment1: PaymentMethod = new CreditCardPayment(150, "1234567890123456");
payment1.processPayment();
payment1.printReceipt();

console.log("-----------------------------------------");

const payment2: PaymentMethod = new PaypalPayment(85, "anhminh.luong@gmail.com");
payment2.processPayment();
payment2.printReceipt();