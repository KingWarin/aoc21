let input = $0.innerText.trim().split('\n').map(x => x.split('').map(Number));

const doStep = (input) => { return input.map(x => x.map(y => y+1)); };
const getFlashes = (input) => { return input.map((x,indX) => x.map((y,indY) => y > 9 ? [indX,indY] : [])).flat().filter(x => x.length != 0); };
const doFlash = (input) => {
  let alreadyFlashed = Array.from({length: input.length}, () => []);
  let toFlash = getFlashes(input);
  while( toFlash.length > 0 && toFlash.filter(x => !alreadyFlashed[x[0]][x[1]]).length > 0 ) {
    toFlash.forEach(x => {
      let [posX, posY] = x;
      if ( !alreadyFlashed[posX][posY] ) {
        alreadyFlashed[posX][posY] = true;
        if ( posX-1 >= 0 ) {
          input[posX-1][posY] += 1;
          if ( posY-1 >= 0 ) {
            input[posX-1][posY-1] += 1;
          }
          if ( posY+1 < input[posX-1].length ) {
            input[posX-1][posY+1] += 1;
          }
        }
        if ( posX+1 < input.length ) {
          input[posX+1][posY] += 1;
          if ( posY-1 >= 0 ) {
            input[posX+1][posY-1] += 1;
          }
          if ( posY+1 < input[posX+1].length ) {
            input[posX+1][posY+1] += 1;
          }
        }
        if ( posY-1 >= 0 ) {
          input[posX][posY-1] += 1;
        }
        if ( posY+1 < input[posX].length ) {
          input[posX][posY+1] += 1;
        }
      }
    });
    toFlash = getFlashes(input);
  }
  return input;
};
const resetFlashes = (input) => { return input.map(x => x.map(y => y > 9 ? 0 : y)); };

let totalFlashes = 0;
let part1 = [].concat(input);
for(let i = 0; i < 100; i++) {
  part1 = doStep(part1);
  if ( getFlashes(part1).length != 0 ) {
    part1 = doFlash(part1);
    totalFlashes += getFlashes(part1).length;
    part1 = resetFlashes(part1);
  }
}
console.log(totalFlashes);

let part2 = [].concat(input);
const allFlash = (input) => input.flat().every(x => x > 9);
let step = 0;
while(true) {
  step += 1;
  part2 = doStep(part2);
  if ( getFlashes(part2).length != 0 ) {
    part2 = doFlash(part2);
    if ( allFlash(part2) ) {
      break;
    }
    part2 = resetFlashes(part2);
  }
}
console.log(step);
