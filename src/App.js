import Content from "./component/Content";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import Input from "./component/input";

function App() {
  return (
    <>
      <div>
        {" "}
        <Header />
      </div>
      <div className="hero">
        <Sidebar />
        <Input />
      </div>
    </>
  );
}

export default App;
