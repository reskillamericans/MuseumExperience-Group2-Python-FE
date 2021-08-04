import React from "react";
import "./exhibitinfo.css";
import Vid from "../Exhibitinfo/image 15.png";
import img1 from "../Exhibitinfo/image 5.png";
import img2 from "../Exhibitinfo/image 10 (1).png";
import img3 from "../Exhibitinfo/image 11.png";
import img4 from "../Exhibitinfo/image 12.png";
import vec from "../Exhibitinfo/Vector.png";
import ellipse from "../Exhibitinfo/Ellipse 2.png";


export default function Exhibitinfo() {
  return (
  <>
<div className="exhibit_info_page">
    <div className="exhibit_info_c1">
      <img src={img1} className="exhibit_info_p1" alt="woman-sitting"/>
      <img src={img2} className="exhibit_info_p2" alt="pic2"/>
      <img src={img3} className="exhibit_info_p3" alt="pic3"/>
      <img src={img4} className="exhibit_info_p4" alt="pic4"/>

    <div className="exhibit_info_c2">
       <button className="exhibit_info_b1">Log In to Get Updates on This Exhibit</button>
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
       <img src={ellipse} className="exhibit_info_ellipse" alt="ellipse"></img>
       <img src={vec} className="exhibit_info_vector" alt="vector"></img></p>
    
   </div>
</div>
</div>
</>


  );
}
