import React from "react";

class About extends React.Component {
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
            <hr />
            <div className="text-muted">
              There are 3 projects are as follows:
              <ul className="mt-3 mb-5 text-muted">
                <li>check meaning of emoji.</li>
                <li>Recipe Book that divides two types. </li>
                <li>Banana Talk a fun transalation application.</li>
              </ul>
            </div>
            <hr />
            <div className="text-muted mb-5">
              <p>
                You can use this application to know the meaning of the emoji's
                which now a days emoji is creating more conversations.
              </p>
              <p>
                You can see the Recipe book to see the steps to make the recipe.
              </p>
              <p>
                For the fun thing you can use minion application to translate
                the text from English to banana language. It is a way to have
                some fun conversations.😜
              </p>
            </div>
            <div class="text-muted text-right">~ done by anandtagatghar</div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
