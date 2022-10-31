import {useState} from "react";



function useResolution() {

    const MOBILE_PIXELS=768;

    handleResize();
    
    const [width, setWidth] = useState(window.innerWidth);
    
    function handleResize() {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    };
    
    
    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    
    return typeResolution(width, MOBILE_PIXELS);
}

function typeResolution(width, maximun) {
    if (width<maximun) {
        return 'MOBILE';
    }else{
        return 'DESKTOP';
    }
}

export {useResolution}