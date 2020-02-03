function comp(array1, array2) {
	if( array1 === null || array2 === null || array1.length != array2.length) return false;
	array1 = array1.sort((a,b)=> a-b);
	array2 = array2.sort((a,b)=> a-b);
	return array1.every((el,i) => el*el === array2[i]);
}

function comp(array1, array2){
  return (array1 === null | array2 === null)? false : array1.map((x) => x**2).sort().join('') === array2.sort().join('');
}
const comp = (a, b) => !!a && !!b && a.map(e => e * e).sort().join`` === b.sort().join``;
