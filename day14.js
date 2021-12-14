let [tmpl, insertions] = $0.innerText.trim().split('\n\n');
let slices = Array.from({length: tmpl.length - 1}, (v, ind) => tmpl.slice(ind, ind+2));
insertions = Object.fromEntries(insertions.split('\n').map(x => x.split(' -> ')));
for( let i = 0; i < 10; i++ ) {
  let tmplLength = tmpl.length;
  let slices = [];
  for( let j = 0; j < tmplLength - 1; j++ ) {
    slices.push(tmpl.slice(j,j+2));
  }
  tmpl = '';
  for( let j = 0; j < slices.length; j++ ) {
    tmpl += slices[j][0] + insertions[slices[j]];
  }
  tmpl += slices[slices.length-1][1];
}
let letters = {};
tmpl.split('').forEach(x => {
  if( !letters.hasOwnProperty(x) ) {
    letters[x] = 1;
  } else {
    letters[x] += 1;
  }
});
console.log(Math.max(...Object.values(letters)) - Math.min(...Object.values(letters)));

let insertions2 = Object.assign({}, insertions);
insertions2 = Object.fromEntries(Object.entries(insertions).map((el) => [el[0], [el[0][0] + el[1], el[1] + el[0][1]]]));
let counts = {};
slices.forEach(x => { counts[x] = (counts[x] || 0) + 1; });
for( let i = 0; i < 40; i++ ) {
  let temp = {};
  Object.entries(insertions2).forEach(([k, v]) => {
    let count = counts[k] || 0;
    temp[v[0]] = (temp[v[0]] || 0) + count;
    temp[v[1]] = (temp[v[1]] || 0) + count;
    counts[k] = 0;
  });
  Object.entries(temp).forEach(([x,y]) => {
    counts[x] = (counts[x] || 0) + y;
  });
}
let elCount = {};
Object.entries(counts).forEach(([els, occ]) => {
  elCount[els[0]] = (elCount[els[0]] || 0) + occ;
  elCount[els[1]] = (elCount[els[1]] || 0) + occ;
});
Object.entries(elCount).forEach(([els, occ]) => {
  elCount[els] = Math.round((occ || 0) / 2);
});

console.log(Math.max(...Object.values(elCount)) - Math.min(...Object.values(elCount)));
