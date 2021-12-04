let [numbers, ...boards] = $0.innerText.trim().split('\n\n');
let checkBoard = board => {
  let bingo = false;
  let columns = board[0].length;
  board.forEach(line => {
    if (line.every(val => val == 'x')) {
      bingo = true;
    }
  });
  if (bingo) {
    return bingo;
  }
  for(let i = 0; i < columns; i++) {
    if (board.every(line => line[i] == 'x')) {
      bingo = true;
      break;
    }
  }
  return bingo;
}

let boards1 = boards.map(x => x.split('\n').map(y => y.trim().replace(/  /g, ' ').split(' ')));
let numbers1 = numbers.split(',');
for(let current of numbers1) {
  let found = false;
  boards1 = boards1.map(board => board.map(line => line.map(val => { return val == current ? 'x' : val})));
  for(let board of boards1) {
    if(!found && checkBoard(board)){
      console.log(board.flat().filter(x => x != 'x').reduce((x,y) => parseInt(x) + parseInt(y)) * parseInt(current));
      found = true;
      break;
    }
  }
  if (found) {
    break;
  }
}

// Part 2
let boards2 = boards.map(x => x.split('\n').map(y => y.trim().replace(/  /g, ' ').split(' ')));
let numbers2 = numbers.split(',');
for(let current of numbers2) {
  boards2 = boards2.map(board => board.map(line => line.map(val => { return val == current ? 'x' : val})));
  for(let board of boards2) {
    if(checkBoard(board)){
      let testboard = board.flat().filter(x => x != 'x');
      if(testboard.length != 0) {
        console.log(testboard.reduce((x,y) => parseInt(x) + parseInt(y)) * parseInt(current));
      }
      boards2 = boards2.filter(x => x != board);
    }
  }
}
