import './Slider.css'
import PropTypes from 'prop-types'

function Slider({images}) {
  return (
    <div className='container-fluid'>
     <div className='row'>

        <div id="carouselExampleIndicators" className="carousel slide col-xl-12" data-ride="carousel">
    <ol className="carousel-indicators">
        {images.map((image, index)=>(
            
            <li 
            data-target="#carouselExampleIndicators" 
            data-slide-to={index}
            className={index === 0 ? 'active':''}
            key={index}>
            </li>
      
    ))}
    </ol>
    <div className="carousel-inner">
        {images.map((image, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
            <img src={image} className="d-block w-100" alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
      
    </div>
</div>
  )
}
Slider.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired, 
  };

export default Slider
