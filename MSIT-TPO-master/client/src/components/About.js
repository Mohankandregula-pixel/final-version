import React, { useEffect, useState } from "react";
import Table2 from "./Table2";

import { useHistory } from "react-router-dom";
import Edit from "./Edit";

// const {student, TPO} = React.createContext();

const About = () => {
  const history = useHistory();
  const [userData, setUserData] = useState({});
  const [edit, setEdit] = useState(false);

  const callAboutPage = async () => {
    try {
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "appllication/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      console.log(data);
      setUserData(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      history.push("/login");
    }
  };

  useEffect(() => {
    callAboutPage();
  }, []);

  const handleChange = (e) => {
    setUserData({ [e.target.name]: e.target.value });
    console.log(userData);
  };

  return (
    <>
      <div className="home-page">
        <div className="home-div">
          <p className="pt-5">WELCOME</p>

        </div>
      </div>

      {userData.work == "student" && (
        
        <div className="container emp-profile">
            <p className="pt-5">WELCOME</p>
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                <img src="" alt="PIC" />
              </div>
            </div>

    
            <div className="col-md-6">
              <div className="profile-head">
                <h5>{userData.name}</h5>
                <h6>{userData.work}</h6>

                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="profile-tab"
                      data-toggle="tab"
                      href="#profile"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      Details
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-2">
              
              <a href="/Update">  
                <button>Edit </button>  
              </a>

            </div>
          </div>

          <div className="row">
           
              <>
                <div className="col-md-8 pl-5 about-info">
                  <div className="tab-content profile-tab" id="myTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="home"
                      role="tabpanel"
                      aria-labelledby="home-tab"
                    >
                      <div className="row">
                        <div className="col-md-6">
                          <label>User Id</label>
                        </div>
                        <div className="col-md-6">
                          <p>787865454546</p>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-md-6">
                          <label>Name</label>
                        </div>
                        <div className="col-md-6 ">
                          <p>{userData.name}</p>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-md-6">
                          <label>Email</label>
                        </div>
                        <div className="col-md-6">
                          <p>{userData.email}</p>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-md-6">
                          <label>Phone</label>
                        </div>
                        <div className="col-md-6">
                          <p>{userData.phone}</p>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-md-6">
                          <label>Profession</label>
                        </div>
                        <div className="col-md-6">
                          <p>{userData.work}</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="profile"
                      role="tabpanel"
                      aria-labelledby="profile-tab"
                    >
                      <div className="row">
                        <div className="col-md-6">
                          <label>Btech college</label>
                        </div>
                        <div className="col-md-6">
                          <p>{userData.btech}</p>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-md-6">
                          <label>Btech score</label>
                        </div>
                        <div className="col-md-6">
                          <p>{userData.score}</p>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-md-6">
                          <label>12th Percentage</label>
                        </div>
                        <div className="col-md-6">
                          <p>{userData.twel}</p>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-md-6">
                          <label>10th CGPA</label>
                        </div>
                        <div className="col-md-6">
                          <p>{userData.tenth}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
        
          </div>
        </div>
      )}

      {userData.work == "TPO" && (
        <div className="container emp-profile">
          <h1>Student Details</h1>
          <Table2 />
        </div>
      )}
    </>
  );
};

export default About;
