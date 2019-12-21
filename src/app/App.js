import React from 'react';
import HeaderComponent from "./Components/HeaderComponent/HeaderComponent.jsx";
import CategoryComponent from "./Components/CategoryComponent/CategoryComponent";
import FooterComponent from "./Components/FooterComponent/FooterComponent";

const App = () => {
    return (
        <div>
          <HeaderComponent/>
          <CategoryComponent />
          <FooterComponent />
        </div>
    );
}

export default App;
