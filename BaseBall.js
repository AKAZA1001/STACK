function calPoints(operations) {
  let scores = [];

  for (let i = 0; i < operations.length; i++) {
    let operation = operations[i];

    if (!isNaN(parseInt(operation))) {
      scores.push(parseInt(operation));
    } else if (operation === "+") {
      let sum = scores[scores.length - 1] + scores[scores.length - 2];
      scores.push(sum);
    } else if (operation === "D") {
      let double = 2 * scores[scores.length - 1];
      scores.push(double);
    } else if (operation === "C") {
      scores.pop();
    }
  }

  return scores.reduce((total, score) => total + score, 0);
}
let operations = ["5", "2", "C", "D", "+"];
let result = calPoints(operations);
console.log(result);
