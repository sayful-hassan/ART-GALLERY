import "./DigitalArt.css";
import Slider from "../../Components/Slider/Slider";
import a from "../../assets/image of art-gallery project/digital images/SMOKY MELTED EFFECT OF OUTCASE.png";
import b from "../../assets/image of art-gallery project/digital images/T E 4 JPEG FINAL-01.jpg";
import c from "../../assets/image of art-gallery project/digital images/GRAIN EFFECT  DISTRACTION.png";
import d from "../../assets/image of art-gallery project/digital images/3D.jpeg";
import e from "../../assets/image of art-gallery project/digital images/anime salib.png";
import f from "../../assets/image of art-gallery project/digital images/CA59C89F-2BB9-45B8-83C1-EED1E0375F79.jpeg";
import g from "../../assets/image of art-gallery project/digital images/safa D.png";
import h from "../../assets/image of art-gallery project/digital images/T E 5 FINAL IMAGE-01.jpg";
import i from "../../assets/image of art-gallery project/digital images/FOR POST-01.jpg";

function DigitalArt() {
  const digitalArtImages = [a, b, c, d, e, f, g, h, i];
  return (
    <div>
      <h1 className="title">DIGITAL ART</h1>
      <div className="slider col-md-12">
        <Slider images={digitalArtImages} />
      </div>
    </div>
  );
}

export default DigitalArt;
