import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import { InitialCard } from "../Components/InitialCard";
import { PlanCard } from "../Components/PlanCard";
import { Individual } from "../Components/Individual";
import { Popup } from "../Components/Popup";
import { Play } from "../Components/Play";

// 사진 링크 추가 자리
import image1 from "../Image/temp.jpg";
import image2 from "../Image/temp2.jpg";

import workout from "../Components/workout";
import workoutplan from "../Components/workoutplan";

// 운동계획들 리스트. *이름은 Play.js에 있는 이름과 같아야함
var premade1 = [
  new workout("Burpy", 15, 3),
  new workout("Side Lateral Raise", 15, 3),
  new workout("Jumping Jacks", 15, 3),
];

// 운동계획 이름 + 운동들 리스트 자료형
var workoutplan1 = new workoutplan("1번 운동계획", premade1);

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
              <div
                onClick={() => {
                  setToggleBtn(true);
                  setInitial(false);
                  setConstruct(true);
                }}
              >
                <InitialCard text="코스짜기" image={image1} />
              </div>
            </div>
          )}
          {planned && (
            <div className="plan-container">
              {/* 여기서부터 */}
              <div
                onClick={() => {
                  setPlanned(false);
                  setWorkout(true);
                  setWorkOutPlan(workoutplan1); // 위에서 새로 만든 workoutplan 값으로 변경
                }}
              >
                {/* 사진 교체 및 플랜을 위에 만든 workoutplan 자료형으로 교체 */}
                <PlanCard id="id1" image={image1} plan={workoutplan1} />
              </div>
              {/* 여기까지가 버튼 하나 아래는 위 코드 반복. 만든 운동계획만큼 하면 됌*/}
              <div
                onClick={() => {
                  setPlanned(false);
                  setWorkout(true);
                  setWorkOutPlan(workoutplan1);
                }}
              >
                <PlanCard id="id2" image={image2} plan={workoutplan1} />
              </div>
              <div
                onClick={() => {
                  setPlanned(false);
                  setWorkout(true);
                  setWorkOutPlan(workoutplan1);
                }}
              >
                <PlanCard id="id3" image={image1} plan={workoutplan1} />
              </div>
              <div
                onClick={() => {
                  setPlanned(false);
                  setWorkout(true);
                  setWorkOutPlan(workoutplan1);
                }}
              >
                <PlanCard id="id4" image={image2} plan={workoutplan1} />
              </div>
            </div>
          )}
          {individual && (
            <div className="scrollable-container">
              {/* 여기서 부터 */}
              <h1 className="group-name">요가: </h1> {/* 운동 카테고리 이름 */}
              <div className="individual-container">
                <div style={{ display: "flex" }}>
                  <div
                    onClick={() => {
                      setIndividualName("Push Up");
                      {
                        /* 운동 이름 play.js에서 입력할 값이랑 같아야함 */
                      }
                      setTogglePopup(true);
                    }}
                  >
                    <Individual name="Side Lateral Raise" image={image1} />{" "}
                    {/* 운동 이름 + 사진교체 */}
                  </div>
                  <div
                    onClick={() => {
                      setIndividualName("Push Up");
                      setTogglePopup(true);
                    }}
                  >
                    <Individual name="Side Lateral Raise" image={image1} />
                  </div>
                  <div
                    onClick={() => {
                      setIndividualName("Push Up");
                      setTogglePopup(true);
                    }}
                  >
                    <Individual name="Side Lateral Raise" image={image1} />
                  </div>
                  <div
                    onClick={() => {
                      setIndividualName("Push Up");
                      setTogglePopup(true);
                    }}
                  >
                    <Individual name="Side Lateral Raise" image={image1} />
                  </div>
                  <div
                    onClick={() => {
                      setIndividualName("Push Up");
                      setTogglePopup(true);
                    }}
                  >
                    <Individual name="Side Lateral Raise" image={image1} />
                  </div>
                </div>
              </div>
              {/* 여기까지가 한 카테고리*/}
              <h1 className="group-name">요가: </h1> {/* 운동 카테고리 이름 */}
              <div className="individual-container">
                <div style={{ display: "flex" }}>
                  <div
                    onClick={() => {
                      setIndividualName("Push Up");
                      {
                        /* 운동 이름 play.js에서 입력할 값이랑 같아야함 */
                      }
                      setTogglePopup(true);
                    }}
                  >
                    <Individual name="Side Lateral Raise" image={image1} />{" "}
                    {/* 운동 이름 + 사진교체 */}
                  </div>
                  <div
                    onClick={() => {
                      setIndividualName("Push Up");
                      setTogglePopup(true);
                    }}
                  >
                    <Individual name="Side Lateral Raise" image={image1} />
                  </div>
                  <div
                    onClick={() => {
                      setIndividualName("Push Up");
                      setTogglePopup(true);
                    }}
                  >
                    <Individual name="Side Lateral Raise" image={image1} />
                  </div>
                  <div
                    onClick={() => {
                      setIndividualName("Push Up");
                      setTogglePopup(true);
                    }}
                  >
                    <Individual name="Side Lateral Raise" image={image1} />
                  </div>
                  <div
                    onClick={() => {
                      setIndividualName("Push Up");
                      setTogglePopup(true);
                    }}
                  >
                    <Individual name="Side Lateral Raise" image={image1} />
                  </div>
                </div>
              </div>
              <h1 className="group-name">요가: </h1> {/* 운동 카테고리 이름 */}
              <div className="individual-container">
                <div style={{ display: "flex" }}>
                  <div
                    onClick={() => {
                      setIndividualName("Push Up");
                      {
                        /* 운동 이름 play.js에서 입력할 값이랑 같아야함 */
                      }
                      setTogglePopup(true);
                    }}
                  >
                    <Individual name="Side Lateral Raise" image={image1} />{" "}
                    {/* 운동 이름 + 사진교체 */}
                  </div>
                  <div
                    onClick={() => {
                      setIndividualName("Push Up");
                      setTogglePopup(true);
                    }}
                  >
                    <Individual name="Side Lateral Raise" image={image1} />
                  </div>
                  <div
                    onClick={() => {
                      setIndividualName("Push Up");
                      setTogglePopup(true);
                    }}
                  >
                    <Individual name="Side Lateral Raise" image={image1} />
                  </div>
                  <div
                    onClick={() => {
                      setIndividualName("Push Up");
                      setTogglePopup(true);
                    }}
                  >
                    <Individual name="Side Lateral Raise" image={image1} />
                  </div>
                  <div
                    onClick={() => {
                      setIndividualName("Push Up");
                      setTogglePopup(true);
                    }}
                  >
                    <Individual name="Side Lateral Raise" image={image1} />
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
