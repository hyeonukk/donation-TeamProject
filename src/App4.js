import axios from "axios"
import { Fragment, useState } from "react"

const App = () => {

    /* 
    p.356
    Axios는 비동기를 편하게 처리하는 라이브러리 입니다.(fetch로 사용해도 무방하다.)
    설치 npm add axios
    -Axios는 get(), post()함수를 제공하고, 사용했을때 리턴은 Promise
    */
   
    const [data,setData] = useState();

    // async await의 장점
    // 1. 코드가 간결해진다.
    // 2. 동기적인 호출방식을 보장해준다.
    // 3 .
    const handleClick = async () =>{

        let result = await axios.get("https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json")
        console.log(result.data);
        console.log(1);

        let result2 = await axios.get("https://raw.githubusercontent.com/yopy0817/data_example/master/by.json")
        console.log(result2.data);

        console.log(2);

        let result3 = await axios.get("https://raw.githubusercontent.com/yopy0817/data_example/master/hello.json")
        console.log(result3.data);

        console.log(3);

/*    
 //2) 순서를 보장받는 방법
    const handleClick = () =>{
        axios.get("https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json")
        .then(response => {
         console.log(response.data)
         console.log(1);
        
         axios.get("https://raw.githubusercontent.com/yopy0817/data_example/master/by.json")
         .then(response => {
            console.log(response.data)
            console.log(3);

            axios.get("https://raw.githubusercontent.com/yopy0817/data_example/master/by.json")
            .then(response => {
                console.log(response.data)
                console.log(5);
            }); 
        });
    });
 

    }
     */
   
/*     
   1) 순서를 보장하지 않는 방법.
    const handleClick = () => {
       axios.get("https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json")
       .then(response => {
        console.log(response.data)
        console.log(1);
       }); 
       console.log(2);

       axios.get("https://raw.githubusercontent.com/yopy0817/data_example/master/by.json")
       .then(response => {
        console.log(response.data)
        console.log(3);
        });

        console.log(4);
       axios.get("https://raw.githubusercontent.com/yopy0817/data_example/master/hello.json")
       .then(response => {
        console.log(response.data)
        console.log(5);
        });
        console.log(6);
    }
 */ 
}
    return (
        <Fragment>
            <h3>엑시오스로 데이터가져오기</h3>

            <button onClick={handleClick}>데이터가져오기</button>

            {
                data&& <div>
                    아이디: {data.userId}<br/>
                    pw : {data.userPw}<br/>
                    이름 : {data.userName}

                </div>
            }
        </Fragment>
    )
}


export default App;