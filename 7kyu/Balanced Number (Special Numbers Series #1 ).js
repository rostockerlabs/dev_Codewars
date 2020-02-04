function Balanced(number){
	arr = String(number).split('');
	if( arr.length === 1 | arr.length === 2 ) return 'Balanced';
	isBalanced = (leftarr, rightarr) =>{
		return leftarr.reduce((total,item)=>total+parseInt(item),0) === rightarr.reduce((total,item)=>total+parseInt(item),0) ? "Balanced" : "Not Balanced";
	}
	callOdd = (len) =>{
		let leftarr = arr.slice(0, Math.floor(len / 2));
		let rightarr = arr.slice(Math.floor(len / 2) + 1);
		return isBalanced(leftarr, rightarr);
		
	};
	callEven = (len) =>{
		let leftarr = arr.slice(0, (len / 2 -1) );
		let rightarr = arr.slice((len / 2 + 1) );
		return isBalanced(leftarr, rightarr);
	};
	return arr.length > 2 && arr.length % 2 ==1 ? callOdd(arr.length) : callEven(arr.length);

}

// Another Way
// 
function balancedNum(number) {

  let str = `${number}`
  ,   len = (str.length - (str.length % 2 ? -1 : -2)) / 2
  ,   sum = digits => [ ...digits ].reduce((a, b) => a + +b, 0);

  return sum(str.slice(0, len)) === sum(str.slice(-len)) 
  ? 'Balanced' 
  : 'Not Balanced';

}