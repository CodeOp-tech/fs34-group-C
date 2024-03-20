import { Outlet } from "react-router-dom";
import List from "../components/List";
import { Container } from "react-bootstrap";

export default function Chatbox() {
  return (
    <div className="profile pt-5 pb-3">
      <Container>
        <div className="josefin-sans-400 fs-1">Chats</div>
        <div className="row">
          <div className="col-3">
            <List />
          </div>
          <div className="col-9">
            <Outlet />
          </div>
        </div>
      </Container>
    </div>
  );
}
