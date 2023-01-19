import { Navigate } from "react-router-dom";

const MyPage = () =>{

    /* 
    첫번째 렌더링 과정에서는 사용할 수 없음
    let nav = useNavigate();
    let loginYN = false; //로그인여부
    if(loginYN === false) {
        nav('/');

    }
     */

    //replace = {true}를 설정하면 기록을 남기지 않는다.
    let loginYN = false;
    if(loginYN===false) {
        return <Navigate to ="/" replace={true}/>
    }

    return (
        <div>
            권한 있는 사람만 접근이 가능함
        </div>
    )
}

export default MyPage;