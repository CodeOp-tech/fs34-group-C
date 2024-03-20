import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { Container, ListGroup } from "react-bootstrap";

export default function List() {
  const [serviceList, setServiceList] = useState([]);
  const token = localStorage.getItem("token");

  const getServiceList = async () => {
    try {
      const response = await axios.get("/api/chat/myservices", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setServiceList(response.data.services);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getServiceList();
  }, []);

  return (
    <div>
      <Container>
        {serviceList.map((serviceType) => (
          <ListGroup key={serviceType.id} className="josefin-sans-300 fs-5">
            <ListGroup.Item
              as={NavLink}
              to={`/chat/${serviceType.id}`}
              action
              variant="light"
            >
              {serviceType.service_name}
            </ListGroup.Item>
          </ListGroup>
        ))}
      </Container>
    </div>
  );
}
