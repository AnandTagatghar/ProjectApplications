import React from "react";
import "./css/minionCSS.css";

class Minion extends React.Component {
  state = { entry: "", output: "" };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.onSearchSubmit(this.state.entry);
  };

  errorHandler(error) {
    console.log("error");
    alert("error");
  }

  onSearchSubmit(text) {
    var output =
      "https://api.funtranslations.com/translate/minion.json" +
      "?" +
      "text=" +
      text;
    fetch(output)
      .then((response) => response.json())
      .then((json) => this.setState({ output: json.contents.translated }))
      .catch(this.errorHandler);
  }
  render() {
    return (
      <div className="containerMinion">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="bananaHeader mb-5">Banana Talk</div>
              <div>
                <form onSubmit={this.onFormSubmit}>
                  <textarea
                    className="bananaInput p-3 mb-5 text-center"
                    placeholder="ex:hello"
                    onChange={(event) =>
                      this.setState({ entry: event.target.value })
                    }
                    value={this.state.entry}
                  ></textarea>
                  <br />
                  <div className="text-center text-muted">
                    you will see Transalation below.😜
                  </div>
                  <button className="btn btn-outline-dark mb-5 px-3">
                    Translate To Banana
                  </button>
                </form>
                <div className="text-center py-5 minionOutput mb-5">
                  {this.state.output}
                </div>
                <div class="minionAbout py-5">
                  <p class="px-5 text-center">
                    Are you a fan of minions? Did you know that the gibberish
                    they say is an actual language. Use the translator to
                    convert your text from English to Minion speak or Banana
                    language.
                  </p>
                </div>
              </div>
              <div class="text-muted text-right">~ done by anandtagatghar</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Minion;
