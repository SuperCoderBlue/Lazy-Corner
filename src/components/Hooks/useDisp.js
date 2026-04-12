import {useState, useEffect} from "react"

// Toggle display custom hook.
// Used in non-slider image components to control inner Loader visibility.
const useDisp = (image) => {
    // Start with Loader hidden on initial render
    const [disp, setDisp] = useState("none");

    useEffect( () => {
        // When a new image loads, hide Loader again
        if (image) {
            const img = new Image();
            img.src = image;
            img.onload = () => setDisp("none");
        }

        // Cleanup sets Loader back to visible ("block") on each new fetch
        return () => setDisp("block");
    }, [image])

    return disp;
}

export default useDisp;
