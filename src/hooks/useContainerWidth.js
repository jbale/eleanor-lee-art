import React from 'react'

export default function useContainerWidth() {
  const ref = React.useRef(null);
  const [width, setWidth] = React.useState(0);
  const setRef = React.useCallback(node => {

    const handleResize = () => {
      setWidth(ref.current.offsetWidth);
    }

    if (ref.current) {
      window.removeEventListener('resize', handleResize);
    }

    if (node) {
      setWidth(node.offsetWidth);
      window.addEventListener('resize', handleResize);
    }

    ref.current = node
  }, [])

  return [setRef, width]
}
