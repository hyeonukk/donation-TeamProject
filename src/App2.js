import { Route, Routes } from "react-router-dom";

import Board from "./Component/Board";
import BoardContent from "./Component/BoardContent";

import Home from "./Component/Home";
import Info from "./Component/Info";
import MyPage from "./Component/MyPage";
import User from "./Component/User";
import Header from "./layout/Header";

function App() {

  /*
  라우터 적용방법

  1. index.js에서 브라우저라우터로 app을 감싸줍니다
  2. 각각의 컴포넌트를 만듭니다.
  3. Route를 이용해서 주소별로 컴포넌트 연결합니다.


  Link컴포넌트
  - a태그를 대체합니다.
  - to속성에 "라우터 주소" 적어서 이동하면 됩니다.

  쿼리스트링 ?키=값
  -useLocation()
  -useSearchParams()

  URL파라미터
  - 라우터를 설정 /경로/:값 (info:num) 값에 아무값적어도된다.
  - useParams() 값을 받는다.

  */

  return (
    <Routes>
    <Route element={<Header/>}>
      <Route path="/" element={<Home/>} />
      <Route path="/user" element={<User/>}/> {/* 쿼리스트링 */}
      <Route path="/info/:num" element={<Info/>}/> {/* URL파라미터 */}
    </Route>
    {/* 각각 다른화면이 보인다. */}

      {/* <Route path="/Board" element={<Board/>}/>
      <Route path="/board/:num" element={<BoardContent/>}/> */}
    
    {/* 중첩라우터 - 공통부분처리 (board에 가서 Outlet컴포넌트 표기) */}
    <Route path="/board" element={<Board/>}>
      <Route path=":num" element={<BoardContent/>}/>
    </Route>
    
    {/* navigate컴포넌트 */}
    <Route path="/mypage" element={<MyPage/>}/>
    
    
    </Routes>
  )
}

export default App;


