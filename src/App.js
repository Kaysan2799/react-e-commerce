import Navbar from "./Asserts/Pages/Navbar";
import HeroSection from "./Asserts/Pages/Home/HeroSection";
import Categories from "./Asserts/Pages/Home/Categories";
import Services from "./Asserts/Pages/Home/Services";
import MYFooter from './Asserts/Pages/MYFooter';
// import Display from './Asserts/Pages/Home/Display';
import AboutUs from './Asserts/Pages/AboutUs';
import SignUpPage from './Asserts/Pages/SignUpPage';
import Admin from './Asserts/Pages/AdminPage';
import Login from './Asserts/Pages/Login';
// import Cards from "./Asserts/Pages/Cards";
import { Route, Routes } from "react-router-dom";
import Display from "./Asserts/Pages/Home/Display";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<>
          <Categories />
          <HeroSection />
          <Services />
          <Display />
          {/* <Display /> */}
        </>}
        />
        <Route exact path="about" element={<>
          {/* <Cards/> */}
          <AboutUs />
        </>}
        />

        <Route exact path="admin" element={<>
          <HeroSection />
          <Admin />
        </>}
        />

        <Route exact path="/login" element={<>
          <Login />
        </>}
        />

        <Route exact path="signup" element={<>
          <SignUpPage />
        </>}
        />
      </Routes>
      <MYFooter />
    </>

  );
}

export default App;
