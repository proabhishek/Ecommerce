
import "./categories.scss";

function App() {
    
  const categories = [
       
    {
      title: "Hats",
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    },

    {
      title: "Jackets",
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    },

    {
      title: "Sneakers",
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    },

    {
      title: "Womens",
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    },

    {
      title: "Mens",
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    }

  ]






  return (
    <div className="App">
         
           <div className="categories">
              
           {categories.map( ({title, imageUrl})=>(
            <div className="category-container"
             style={{backgroundImage: `url(${imageUrl})`}}
            > 
                    <div className="category-body">
                          <h2>{title}</h2>
                          <p>Shop Now</p>
                     </div>
                </div>
           ))
 }



                

           </div>
        
    </div>
  );
}

export default App;

