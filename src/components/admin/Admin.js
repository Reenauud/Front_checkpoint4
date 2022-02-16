import React, { useState, useEffect } from "react";
import axios from "axios";

function Admin() {
  const [newsFamilyGuys, setNewsFamilyGuys] = useState([]);

  const handleDelete = async (e, id) => {
    e.preventDefault();

    await axios
      .delete(`http://localhost:8000/api/personnage/${id}`)
      .then((response) => {
        if (response.status === 204) {
          console.log(newsFamilyGuys);
          setNewsFamilyGuys(
            newsFamilyGuys.filter((personnage) => personnage.id !== id)
          );
        }
      });
  };

  useEffect(() => {
    (async () => {
      axios
        .get("http://localhost:8000/api/personnage/")
        .then((response) => response.data)
        .then((data) => {
          setNewsFamilyGuys(data);
        });
    })();
  }, []);

  return (
    <div>
      {newsFamilyGuys.length
        ? newsFamilyGuys.map((newsFamily) => {
            return (
              <div key={newsFamily.id}>
                {newsFamily.name}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-trash"
                  viewBox="0 0 16 16"
                  onClick={(e) => {
                    handleDelete(e, newsFamily.id);
                  }}
                >
                  {" "}
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />{" "}
                  <path
                    fillRule="evenodd"
                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                  />{" "}
                </svg>
              </div>
            );
          })
        : null}
    </div>
  );
}

export default Admin;
