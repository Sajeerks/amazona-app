import React from 'react'
import data from './data';

function App() {
  console.log(data.products)
  return (

    <div   className="grid-container">  
    <header   className="row">
        <div>
            <a   className="brand" href="/">amazona</a>
        </div>
        <div>
            <a href="/cart">Cart</a>
            <a href="/signin">Sign in </a>
        </div>

    </header>
    <main>
    <div className="row center">
          {
            data.products.map((product) =>(


                   <div key= {product._id} className="card">
              <a href={`/product/${product._id}`}>
              <img className="meduim" src={product.image} alt= {product.name} />
              </a>
              <div className="card-body">
                  <a href="product.html"> <h2>{product.name}</h2></a>
              </div>
              <div className="rating">
                <span><i className="fa fa-star"></i></span>
                <span><i className="fa fa-star"></i></span>
                <span><i className="fa fa-star"></i></span>
                <span><i className="fa fa-star-half"></i></span>
                <span><i className="fa fa-star-o" aria-hidden="true"></i></span>
              </div>
              <div className="price">
              {product.price}
              </div>
          </div>
      
             
            ))
             
         

        
          }
   
    

    </div>
    </main>
         <footer    className="row center">
          <div>   All rights reserved</div>
         </footer>

     </div>

  );
}

export default App;
