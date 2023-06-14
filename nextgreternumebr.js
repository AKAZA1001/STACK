function nextGreaterElement(numbs1, numbs2) {
  const result = [];

  for (let i = 0; i < numbs1.length; i++) {
    const num = numbs1[i];
    let found = false;

    for (let j = numbs2.indexOf(num) + 1; j < numbs2.length; j++) {
      if (numbs2[j] > num) {
        result.push(numbs2[j]);
        found = true;
        break;
      }
    }

    if (!found) {
      result.push(-1);
    }
  }

  return result;
}
const numbs1 = [4, 1, 2];
const numbs2 = [1, 3, 4, 2];

const result = nextGreaterElement(numbs1, numbs2);
console.log(result);
