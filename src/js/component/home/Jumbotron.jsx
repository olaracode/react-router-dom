import React from "react";

const Jumbotron = () => {
  return (
    <>
      <div className="container-fluid justify-content-md-center align-items-center p-4">
        <div className="row">
          <div className="col-12 col md-6 ">
            <div className="Jumbotron bg-body-tertiary">
              <h1 className="display-4 ">Hello, world!</h1>
              <p className="lead">
                This is a simple hero unit, a simple jumbotron-style component
                for calling extra attention to featured content or information.
              </p>
              <hr className="my-5" />
              <p>
                It uses utility class for typography and spacing to space
                content out within the larger container.
              </p>
              <p className="lead">
                <a className="btn btn-primary btn-lg" href="#" role="button">
                  Learn more
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Jumbotron;
