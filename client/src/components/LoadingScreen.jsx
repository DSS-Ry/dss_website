import React, {useEffect, useState} from 'react';
import preloadImages, {waitForImage} from '../preloadImages';

const LoadingScreen = function({onComplete}) {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let finish;
    let hold;
    let onLoad;

    const minimum = new Promise((resolve) => {
      hold = window.setTimeout(resolve, 1000);
    });

    const pageLoaded = document.readyState === 'complete' ? Promise.resolve() : new Promise((resolve) => {
      onLoad = resolve;
      window.addEventListener('load', onLoad, {once: true});
    });

    const assets = pageLoaded.then(() => Promise.all([
      preloadImages(),
      document.fonts ? document.fonts.ready : Promise.resolve(),
      ...Array.from(document.images, waitForImage)
    ]));

    Promise.all([minimum, assets]).then(() => {
      if (cancelled) return;
      setIsExiting(true);
      finish = window.setTimeout(onComplete, 400);
    });

    return () => {
      cancelled = true;
      window.clearTimeout(hold);
      window.clearTimeout(finish);
      if (onLoad) window.removeEventListener('load', onLoad);
    };
  }, [onComplete]);

  return (
    <div className={`loadingScreen${isExiting ? ' isExiting' : ''}`} role='dialog' aria-modal='true' aria-label='Loading Diversified Spec. Sales'>
      <div className='loadingLogoPosition'>
        <img className='loadingLogo' src='images/logo_drop.svg' alt=''/>
      </div>
    </div>
  );
};

export default LoadingScreen;
