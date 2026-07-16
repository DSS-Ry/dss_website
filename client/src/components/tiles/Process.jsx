import React, {useState, useEffect} from 'react';

import {IoSearch} from 'react-icons/io5';
import {IoPencil} from 'react-icons/io5';
import {IoCodeSlash} from 'react-icons/io5';
import {IoRocketSharp} from 'react-icons/io5';
import {IoChatbubbles} from 'react-icons/io5';

const Process = function({content, num}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

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

  return (
    <div className={`tile processTile ${!isOpen ? 'closed v' : 'v'}`}>
      <div className={`tileContentContainer ${isLoaded ? 'visible' : 'hidden'} v`}>
        <b>Our Process</b>
        <div className='processInfo h'>
          <div className='processItem v'>
            <div className='processIcon v'><IoSearch size={48}/></div>
            <b className='processTitle'>discover</b>
          </div>
          <div className='processItem v'>
            <div className='processIcon v'><IoPencil size={48}/></div>
            <b className='processTitle'>design</b>
          </div>
          <div className='processItem v'>
            <div className='processIcon v'><IoCodeSlash size={48}/></div>
            <b className='processTitle'>build</b>
          </div>
          <div className='processItem v'>
            <div className='processIcon v'><IoRocketSharp size={48}/></div>
            <b className='processTitle'>launch</b>
          </div>
          <div className='processItem v'>
            <div className='processIcon v'><IoChatbubbles size={48}/></div>
            <b className='processTitle'>support</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;