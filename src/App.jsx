import "./App.css";
import Card from "./components/card/Card";
import Example from "./components/card/Example";
import UseState from "./components/card/UseState/UseState";
import UseEffect from "./components/UseEffect/UseEffect";

function App() {
  return (
    <>
      <div className=" grid grid-cols-3 gap-4 px-12">
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>

      <Example>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, ea?
        </p>
      </Example>

      <UseState></UseState>
      <UseEffect></UseEffect>
    </>
  );
}

export default App;
