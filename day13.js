let [dots, folds] = $0.innerText.trim().split('\n\n').map(x => x.split('\n'));
dots = dots.map(x => x.split(',').map(Number));
folds = folds.map(x => x.replace('fold along ','')).map(x => x.split('='));
let [maxX, maxY] = dots.reduce((x,y) => [Math.max(x[0],y[0]),Math.max(x[1],y[1])]);
let paper = Array.from({length: maxY+1}, () => Array.from({length: maxX+1}, () => 0));
dots.forEach(x => paper[x[1]][x[0]] += 1);
for(let i = 0; i < folds.length; i++) {
  let [direction, axis] = [folds[i][0], Number(folds[i][1])];
  let second, first;
  if ( direction == "y" ) {
    second = paper.slice(axis + 1).reverse();
    first = paper.slice(0, axis);
  } else {
    first = [].concat(paper).map(x => x.slice(0,axis));
    second = [].concat(paper).map(x => x.slice(axis+1).reverse());
  }
  paper = first.map((y,indY) => y.map((x,indX) => x += second[indY][indX] ));
  console.log('Fold', i);
  console.log(paper.flat().filter(x => x != 0).length);
}

let remainingX = paper[0].length;
paper = paper.map(x => x.map(y => y > 0 ? 'x' : '.'));
let letters = [];
for ( let i = 0; i < 8; i++ ) {
  letters.push([].concat(paper).map(x => x.slice(0, (remainingX/8)-1)));
  console.log([].concat(paper).map(x => x.slice(0, (remainingX/8)-1)));
  paper = paper.map(x => x.slice(remainingX/8));
}
