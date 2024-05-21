
    
    const dateElement = document.querySelector(".date");
    const timeElement = document.querySelector(".time");

    //modify 수정하다
    //전달받은 매개변수의 값이 10보다 작은 한자리 수라면 앞에 0을 붙여서 반환해줌
    const modifyNumber = (number)=> {
        //삼항 연산자 사용 조건문, ?(물음표) 참 : 거짓 
        //return 반환해준다. persInt어떤 것이든 숫자로 변환해서 숫자가 10보다 작다면 앞에 0을 붙여준다.  
    return parseInt(number) < 10 ? "0" +  number : number;
    }

    // 함수 안에 함수 콜백 함수
    //이렇게 함수 안에 함수를 넣는 이유는 한번에 선언하고 편하게 꺼내 쓰기 위해서
    const getNowDate = ()=> {
    const NowDate = new Date(); 
     // 요일
    const week =['월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일'];
    // 객체함수

    // 월(몇 월 인지)
    //10 미만 숫자에 숫자를 수정하는 modify함수를 호출해서 0을 추가함. 
    let month = modifyNumber(NowDate.getMonth()+1);
    // 시간의 특정 지점
    let date = modifyNumber(NowDate.getDate());
    //주어진 날짜의 현지 시간 기준 요일을 반환
    let day = NowDate.getDay();
    //월, 일, 요일

    // 월, 일, 요일 호출
    setNowDate(month, date, week[day]);
} 
    // getNowDate 함수 끝

    const setNowDate = (month, date, day)=> {
        dateElement.textContent = `${month}월 ${date}일 ${day}`
    };

    const getNowTime = ()=> {
        const NowDate = new Date();
        let hour = modifyNumber(NowDate.getHours());
        let minute = modifyNumber(NowDate.getMinutes());
        setNowTime(hour, minute);
    }

    const setNowTime= (hour, minute) => {
        timeElement.textContent = `${hour}: ${minute}`;
    }

    getNowDate();
    getNowTime();
    setInterval(getNowTime, 1000);

    // 자바스크립트에서 현재 날짜 및 시간을 구하기 위해서는 Date 객체를 사용하면 된다.
    //Date 객체는 1970년 1월 1일 UTC(협정 세계시) 자정과의 시간 차이를 밀리초로 나타내는 정수 값을 담는다.