let input = $0.innerText.trim().split(',');
//Part1
let part1 = [].concat(input);
for(var i = 0; i < 80; i++) {
  part1.forEach((x,ind,arr) => { if(x==0) { arr.push(8); arr[ind] = 6; } else { arr[ind]--; }});
}
console.log(input.length);

//Part2
let part2 = [].concat(input);
let lantern = Array(9).fill(0);
part2.forEach(x => lantern[x]++);
Array.from({length: 256}).forEach(i => {
  lantern = [
    lantern[1],lantern[2],lantern[3],lantern[4],lantern[5],lantern[6],lantern[7] + lantern[0], lantern[8], lantern[0]]; });
console.log(lantern.reduce((a,b)=>a+b))
