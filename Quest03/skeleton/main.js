/**
 * * (Quest 03-1) 초보 프로그래머의 영원한 친구, 별찍기 프로그램입니다.
  * [이 그림](jsStars.png)과 같이, 입력한 숫자만큼 삼각형 모양으로 콘솔에 별을 그리는 퀘스트 입니다.
    * 줄 수를 입력받고 그 줄 수만큼 별을 그리면 됩니다. 위의 그림은 5를 입력받았을 때의 결과입니다.
  * `if`와 `for`와 `function`을 다양하게 써서 프로그래밍 하면 더 좋은 코드가 나올 수 있을까요?
  * 입력은 `prompt()` 함수를 통해 받을 수 있습니다.
  * 출력은 `console.log()` 함수를 통해 할 수 있습니다.
 */
const starLine = window.prompt("몇 줄의 별을 표시할까요?","숫자를 입력하세요 예) 3줄 : 3입력");
console.log(`${starLine} : starLine`);
const x = '*'
const blank = ' '
for(let i = 1; i <= starLine; i+=2) {
console.log(blank.repeat(starLine-i/2)+x.repeat(i))
}





