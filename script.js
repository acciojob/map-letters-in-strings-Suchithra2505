//your JS code here. If required.
function mapLetters(str){
	let ans={};
	for(let i=0;i<str.length;i++){
		const l = str[i];
		if(ans["l"])
			ans[l].push(i);
		else
			ans[l]=[i];
	}
	//console.log(ans);
	return ans;
}

//const text = prompt("Enter text:");
//mapletters(text);
console.log(mapLetters("dodo"));