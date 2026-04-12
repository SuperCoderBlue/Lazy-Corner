import "./App.css";
import componentsData from "./components"; // Data for each option: includes name, button text for initial page, and button text for modal
import github from "./github.svg";
import Option from "../components/Option"; // Reusable modal + button design for each option

// Content components for each option
import Joke from "../components/Options/Joke";
import Dog from "../components/Options/Dog";
import Food from "../components/Options/Food";
import Fact from "../components/Options/Fact";
import Cat from "../components/Options/Cat";
import Quote from "../components/Options/Quote";
import Advice from "../components/Options/Advice";
import Fox from "../components/Options/Fox";
import Wonder from "../components/Options/Wonder";

// Collect all imported content components into a single object
const components = {
  Joke,
  Dog,
  Food,
  Fact,
  Cat,
  Quote,
  Advice,
  Fox,
  Wonder,
};

const App = () => {
  return (
    <>
      <div>
        <header>
          <h1 className="mt-8 mb-6 text-6xl font-bold uppercase font-walter text-shadow-lg/30 text-shadow-sky-700">
            Lazy Corner
          </h1>
          <p className="font-serif m-0 text-shadow-lg/15 text-shadow-sky-700">
            ( random stuff for killing time )
          </p>
        </header>

        <main>
          {/* separator */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            className="w-100/100 mt-2  fill-[#ebebeb] stroke-[#0a1647] stroke-2"
          >
            <path
              fill="%23404"
              d="M924 38c-19 16-71 24-202 0-37-7-81-13-122-10-44 4-76 14-92 27l-8 10-8-10c-16-13-48-23-91-27-41-3-85 3-122 10C148 62 95 54 76 38c-8-7-16-16-16-27 0 13 5 23 15 31 29 24 98 30 205 10 77-14 179-6 209 19 5 4 11 12 11 17 0-5 5-12 11-17 31-25 132-33 210-19 106 20 175 14 204-10 10-8 15-18 15-30 0 10-8 19-16 26Z"
            ></path>
          </svg>

          <h2 className="mt-12 mx-0 mb-8 text-2xl font-bold uppercase font-walter text-shadow-lg/15 text-shadow-sky-700">
            Pick something
          </h2>

          <div className="my-0 mx-auto w-90/100 flex flex-wrap justify-center gap-3 sm:gap-4 ">
            {componentsData.map((option) => {
              const { id, btnText, Component, btnText2 } = option;
              // Get the content component from components object
              //  by using the Component name from current option of componentsData array
              const Content = components[Component];

              return (
                <Option key={id} btnText={btnText} btnText2={btnText2}>
                  {/* Render the content component. 
                  Option provides its `refresh` state as an argument, 
                  which is passed down to the content component as a prop. */}
                  {(refresh) => <Content refresh={refresh} />}
                </Option>
              );
            })}
          </div>
        </main>
      </div>

      <footer className="p-2 ">
        {/* Decorative separator line (flipped) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          className="w-100/100 rotate-180 fill-[#e4e7e4] stroke-[#0a1647] stroke-2"
        >
          <path
            fill="%23404"
            d="M924 38c-19 16-71 24-202 0-37-7-81-13-122-10-44 4-76 14-92 27l-8 10-8-10c-16-13-48-23-91-27-41-3-85 3-122 10C148 62 95 54 76 38c-8-7-16-16-16-27 0 13 5 23 15 31 29 24 98 30 205 10 77-14 179-6 209 19 5 4 11 12 11 17 0-5 5-12 11-17 31-25 132-33 210-19 106 20 175 14 204-10 10-8 15-18 15-30 0 10-8 19-16 26Z"
          ></path>
        </svg>
        
        <a
          href="https://github.com/SuperCoderBlue/Lazy-Corner" // project repo
          target="_blank"
          className="inline-block my-0 mx-auto"
        >
          <img
            src={github}
            alt="github logo"
            className="h-12 hover:scale-110 border-solid border-color-sky-950 rounded-full"
          />
        </a>
      </footer>
    </>
  );
};

export default App;
