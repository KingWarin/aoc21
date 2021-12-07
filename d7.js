let input = $0.innerText.trim().split(',').map(Number);
// Part 1
let positions = [];
for(let i = Math.min(...input); i <= Math.max(...input); i++){
  input.forEach(x => positions[i] = (positions[i] || 0) + Math.abs(x - i));
}
let minPos = Math.min(...positions);
console.log(positions[positions.findIndex(x => x == minPos)]);

// Part 2
let factors = [];
const factor = (num) => {
  if (num == 0 || num == 1) {
    return 1;
  }
  if (factors[num] > 0) {
    return factors[num];
  }
  return factors[num] = factor(num-1) + num;
}
let positions2 = [];
for(let i = Math.min(...input); i <= Math.max(...input); i++) {
  input.forEach(x => positions2[i] = (positions2[i] || 0) + factor(Math.abs(x - i)));
}
let minPos2 = Math.min(...positions2);
console.log(positions2[positions2.findIndex(x => x == minPos2)]);
