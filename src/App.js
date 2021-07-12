import logo from './logo.svg'
import './App.css'

function App() {
    return (
        <>
            
            <div id="row1" className="rows">
        <div className="image-name">
        
            <img className="row1-pics" src="/image/image1.png" />
            
            <text>Van Gogh Exhibit</text>
            
      </div>

         
          
            
     <div className="image-name">
            <img  src="/image/image2.png" />
          
        <text>DaVinci Exhibit</text>
            </div>
        
         
      
      
      
        <div className="image-name">
            <img id="image3" src="/image/image3.png" />
            
      <text>Degas Exhibit</text>
      </div>
      </div>
        
        
      
    <div id="row2" className="rows">
      <div className="image-name">
      <img src="/image/image4.png" />
      <text>Egyptian Art Exhibit</text>
          </div>
        

      <div className="image-name">
      <img  src="/image/image5.png" />
      <text>Grecian Sculpture</text>
      </div>

      <div className="image-name" >
        <img  src="/image/image6.png" />
          <text>Bronze Age</text>
          </div>
    </div>
  
      



        </>
    );
}
export default App