import React from "react";
import Home from "./Home/Home";
import Security from "./Security/Security";
import Features from "./Feature/Feature";
import FAQSection from "./FaQs/Faqs";

function MainView() {
  return (
    <div className="bg-black text-white">
      {/* Navigation bar can go here if you have one */}
      <Home />
      
    
      {/* Footer can go here if needed */}
    </div>
  );
}

export default MainView;
