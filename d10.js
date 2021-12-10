let input = $0.innerText.trim().split('\n').map(x => x.split(''));

const findIncorrect = (arr, pos) => {
  let allowed = [')','}',']','>'];
  let closingMatch = {'(':')','{':'}','[':']','<':'>'};
  let points = {')':3,']':57,'}':1197,'>':25137};
  let opening = arr[pos];
  if ( arr.length == 0 || pos == arr.length - 1) {
    return 0;
  } else if ( arr[pos+1] == closingMatch[opening] ) {
    arr = arr.slice(0,pos).concat(arr.slice(pos+2));
    pos--;
  } else if (Object.keys(closingMatch).includes(arr[pos+1])) {
    if ( arr.length > 2 ) {
      pos++;
    } else {
        return [];
    }
  } else if ( arr.length == 1 ) {
    return points[arr[0]];
  } else {
    return points[arr[pos+1]];
  }
  return findIncorrect(arr,pos);
}
let part1 = input.map(x => findIncorrect(x,0));
console.log(part1.reduce((x,y) => x+y ));

let part2 = [];
part1.forEach((x,ind) => { if (x == 0) { part2.push(input[ind]); }});
const findClosing = (line) => {
  let opens = {'(':')','{':'}','[':']','<':'>'};
  let points = {')':1,']':2,'}':3,'>':4};
  let score = 0;
  let opened = [];
  line.forEach(x => {
    if ( Object.keys(opens).includes(x) ) {
      opened.push(x);
    } else if ( opens[opened[opened.length - 1]] == x ) {
      opened.pop();
    }
  });
  opened.reverse().forEach(x => {score = (score * 5) + points[opens[x]];});
  return score;
}
part2 = part2.map(x => findClosing(x)).sort((a,b)=>a-b);
console.log(part2[Math.floor(part2.length/2)]);
