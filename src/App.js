import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

function App() { 
  return (
    <>
    {/* <Navbar title="TextUtils" aboutText = "About TextUtils"/> */}
    {/* <Navbar/> */}
    <Navbar title="TextUtils" />
    <div className="container">
    <TextForm heading = "Enter the text to analyze below"/>
    </div>
    </>
  );
  }

export default App;
  