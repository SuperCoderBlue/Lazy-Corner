// Props (z, disp) are optional and control visibility of inner Loader in non-slider image components.
// If disp is "none", Loader is hidden. If "block", visibility depends on z-index (above or below the image)
const Loader = ({z, disp}) => {
  return (
    <div
      className="w-10 h-10 border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin absolute"
      style={{ zIndex: z, display: disp }}
    ></div>
  );
};

export default Loader;
