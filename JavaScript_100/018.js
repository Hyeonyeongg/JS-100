const score = prompt('세 과목의 점수를 입력하세요.').split(' ');
let sum = 0;

for(let i=0; i<3; i++) {
	sum += parseInt(score[i],10);
}

console.log(Math.floor(sum/3));
