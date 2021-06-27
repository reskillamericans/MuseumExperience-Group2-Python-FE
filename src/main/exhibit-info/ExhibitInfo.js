import React from 'react'
import './ExhibitInfo.css'

function ExhibitInfo() {
    return(

<div className="exhibitinfo">
<div className="topbar">
        <h1>EDGAR DEVAS</h1>
        <input type="text" placeholder="Search.." />
    </div>
    <div className="main">
        <section className="content">
            <div className="container">
                <span className="closebtn">&times;</span>
                <img id="expandedImg" />
                <div id="imgtext"></div>
              </div>
        </section>
            <div className="row">
                <div className="column">
                    <img src="./img/img_nature.jpg" alt="Nature" />
                </div>
                <div className="column">
                    <img src="./img/img_snow.jpg" alt="Snow" />
                </div>
                <div className="column">
                    <img src="./img/img_mountains.jpg" alt="Mountains" />
                </div>
            </div>
            <article className="copy-text">
                <button>Click Here for Update on this Exhibit</button>
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur tristique eros at efficitur. Pellentesque tincidunt ullamcorper velit eu dignissim. Morbi at risus lacus. Suspendisse non augue sit amet turpis blandit dapibus et at leo. Vestibulum a rhoncus ex. Integer facilisis metus nulla, vitae hendrerit velit venenatis vel. Vestibulum interdum blandit diam et semper. Maecenas faucibus eu sapien in auctor. Nunc tristique et turpis sit amet ultrices. Vestibulum eu laoreet massa. Duis eget faucibus nulla. Nullam ornare purus elementum velit varius iaculis. Duis cursus pellentesque nisl eget pellentesque.</p>
                <video width="434.92px" height="307px" controls>
                    <source src="movie.mp4" type="video/mp4" />
                    <source src="movie.ogg" type="video/ogg" />
                  Your browser does not support the video tag.
                  </video>
                  <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur tristique eros at efficitur. Pellentesque tincidunt ullamcorper velit eu dignissim. Morbi at risus lacus. Suspendisse non augue sit amet turpis blandit dapibus et at leo. Vestibulum a rhoncus ex. Integer facilisis metus nulla, vitae hendrerit velit venenatis vel. Vestibulum interdum blandit diam et semper. Maecenas faucibus eu sapien in auctor. Nunc tristique et turpis sit amet ultrices. Vestibulum eu laoreet massa. Duis eget faucibus nulla. Nullam ornare purus elementum velit varius iaculis. Duis cursus pellentesque nisl eget pellentesque.</p>
            </article>
     </div>
</div>



    )
}
export default ExhibitInfo
