import Player1 from "./components/Player/Player1";
import Player2 from "./components/Player/Player2"
import Winner from "./components/Winner"
import Reset from "./components/Reset"
import Form from "./components/Form"

// App is a component which displays all the components that the App is made out of 
const App = () => {
  return (
    <>
    {/* header */}
    <header className="jumbotron mt-4 mb-0">
      <h1>PongPing</h1>
    </header>

    {/* scores */}
    <div className="row mb-4">
      <Player1 player= {1} />
      <Player2 player= {2} />
    </div>

    { /* winner message */}
    <Winner />
    <hr />

    { /* reset button */}
    <Reset />

    <Form />
    </>
  )
};

export default App;
