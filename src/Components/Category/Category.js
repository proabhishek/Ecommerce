
import "./category.scss"

const Category = ({title, imageUrl}) => (
    
    <div className="category-container"
         style={{background: `url(${imageUrl})  no-repeat`}}> 
         <div className="category-body">
         <h2>{title}</h2>
         <p>Shop Now</p>
        </div>
     </div>
       
       

)

export default Category