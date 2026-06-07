"use strict";
// 1. Tạo lớp trừu tượng PaymentMethod bằng từ khóa 'abstract'
class PaymentMethod {
    constructor(amount) {
        this.amount = amount;
    }
    // Lớp trừu tượng vẫn có thể chứa các phương thức thông thường có thân hàm
    printReceipt() {
        console.log(`Hóa đơn: Đã xử lý giao dịch trị giá ${this.amount}$.`);
    }
}
// 2. Lớp con cụ thể: CreditCardPayment
class CreditCardPayment extends PaymentMethod {
    constructor(amount, cardNumber) {
        super(amount); // Chuyển số tiền lên cho lớp cha
        this.cardNumber = cardNumber;
    }
    // BẮT BUỘC phải triển khai (implement) phương thức trừu tượng từ lớp cha
    processPayment() {
        console.log(`[Thẻ Tín Dụng] Đang kết nối ngân hàng...`);
        console.log(`[Thẻ Tín Dụng] Đã thanh toán thành công ${this.amount}$ bằng thẻ: ****-****-****-${this.cardNumber.slice(-4)}`);
    }
}
// 3. Lớp con cụ thể: PaypalPayment
class PaypalPayment extends PaymentMethod {
    constructor(amount, email) {
        super(amount);
        this.email = email;
    }
    // BẮT BUỘC phải triển khai (implement) phương thức trừu tượng từ lớp cha
    processPayment() {
        console.log(`[PayPal] Đang xác thực tài khoản PayPal: ${this.email}...`);
        console.log(`[PayPal] Chuyển tiền thành công: Đã trừ ${this.amount}$ từ ví PayPal.`);
    }
}
// ---- Thử nghiệm sử dụng ----
// LƯU Ý LỚN: Bạn KHÔNG THỂ khởi tạo trực tiếp lớp trừu tượng (Dòng dưới đây sẽ lỗi biên dịch nếu mở ra)
// const invalidPayment = new PaymentMethod(100); 
// Chúng ta khởi tạo các lớp con cụ thể:
const payment1 = new CreditCardPayment(150, "1234567890123456");
payment1.processPayment();
payment1.printReceipt();
console.log("-----------------------------------------");
const payment2 = new PaypalPayment(85, "anhminh.luong@gmail.com");
payment2.processPayment();
payment2.printReceipt();
