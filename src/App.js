
import React, { useState } from "react";

function App() {

  const [userinfo, setUserInfo] = useState("");
  const [userspirit, setUserSpirit] = useState({ spirit:[] });
  const [userlevel, setUserLevel] = useState({ level:[] });

  const displayInfo = () => {
    console.log (userinfo);
  }


  const handleSpiritChange = (e) => {
    const { value, checked } = e.target;
    const { spirit} = userspirit;

    console.log("hello from here");
    console.log(`${value} is ${checked}`);

  // Case 1 : The user checks the box
    if (checked) {
      setUserSpirit({
        spirit: [...spirit, value]
      });
    }

  // Case 2  : The user unchecks the box
    else {
      setUserSpirit({
        spirit: spirit.filter((e) => e !== value)
      });
    }
  };

  const handleLevelChange = (e) => {
    const { value, checked } = e.target;
    const { level} = userlevel;

    console.log("hello from level");
    console.log(`${value} is ${checked}`);

  // Case 1 : The user checks the box
    if (checked) {
      setUserLevel({
        level: [...level, value]
      });
    }

  // Case 2  : The user unchecks the box
    else {
      setUserLevel({
        level: level.filter((e) => e !== value)
      });
    }
  };

  return (
    <div className="App">
        <h1 className= "ml-5 mt-2">WePlay</h1>


       <div className="container-fluid top ">
        <div className="container mt-5  pb-5 pt-5">

          <h3 className="form-head-contact-h3 ">
            About you
          </h3>
          <label for="exampleFormControlTextarea1" class="form-label">Tell other players what you like!</label>
          <textarea class="form-control mb-5" id="exampleFormControlTextarea1" rows="3"
          onChange={(event) => {setUserInfo(event.target.value);
          }}></textarea>

          <h3 className="form-head-contact-h3 ">
            What is your level?
          </h3>
        <form>
            <div className="row">
              <div className="col-md-6">
                <div className="form-check m-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="level"
                    value="Beginner"
                    id="flexCheckDefault"
                    onChange={handleLevelChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                      Beginner
                  </label>
                </div>
                <div className="form-check m-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="level"
                    value="Intermediate"
                    id="flexCheckDefault"
                    onChange={handleSpiritChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                      Intermediate
                  </label>
                </div>
                <div className="form-check m-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="level"
                    value="Advanced"
                    id="flexCheckDefault"
                    onChange={handleSpiritChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                     Advanced
                  </label>
                </div>
              </div>
            </div>
          </form>

          <h3 className="form-head-contact-h3 ">
            In what spirit do you like to play?{" "}
          </h3>

          <form>
            <div className="row">
              <div className="col-md-6">
                <div className="form-check m-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="spirit"
                    value="Fun"
                    id="flexCheckDefault"
                    onChange={handleSpiritChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                      Fun
                  </label>
                </div>
                <div className="form-check m-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="spirit"
                    value="Sweat"
                    id="flexCheckDefault"
                    onChange={handleSpiritChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                      Sweat
                  </label>
                </div>
              </div>
            </div>
            <button onClick= {displayInfo} type="button" class="btn btn-primary mt-3">Save profile</button>
          </form>
        </div>
       </div>
      </div>
  );
}

export default App;
