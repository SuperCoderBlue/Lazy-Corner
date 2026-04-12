import useContent from "../Hooks/useContent";
import Loader from "../Loader";

const Joke = ({ refresh }) => {
  const content = useContent("https://v2.jokeapi.dev/joke/Any", refresh);

  // Check if content has been fetched (content.id exists).
  // If true render content, else render Loader.
  return content?.id ? (
    <div className="min-h-[60vh] flex flex-col justify-center ">
      {content.joke ? (
        <span className="max-w-80/100  md:max-w-60/100 my-0 mx-auto p-1 box-border font-serif text-xl sm:text-2xl max-xl:bg-white/90 rounded-2xl">
          {content.joke}
        </span>
      ) : (
        <>
          <span className="max-w-80/100  md:max-w-60/100 my-0 mx-auto p-1 box-border font-serif text-xl sm:text-2xl max-xl:bg-white/90 rounded-2xl">
            {content.setup}
          </span>
          <hr className="w-80/100 h-7 sm:h-8 my-4 mx-auto border-transparent bg-repeat-round box-content hrBackground " />
          <span className="max-w-80/100  md:max-w-60/100 my-0 mx-auto p-1 box-border font-serif text-xl sm:text-2xl max-xl:bg-white/90 rounded-2xl">
            {content.delivery}
          </span>
        </>
      )}
    </div>
  ) : (
    <div className="h-[60vh] flex items-center justify-center box-border ">
      <Loader />
    </div>
  );
};

export default Joke;
