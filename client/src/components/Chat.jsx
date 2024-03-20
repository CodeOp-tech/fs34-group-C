import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Pusher from "pusher-js";
import axios from "axios";

const PUSHER_KEY = import.meta.env.VITE_PUSHER_KEY;

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [userLoggedIn, setUserLoggedIn] = useState(0);
  const token = localStorage.getItem("token");
  const { id } = useParams();

  useEffect(() => {
    setMessages([]);
    getUserLoggedIn();
    getMessages();

    Pusher.logToConsole = true;

    var pusher = new Pusher(PUSHER_KEY, {
      cluster: "eu",
      forceTLS: true,
    });

    const channelName = `service-${id}`;
    var channel = pusher.subscribe(channelName);
    channel.bind("message", function (data) {
      console.log(data);
      setMessages((messages) => [...messages, data]);
    });

    return () => {
      pusher.unsubscribe(channelName);
    };
  }, [id]);

  const sendMessage = async (e) => {
    e.preventDefault();
    await axios.post(
      `/api/chat/messages/${id}`,
      {
        data: { message: input },
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setInput("");
  };

  const getUserLoggedIn = async () => {
    const response = await axios.get("/api/profile/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setUserLoggedIn(response.data.id);
  };

  const getMessages = async () => {
    const response = await axios.get(`/api/chat/messages/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setMessages(response.data.messages);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="d-flex flex-column h-100">
      <div className="flex-grow-1 p-3">
        {messages.map((message, i) => (
          <div key={i}>
            <span
              className={`d-block ${
                +message.sender_id === +userLoggedIn ? "text-end" : "text-start"
              }`}
            >
              <span
                className={`josefin-sans-400 fs-6 mb-2 p-3 badge rounded-pill ${
                  +message.sender_id === +userLoggedIn
                    ? "badge text-bg-secondary"
                    : "badge text-bg-light"
                }`}
              >
                {message.text}
              </span>
            </span>
          </div>
        ))}
      </div>

      <div className="p-4 border-top">
        <form onSubmit={sendMessage}>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              style={{ backgroundColor: "#fcfcfd" }}
              value={input}
              onChange={handleInputChange}
            />

            <button className="button">
              <i className="fa-solid fa-paper-plane"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
