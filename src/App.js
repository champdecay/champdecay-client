import "./Services/Firebase";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Blog from "./Pages/Blog";
import Post from "./Pages/Post";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="bg-white mb-96">
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/about" element={<Home />} />
          <Route path="/blog/:slug" element={<Post />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}


function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}