import {useState,useEffect} from 'react'

export default function useScrollDirection() {

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visibleNavbar, setVisibleNavbar] = useState(true);
  const [mobileView,setMobileView] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      let currentScrollPos = window.pageYOffset;
  
      setVisibleNavbar((prevScrollPos > currentScrollPos) || currentScrollPos < 10);
  
      setPrevScrollPos(currentScrollPos);
    }
    function handleResize(){
      if (window.innerWidth >= 768) {
        window.addEventListener('scroll', handleScroll);
        setMobileView(false)
      }
      else{
        setMobileView(true)
      }
    }
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {window.removeEventListener("resize", handleResize);
    window.removeEventListener('scroll', handleScroll);}

  }, [prevScrollPos]);

  return {visibleNavbar,mobileView}
  
};
