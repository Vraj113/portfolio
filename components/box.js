
import useMousePosition from '../hooks/useMousePosition'
import { useEffect } from 'react';
 

const Box = () => { 
    const mousePosition = useMousePosition();
    useEffect(() => {
       console.log(mousePosition)
      
    }, [mousePosition])
    
  return (
    <div className="mt-20 h-40 w-40 shadow-xl mx-auto"> 
        {JSON.stringify(mousePosition)}
    </div>
  )
}

export default Box