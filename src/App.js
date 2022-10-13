
import Categories from "./Components/Category/Categories";
import {Routes, Route} from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";

function App() {
    
  

  return (
    <div className="App">

          <Navigation />
         <Routes>
               <Route path="/" element={ <Categories />} />
               <Route path="/test" element={ <Sample />} />
         </Routes>
          
        
    </div>
  );
}

const Sample = () => {
    return (
        <div>
            <h1>Sample</h1>
        </div>
    ) 
}

export default App;

