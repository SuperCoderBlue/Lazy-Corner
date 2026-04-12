import { useState } from "react";

const Option = ({ btnText, btnText2, children }) => {
  const [display, setDisplay] = useState("none"); 
  // Controls modal visibility (hidden by default)

  const [refresh, setRefresh] = useState(0); 
  // Tracks refresh count to trigger new content

  return (
    <>
      {/* Button that opens the modal */}
      <button
        onClick={() => setDisplay("block")}
        className="w-45/100 sm:w-25/100 text-base cursor-pointer font-serif bg-sky-950 text-sky-400 border border-sky-400 font-medium overflow-hidden relative px-5 py-2.5 rounded-lg hover:brightness-150 active:opacity-75 active:outline active:outline-solid active:outline-black duration-300 group"
      >
        <span className="bg-sky-400 shadow-sky-400 absolute -top-[150%] left-0 inline-flex w-80 h-1.25 rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
        {btnText}
      </button>

      {/* Modal overlay (click outside to close) */}
      <div
        onClick={() => setDisplay("none")}
        className="fixed z-1 pt-24 box-border left-0 top-0 w-100/100 h-100/100 overflow-auto bg-black/30 backdrop-blur-xl"
        style={{ display: display }}
      >
        {/* Modal content container */}
        <div
          onClick={(e) => e.stopPropagation()} 
          className="min-h-[70vh] flex flex-col m-auto mb-16 p-5 max-w-80/100 relative rounded-2xl box-content contentBackground"
        >
          {/* Close button (inside modal) */}
          <span
            onClick={() => setDisplay("none")}
            className="close font-[sans-serif] z-3 bg-white/70 rounded-full px-4.5"
          >
            x
          </span>

          {/* Render the child content, passing refresh state */}
          {children(refresh)}

          {/* Button to trigger new content (increments refresh) */}
          <div className="mt-4">
            <button
              onClick={() => setRefresh(refresh + 1)}
              className="newContentButton mx-auto my-0 py-px px-1.5 font-[sans-serif]"
            >
              {btnText2}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Option;
