let d1 = 0, h1 = 0, d2 = 0, h2 = 0, a2 = 0;

let input = $0.innerText.trim().split('\n').map(x=>x.split(' ')).map(x=>[x[0], parseInt(x[1])]);

input.forEach(el=>{el[0][0]=="f"?h1+=el[1]:el[0][0]=="d"?d1+=el[1]:d1-=el[1]});
console.log(d1*h1);

let doFwd = (val) => { h2+=val; d2+=(a2*val); };
input.forEach(el=>{el[0][0]=="f"?doFwd(el[1]):el[0][0]=="d"?a2+=el[1]:a2-=el[1]});
console.log(d2*h2);
