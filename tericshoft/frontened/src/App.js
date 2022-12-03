

import Header from "./Component/Header/Header";
import Navbar from "./Component/Navbar/Navbar";
import Shoes from "./Component/Showcase";

function App() {
  // DO NOT CHANGE/MODIFY this app-structure here
  return (
    <div data-cy="shoe-app">
  
      <Navbar/>
      <Header/>
      <Shoes/>
    </div>
  );
}

export default App;
