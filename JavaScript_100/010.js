const n = prompt("숫자를 입력하세요.")
let tree = '';

for(let i=1; i<=n; i++)
{
		let star= '';
		for(let k=1; k<=n-i; k++)
		{
				star = star + ' ';
		}
		for(let j=1; j<=i*2-1; j++)
		{
				star = star + '*';
		}
		tree = tree + star + '\n';
}

console.log(tree);
