import React from "react";

export default function Auth() {
  return (
    <div>
      <div className="jumbotron-fluid container1 ">
        <div className="container">
          <div className="row header">
            <div className="col-lg-6 col-md-6 col-sm-12 offset-md-3">
              <div className="card Crypto-card">
                <div className="card-body">
                  <div className="card-title">
                    <nav>
                      <div
                        className="nav nav-tabs label"
                        id="nav-tab"
                        role="tablist"
                      >
                        <a
                          className="nav-item nav-link"
                          id="nav-home-tab1"
                          data-toggle="tab"
                          href="#nav-home1"
                          role="tab"
                          aria-controls="nav-home"
                          aria-selected="true"
                        >
                          Log In
                        </a>
                        <a
                          className="nav-item nav-link active"
                          id="nav-profile-tab1"
                          data-toggle="tab"
                          href="#nav-profile1"
                          role="tab"
                          aria-controls="nav-profile"
                          aria-selected="false"
                        >
                          Sign Up
                        </a>
                      </div>
                    </nav>
                  </div>
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <div className="card-text">
                        <div className="tab-content" id="nav-tabContent">
                          <div
                            className="tab-pane fade"
                            id="nav-home1"
                            role="tabpanel"
                            aria-labelledby="nav-home-tab1"
                          >
                            <form>
                              <label htmlFor className="text-white">
                                Your Email
                              </label>
                              <br />
                              <div className="form-group input-group">
                                <div className="input-group-prepend">
                                  <span className="input-group-text">
                                    {" "}
                                    <i className="fa fa-envelope" />{" "}
                                  </span>
                                </div>
                                <input
                                  name
                                  className="form-control"
                                  placeholder="Enter your email"
                                  type="email"
                                />
                              </div>{" "}
                              {/* form-group// */}
                              <div className="label">
                                <label htmlFor className="text-white">
                                  Your password
                                </label>
                                <br />
                                <a href="#">Forgot Password?</a>
                              </div>
                              <div className="form-group input-group">
                                <div className="input-group-prepend">
                                  <span className="input-group-text">
                                    {" "}
                                    <i className="fa fa-lock" />{" "}
                                  </span>
                                </div>
                                <input
                                  className="form-control"
                                  placeholder="Enter your password"
                                  type="password"
                                />
                              </div>{" "}
                              {/* form-group// */}
                              <div className="form-group">
                                <button type="submit" className="btn btn-block">
                                  {" "}
                                  Sign Up
                                </button>
                              </div>{" "}
                              {/* form-group// */}
                              <p className="text-center">Or</p>
                              <button className="btn btn-block btn-btn mt-4">
                                <i className="fab fa-google" />
                                &nbsp;&nbsp; Continue With Google
                              </button>
                              <button className="btn btn-block btn-btn">
                                <i className="fab fa-apple" />
                                &nbsp;&nbsp; Continue With ICloud
                              </button>
                              <div className="form-check mt-4">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue
                                  id="flexCheckChecked"
                                  defaultChecked
                                />
                                <label
                                  className="form-check-label text-gray"
                                  htmlFor="flexCheckChecked"
                                >
                                  I've read &amp; agree to the densik terms of
                                  use,, privacy policy and risk disclosure
                                  sttement
                                </label>
                              </div>
                            </form>
                          </div>
                          <div
                            className="tab-pane fade show active"
                            id="nav-profile1"
                            role="tabpanel"
                            aria-labelledby="nav-profile-tab1"
                          >
                            <form>
                              <label htmlFor className="text-white">
                                Your Email
                              </label>
                              <br />
                              <div className="form-group input-group">
                                <div className="input-group-prepend">
                                  <span className="input-group-text">
                                    {" "}
                                    <i className="fa fa-envelope" />{" "}
                                  </span>
                                </div>
                                <input
                                  name
                                  className="form-control"
                                  placeholder="Enter your email"
                                  type="email"
                                />
                              </div>{" "}
                              {/* form-group// */}
                              <div className="label">
                                <label htmlFor className="text-white">
                                  Your password
                                </label>
                                <br />
                                <a href="#">Forgot Password?</a>
                              </div>
                              <div className="form-group input-group">
                                <div className="input-group-prepend">
                                  <span className="input-group-text">
                                    {" "}
                                    <i className="fa fa-lock" />{" "}
                                  </span>
                                </div>
                                <input
                                  className="form-control"
                                  placeholder="Enter your password"
                                  type="password"
                                />
                              </div>{" "}
                              {/* form-group// */}
                              <div className="form-group">
                                <button
                                  type="submit"
                                  className="btn  btn-block"
                                >
                                  {" "}
                                  Create Account
                                </button>
                              </div>{" "}
                              {/* form-group// */}
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
}
