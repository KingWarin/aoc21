let input = $0.innerText.trim().split('\n').map(x=>x.split('').map(Number));

let part1 = [];
for(let i = 0; i < input.length; i++) {
  part1[i] = input[i].filter((x, ind, arr) => x < (ind+1 < arr.length ? arr[ind+1] : 9) && x < (ind-1 >= 0 ? arr[ind-1] : 9) && x < (input[i-1] ? input[i-1][ind] : 9) && x < (input[i+1] ? input[i+1][ind] : 9));
}
console.log(part1.map(x => x.map(y=>parseInt(y)+1)).flat().reduce((x,y)=>x+y));

// Part2
let positions = part1.map((x,ind) => x.map(y => input[ind].indexOf(y)));
let checked = [];
let check = (pos)=> {
  if(!Array.isArray(checked[pos[0]])) {
    checked[pos[0]] = [];
  }
  if(checked[pos[0]][pos[1]]) {
    return 0;
  }
  checked[pos[0]][pos[1]] = true;
  let val = 1;
  if(input[pos[0]][pos[1]] == 9) {
    return 0;
  }
  if(pos[0]-1 != -1) {
    val += check([pos[0]-1,pos[1]]);
  }
  if(pos[0]+1 < input.length) {
    val += check([pos[0]+1,pos[1]]);
  }
  if(pos[1]-1 != -1) {
    val += check([pos[0],pos[1]-1]);
  }
  if(pos[1]+1 < input[pos[0]].length) {
    val += check([pos[0],pos[1]+1]);
  }
  return val;
}
console.log(positions.map((x,ind) => x.map(y => check([ind,y]))).flat().sort((a,b)=>a-b).slice(-3).reduce((x,y)=>x*y));
