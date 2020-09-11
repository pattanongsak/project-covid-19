import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import { toast } from "react-toastify";
import { Link } from "react-scroll";

const LinkForm = (props) => {
  const initialStateValues = {
    url: "",
    name: "",
    description: "",
    username: localStorage.getItem("fullname"),
    picture: localStorage.getItem("images"),
  };
  const [values, setValues] = useState(initialStateValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const validateURL = (str) => {
    return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
      str
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateURL(values.url)) {
      return toast("Invalid URL", {
        type: "warning",
        autoClose: 2000,
      });
    }

    props.addOrEditLink(values);
    setValues({ ...initialStateValues });
  };

  const getLinkById = async (id) => {
    const doc = await db.collection("link").doc(id).get();
    setValues({ ...doc.data() });
  };

  useEffect(() => {
    if (props.currentId === "") {
      setValues({ ...initialStateValues });
    } else {
      getLinkById(props.currentId);
    }
  }, [props.currentId]);

  return (
    <form className="card card-body" onSubmit={handleSubmit}>
      <div className="form-group input-group">
        <div className="input-group-text bg-light">
          <i className="material-icons">insert_link</i>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="https://someurl.com"
          name="url"
          onChange={handleInputChange}
          value={values.url}
        />
      </div>
      <div className="form-group input-group">
        <div className="input-group-text bg-light">
          <i className="material-icons">create</i>
        </div>
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="
          Topic name"
          onChange={handleInputChange}
          value={values.name}
        />
      </div>
      <div className="forn-group">
        <textarea
          name="description"
          rows="3"
          className="form-control"
          placeholder="Description"
          onChange={handleInputChange}
          value={values.description}
        ></textarea>
      </div>
      <br />

      <button className="btn btn-primary">
        <Link
          activeClass="active"
          to={values.name}
          spy={true}
          smooth={true}
          offset={-30}
          duration={900}
        >
          {props.currentId === "" ? "Post" : "Update"}
        </Link>
      </button>
    </form>
  );
};

export default LinkForm;
