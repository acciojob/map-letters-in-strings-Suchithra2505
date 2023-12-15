//your JS code here. If required.
function mapletters(str){
	let ans={};
	for(let i=0;i<str.length;i++){
		const l = str[i];
		if(ans[l])
			ans[l].push(i);
		else
			ans[l]=[i];
	}
	console.log(ans);
}

const text = prompt("Enter text:");
mapletters(text);