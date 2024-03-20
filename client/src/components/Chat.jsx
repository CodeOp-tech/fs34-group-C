import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Pusher from "pusher-js";
import axios from "axios";

const PUSHER_KEY = import.meta.env.VITE_PUSHER_KEY;

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const token = localStorage.getItem("token");
  const { id } = useParams();

  useEffect(() => {
    setMessages([]);
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

  const getMessages = async () => {
    const response = await axios.get(`/api/chat/messages/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data);
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
            <span className={message.sender_id ? "text-end" : "text-start"}>
              {message.sender_id} {message.text}
            </span>
          </div>
        ))}
      </div>

      <div className="bg-light p-4 border-top">
        <form onSubmit={sendMessage}>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              value={input}
              onChange={handleInputChange}
            />

            <button className="btn btn-outline-primary">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
}
