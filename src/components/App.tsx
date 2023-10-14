import Time from "./Clock";
import Today from "./Today";

const App = () => {
  return (
    <>
      <Today />
      <Time />
      <a className="developer" href="https://t.me/wabi4" target="blank">
        Developed by <span>abula</span>
      </a>
    </>
  );
};

export default App;
