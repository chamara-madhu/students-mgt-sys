import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import classnames from "classnames";

import LogoCol from "./LogoCol";

function CommonLogin(props) {
  const [form, setForm] = useState({
    studs: localStorage.getItem("nos") ? localStorage.getItem("nos") : 20,
    subjects: localStorage.getItem("nosub")
      ? localStorage.getItem("nosub")
      : 10,
    semesters: localStorage.getItem("nosem")
      ? localStorage.getItem("nosem")
      : 2,

    studsErr: "",
    subjectsErr: "",
    semestersErr: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
      [e.target.name + "Err"]: "",
    });
  };

  // validate
  const validate = () => {
    let studsErr = "";
    let subjectsErr = "";
    let semestersErr = "";

    if (!form.studs || form.studs < 1) {
      studsErr = "No of students is required";
    }

    if (!form.subjects || form.subjects < 1) {
      subjectsErr = "No of subjects is required";
    }

    if (!form.semesters || form.semesters < 1) {
      semestersErr = "No of semester is required";
    }

    if (studsErr || subjectsErr || semestersErr) {
      setForm({
        ...form,
        studsErr,
        subjectsErr,
        semestersErr,
      });

      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true);

      localStorage.setItem("nos", parseInt(form.studs));
      localStorage.setItem("nosub", parseInt(form.subjects));
      localStorage.setItem("nosem", parseInt(form.semesters));

      setTimeout(() => {
        setLoading(false);
        props.history.push("/dashboard");
      }, 1000);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <LogoCol form={form} />
        <div className="col-12 col-md-6 login-reg-col">
          <div className="login-reg-container">
            <p className="heading">Set Attributes</p>
            <h1 className="records">
              Records : {form.studs * form.subjects * form.semesters * 12}
            </h1>

            <form noValidate>
              <div className="form-group p-0 mb-3">
                <label htmlFor="studs">No of Students</label>
                <input
                  type="number"
                  className={classnames("form-control", {
                    "is-invalid": form.studsErr,
                  })}
                  id="studs"
                  name="studs"
                  onChange={handleChange}
                  value={form.studs}
                  min="1"
                />
                <div className="invalid-feedback">{form.studsErr}</div>
              </div>
              <div className="form-group p-0 mb-3">
                <label htmlFor="subjects">No of Subjects</label>
                <input
                  type="number"
                  className={classnames("form-control", {
                    "is-invalid": form.subjectsErr,
                  })}
                  id="subjects"
                  name="subjects"
                  onChange={handleChange}
                  value={form.subjects}
                  min="1"
                />
                <div className="invalid-feedback">{form.subjectsErr}</div>
              </div>
              <div className="form-group p-0 mb-3">
                <label htmlFor="semesters">No of Semesters</label>
                <input
                  type="number"
                  className={classnames("form-control", {
                    "is-invalid": form.semestersErr,
                  })}
                  id="semesters"
                  name="semesters"
                  onChange={handleChange}
                  value={form.semesters}
                  min="1"
                />
                <div className="invalid-feedback">{form.semestersErr}</div>
              </div>
              <div className="form-group p-0 mb-0">
                <label htmlFor="years">No of Years / Grades</label>
                <input
                  type="number"
                  className="form-control"
                  id="years"
                  value={12}
                  disabled
                />
              </div>

              <button
                type="submit"
                className="btn-submit"
                onClick={handleSubmit}
              >
                {loading ? (
                  <div
                    className="spinner-border spinner-border-sm text-light"
                    role="status"
                  >
                    <span className="sr-only">Loading...</span>
                  </div>
                ) : null}
                {loading ? (
                  ""
                ) : (
                  <span>
                    GO <i class="fas fa-angle-right"></i>
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(CommonLogin);
