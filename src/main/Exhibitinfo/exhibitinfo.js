import React from "react";
import "./exhibitinfo.css";
import Vid from "../Exhibitinfo/image 15.svg";
import img1 from "../Exhibitinfo/image 5.svg";
import img2 from "../Exhibitinfo/image 10.svg";
import img3 from "../Exhibitinfo/image 11.svg";
import img4 from "../Exhibitinfo/image 12.svg";
import vec from "../Exhibitinfo/Vector.svg";
import ellipse from "../Exhibitinfo/Ellipse 2.png";
import question from "../Exhibitinfo/Questionimage.png";
import vector from "../Exhibitinfo/Vector2.png";

export default function Exhibitinfo() {
  return (
    <>
    <header>
        <div className="exhibitinfo_search_head">
          <h1 className="exhibitinfo_search_my-account">EDGAR DEGAS</h1>
          <button className="exhibitinfo_search_search-button">
            <b>Search</b>
            <img src={vector} className="exhibitinfo_mag" alt="magnifier" />
          </button>
        </div>
      </header>
<div className="exhibit_info_page">
    <div className="exhibit_info_c1">
      <img src={img1} className="exhibit_info_p1" alt="woman-sitting"/>
      <img src={img2} className="exhibit_info_p2" alt="pic2"/>
      <img src={img3} className="exhibit_info_p3" alt="pic3"/>
      <img src={img4} className="exhibit_info_p4" alt="pic4"/>

    <div className="exhibit_info_c2">
       <button className="exhibit_info_b1">Click here for Updates on this Exhibit</button>
       <p className="exhibit_info_text1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur tristique eros at efficitur. 
       Pellentesque tincidunt ullamcorper velit eu dignissim. Morbi at risus lacus. Suspendisse non augue
        sit amet turpis blandit dapibus et at leo. Vestibulum a rhoncus ex. Integer facilisis metus nulla, 
        vitae hendrerit velit venenatis vel. Vestibulum interdum blandit diam et semper. Maecenas faucibus eu 
        sapien in auctor. Nunc tristique et turpis sit amet ultrices. Vestibulum eu laoreet massa. 
       Duis eget faucibus nulla. Nullam ornare purus elementum velit varius iaculis. Duis cursus 
       pellentesque nisl eget pellentesque. </p>
       <img src={Vid} className="exhibit_info_video" alt="video"></img>
       <p className="exhibit_info_text2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
       Sed efficitur tristique eros at efficitur. Pellentesque tincidunt ullamcorper velit eu dignissim. 
       Morbi at risus lacus. Suspendisse non augue sit amet turpis blandit dapibus et at leo. 
       Vestibulum a rhoncus ex. Integer facilisis metus nulla, vitae hendrerit velit venenatis vel. 
       Vestibulum interdum blandit diam et semper. 
       Maecenas faucibus eu sapien in auctor. Nunc tristique et turpis sit amet ultrices. 
       <div className="exhibit_info_qbox"> 
       <img src={ellipse} className="exhibit_info_ellipse" alt="ellipse"></img>
       <img src={question} className="exhibit_info_question" alt="vector"></img></div></p>
    
   </div>
</div>
</div>
</>
 );
}
