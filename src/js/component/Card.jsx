import React from "react";

const Card = () => {
  return (
    <div className="card mt-3" style={{ width: "18rem" }}>
      <img
        src="https://www.panamaamerica.com.pa/sites/default/files/filevqKC3v"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body text-center">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <div className="d-flex justify-content-center">
          <a href="#" className="btn btn-primary">
            Fin Out More!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
