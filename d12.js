let input = $0.innerText.trim().split('\n').map(x => x.split('-'));

const findSource = (input, start) => {
  let result = input.filter(x => x.includes(start));
  return result;
};

let routes = [];

const traverse = (input, current, begin = "end", visited = ["end"]) => {
  for ( let el of current) {
    let target = el.find( x => x != begin);
    if ( target == "start" ) {
      routes.push([].concat(visited).concat(target));
    } else if ( !(target == target.toLowerCase() && visited.includes(target)) ) {
      traverse(input, findSource(input, target), target, [].concat(visited).concat(target));
    }
  }
};
traverse(input, findSource(input, "end"));
console.log("Part1", routes.length);

let routes2 = [];
const traverse2 = (input, current, begin = "end", visited = ["end"], visitedTwice = ["end"]) => {
  for ( let el of current ) {
    let target = el.find( x => x != begin);
    if ( target == "start" ) {
      routes2.push([].concat(visited).concat(target));
    } else if ( !(target == target.toLowerCase() && visited.includes(target)) ) {
      traverse2(input, findSource(input, target), target, [].concat(visited).concat(target), [].concat(visitedTwice));
    } else if ( target != "end" && target == target.toLowerCase() && visitedTwice.length < 2 ) {
      traverse2(input, findSource(input, target), target, [].concat(visited).concat(target), [].concat(visitedTwice).concat(target));
    }
  }
};
traverse2(input,findSource(input, "end"));
console.log("Part2", routes2.length);
