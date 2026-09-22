import React, {useEffect, useRef, useState} from 'react';

const CountUp = function({n, duration = 1000}) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];

            if (entry.isIntersecting && !hasAnimated.current) {
                hasAnimated.current = true;

                const startTime = performance.now();

                const animate = (currentTime) => {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);

                    setCount(Math.floor(progress * n));

                    if (progress < 1) {
                        requestAnimationFrame(animate);
                    } else {
                        setCount(n);
                    }
                };

                requestAnimationFrame(animate);
                observer.disconnect();
            }
        }, {threshold: 0.2});

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [n, duration]);

    return (
        <span ref={ref}>
            {count}
        </span>
    );
};

export default CountUp;