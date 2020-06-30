import React from 'react'

export default function useMouseActive () {
  const [mouseActive, setMouseActive] = React.useState(false);

  const timeoutId = React.useRef(null);

  React.useEffect(() => {

    const handleMouseMove = () => {
      clearTimeout(timeoutId.current);
      setMouseActive(true);
      timeoutId.current = setTimeout(() => setMouseActive(false), 2000);
    }

    document.addEventListener('mousemove', handleMouseMove, false);
    document.addEventListener('click', handleMouseMove, false);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove, false);
      document.removeEventListener('click', handleMouseMove, false);
      clearTimeout(timeoutId.current);
    }
  }, [])

  return mouseActive;
}
