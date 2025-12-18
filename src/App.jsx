import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import bgImage from "./assets/body-images/image.png";
import "./App.css";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div
      className="app"
      style={{
        backgroundImage: `
          linear-gradient(
            rgba(255, 255, 255, 0.4),
            rgba(255, 255, 255, 0.4)
          ),
          url(${bgImage})
        `,
      }}
    >
      <Navbar
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        toggleCart={() => setCartOpen(!cartOpen)}
      />

      <Sidebar isOpen={sidebarOpen} />

      {cartOpen && <Cart />}

      <div className={`main-layout ${sidebarOpen ? "shift" : ""}`}>
        <main className="content"></main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
