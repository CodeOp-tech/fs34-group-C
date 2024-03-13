import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div>Welcome to TimeShare!</div>
            <button>
              <Link to="/Request">Request service</Link>
            </button>
      
          </div>
          <img
            className="border border-black border-2 rounded col-6 p-0 m-0"
            src="https://media.istockphoto.com/id/1480574526/de/foto/glückliche-mehrgenerationen-menschen-die-spaß-haben-auf-gras-in-einem-öffentlichen-park-zu.jpg?s=612x612&w=0&k=20&c=6a46pO62Zyzy2-tPW-qigtbXxJHxHc2zLMG3C4-rgFU="
          ></img>
        </div>
      </div>
    </>
  );
}
