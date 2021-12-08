let input = $0.innerText.trim().split('\n').map(y=>y.split(' | ').map(x => x.split(' ')));
let part1 = [].concat(input);
console.log(part1.map(x => x[1].filter(y => y.length == 2 || y.length == 4  || y.length == 3 || y.length == 7)).reduce((x,y)=>{ return !isNaN(parseInt(x)) ? x + y.length : x.length + y.length}));

// Part 2
const numbersForInput = (input) => {
  let numbers = [];
  let xDigit = [];
  let segments = {};
  let output = input[1].map(x => x.split('').sort().join(''));

  xDigit[6] = input[0].filter(x => x.length == 6).map(x => x.split(''));
  numbers[1] = input[0].find(x => x.length == 2).split('');
  numbers[7] = input[0].find(x => x.length == 3).split('');
  numbers[4] = input[0].find(x => x.length == 4).split('');
  numbers[8] = input[0].find(x => x.length == 7).split('');
  numbers[6] = xDigit[6].find(x => (x.includes(numbers[1][0]) && !x.includes(numbers[1][1])) || (x.includes(numbers[1][1]) && !x.includes(numbers[1][0])));
  segments.a = numbers[7].filter(x => x != numbers[1][0] && x != numbers[1][1])[0];
  segments.c = numbers[1].find(x => !numbers[6].includes(x));
  segments.f = numbers[1].find(x => x != segments.c);
  xDigit[5] = input[0].filter(x => x.length == 5).map(x => x.split(''));
  numbers[3] = xDigit[5].find(x => numbers[7].every(y => x.includes(y)));
  numbers[9] = xDigit[6].find(x => numbers[3].every(y => x.includes(y)));
  numbers[5] = xDigit[5].find(x => x.every(y => numbers[6].includes(y)));
  numbers[2] = xDigit[5].find(x => x != numbers[5] && x != numbers[3]);
  numbers[0] = xDigit[6].find(x => x != numbers[6] && x != numbers[9]);

  numbers = numbers.map(x => x.sort().join(''));
  return output.map(x => numbers.indexOf(x)).join('');
};
let part2 = [].concat(input);
part2 = part2.map(x => numbersForInput(x));
console.log(part2.reduce((x,y) => parseInt(x) + parseInt(y)));
