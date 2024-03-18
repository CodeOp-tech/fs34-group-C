import { Outlet } from "react-router-dom";
import Chat from "../components/Chat";
import List from "../components/List";

export default function Chatbox() {
  return (
    <div className="row h-100 border rounded bg-white shadow">
      <div className="col-3 px-0 ">
        <List />
      </div>
      <div className="col-9 px-0 border-left">
        <Outlet />
      </div>
    </div>
  );
}
