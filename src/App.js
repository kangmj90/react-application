/* eslint-disable */

import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    let posts = 'React 리액트 기초부터 쇼핑몰 프로젝트까지!';

    function func() {
        return 100
    }

    // a = 10, b = 100 으로 최초 설정
    // a 는 실제 저장할 데이터, b 는 a 를 저장할 데이터를 변경시킬 함수
    // => destructuring 문법 : array 안에 있는 데이터들을 변수로 쉽게 저장하고 싶으면 쓰는 신문법
    var [a, b] = [10, 100]

    /**
     * state 란
     * 변수 대신 쓰는 데이터 저장공간
     * useState() 를 이용하여 만들며 문자, 숫자, array, object 모두 가능
     *
     * state에 데이터 저장해서 쓰는 이유
     * => 변수가 변경될 때 자동으로 관련된 HTML을 재렌더링되게 만들고 싶을 때
     * 리액트는 state가 수정이 일어나면 state가 포함된 HTML을 자동으로 재렌더링 해준다

     * state 변경 함수를 이용해야 state 가 변경된다
     * 변경함수는 state 를 아예 대체하는 함수 (갈아치운다)
     */
    let [title, setTitle] = useState('제목')
    let [titles, setTitles] = useState(['제목1', '제목2'])
    let [number, setNumber] = useState(0)
    let [modal, setModal] = useState(false)
    let [titleNumber, setTitleNumber] = useState(0)

    // for 반복문을 사용하고 싶다면
    function forUI() {
        var arr = []
        for (var i = 0; i < 3; i++) {
            arr.push(<div>반복된 UI</div>)
        }
        return arr
    }

    function modify() {
        /**
         * state 직접 변경 안됨. ex) titles[0] = '글제목변경'
         * deep copy : 값 공유가 아닌 서로 독립적인 값을 가지는 복사
         * ... : spread 연산자. es6 문법. array나 object 자료형 왼쪽에 붙인다. => 중괄호나 대괄호를 벗겨주세요
         */
        var newTitles = [...titles]
        newTitles[0] = '제목1 변경'
        setTitles(newTitles)
    }
    /**
     * 이것은 JSX
     * 자바스크립트 파일 안에서 HTML을 직관적으로 작성하기 위해 도와주는 리액트 기본 내장 문법
     * JSX는 자바스크립트이기 때문에 자바스크립트에서 사용하는 예약어인 키워드를 사용할 수 없다. ex) class
     */

    /**
     * 데이터 바인딩 : 자바스크립트 데이터를 HTML에 넣는 것
     * 리액트는 이걸 매우 쉽게 구현
     */
    return (
    <div className="App">
        {/* 모든 것은 중괄호로 다 작업한다 */}
        {/* style, class 등 작성 시 object 타입으로 camelCase 사용하여 작성 */}
        <div className="black-nav">
            <div style={ {color: 'blue', fontSize: '30px'} }>
                코딩 애플 강의
            </div>
        </div>
        {/* modify() 이렇게 넣으면 함수가 바로 실행. 누를 때 실행되려면 괄호빼고 */}
        <button onClick={modify}>버튼</button>
        <img src={logo}/>
        <h4>{posts}</h4>
        <h4>{func()}</h4>

        <div className="list">
            <h3>{ title }</h3>
            <p>2월 17일 발행</p>
            <hr/>
        </div>
        <div className="list">
            <h3>{ titles[0] } <span onClick={() => {setNumber(number + 1)}}>👍</span> {number}  </h3>
            <p>2월 17일 발행</p>
            <hr/>
        </div>
        <div className="list">
            <h3 onClick={() => { setModal(!modal) }}>{ titles[1] }</h3>
            <p>2월 17일 발행</p>
            <hr/>
        </div>

        {
            // JSX 는 중괄호 내에 for 문 사용 안됨 => map 함수 사용
            titles.map(function (t, i) {
                return (
                    <div className="list">
                        <h3 onClick={() => {setTitleNumber(i)}}>반복문 { t }</h3>
                        <p>2월 17일 발행</p>
                        <hr/>
                    </div>
                )
            })
        }

        { forUI() }

        {/*<button onClick={() => {setTitleNumber(1)}}>제목2 버튼</button>*/}

        {/* Component 문법 */}
        {/*<Modal />*/}
        {
            modal === true ? <Modal titles={titles} titleNumber={titleNumber} /> : null
        }

    </div>
  );

    // return() 안엔 태그 하나만.
    // 이거 안된당
    // return (
    //     <div></div>
    //     <div></div>
    // )
    // 이렇게 해야됨
    // return (
    //     <div>
    //         <div></div>
    //         <div></div>
    //     </div>
    // )
    // 의미없는 div 쓰기 싫으면 이렇게 하면 된다. fragments 문법
    // return (
    //     <>
    //         <div></div>
    //         <div></div>
    //     </>
    // )
}

// component 명은 대문자로 시작
function Modal(props) {

    let [titles, setTitles] = useState(props.titles)
    let [titleNumber, setTitleNumber] = useState(props.titleNumber)
alert(titleNumber)
    /**
     * App 은 부모 컴포넌트, Modal 은 자식 컴포넌트
     * App 에서 선언한 state 는 props 사용하여 전달받지 않는 한 못 쓴다 ...
     */
    return (
        <div className="modal">
            <h2>{ titles[titleNumber] }</h2>
            <p>날짜</p>
            <p>상세내용</p>
        </div>
    )
}

export default App;
