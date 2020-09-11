import React, { useEffect, useState } from "react";
import LinkForm from "./LinkForm";
import { db } from "./firebase";
import { toast } from "react-toastify";
import { Link } from "react-scroll";

const Links = (props) => {
  const [links, setLinks] = useState([]);
  const [currentId, setCurrentId] = useState("");

  const getLinks = async () => {
    db.collection("link").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setLinks(docs);
    });
  };

  useEffect(() => {
    getLinks();
  }, []);

  const addOrEditLink = async (linkObject) => {
    try {
      if (currentId === "") {
        await db.collection("link").doc().set(linkObject);
        toast("New Link Added Successfuly", {
          type: "success",
        });
      } else {
        await db.collection("link").doc(currentId).update(linkObject);
        toast("Link Update Successfuly", {
          type: "info",
        });
        setCurrentId("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onDeleteLink = async (id) => {
    if (window.confirm("are you sure you want to delete this link?")) {
      await db.collection("link").doc(id).delete();
      toast("Link Removed Successfuly", {
        type: "error",
        autoClose: 2000,
      });
    }
  };

  return (
    <div>
      <div className="col-ml-8">
        <div className="row">
          {props.isSignedIn == 1 ? (
            <LinkForm {...{ addOrEditLink, currentId, links }} />
          ) : null}
        </div>
        <br />

        {links.map((link) => (
          <div className="card mb-1 p-1" key={link.id}>
            <div className="card-body">
              <div>
                <h5>
                  {/* <h5 onClick={() => setCurrentId(link.id)} id="username"> */}
                  <img
                    className="mx-auto rounded-circle"
                    src={link.picture}
                    width="70px"
                  />{" "}
                  {link.username}
                </h5>
              </div>
              <div className="d-flex justify-content-between">
                <h4>{link.name}</h4>
                {props.isSignedIn == 1 ? (
                  <div>
                    {props.fullname == link.username ? (
                      <div>
                        <Link
                          activeClass="active"
                          to="post"
                          spy={true}
                          smooth={true}
                          offset={-30}
                          duration={900}
                        >
                          <i
                            className="material-icons"
                            onClick={() => setCurrentId(link.id)}
                            style={{
                              cursor: "pointer",
                            }}
                          >
                            create
                          </i>
                        </Link>
                        &nbsp; &nbsp; &nbsp;
                        <i
                          className="material-icons text-danger"
                          onClick={() => onDeleteLink(link.id)}
                          style={{
                            cursor: "pointer",
                          }}
                        >
                          close
                        </i>
                      </div>
                    ) : null}
                  </div>
                ) : null}
              </div>
              <p>{link.description}</p>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                Go to Website
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Links;
