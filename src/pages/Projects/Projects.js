import React, { useState, useEffect } from "react";
import "./Projects.css";
import react from "../../components/shared/UIElements/react.png";
import flask from "../../components/shared/UIElements/flask.png";
import aws from "../../components/shared/UIElements/aws.png";
import nginx from "../../components/shared/UIElements/nginx.png";
import docker from "../../components/shared/UIElements/docker.png";

const Projects = () => {
  const [show, handleShow] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 750) {
      handleShow(true);
    } else handleShow(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll",handleScroll, false);
  }
  }, []);

  return (
    <React.Fragment>
      <div className="projects">
        <div className="video">
          <iframe
            src="https://drive.google.com/file/d/1cgYe5lKUT10sQWEDFl1Yud9-rlR1NyCc/preview"
            width="640"
            height="420"
            title="medhub"
          ></iframe>
        </div>
        <div className="description">
          <h1> Medhub </h1>
          <div className="description_note">
            <p>
              In these recent times, COVID-19 has affected the general
              population very seriously. People need medical care now more than
              ever. But to get an appointment they must go a hospital and get in
              a long queue to get a slot. And sometimes till you reach the
              counter the slots are all taken. Then you must repeat the same
              procedure at different hospital till you get an appointment.
              MedHub is designed to help you with these problems so that you can
              check an empty slot for any doctor you want and book a slot. No
              waiting in long queues to reach the counter. Now you can stay home
              and stay safe and go only when there’s an appointment scheduled.
            </p>
          </div>
        </div>
      </div>
      <div className="projects_details">
        <h3>Details about the project</h3>
        <div>
          <p>
            This application allows patients to effortlessly book an appointment
            with their doctor within 15 days. After a slot is confirmed by a
            patient he/she is redirected to the payment portal where we the
            patient can pay using a variety of methods given, i.e., UPI, credit
            cards, debit cards, QR scanner, etc. All the payments are then
            transferred to the doctors account except a small amount of Rs.50
            which we charge as a convenience fee. A patient in case of emergency
            can cancel his/her appointment before 3 days to appointment. In this
            case the patient will get a partial refund, i.e., the amount he paid
            minus our convenience fee. Doctor can also take a leave between for
            a specified period during which all patients can either be
            rescheduled or cancelled as per the choice of doctor. If rescheduled
            all the patients will be moved to the nearest empty slot and be
            notified via email and on the notification bar on patient homepage.
            For some reason if a rescheduling of all patients is not possible
            due to unavailability of slots the appointments are cancelled. The
            patients whose appointments are cancelled would get a full refund
            including the convenience fee. Doctors on signup provides a proof of
            his/her medical license as an attachment. Unless the proof is
            verified the doctor is not allowed to take appointments. The doctor
            also must add his account details so that transfers can take place.
            Doctors must set their working time along with how much time they
            want to give per patient. A break time is also added which is
            optional. A doctor can only take up to 30 appointments a day. Admin
            can activate and deactivate doctors accounts in case of a dispute or
            unfair use of our application.
          </p>
        </div>
      </div>
      <div className="projects_techstack">
        <div className="head">
          <h3>MedHub Techstack</h3>
          {/* <hr className={`extend ${show && "extend_animated"} `} /> */}
        </div>
        <div className={`techs ${show && "techs_extend"} `}>
          <img id="logo1" src={react} alt="" />
          <img id="logo2" src={flask} alt="" />
          <img id="logo3" src={aws} alt="" />
          <img id="logo3" src={nginx} alt="" />
          <img id="logo3" src={docker} alt="" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Projects;
