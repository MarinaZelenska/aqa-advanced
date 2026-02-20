
const checkOrder = function(available, ordered){
    if (!ordered) return "Your order is empty";

    if (ordered > available) return "Your order is too large, we don’t have enough goods.";

    return "Your order is accepted"
}

console.log(checkOrder(15, 15));
