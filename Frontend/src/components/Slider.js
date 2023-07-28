import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import './Slider.css';
export default function Slide(){
    // const handleOnDragStart = e => e.preventDefault()
    // render(){
    return(
        <div className="grid grid-cols-3"> 
            <p>
            <AliceCarousel autoPlay={true}
            autoplayInterval={5000}
            disableButtonsControls
            disableDotsControls
            mouseTracking
            infinite={true}
            >
                <p>
                <img src="https://c0.wallpaperflare.com/preview/410/960/1014/apartment-bed-bedroom-book-shelves.jpg" alt='see' className='img1'/>
            </p>
            <p>
                <img src="https://c4.wallpaperflare.com/wallpaper/310/368/899/sofa-interior-pillow-library-wallpaper-preview.jpg"alt='see' className='img1'/>
            </p>
            <p>
                <img src="https://c4.wallpaperflare.com/wallpaper/621/643/689/living-rooms-cityscape-interior-interior-design-wallpaper-preview.jpg" alt='see' className='img1'/>
            </p>
        
                <p>

                <img src="https://c1.wallpaperflare.com/preview/104/546/334/home-residential-house-residence.jpg" alt='see' className='img1'/>
                </p>
            </AliceCarousel>
            </p>
         </div>
    );
}
// }