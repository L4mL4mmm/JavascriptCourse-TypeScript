"use strict";
// 1. Viết hàm Generic identity
// Hàm này nhận vào một tham số kiểu T và trả về chính kiểu T đó
function identity(arg) {
    return arg;
}
// ---- Thử nghiệm sử dụng với các kiểu dữ liệu khác nhau ----
// ==========================================
// THƯỜNG NGHIỆM VỚI KIỂU STRING
// ==========================================
console.log("--- Kiểm tra với kiểu STRING ---");
// Gọi hàm identity với kiểu dữ liệu là string (có thể viết rõ <string> hoặc để TS tự suy luận)
let stringResult = identity("Lương Anh Minh");
console.log(`Kết quả hàm identity: ${stringResult} (Kiểu dữ liệu: ${typeof stringResult})`);
// Khởi tạo Object Box chứa dữ liệu kiểu string
const stringBox = {
    content: "Sách Lập Trình TypeScript nâng cao",
    description: "Hộp chứa tài liệu học tập"
};
console.log(`Nội dung trong stringBox: "${stringBox.content}"`);
// ==========================================
// THƯỜNG NGHIỆM VỚI KIỂU NUMBER
// ==========================================
console.log("\n--- Kiểm tra với kiểu NUMBER ---");
// Gọi hàm identity với kiểu dữ liệu là number
let numberResult = identity(2026);
console.log(`Kết quả hàm identity: ${numberResult} (Kiểu dữ liệu: ${typeof numberResult})`);
// Khởi tạo Object Box chứa dữ liệu kiểu number
const numberBox = {
    content: 130, // Ví dụ: Điểm IQ
    description: "Hộp chứa chỉ số thông minh"
};
console.log(`Nội dung trong numberBox: ${numberBox.content}`);
