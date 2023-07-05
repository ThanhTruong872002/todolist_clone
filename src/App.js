import { useEffect, useState } from "react";
import Content from "./component/Content";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import Input from "./component/input";
import axios from "axios";

function App() {
  const [status, setStatus] = useState("home");
  const [listData, setListData] = useState([]);
  const [editTodoId, setEditTodoId] = useState();
  const [queryData, setQueryData] = useState(listData);
  const [statusData, setStatusData] = useState("all");

  console.log(queryData);
  const getAllData = async () => {
    const res = await axios.get(
      "https://6486a69cbeba6297278f00b8.mockapi.io/todolist"
    );

    if (res.data) {
      setListData(res.data);
      setQueryData(res.data);
    }
  };
  useEffect(() => {
    getAllData();
  }, [status]);

  const filterData = () => {
    if (statusData === "all") {
      setQueryData(listData);
    } else if (statusData === "new") {
      setQueryData(() => listData.filter((todo) => todo.status === "new"));
    } else if (statusData === "doing") {
      setQueryData(() => listData.filter((todo) => todo.status === "doing"));
    }
    if (statusData === "done") {
      setQueryData(() => listData.filter((todo) => todo.status === "done"));
    }
  };

  useEffect(() => {
    filterData();
  }, [statusData]);
  return (
    <>
      <div>
        {" "}
        <Header setStatus={setStatus} />
      </div>

      <div className="hero">
        <Sidebar setStatusData={setStatusData} setStatus={setStatus} />
        {status === "home" && (
          <Content
            listData={queryData}
            setStatus={setStatus}
            setEditTodoId={setEditTodoId}
          />
        )}
        {status === "creator" && (
          <Input setStatus={setStatus} editTodoId={editTodoId} />
        )}
      </div>
    </>
  );
}

export default App;
