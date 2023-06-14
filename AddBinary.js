function addBinary(a, b) {
  const stack = [];
  let carry = 0;
  let i = a.length - 1;
  let j = b.length - 1;

  while (i >= 0 || j >= 0 || carry !== 0) {
    let digitA = i >= 0 ? parseInt(a.charAt(i)) : 0;
    let digitB = j >= 0 ? parseInt(b.charAt(j)) : 0;
    let sum = digitA + digitB + carry;
    let digitSum = sum % 2;
    carry = Math.floor(sum / 2);
    stack.push(digitSum);
    i--;
    j--;
  }
  let result = "";
  while (stack.length > 0) {
    result += stack.pop();
  }

  return result;
}
const a = "11";
const b = "1";
const sum = addBinary(a, b);
console.log(sum);
