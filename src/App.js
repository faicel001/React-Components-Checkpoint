import './App.css';
import Adr from "./Component/Profile/Address.js";
import Nam from "./Component/Profile/FullName.js";
import Pro from "./Component/Profile/ProfilePhoto.js";
function App() {
  return (
    <div className="App">
<div>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
  <div id="container">	
    <div className="product-details">
      <h1>web developer</h1>
      <span className="hint-star star">
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star-o" aria-hidden="true" />
      </span>
      <p className="information">" {<Nam/>}, the most famous web developer ,leaving in {<Adr/>}"</p>
      <div className="control">
        <button className="btn">
          <span className="price">50716754</span>
          <span className="shopping-cart"><i className="fa fa-shopping-cart" aria-hidden="true" /></span>
          <span className="buy">call?</span>
        </button>
      </div>
    </div>
    <div className="product-image">
    <Pro/>
      <div className="info">
        <h2> Description</h2>
        <ul>
          <li><strong>Nom : </strong>Bnedawed</li>
          <li><strong>Prenom : </strong>Faycel</li>
          <li><strong>Email: </strong>faicelbenhoussin@gmail.com</li>
          
        </ul>
      </div>
    </div>
  </div>
</div>



  


   


    </div>
  );
}

export default App;
