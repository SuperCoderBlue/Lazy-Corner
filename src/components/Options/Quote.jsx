import useContent from "../Hooks/useContent";
import Loader from "../Loader";

const Quote = ({ refresh }) => {
  const content = useContent(
    "https://motivational-spark-api.vercel.app/api/quotes/random",
    refresh,
  );

  // Check if content has been fetched (content?.quote exists).
  // If true render content, else render Loader.
  return content?.quote ? (
    <div className="min-h-[60vh] flex flex-col justify-center ">
      {
        <>
          <span className="max-w-80/100  md:max-w-60/100 my-0 mx-auto p-1 box-border font-serif text-xl sm:text-2xl max-xl:bg-white/70 rounded-2xl">
            {content.quote}
          </span>
          <hr className="w-80/100 h-7 sm:h-8 my-4 mx-auto border-transparent bg-repeat-round box-content hrBackground " />
          <span className="max-w-80/100  md:max-w-60/100 my-0 mx-auto p-1 box-border font-serif text-xl sm:text-2xl max-xl:bg-white/70 rounded-2xl">
            {content.author}
          </span>
        </>
      }
    </div>
  ) : (
    <div className="h-[60vh] flex items-center justify-center box-border ">
      <Loader />
    </div>
  );
};

export default Quote;
