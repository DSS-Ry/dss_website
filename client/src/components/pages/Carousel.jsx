import React, {useEffect, useState} from 'react';

const Carousel = function({images, interval = 3000}) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((current) => {
                return (current + 1) % images.length;
            });
        }, interval);
        return () => {
            clearInterval(timer);
        };
    }, [images.length, interval]);

    return (
        <div className='carousel'>
            <div className='carouselTrack' style={{transform: `translateX(-${index * 100}%)`}}>
                {images.map((image, i) => {
                    return (
                        <div className='carouselSlide' key={i}>
                            <img src={image.src} alt={image.alt || ''}/>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Carousel;