/*renderer.jsx*/
import React from "react";
import ReactDOM from "react-dom";
//Uploader Component
import DraggableUploader from "./draggableUploader";
//DOM Rendering
ReactDOM.render(
    <DraggableUploader/>, document.getElementById("root"));