import './App.css';
import Header from './components/Header';
import NavBar from './components/Nav-bar';
import { useState, useEffect, useContext } from "react";
import FrontpageList from './components/Fontpage-list';
import { getCategories } from './utils/api'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReviewCard from './components/Review-card';
import RequireLogin from './components/Require-login';
import Logout from "./components/Logout";
import { UserContext } from './contexts/User-context';
import Reviews from './components/Reviews';

function App() {
  const { user } = useContext(UserContext);
  const defaultUser = user.username
  const [navCategories, setNavCategories] = useState([])
  useEffect(() => {
    getCategories().then((categoriesData) => {
        setNavCategories(categoriesData)
    })
  }, [])
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar navCategories={navCategories} />
      <Header />
      <RequireLogin>
        <Routes>
          <Route path="/" element={<FrontpageList navCategories={navCategories} />} />
          <Route path="/reviews" element={<Reviews navCategories={navCategories} />} />
          <Route path="/reviews/:category/:review_id" element={<ReviewCard />} />
        </Routes> 
        <p>Logged in as: {defaultUser}</p>
        <Logout />
      </RequireLogin>
    </div>
    </BrowserRouter>
  );
}

export default App;
