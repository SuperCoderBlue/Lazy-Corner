import useContent from "../Hooks/useContent";
import Loader from "../Loader";

const Advice = ({ refresh }) => {
  const content = useContent("https://api.adviceslip.com/advice", refresh);

  // Check if content has been fetched (content?.slip exists).
  // If true render content, else render Loader.
  return content?.slip ? (
    <div className="min-h-[60vh] flex flex-col justify-center">
      <p className="max-w-80/100  md:max-w-60/100 p-1 box-border  my-0 mx-auto font-serif text-2xl max-xl:bg-white/70 rounded-2xl ">
        {content?.slip?.advice}
      </p>
    </div>
  ) : (
    <div className="h-[60vh] flex items-center justify-center box-border ">
      <Loader />
    </div>
  );
};

export default Advice;
