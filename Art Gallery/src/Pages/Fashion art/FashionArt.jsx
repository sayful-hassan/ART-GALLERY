import Slider from "../../Components/Slider/Slider";
import "./FashionArt.css";
import z from '../../assets/image of art-gallery project/fashion art/D1 mockup.jpg'
import y from '../../assets/image of art-gallery project/fashion art/4.jpg'
import x from '../../assets/image of art-gallery project/fashion art/D3 mockup.jpg'
import w from '../../assets/image of art-gallery project/fashion art/fire pant.jpeg'
import v from '../../assets/image of art-gallery project/fashion art/PROJECT 2-01.jpg'
import u from '../../assets/image of art-gallery project/fashion art/tryt1.jpg'

function FashionArt() {
    const fashionArtImages=[
        u,v,w,x,y,z
    ]
  return (
    <div>
      <h1 className="title">ANALOG ART</h1>
      <div className="slider col-md-12">
        <Slider images={fashionArtImages} />
      </div>
    </div>
  );
}

export default FashionArt;
