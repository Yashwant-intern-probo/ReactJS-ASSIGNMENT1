import React from "react";

const formElement = () => {
  const checkPassword = (pass, c_pass) => {
    if (pass !== c_pass) {
      window.alert("Password Do not match!!!!");
    }
  };

  const checkName = (_name) => {
    const regex = /^[a-zA-Z]+$/;
    if (!regex.test(_name)) {
      window.alert("Name only contains Uppercase and lowercase letter!!!");
    }
  };

  const checkPhone = (phone) => {
    const regex = /^[0-9]+$/;
    if (!regex.test(phone)) {
      window.alert("phone No. only contains numbers!!!!");
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const fname = event.target.fname.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    const pass = event.target.password.value;
    const c_pass = event.target.c_password.value;
    console.log(username, fname, email, phone, pass, c_pass);
    checkPassword(pass, c_pass);
    checkName(fname);
    checkPhone(phone);
  };

  return (
    <div>
      <form className="input_form" onSubmit={submitHandler}>
        <div>
          Username :
          <input type={"text"} name="username" maxLength={30} minLength={4} />
        </div>
        <div>
          Full Name :
          <input type={"text"} name="fname" maxLength={30} />
        </div>
        <div>
          Email :
          <input type={"email"} name="email" />
        </div>
        <div>
          Phone :
          <input type={"tel"} name="phone" maxLength={10} minLength={10} />
        </div>
        <div>
          Password :
          <input
            type={"password"}
            name="password"
            minLength={8}
            maxLength={30}
          />
        </div>
        <div>
          Confirm Password :
          <input
            type={"password"}
            name="c_password"
            minLength={8}
            maxLength={30}
          />
        </div>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default formElement;
