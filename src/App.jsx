import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Footer from "./views/MainView/Componenets/Footer";
import routes from "./routes";
import Header from "./views/MainView/Componenets/Header";

// ScrollToTop component (inside App.jsx)
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // smooth scrolling effect
    });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop /> {/* <-- Scrolls to top on route change */}
      <div className="bg-gradient-to-r from-fuchsia-500 via-pink-500 to-rose-500">
        {/* Header always visible */}
        <Header />

        {/* Main content */}
        <main className="flex-grow mt-24">
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={<route.component />}
              />
            ))}
          </Routes>
        </main>

        {/* Footer always visible */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
