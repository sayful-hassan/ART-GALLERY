import Slider from '../../Components/Slider/Slider'
import './AnalogArt.css'
import menAndCrown from '../../assets/image of art-gallery project/analog art/men and crown.jpeg'
import mandalDesign from '../../assets/image of art-gallery project/analog art/mandala design.jpeg'
import girlDreams1 from '../../assets/image of art-gallery project/analog art/girl dreams 1.jpeg'
import sunFlower from '../../assets/image of art-gallery project/analog art/girl with sunflower.jpeg'
import menWithWings from '../../assets/image of art-gallery project/analog art/men with wings.jpeg'
import cartoon from '../../assets/image of art-gallery project/analog art/cartoon.jpeg'
function AnalogArt() {
    const analogArtImages =[
        menAndCrown,
        mandalDesign,
        girlDreams1,
        sunFlower,
        menWithWings,
        cartoon,


    ]
  return (
    <div>
        <h1 className='title'>ANALOG ART</h1>
        <div className='slider'>
        <Slider images={analogArtImages}/>

        </div>
    </div>
  )
}

export default AnalogArt
