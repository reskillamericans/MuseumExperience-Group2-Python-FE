import React from "react";
import Vid from "../Exhibitinfo/image 15.svg";
import img1 from "../Exhibitinfo/image 5.svg";
import img2 from "../Exhibitinfo/image 10.svg";
import img3 from "../Exhibitinfo/image 11.svg";
import img4 from "../Exhibitinfo/image 12.svg";
import vec from "../Exhibitinfo/Vector.svg";
import mvec from "../Exhibitinfo/MVector.svg";

export default function Exhibitinfo() {
  return (
    <div className="exhibit_info_container">
      <div className="exhibit_info_info">
        <button className="exhibit_info_register">
          Register to Get Updates on This Exhibit
        </button>
        <p className="exhibit_info_deskpara">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur
          tristique eros at efficitur. Pellentesque tincidunt ullamcorper velit
          eu dignissim. Morbi at risus lacus. Suspendisse non augue sit amet
          turpis blandit dapibus et at leo. Vestibulum a rhoncus ex. Integer
          facilisis metus nulla, vitae hendrerit velit venenatis vel. Vestibulum
          interdum blandit diam et semper. Maecenas faucibus eu sapien in
          auctor. Nunc tristique et turpis sit amet ultrices. Vestibulum eu
          laoreet massa. Duis eget faucibus nulla. Nullam ornare purus elementum
          velit varius iaculis. Duis cursus pellentesque nisl eget pellentesque.
        </p>

        <div className="exhibit_info_mpara">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            efficitur tristique eros at efficitur. Pellentesque tincidunt
            ullamcorper velit eu dignissim. Morbi at risus lacus. Suspendisse
            non augue sit amet turpis blandit dapibus et at leo. Vestibulum a
            rhoncus ex. Integer facilisis metus nulla, vitae hendrerit velit
            venenatis vel. Vestibulum interdum blandit diam et semper. Maecenas
            faucibus eu sapien in auctor. Nunc tristique et turpis sit amet
            ultrices. Vestibulum eu laoreet massa. Duis eget faucibus nulla.{" "}
          </p>
        </div>

        <img src={Vid} className="exhibit_info_vid" alt="video" />
        <p className="exhibit_info_deskpara">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur
          tristique eros at efficitur. Pellentesque tincidunt ullamcorper velit
          eu dignissim. Morbi at risus lacus. Suspendisse non augue sit amet
          turpis blandit dapibus et at leo. Vestibulum a rhoncus ex. Integer
          facilisis metus nulla, vitae hendrerit velit venenatis vel. Vestibulum
          interdum blandit diam et semper. Maecenas faucibus eu sapien in
          auctor. Nunc tristique et turpis sit amet ultrices.{" "}
        </p>
        <button className="exhibit_info_vector">
          <img src={vec} alt="comment" />
        </button>
      </div>
      <h1 className="exhibit_info_edgar">EDGAR DEGAS</h1>
      <div className="exhibit_info_pics">
        <img src={img1} className="exhibit_info_im1" alt="woman" />
        <button className="exhibit_info_curator">
          Ask the Curator <img src={mvec} alt="comment" />
        </button>

        <img src={img2} className="exhibit_info_im2" alt="family" />
        <img src={img3} className="exhibit_info_im3" alt="girl" />
        <img src={img4} className="exhibit_info_im4" alt="flowers" />
      </div>
    </div>
  );
}
