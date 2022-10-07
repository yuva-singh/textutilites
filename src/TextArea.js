import React, { useState } from "react";

function TextArea(props) {
  const { heading } = props;
  const [text, setText] = useState("");
  const onchangehandler = (event) => {
    setText(event.target.value);
  };
  const [preview, setpreview] = useState("none");
  const [previewbtn, setpreviewbtn] = useState("Click Here to Preview");
  const privewtext = () => {
    return preview ? setpreview("") || setpreviewbtn("Click Here to Hide") : setpreview("none") || setpreviewbtn("Click Here to Preview");
  };
  // onupercase
  let onupercase = () => {
    let upercase = text.toUpperCase();
    setText(upercase);
  };
  //lowercase
  let onlowercase = () => {
    let lowercase = text.toLowerCase();
    setText(lowercase);
  };
  // cleartext
  let ClearText = () => {
    let cleartext = " ";
    setText(cleartext);
  };
  // copy text
  const CopyText = () => {
    let copytext = document.getElementById("mybox");
    copytext.select();
    navigator.clipboard.writeText(copytext.value);
  };
  // remove extra space
  const RemoveExtraSpace = () => {
    let removeextrappace = text.split(/[ ]+/);
    setText(removeextrappace.join(" "));
  };
  // Capitalize
  const Capitalize = () => {
    let Capitalize = text.split(" ");
    for (let i = 0; i < Capitalize.length; i++) {
      Capitalize[i] = Capitalize[i][0].toUpperCase() + Capitalize[i].substr(1);
    }
    setText(Capitalize.join(" "));
  };
  return (
    <>
      <div className="container mt-2">
        <div className="row justify-content-center">
          <div className="col-md-9">
            <h2 className="">{heading}</h2>
            <div className="">
              <textarea
                className="form-control"
                style={{ boxShadow: "none" }}
                placeholder="Leave a comment here"
                height="100px"
                id="mybox"
                rows="11"
                value={text}
                onChange={onchangehandler}
              ></textarea>
            </div>
            <button
              className="btn btn-primary btn-sm my-2 mx-2"
              onClick={onupercase}
            >
              ToUpercase
            </button>
            <button
              className="btn btn-primary btn-sm my-2 mx-2"
              onClick={onlowercase}
            >
              ToLowercase
            </button>
            <button
              className="btn btn-danger btn-sm my-2 mx-2"
              onClick={ClearText}
            >
              ClearText
            </button>
            <button
              className="btn btn-success btn-sm my-2 mx-2"
              onClick={CopyText}
            >
              CopyText
            </button>
            <button
              className="btn btn-dark btn-sm my-2 mx-2"
              onClick={RemoveExtraSpace}
            >
              Remove Extra Space
            </button>
            <button
              className="btn btn-warning btn-sm my-2 mx-2"
              onClick={Capitalize}
            >
              Capitalize
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-9">
            <h3>Your Text Summary</h3>
            <p>
              {text.split(" ").length} Word And {text.length} Text
            </p>
            <p>
              {" "}
              <span style={{ color: "green" }}>
                {0.008 * text.split(" ").length}
              </span>{" "}
              Minutes to Read
            </p>
            <button className="btn btn-outline-success" onClick={privewtext}>
              {previewbtn}
            </button>
            <p className="mt-2" style={{ display: preview }}>
              {text.length > 0 ? text : "Enter here to preview it..."}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TextArea;
