let input = $0.innerText.trim().split('\n').map(x=>x.split(''));
let gamma = '';
let eps = '';
let positional = [];

input.forEach(el=>{el.forEach((iel,iind)=>{positional[iind]+=iel})});

positional.forEach(el=>{el.match(/0/g).length>el.match(/1/g).length?gamma+='0':gamma+='1'});
positional.forEach(el=>{el.match(/0/g).length>el.match(/1/g).length?eps+='1':eps+='0'});
console.log(parseInt(gamma, 2) * parseInt(eps, 2));

let oxy = [].concat(input);
let co2 = [].concat(input);
let mostCommon = (arr, pos) => { let common = ''; arr.forEach(el => common+=el[pos]); return common.match(/1/g).length >= common.match(/0/g).length ? '1' : '0';};
let leastCommon = (arr, pos) => { let common = ''; arr.forEach(el => common+=el[pos]); return common.match(/0/g).length <= common.match(/1/g).length ? '0' : '1';};

for(i=0;i<co2[0].length;i++){
  let common = leastCommon(co2, i);
  co2 = co2.filter(x => x[i] == common);
  if (co2.length == 1 ) {
    break;
  }
}

for(i=0;i<oxy[0].length;i++){
  let common = mostCommon(oxy, i);
  oxy = oxy.filter(x => x[i] == common);
  if ( oxy.length == 1){
    break;
  }
}

console.log(parseInt(co2.join('').replace(/,/g,''),2)*parseInt(oxy.join('').replace(/,/g,''),2));
