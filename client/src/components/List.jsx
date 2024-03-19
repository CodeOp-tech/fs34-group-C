import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

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
      console.log(response.data.services);
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
      <div>Your chats</div>
      {serviceList.map((serviceType) => (
        <div key={serviceType.id}>
          <NavLink to={`/chat/${serviceType.id}`} className="fs-4">
            {serviceType.service_name}
          </NavLink>
        </div>
      ))}
    </div>
  );
}
