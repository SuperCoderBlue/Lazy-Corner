import useContent from "../Hooks/useContent";
import useZ from "../Hooks/useZ";
import useDisp from "../Hooks/useDisp";
import Loader from "../Loader";

const Cat = ({ refresh }) => {
  const content = useContent(
    "https://api.thecatapi.com/v1/images/search",
    refresh,
  );

  const z = useZ(refresh, 700);
  const disp = useDisp(content[0]?.url);

  // Check if content has been fetched (content[0].url exists).
  // If true render content + inner Loader, else render only Loader.
  // Show inner loader after delay until new image loads (hidden on initial render).
  return content[0]?.url ? (
    <div className="min-h-[60vh] w-100/100 flex items-center justify-center content-center relative">
      <Loader z={z} disp={disp} />
      <img
        src={content[0].url}
        alt="Kitty unavaible, try a new one."
        className="max-h-100/100  lg:h-[60vh] max-w-100/100  box-border border-4 border-black rounded-xl z-1 "
      />
    </div>
  ) : (
    <div className="h-[60vh] flex items-center justify-center box-border ">
      <Loader />
    </div>
  );
};

export default Cat;
