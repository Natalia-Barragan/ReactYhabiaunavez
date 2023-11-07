import { BrowserRouter, Routes, Route} from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar"; 
import CartWidget from "./components/CartWidget";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Login from "./components/Login";
import NewUser from "./components/NewUser";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>

          <Route path="/" element={<ItemListContainer/>}></Route>
          <Route path="/category/categoryid" element={<ItemListContainer/>}></Route>
          <Route path="/category/:id" element={<ItemListContainer/>}></Route>
          <Route path="/item/:id" element={<ItemDetailContainer/>}></Route>
          <Route path="/cartwidget" element={<CartWidget/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/newuser" element={<NewUser/>}></Route>
        </Routes>
      </BrowserRouter>
            
    </>
  )
};


export default App;
