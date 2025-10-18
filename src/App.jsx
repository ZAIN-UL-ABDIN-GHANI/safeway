import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./views/MainView/Componenets/Footer";
import routes from "./routes";
import Header from "./views/MainView/Componenets/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-gradient-to-r from-fuchsia-500 via-pink-500 to-rose-500
">
        {/* Header always visible */}
        <Header/>

        {/* Main content */}
        <main className="flex-grow mt-24">
          <Routes>
            {routes.map((route) => (
              <Route key={route.path} path={route.path} element={<route.component />} />
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
