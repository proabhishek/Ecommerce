
import Categories from "./Components/Category/Categories";
import {Routes, Route} from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import NoMatchComponent from "./Components/NoMatchComponet/NoMatchComponent";
import Hats from "./Components/Products/Hats";
import Jackets from "./Components/Products/Jackets";
// nav/categories

function App() {
  return (
    <div className="App">
            
           <Navigation />
           
           <Routes>
              <Route path="/" element={<Categories />} />
             
             

             {/* <Route path="/nav" element={<Navigation />} > 
                <Route path="categories" element={ <Categories />} />    
                <Route path="categories/hats" element={<Hats />} />
                <Route path="categories/jackets" element={<Jackets />} />
             </Route> */}

             
                
 
               <Route path="*" element={ <NoMatchComponent />} />
         </Routes>
          
        
    </div>
  );
}


export default App;





