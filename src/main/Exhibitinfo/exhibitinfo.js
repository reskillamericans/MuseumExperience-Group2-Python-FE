import React from 'react'
import Vid from '../Exhibitinfo/image 15.svg'
import img1 from '../Exhibitinfo/image 5.svg'
import img2 from '../Exhibitinfo/image 10.svg'
import img3 from '../Exhibitinfo/image 11.svg'
import img4 from '../Exhibitinfo/image 12.svg'
import vec from '../Exhibitinfo/Vector.svg'
import mvec from '../Exhibitinfo/MVector.svg'

export default function exhibitinfo() {
    return (
        <div className="container">
            <div className="info">
                <button className="register">Register to Get Updates on This Exhibit</button>
                <p className="deskpara">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed efficitur tristique eros at efficitur. Pellentesque tincidunt 
                    ullamcorper velit eu dignissim. Morbi at risus lacus. Suspendisse non 
                    augue sit amet turpis blandit dapibus et at leo. Vestibulum a rhoncus ex. 
                    Integer facilisis metus nulla, vitae hendrerit velit venenatis vel. Vestibulum 
                    interdum blandit diam et semper. Maecenas faucibus eu sapien in auctor. Nunc tristique 
                    et turpis sit amet ultrices. Vestibulum eu laoreet massa. Duis eget faucibus nulla. 
                    Nullam ornare purus elementum velit varius iaculis. Duis cursus pellentesque nisl eget pellentesque.</p>
                    
                    <div className="mpara">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed efficitur tristique eros at efficitur. Pellentesque 
                    tincidunt ullamcorper velit eu dignissim. Morbi at risus lacus.
                     Suspendisse non augue sit amet turpis blandit dapibus et at leo.
                      Vestibulum a rhoncus ex. Integer facilisis metus nulla, vitae 
                      hendrerit velit venenatis vel. Vestibulum interdum blandit diam 
                      et semper. Maecenas faucibus eu sapien in auctor. Nunc tristique 
                      et turpis sit amet ultrices. Vestibulum eu laoreet massa. Duis 
                      eget faucibus nulla. </p>
            </div>
                    
                    <img src={Vid} className="vid" alt="video"/>
                    <p className="deskpara">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur 
                        tristique eros at efficitur. Pellentesque tincidunt ullamcorper velit eu 
                        dignissim. Morbi at risus lacus. Suspendisse non augue sit amet turpis 
                        blandit dapibus et at leo. Vestibulum a rhoncus ex. Integer facilisis metus 
                        nulla, vitae hendrerit velit venenatis vel. Vestibulum interdum blandit diam 
                        et semper. Maecenas faucibus eu sapien in auctor. Nunc tristique et turpis sit amet ultrices. </p>
                <button className="vector"><img src={vec} alt="comment"/></button>
           </div>
           <h1 className="edgar">EDGAR DEGAS</h1>
            <div className="pics">
            <img src={img1} className="im1" alt="image of a woman"/>
            <button className="curator">Ask the Curator <img src={mvec} alt="comment"/></button>

    
            <img src={img2} className="im2" alt="image of family"/>
            <img src={img3} className="im3" alt="image of a girl"/>
            <img src={img4} className="im4" alt="image of flowers"/>
            

            </div>
            

        </div>
    
    )
}
