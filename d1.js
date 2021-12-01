let input = $0.innerText.trim().split('\n').map(x=>parseInt(x));
let part1 = input.filter((el, index, arr) => { if (index==0) { return false; } else { return el > arr[index-1]; }});
console.log(part1);
let part2 = input.map((val,ind,arr)=>{if(arr.length>ind+2){return val+arr[ind+1]+arr[ind+2];} else { return -1;}});
part2 = part2.filter((el, index, arr) => { if (index==0) { return false; } else { return el > arr[index-1]; }});
console.log(part2);
