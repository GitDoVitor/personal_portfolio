import React, { useEffect, useState } from 'react';

function ScrollToTop() {
    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <button className='pp-button-scroll-on-top' onClick={scrollToTop} style={{ display: visible ? 'block' : 'none' }}>
            ☝️
        </button>
    );
}

export default ScrollToTop;