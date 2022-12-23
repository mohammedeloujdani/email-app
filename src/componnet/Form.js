import React, { useState } from "react";

import emailjs from "emailjs-com";

function Form() {

  const [success, setSuccess] = useState(false);

  //function qui envoyer une mail
  function SendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hrs53ih",
        "template_u5ikabq",
        e.target,
        "x68Gr48F29q8yQHd0"
      )
      .then(
        res=>{setSuccess(true)
        console.log(res)
        }
      )
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <div className="container">
        <div className="row align-items-stretch justify-content-center no-gutters">
          <div className="col-md-7">
            <div className="form h-100 contact-wrap p-5">
              <h3 className="text-center">Nous Contacter</h3>
              <form
                className="mb-5"
                onSubmit={SendEmail}
              >
                <div className="row">
                  <div className="col-md-6 form-group mb-3">
                    <label className="col-form-label">
                      Non & Prenom *
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Non & Prenom"
                      required
                    />
                  </div>
                  <div className="col-md-6 form-group mb-3">
                    <label className="col-form-label">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="E-mail"
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 form-group mb-3">
                    <label htmlFor="budget" className="col-form-label">
                      Sujet *
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="Sujet"
                      placeholder="Votre Sujet"
                      required
                    />
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-md-12 form-group mb-3">
                    <label htmlFor="message" className="col-form-label">
                      Message *
                    </label>
                    <textarea
                      className="form-control"
                      name="message"
                      cols="30"
                      rows="4"
                      placeholder="écrivez votre message"
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-md-5 form-group text-center">
                    <input
                      type="submit"
                      value="Envoyer"
                      className="btn btn-block btn-primary rounded-0 py-2 px-4"
                    />
                    <span className="submitting"></span>
                  </div>
                </div>
              </form>
              
              {success ? 
              <div id="form-message-success">
              Votre message a été envoyé, merci !
              </div> : ""
            }
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
