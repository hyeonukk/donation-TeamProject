import { Link, NavLink, Outlet } from "react-router-dom";

const Board = () => {

    const myStyle = {color:"red", backgroundColo:"yellow"}

    return (
        <div>
            <h3>글 목록페이지</h3>
{/* 
            <ul>
                <li><Link to="/board/1">글1</Link></li>
                <li><Link to="/board/2">글2</Link></li>
                <li><Link to="/board/3">글3</Link></li> 

            </ul> */}
            {/* navlink는 그냥 link랑 같은데 스타일속성을 줄 수있다
                Navlink는 {isActive: boolean}을 함수의 매개변수로 사용할 수 있게 전달해준다.
                반드시 {isActive} 변수로 구조분해 할당 해야한다.
            */}

            <li><NavLink to ="/board/1" style={({isActive}) => isActive ? myStyle : null}>글1</NavLink></li>
            <li><NavLink to ="/board/2" style={({isActive}) => isActive ? myStyle : null}>글2</NavLink></li>
            <li><NavLink to ="/board/3" style={({isActive}) => isActive ? myStyle : null}>글3</NavLink></li>

            {/* 하위 라우터가 표기 됩니다 */}
            <Outlet/>


        </div>
    )
}

export default Board;