import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import { InitialCard } from "../Components/InitialCard";
import { PlanCard } from "../Components/PlanCard";
import { Individual } from "../Components/Individual";
import { Popup } from "../Components/Popup";
import { Play } from "../Components/Play";

import image1 from "../Image/temp.jpg";
import image2 from "../Image/temp2.jpg";

import yoga_image from "../Image/Yoga.jpeg";
import chest_image from "../Image/Chest.jpg";
import shoulder_back_image from "../Image/ShoulderandBack.jpg";
import arms_image from "../Image/Arms.jpg";
import abs_image from "../Image/Abs.jpeg";
import legs_image from "../Image/Legs.jpeg";
import aerobics_image from "../Image/Aerobics.jpeg";

import arm_curl_image from "../Image/Arm Curl.jpeg";
import camel_pose_image from "../Image/CamelPose.jpg";
import core_stabilizer_image from "../Image/CoreStabilizer.jpg";
import jumping_jacks_image from "../Image/JumpingJacks.jpg";
import lunge_image from "../Image/Lunge.jpg";
import side_lateral_raise_image from "../Image/Side Lateral Raise.jpeg";
import side_lunge_image from "../Image/Side Lunge.jpeg";
import squat_image from "../Image/Squat.jpeg";
import tree_pose_image from "../Image/TreePose.jpg";
import burpee_image from "../Image/Burpee.jpeg";
import push_up_image from "../Image/PushUp.jpg";
import standing_oblique_band_image from "../Image/StandingObliqueBand.jpg";

import workout from "../Components/workout";
import workoutplan from "../Components/workoutplan";

import { fadeIn, bounce } from "react-animations";
import { StyleSheet, css } from "aphrodite";

var yoga = [new workout("Camel Pose", 45, 2), new workout("Tree Pose", 45, 2)];
var chest = [new workout("Push Up", 18, 5)];
var shoulder_back = [new workout("Side Lateral Raise", 15, 5)];
var arms = [new workout("Arm Curl", 16, 4)];
var abs = [
  new workout("Core Stabilizer", 15, 3),
  new workout("Standing Oblique Band", 15, 3),
];
var legs = [
  new workout("Squat", 20, 3),
  new workout("Lunge", 15, 2),
  new workout("Side Lunge", 10, 2),
];
var aerobics = [
  new workout("Burpee", 10, 2),
  new workout("Jumping Jacks", 15, 3),
];

// 운동계획 이름 + 운동들 리스트 자료형
var plan_yoga = new workoutplan("요가", yoga);
var plan_ches = new workoutplan("근력 (가슴)", chest);
var plan_shba = new workoutplan("근력 (어깨/등)", shoulder_back);
var plan_arms = new workoutplan("근력 (팔)", arms);
var plan_abdm = new workoutplan("근력 (복근)", abs);
var plan_legs = new workoutplan("근력 (하체)", legs);
var plan_aero = new workoutplan("유산소", aerobics);

export const Main = ({ user, handleLogout }) => {
  const [initial, setInitial] = useState(true);
  const [planned, setPlanned] = useState(false);
  const [individual, setIndividual] = useState(false);
  const [construct, setConstruct] = useState(false);
  const [workout, setWorkout] = useState(false);
  const [toggleBtn, setToggleBtn] = useState(false);
  const [workOutPlan, setWorkOutPlan] = useState(null);
  const [togglePopup, setTogglePopup] = useState(false);
  const [individualName, setIndividualName] = useState(null);

  const styles = StyleSheet.create({
    fadeIn: {
      animationName: fadeIn,
      animationDuration: "1s",
    },
    bounce: {
      animationName: bounce,
      animationDuration: "infinite",
    },
  });

  return (
    <section className="hero">
      <nav>
        <h2>Welcome, {user.email}</h2>
        <p> </p>
        <p> </p>
        <p> </p>
        <p> </p>
        <p> </p>
        <p> </p>
        <p>
          <a href="https://stayhomegetfit.quv.kr/">COMMUNITY</a>
        </p>
        <button className="btn" onClick={handleLogout}>
          Logout
        </button>
      </nav>
      <div className="container">
        <div className="left">
          {toggleBtn && (
            <IconButton
              aria-label="backBtn"
              onClick={() => {
                setInitial(true);
                setPlanned(false);
                setIndividual(false);
                setConstruct(false);
                setToggleBtn(false);
                setWorkOutPlan(null);
                setWorkout(false);
                window.location.reload(false);
              }}
            >
              <ArrowBackIcon fontSize="large" style={{ color: "white" }} />
            </IconButton>
          )}
        </div>
        <div className="main-content">
          {initial && (
            <div className="initial-card-container">
              <div
                onClick={() => {
                  setToggleBtn(true);
                  setInitial(false);
                  setPlanned(true);
                }}
              >
                <InitialCard text="계획운동" image={image1} />
              </div>
              <div
                onClick={() => {
                  setToggleBtn(true);
                  setInitial(false);
                  setIndividual(true);
                }}
              >
                <InitialCard text="개별운동" image={image2} />
              </div>
            </div>
          )}
          {planned && (
            <div className="plan-container">
              <div
                onClick={() => {
                  setPlanned(false);
                  setWorkout(true);
                  setWorkOutPlan(plan_yoga);
                }}
              >
                <PlanCard id="id1" image={yoga_image} plan={plan_yoga} />
              </div>
              <div
                onClick={() => {
                  setPlanned(false);
                  setWorkout(true);
                  setWorkOutPlan(plan_ches);
                }}
              >
                <PlanCard id="id2" image={chest_image} plan={plan_ches} />
              </div>
              <div
                onClick={() => {
                  setPlanned(false);
                  setWorkout(true);
                  setWorkOutPlan(plan_shba);
                }}
              >
                <PlanCard
                  id="id3"
                  image={shoulder_back_image}
                  plan={plan_shba}
                />
              </div>
              <div
                onClick={() => {
                  setPlanned(false);
                  setWorkout(true);
                  setWorkOutPlan(plan_arms);
                }}
              >
                <PlanCard id="id4" image={arms_image} plan={plan_arms} />
              </div>
              <div
                onClick={() => {
                  setPlanned(false);
                  setWorkout(true);
                  setWorkOutPlan(plan_abdm);
                }}
              >
                <PlanCard id="id5" image={abs_image} plan={plan_abdm} />
              </div>
              <div
                onClick={() => {
                  setPlanned(false);
                  setWorkout(true);
                  setWorkOutPlan(plan_legs);
                }}
              >
                <PlanCard id="id6" image={legs_image} plan={plan_legs} />
              </div>
              <div
                onClick={() => {
                  setPlanned(false);
                  setWorkout(true);
                  setWorkOutPlan(plan_aero);
                }}
              >
                <PlanCard id="id7" image={aerobics_image} plan={plan_aero} />
              </div>
            </div>
          )}
          {individual && (
            <div className="scrollable-container">
              <h1 className="group-name">요가: </h1>
              <div className="individual-container">
                <div style={{ display: "flex" }}>
                  <div
                    onClick={() => {
                      setIndividualName("Camel Pose");
                      setTogglePopup(true);
                    }}
                  >
                    <Individual name="Camel Pose" image={camel_pose_image} />
                  </div>
                  <div
                    onClick={() => {
                      setIndividualName("Tree Pose");
                      setTogglePopup(true);
                    }}
                  >
                    <Individual name="Tree Pose" image={tree_pose_image} />
                  </div>
                </div>
              </div>
              <h1 className="group-name">근력 (가슴): </h1>
              <div className="individual-container">
                <div style={{ display: "flex" }}>
                  <div
                    onClick={() => {
                      setIndividualName("Push Up");
                      setTogglePopup(true);
                    }}
                  >
                    <Individual name="Push Up" image={push_up_image} />
                  </div>
                </div>
              </div>
              <h1 className="group-name">근력 (어깨/등): </h1>
              <div className="individual-container">
                <div style={{ display: "flex" }}>
                  <div
                    onClick={() => {
                      setIndividualName("Side Lateral Raise");
                      setTogglePopup(true);
                    }}
                  >
                    <Individual
                      name="Side Lateral Raise"
                      image={side_lateral_raise_image}
                    />{" "}
                  </div>
                </div>
              </div>
              <h1 className="group-name">근력 (팔): </h1>
              <div className="individual-container">
                <div style={{ display: "flex" }}>
                  <div
                    onClick={() => {
                      setIndividualName("Arm Curl");
                      setTogglePopup(true);
                    }}
                  >
                    <Individual name="Arm Curl" image={arm_curl_image} />{" "}
                  </div>
                </div>
              </div>
              <h1 className="group-name">근력 (복근): </h1>
              <div className="individual-container">
                <div style={{ display: "flex" }}>
                  <div
                    onClick={() => {
                      setIndividualName("Core Stabilizer");
                      setTogglePopup(true);
                    }}
                  >
                    <Individual
                      name="Core Stabilizer"
                      image={core_stabilizer_image}
                    />{" "}
                  </div>
                  <div
                    onClick={() => {
                      setIndividualName("Standing Oblique Band");
                      setTogglePopup(true);
                    }}
                  >
                    <Individual
                      name="Standing Oblique Band"
                      image={standing_oblique_band_image}
                    />{" "}
                  </div>
                </div>
              </div>
              <h1 className="group-name">근력 (하체): </h1>
              <div className="individual-container">
                <div style={{ display: "flex" }}>
                  <div
                    onClick={() => {
                      setIndividualName("Squat");
                      setTogglePopup(true);
                    }}
                  >
                    <Individual name="Squat" image={squat_image} />{" "}
                  </div>
                  <div
                    onClick={() => {
                      setIndividualName("Lunge");
                      setTogglePopup(true);
                    }}
                  >
                    <Individual name="Lunge" image={lunge_image} />{" "}
                  </div>
                  <div
                    onClick={() => {
                      setIndividualName("Side Lunge");
                      setTogglePopup(true);
                    }}
                  >
                    <Individual name="Side Lunge" image={side_lunge_image} />{" "}
                  </div>
                </div>
              </div>
              <h1 className="group-name">유산소: </h1>
              <div className="individual-container">
                <div style={{ display: "flex" }}>
                  <div
                    onClick={() => {
                      setIndividualName("Burpee");
                      setTogglePopup(true);
                    }}
                  >
                    <Individual name="Burpee" image={burpee_image} />{" "}
                  </div>
                  <div
                    onClick={() => {
                      setIndividualName("Jumping Jacks");
                      setTogglePopup(true);
                    }}
                  >
                    <Individual
                      name="Jumping Jacks"
                      image={jumping_jacks_image}
                    />{" "}
                  </div>
                </div>
              </div>
            </div>
          )}
          {togglePopup && (
            <Popup
              name={individualName}
              togglePopUp={setTogglePopup}
              setWorkOutPlan={setWorkOutPlan}
              setWorkout={setWorkout}
              setIndividual={setIndividual}
            />
          )}
          {workout && <Play workOutPlan={workOutPlan} />}
        </div>
      </div>
    </section>
  );
};
