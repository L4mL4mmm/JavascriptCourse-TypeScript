"use strict";
// 1. Định nghĩa Enum OrderStatus
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Pending"] = "Pending";
    OrderStatus["Shipped"] = "Shipped";
    OrderStatus["Delivered"] = "Delivered";
})(OrderStatus || (OrderStatus = {}));
// 2. Tạo lớp Order sử dụng Enum
class Order {
    constructor(orderId, status) {
        this.orderId = orderId;
        this.status = status;
    }
    // 3. Hàm kiểm tra trạng thái đơn hàng
    checkStatus() {
        if (this.status === OrderStatus.Delivered) {
            console.log(`[Order #${this.orderId}]: Order finished.`);
        }
        else {
            console.log(`[Order #${this.orderId}]: Order is currently ${this.status}.`);
        }
    }
}
// ---- Thử nghiệm sử dụng ----
// Tạo đơn hàng 1: Đang chờ xử lý
const order1 = new Order(101, OrderStatus.Pending);
order1.checkStatus(); // Output: [Order #101]: Order is currently Pending.
// Tạo đơn hàng 2: Đã giao thành công
const order2 = new Order(102, OrderStatus.Delivered);
order2.checkStatus(); // Output: [Order #102]: Order finished.
