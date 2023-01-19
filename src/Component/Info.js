import { useParams } from "react-router-dom";

const Info = () =>{
     
    //예시 데이터
    const data = {
        1:{name:"홍길동", subject:"리액트라우터" },
        2:{name:"이순신", subject:"리액트props"},
        3:{name:"coding404", subject:"리액트state"}
}


    //useParams()
    let param = useParams();
    // console.log(param) URL주소에 값을 키로 받아준다.
    // console.log(param.num) 
   const {name, subject} = data[param.num]

    return (
        <div>
            <h3>Info페이지..</h3>
            {name}님의 데이터{subject}
        </div>
    )
}

export default Info;