const searchInput = document.querySelector(".search-input");

//result 결과
const SearchResult  = () => {
    //searchWord라는 변수를 선언하고 searchInput요소에 입력된 값을 할당해준다.
    let searchWord = searchInput.value;
    // 다른페이지로 리다이렉트(특정주소로 이동할 수 있다.)
    window.location.href = `https://www.google.com/search?q=%EA%B3%A0%EC%96%91%EC%9D%B4&sca_esv=579707205&tbm=isch&source=lnms&sa=X&ved=2ahUKEwihw_arw66CAxUoa_UHHfFHCtcQ_AUoAXoECAIQAw&biw=1920&bih=931&dpr=1${searchWord}`;
    searchWord = "";
}
    const enterKey = (event) => {
        if (event.code === "Enter") {
            SearchResult ();
        }
    };
    searchInput.addEventListener('keypress',(event) => {
        enterKey(event);
    });