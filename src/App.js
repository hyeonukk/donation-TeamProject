import { Route, Routes } from "react-router-dom";
import NewsHome from "./Component/NewsHome";
import Header from "./layout/Header";

const App = () =>{

    return (
        
    <Routes>
        <Route element={<Header/>}>
            <Route path="/" element={<NewsHome/>}/>
            <Route path="/:category" element={<NewsHome/>}/> {/* 카테고리로 들어가도 Newshome 랜더링 */}
        </Route>
    </Routes>
    
    )
}

export default App;