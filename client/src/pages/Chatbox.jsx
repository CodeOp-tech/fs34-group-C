import { Outlet } from "react-router-dom";
import List from "../components/List";
import { Container } from "react-bootstrap";

export default function Chatbox() {
  return (
    <Container>
      <div className="row h-100 border rounded bg-white shadow">
        <div className="col-3 px-0 ">
          <List />
        </div>
        <div className="col-9 px-0 border-left">
          <Outlet />
        </div>
      </div>
    </Container>
  );
}
