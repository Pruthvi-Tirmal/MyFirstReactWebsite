import React, { useState } from "react";
const Contact = () => {
  const [state, setState] = useState({
    fullName: "",
    mobile: "",
    email: "",
    msg: "",
  });
  const InputEvent = (e) => {
    const { name, value } = e.target;
    setState((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      };
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `Responding To Server ...... \nFull Name : ${state.fullName}\nEmail Address : ${state.email}\nMobile Number : ${state.mobile} \n\nMessages : ${state.msg}`
    );
    setState({
      fullName: "",
      email: "",
      mobile: "",
      msg: "",
    });
  };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Your Name"
                  name="fullName"
                  value={state.fullName}
                  onChange={InputEvent}
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  required
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Your Mobile Number"
                  name="mobile"
                  value={state.mobile}
                  onChange={InputEvent}
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  required
                  placeholder="Email Address"
                  name="email"
                  value={state.email}
                  onChange={InputEvent}
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label" for="exampleFormControlTextarea1">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  required
                  name="msg"
                  value={state.msg}
                  onChange={InputEvent}
                ></textarea>
              </div>
              <div className="col-12">
                <button
                  className="btn btn-outline-info rounded-pill d-block mx-auto w-50"
                  type="submit"
                >
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
