//절차를 만들 때의 원리
//1. 각 프로그램의 절차의 개수는 정해져 있어야 한다. (몇 명이 참가할건지? 같은)
//2. 각 절차는 항상 같은 내용이어야 한다. 
//3. 모든 가능성을 고려해야한다. (맞을 가능성, 아닐 가능성, 그 외에도 아니라 오류가 날 가능성 고려)
//4. 예시는 절차를 검증하는데에 사용된다.

// 1. prompt(사용자가 텍스트를 입력할 수 있도록 안내하는 선택적 메세지를 갖고 있는 대화 상자를 띄웁니다.)로 몇 명이 참가했는지 절차의 개수를 정한다.
//1-2. prompt로 입력한 후 console.log 로 몇 명이 참가했는지 알 수 있게 숫자를 출력한다.
//1-3. 그러나 console.log로만 출력하고 typeof로 자료형이 숫자인지 검증하면 string문자열이 나와 숫자형으로 바꿔줘야 한다.
//1-4. 선언한 변수 안에 새로운 변수를 만들어서 그 변수 안에 대입 연산자로 대입 한 후에 Number()함수로 숫자로 바꿔주면 된다.
//1-5. 바꿔주면 문자열이 숫자로 잘 변환이 되었는지 typeof로 자료형을 출력하여 검증해본다. 
// 2. 몇 명이 참가할지는 전달했으니 첫 번째 사람이 어떤 단어를 말할지 입력하고 출력하게 만든다.
// 2-1. 출력하게 만드려면 먼저 input태그에 입력받기위해 input태그를 선택하여 입력창을 js로 가져와야 한다. 그것을 선택(selector)이라고 한다.
//태그를 선택하여 입력창을 가지고 왔다면 이벤트 리스너를 통해 입력을 하면 이벤트가 발생하고 버튼을 클릭하면 이벤트가 발생하게 만들어야 한다.


//규칙에는 s를 붙였다.
// 입력창 몇 명이 참가했는지
const number = prompt ('몇 명이 참가하나요?'); //prompt 입력 창 
// console.log ('number', number); //몇 명이 참가했는지 N0number를 출력 
// const realNumber = Number(number);
// console.log(typeof realNumber); //typeof(연산자는 피연산자의 평가 전 자료형을 나타내는 문자열을 반환합니다.) 자료형이 무엇인지 출력해줌 
// //다른 방법으로는 const number = Number(prompt('몇 명이 참가하나요?)); 로 간편하게 할 수도 있다. persint도 문자열 숫자 변환 가능

// button을 선언하고 화살표 함수를 통해 console에 출력하게 한다.

// input
const inputs = document.querySelector("#input");
// BUTTON을 선택하고 //버튼
const buttons = document.querySelector(".btn");
// div>span
const words = document.querySelector('#word');
const orders = document.querySelector('#order');
let word;  //내가 처음 제시한 제시어
let newword;  //현재 제시한 단어


const OnClickButton = () => {
    if (!word) { //제시어가 비어있는가?  
        //비어있다
        word = newword;
        words.textContent = word; //입력한 단어를 화면에 표시
        const order = Number(orders.textContent);
        if (order + 1 < number) {
            orders.textContent = 1;
        } else {
            orders.textContent = order + 1;
        }
        } else {
        //비어있지 않다
        if (word[word.length -1] === newword[0]) {//입력한 단어가 올바른가?
            //올바르다
            word = newword; //현재 단어를 제시어에 저장
            words.textContent = word;
            const order = Number(orders.textContent);
            if (order + 1 > number) {
                orders.textContent = 1;
            } else {
                orders.textContent = order +1;
            }
        }else {
            //올바르지 않다
            alert('올바르지 않은 단어 출력');
        }
    }
};

// 매개변수가 event인 oninput함수  
const onInput = (event) => {
    newword = event.target.value;   //입력하는 단어를 현재 단어로
    //new target , object  value (Object.values() 메소드는 전달된 파라미터 객체가 가지는 (열거 가능한) 속성의 값들로 이루어진 배열을 리턴합니다.)
}

inputs.addEventListener('input', onInput);
buttons.addEventListener('click', OnClickButton);
// console.log(buttons);
// //제시어를 말하고 입력해서 console에 보이게 하기