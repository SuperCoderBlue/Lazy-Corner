import useContent from "../Hooks/useContent";
import Loader from "../Loader";

// Check if content has been fetched (content.id exists).
// If true render content, else render Loader.
const Fact = ({ refresh }) => {
  const content = useContent(
    "https://uselessfacts.jsph.pl/api/v2/facts/random",
    refresh,
  );

  return content?.id ? (
    <div className="min-h-[60vh] flex flex-col justify-center">
      <p className=" max-w-80/100  md:max-w-60/100 p-1 box-border my-0 mx-auto font-serif text-xl sm:text-2xl max-xl:bg-white/70 rounded-2xl ">
        {content.text}
      </p>
    </div>
  ) : (
    <div className="h-[60vh] flex items-center justify-center box-border ">
      <Loader />
    </div>
  );
};

export default Fact;
