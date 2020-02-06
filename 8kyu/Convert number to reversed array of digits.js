function digitize(n) {
  return String(n).split('').reverse().map((item)=>item=(+item));
}

function digitize(n) {
  return String(n).split('').reverse().map(Number);
}

function digitize(n) {
  return Array.from(String(n), Number).reverse();
}