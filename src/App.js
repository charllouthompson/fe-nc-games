import './App.css';
import Header from './components/Header';
import NavBar from './components/Nav-bar';
import { useState, useEffect } from "react";
import FrontpageList from './components/Fontpage-list';
import { getCategories } from './utils/api'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReviewsByCategory from './components/Reviews-by-category';
import AllReviews from './components/All-reviews';
import ReviewCard from './components/Review-card'

function App() {
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
      <Routes>
        <Route path="/" element={<FrontpageList navCategories={navCategories} />} />
        <Route path="/reviews/all" element={<AllReviews />} />
        <Route path="/reviews/:category" element={<ReviewsByCategory />} />
        <Route path="/reviews/:category/:review_id" element={<ReviewCard />} />
        




      </Routes>   
    </div>
    </BrowserRouter>
  );
}

export default App;
