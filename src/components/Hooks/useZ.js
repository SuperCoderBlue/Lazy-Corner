import {useState, useEffect} from "react"

// Toggle z-index custom hook.
// Used in non-slider image components to control inner Loader visibility.
const useZ = (refresh, delay) => {
    // Initial z-index at 0 keeps Loader below the image
    const [z, setZ] = useState(0);

    // Option passes down its `refresh` state, which triggers z state re-toggle when updated.
    useEffect( () => {
        // After delay, set z-index to 2 so Loader appears above the image.
        // Delay prevents flicker and can be customized per component.
        const timer = setTimeout(() => setZ(2), delay );
        
        // Cleanup resets z-index back to 0 when refresh changes.
        return () => {clearTimeout(timer); setZ(0);};
    }, [refresh, delay])

    return z;
}

export default useZ;