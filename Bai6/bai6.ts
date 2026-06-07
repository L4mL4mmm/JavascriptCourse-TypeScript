// 1. Định nghĩa Enum OrderStatus
enum OrderStatus {
    Pending = "Pending",
    Shipped = "Shipped",
    Delivered = "Delivered"
}

// 2. Tạo lớp Order sử dụng Enum
class Order {
    public orderId: number;
    public status: OrderStatus; // Kiểu dữ liệu chính là Enum vừa tạo

    constructor(orderId: number, status: OrderStatus) {
        this.orderId = orderId;
        this.status = status;
    }

    // 3. Hàm kiểm tra trạng thái đơn hàng
    public checkStatus(): void {
        if (this.status === OrderStatus.Delivered) {
            console.log(`[Order #${this.orderId}]: Order finished.`);
        } else {
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