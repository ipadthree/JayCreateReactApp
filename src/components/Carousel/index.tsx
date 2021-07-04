import React, { ReactElement, useEffect, useRef, useState } from 'react';
import { images } from './images';
import './carousel.css';

const Carousel = (): ReactElement => {
    const [currentImage, setCurrentImage] = useState(0);
    const imageRef = useRef<HTMLImageElement>(null);
    const getPrevious = () => {
        if (currentImage === 0) {
            setCurrentImage(images.length - 1);
        } else {
            setCurrentImage((previous) => previous - 1);
        }
    };

    const getNext = () => {
        if (currentImage === images.length - 1) {
            setCurrentImage(0);
        } else {
            setCurrentImage((previous) => previous + 1);
        }
    };

    useEffect(() => {
        imageRef.current?.classList.add('active');
    }, [currentImage]);
    /**
     * key是必须的for img， 为了force react to remount the img element so it always only has class 'image' at start.
     * 不同的key会让react认为这是不同的element
     * https://stackoverflow.com/questions/35792275/how-to-force-remounting-on-react-components
     */
    return (
        <div id="container">
            <button onClick={getPrevious}>Previous</button>
            <img
                key={currentImage}
                src={images[currentImage].imageUrl}
                ref={imageRef}
                alt="Bikini ladies"
                className="image"
            />
            <button onClick={getNext}>Next</button>
        </div>
    );
};

export default Carousel;
