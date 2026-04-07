export var OrderStatus;
(function (OrderStatus) {
    OrderStatus["PENDING"] = "PENDING";
    OrderStatus["ACCEPTED"] = "ACCEPTED";
    OrderStatus["IN_PROGRESS"] = "IN_PROGRESS";
    OrderStatus["READY_FOR_DELIVERY"] = "READY_FOR_DELIVERY";
    OrderStatus["OUT_FOR_DELIVERY"] = "OUT_FOR_DELIVERY";
    OrderStatus["DELIVERED"] = "DELIVERED";
    OrderStatus["CANCELLED"] = "CANCELLED";
})(OrderStatus || (OrderStatus = {}));
