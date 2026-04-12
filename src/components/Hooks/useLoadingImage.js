import { useState, useEffect } from "react";

//  Toggle slider Loader custom hook.
const useLoadingImage = (image) => {
  // Start with Loader hidden on initial render
  const [loadingImage, setLoadingImage] = useState(false);

  useEffect(() => {
    // When a new image loads, hide Loader again
    if (image) {
      const img = new Image();
      img.src = image;
      img.onload = () => setLoadingImage(false);
    }

    // Cleanup sets Loader back to visible ("block") on each new fetch
    return () => setLoadingImage(true);
  }, [image]);

  return loadingImage;
};

export default useLoadingImage;
