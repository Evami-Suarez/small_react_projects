//import "./App.css";
import Accordian from "./components/accordian/index.jsx";
import RandomColor from "./components/random-color/index.jsx";
import StarRating from "./components/star-rating/index.jsx";

const App = () => {
  return (
    <div>
      {/* <Accordian /> */}

      {/* <RandomColor /> */}

      <StarRating noOfStars={5} />
    </div>
  );
};

export default App;
