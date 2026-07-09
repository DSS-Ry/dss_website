import React, {useState, useEffect} from 'react';

const projectImages = [
  {title: 'communitii', src: '/images/communitii_screen.png'},
  {title: 'savor', src: '/images/savor_screen.png'},
  {title: 'stokk', src: '/images/stokk_screen.png'},
  {title: 'neighborly', src: '/images/neighborly_screen.png'},
  {title: 'puzzl', src: '/images/puzzle_screen.png'}
];

const Projects = function({content, num}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  setTimeout(() => {
    setIsOpen(true);
  }, 1000 + (num * 200));

  setTimeout(() => {
    setIsLoaded(true);
  }, 2200 + (num * 200));

  useEffect(() => {
    if (!isLoaded) {
      return undefined;
    }

    const slideshowTimer = setInterval(() => {
      setActiveImageIndex((prevIndex) => (prevIndex + 1) % projectImages.length);
    }, 3500);

    return () => clearInterval(slideshowTimer);
  }, [isLoaded]);

  return (
    <div className={`tile ${!isOpen ? 'closed v' : 'v'}`}>
      <div className={`tileContentContainer ${isLoaded ? 'visible' : 'hidden'} v`}>
        {/* <b>Recent Projects</b> */}
        <div className='projects'>
          <div className='projectSlideshow'>
            <div className='projectTitle'>
              {projectImages[activeImageIndex].title}
            </div>
            <img
              className='projectScreenshot'
              src={projectImages[activeImageIndex].src}
              alt={`Project screenshot ${projectImages[activeImageIndex].title}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;