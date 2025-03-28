import React, { Suspense } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";


// Layout Components
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import SecondFooter from "./components/layout/SecondFooter";

// Public Pages
import Home from "./components/layout/Home";
import RegisterPage from "./components/layout/RegisterPage";
import LoginSignupSection from "./components/layout/LoginSignupSection";
import Forgetpassword from "./components/layout/Forgetpassword";
import AboutUs from "./components/layout/AboutUs";
import Blogs from "./components/layout/Blogs";
import Providers from "./components/layout/Providers";
import Sport from "./components/layout/Sport";

// Dashboard Pages
import AHeader from "./components/layout/AfterloginHeader/AHeader";
import Afooter from "./components/layout/AfterloginHeader/Afooter";
import Loginheaders from "./components/layout/Loginheaders";
import Circket from "./components/layout/AfterloginHeader/Allgames/Circket";
import Circketflight from "./components/layout/AfterloginHeader/Allgames/Circketflight";
import Indfiancasino from "./components/layout/AfterloginHeader/Allgames/Indfiancasino";
import Matka from "./components/layout/AfterloginHeader/Allgames/Matka";
import Pinned from "./components/layout/AfterloginHeader/Allgames/Pinned";
import Market from "./components/layout/AfterloginHeader/Allgames/Market";
import Openbets from "./components/layout/AfterloginHeader/Account/Openbets";
import Deposit from "./components/layout/AfterloginHeader/Deposit";
import Chat from "./components/layout/AfterloginHeader/Chat";
import Quiz from "./components/layout/AfterloginHeader/Allgames/Quiz";
import Gameson from "./components/layout/AfterloginHeader/Gameson";
import Changepassword from "./components/layout/AfterloginHeader/Account/Changepassword";

function App() {
  return (
    <Router>
      <PageWrapper />
    </Router>
  );
}

function PageWrapper() {
  const location = useLocation();

  const isDashboardPath =
    location.pathname.includes("/dashboard") ||
    location.pathname.includes("/circket") ||
    location.pathname.includes("/cricket-fight") ||
    location.pathname.includes("/indian-casino") ||
    location.pathname.includes("/my-market") ||
    location.pathname.includes("/open-bets") ||
    location.pathname.includes("/profit-loss") ||
    location.pathname.includes("/deposit") ||
    location.pathname.includes("/chats") ||
    location.pathname.includes("/matka-market") ||
    location.pathname.includes("/quiz") ||
    location.pathname.includes("/match-details") ||
    location.pathname.includes("/changepassword") ||
    location.pathname.includes("/favourites");

  return (
    <>
      {isDashboardPath ? <AHeader /> : <Header />}

      <Suspense fallback={<div>Loading...</div>}>
        <Content />
      </Suspense>

      {isDashboardPath ? (
        <Afooter />
      ) : location.pathname === "/" ? (
        <Footer />
      ) : (
        <SecondFooter />
      )}
    </>
  );
}

function Content() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginSignupSection />} />
      <Route path="/forgotpassword" element={<Forgetpassword />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/providers" element={<Providers />} />
      <Route path="/sports" element={<Sport />} />

      {/* Dashboard Routes */}
      <Route path="/dashboard" element={<Loginheaders />} />
      <Route path="/circket" element={<Circket />} />
      <Route path="/cricket-fight" element={<Circketflight />} />
      <Route path="/indian-casino" element={<Indfiancasino />} />
      <Route path="/matka-market" element={<Matka />} />
      <Route path="/favourites" element={<Pinned />} />
      <Route path="/my-market" element={<Market />} />
      <Route path="/open-bets" element={<Openbets />} />
      <Route path="/deposit" element={<Deposit />} />
      <Route path="/chats" element={<Chat />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/match-details" element={<Gameson />} />
      <Route path="/changepassword" element={<Changepassword />} />
    </Routes>
  );
}

export default App;
