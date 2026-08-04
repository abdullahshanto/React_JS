
import hero_img from "../../assets/bg0.gif";
import { category } from "../../catagory";
import "./home.css";


function Home(){
  return (
    <div className="home">

     <div className="hero-img">
      <img src={hero_img} alt="Hero" />
     </div>

     <div className="category-section-wrap">
    
       <p className="category-subtitle">Explore our wide range of products</p>
       <div className="category-section">
         {
          category.map((item) => {
            return (
              <div className="category-card" key={item.id}>
                <div className="category-card-img">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="category-card-body">
                  <h3>{item.name}</h3>
                  <span className="shop-now">Shop Now &rarr;</span>
                </div>
              </div>
            );
          })
        }
       </div>
     </div>

    </div>
  )

}


export default Home;