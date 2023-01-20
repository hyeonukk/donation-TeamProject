import { Fragment, useEffect, useState } from "react";

const App =()=> {

    /* 
    Ajax를 이용해서 외부데이터 가져오기
    1.promise = fetch()
    */
   //클릭해서 데이터가져오기
    const [raw, setRaw] = useState();
    const handleClick = () => {

    fetch("https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json")
    .then( response => response.json() )
    .then(data => setRaw(data))

}
    //화면이 mount이후 데이터 가져오기 - useEffect()
    const [data, setData] = useState();

    useEffect(()=> {
        fetch("https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json")
        .then(response => response.json() )
        .then(data => setData(data) )
    }, [])


    return (
        <Fragment>
            <button onClick={handleClick}>데이터가져오기</button>
            {
                raw=== undefined ? 
                <div>
                데이터준비중
                </div>
                :
                <div>
                    아이디: {raw.userId}<br/>
                    pw: {raw.userPw}<br/>
                    이름: {raw.userName}<br/>
                </div> 
            }
            <hr/>
            <h3>mount이후 데이터 가져오기 </h3>
            {
                data && <div>
                    아이디 : {data.userId}
                    pw : {data.userPw}
                    이름: {data.userName}
                </div>
            }

        </Fragment>
    )
}

export default App;