import React, {useState, useEffect} from 'react';

import st from 'ryscott-st';

import {FaArrowLeft} from 'react-icons/fa';
import {FaArrowRight} from 'react-icons/fa';

const Projects = function({content, num}) {
  const [isOpen, setIsOpen] = useState(st.isMobile ? true : false);
  const [isLoaded, setIsLoaded] = useState(st.isMobile ? true : false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const openTimer = setTimeout(() => {
      setIsOpen(true);
    }, 1000 + (num * 200));

    const loadTimer = setTimeout(() => {
      setIsLoaded(true);
    }, 2200 + (num * 200));

    return () => {
      clearTimeout(openTimer);
      clearTimeout(loadTimer);
    };
  }, [num]);

  useEffect(() => {
    if (!isLoaded || isModalOpen) {
      return undefined;
    }

    const slideshowTimer = setInterval(() => {
      setActiveImageIndex((prevIndex) => (prevIndex + 1) % projectImages.length);
    }, 3500);

    return () => clearInterval(slideshowTimer);
  }, [isLoaded, isModalOpen]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsModalOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const currentImage = projectImages[activeImageIndex];

  const handleModalImageClick = function(){
    setIsModalOpen(false);
  };

  return (
    <div className={`tile projectTile ${!isOpen ? 'closed v' : 'v'}`}>
      <div className={`tileContentContainer ${isLoaded ? 'visible' : 'hidden'} v`}>
        <div className='projects'>
          <div className='projectSlideshow'>
            <div className='projectTitle'>
              {currentImage.title}
            </div>
            <img
              className='projectScreenshot'
              src={currentImage.src}
              alt={`Project screenshot ${currentImage.title}`}
              onClick={() => setIsModalOpen(true)}
            />
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className='imageModalOverlay' onClick={() => setIsModalOpen(false)}>
          <div className='imageModal' onClick={(event) => event.stopPropagation()}>
            <div className='imageModalViewer'>
              <img
                src={currentImage.src}
                alt={`Project screenshot ${currentImage.title}`}
                className='imageModalImage'
                onClick={handleModalImageClick}
              />
              <div className='imageModalInfo'>
                <h3>{currentImage.title}</h3>
                <p>{currentImage.info}</p>
              </div>
              <button className='leftButton' onClick={() => setActiveImageIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length)} aria-label='Previous image'>
                <FaArrowLeft size={24}/>
              </button>
              <button className='rightButton' onClick={() => setActiveImageIndex((prev) => (prev + 1) % projectImages.length)} aria-label='Next image'>
                <FaArrowRight size={24}/>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const projectImages = [
  {
    title: 'communitii',
    src: '/images/communitii_screen.png',
    info: 'A community-oriented social media platform focused on connection and local engagement.'
  },
  {
    title: 'savor',
    src: '/images/savor_screen.png',
    info: 'A user-friendly restaurant point of service application designed for efficiency.'
  },
  {
    title: 'stokk',
    src: '/images/stokk_screen.png',
    info: 'A simple, streamlined stock market scanner designed to offer real-time insights to investors.'
  },
  {
    title: 'neighborly',
    src: '/images/neighborly_screen.png',
    info: 'A neighborhood-focused communications application for trusted local interactions.'
  },
  {
    title: 'puzzl',
    src: '/images/puzzle_screen.png',
    info: 'A polished product experience designed around crisp aesthetics and play.'
  }
];

export default Projects;