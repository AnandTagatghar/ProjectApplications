import React from "react";

class Home extends React.Component {
  render() {
    return (
      <div className="container homeBackground">
        <div className="row text-center">
          <div className="col-md-12 col-sm-12">
            <div className="homeHeader mt-3">Welcome to my Project.</div>
            <div className="text-muted my-5">
              There are 3 projects in this project totally done using React js.
            </div>
            <div className="text-muted">
              Along with React Js their are some of the technologies are used.
              <hr />
              <ul className="mt-3 mb-5 text-muted">
                <li>React Js</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Bootstrap</li>
              </ul>
            </div>
            <div class="text-muted text-right">~ done by anandtagatghar</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
