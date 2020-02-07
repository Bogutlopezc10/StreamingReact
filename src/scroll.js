import { animateScroll as scroll} from 'react-scroll';

export const  scrollUp = () => {
    const scrollType = {
        duration: 0.2,
        delay: 0.2,
        smooth: true, // linear “easeInQuint” “easeOutCubic” 
     };
    scroll.scrollToTop(scrollType);
 }