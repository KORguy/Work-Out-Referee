import React, { useEffect, useRef, useState } from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import { Loading } from "./Loading";
import { Transition } from "./Transition";
import * as tmPose from "@teachablemachine/pose";
import "../App.css";
import HelpIcon from "@material-ui/icons/Help";
import IconButton from "@material-ui/core/IconButton";

import mdl from "./mdl";
import workoutplan from "./workoutplan";
var modelDict = {};

// 요가
modelDict["Camel Pose"] = new mdl(
  "https://teachablemachine.withgoogle.com/models/FjIBLMmL0/",
  null
);
modelDict["Tree Pose"] = new mdl(
  "https://teachablemachine.withgoogle.com/models/KYxbd5TqN/",
  null
);
// 근력 (가슴)
modelDict["Push Up"] = new mdl(
  "https://teachablemachine.withgoogle.com/models/azqsp2tS5/",
  null
);
// 근력 (어깨/등)
modelDict["Side Lateral Raise"] = new mdl(
  "https://teachablemachine.withgoogle.com/models/RLRTVw9cY/",
  null
);
// 근력 (팔)
modelDict["Arm Curl"] = new mdl(
  "https://teachablemachine.withgoogle.com/models/QFANgyRXT/",
  null
);
// 근력 (복근)
modelDict["Core Stabilizer"] = new mdl(
  "https://teachablemachine.withgoogle.com/models/bzH7x9CDk/",
  null
);
modelDict["Standing Oblique Bend"] = new mdl(
  "https://teachablemachine.withgoogle.com/models/x8jXb3Rj-/",
  null
);
// 근력 (하체)
modelDict["Squat"] = new mdl(
  "https://teachablemachine.withgoogle.com/models/LXqPPixvv/",
  null
);
modelDict["Lunge"] = new mdl(
  "https://teachablemachine.withgoogle.com/models/b_pil1Rp-/",
  null
);
modelDict["Side Lunge"] = new mdl(
  "https://teachablemachine.withgoogle.com/models/ehFKe4ksY/",
  null
);
// 유산소
modelDict["Burpee"] = new mdl(
  "https://teachablemachine.withgoogle.com/models/Le0GKoUbo/",
  null
);
modelDict["Jumping Jacks"] = new mdl(
  "https://teachablemachine.withgoogle.com/models/gxMzBpeb4/",
  null
);

export const Play = ({ workOutPlan }) => {
  let obj = JSON.parse(JSON.stringify(workOutPlan));
  const [workout, setWorkOut] = useState(new workoutplan(obj.name, obj.list));
  const [current, setCurrent] = useState(workout.list[workOutPlan.pointer]);
  const [next, setNext] = useState(workout.next());
  const { width, height } = useWindowSize();
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(true);
  const [webcamLoaded, setWebcamLoaded] = useState(false);
  const [currentModel, setCurrentModel] = useState();
  const [transition, setTransition] = useState(false);
  const [webcam, setWebcam] = useState(new tmPose.Webcam(500, 500, true));
  const [duration, setDuration] = useState(30);
  let ctx;
  let cnt = 0;
  let poseOn = false;
  const cntRef = useRef(cnt);
  let cntContainer;
  let startTime, endTime;
  let curPose;

  const newTab = () => {
    window.open("https://stayhomegetfit.quv.kr/4", "_blank");
  };

  const move = () => {
    let current = workout.pop();
    cntRef.current = 0;
    setCurrent(current);
    setNext(workout.next());
    if (!current) {
      webcam.pause();
      webcam.stop();
      alert("축하합니다. 운동을 완료하셨습니다.");
      setDone(true);
    } else {
      setTransition(true);
      setTimeout(function () {
        if (currentModel === modelDict[current.name].model) {
          setCurrentModel(null);
        }
        setCurrentModel(modelDict[current.name].model);
        cntContainer = document.getElementById("count");
        cntContainer.innerHTML = cntRef.current + "/" + current.frequency;
      }, duration * 1000);
      // cntContainer = document.getElementById("count");
      // cntContainer.innerHTML = cntRef.current + "/" + current.frequency;
      // setCurrentModel(modelDict[current.name].model);
    }
  };

  useEffect(() => {
    // Loading Models
    console.log("loading models");
    loadModels();
    setUpCam();
  }, []);

  useEffect(() => {
    if (!currentModel) return;
    if (!webcamLoaded) return;
    setLoading(false);
    init();
  }, [currentModel, webcamLoaded]);

  // Function to load all the models in advance
  async function loadModels() {
    for (var i = 0; i < workout.list.length; i++) {
      let temp = modelDict[workout.list[i].name];
      const modelURL = temp.link + "model.json";
      const metadataURL = temp.link + "metadata.json";
      modelDict[workout.list[i].name].model = await tmPose.load(
        modelURL,
        metadataURL
      );
    }
    console.log("All Models Loaded");
    setCurrentModel(modelDict[current.name].model);
  }

  const setUpCam = async () => {
    await webcam.setup();
    webcam.play();
    setWebcamLoaded(true);
  };

  async function init() {
    window.requestAnimationFrame(loop);

    cntContainer = document.getElementById("count");

    const canvas = document.getElementById("canvas");
    canvas.width = 500;
    canvas.height = 500;
    ctx = canvas.getContext("2d");
  }

  async function loop(timestamp) {
    webcam.update();
    startTime = new Date().getTime();
    await predict();
    if (cntRef.current < current.frequency) {
      window.requestAnimationFrame(loop);
    } else {
      move();
    }
  }

  async function predict() {
    const { pose, posenetOutput } = await currentModel.estimatePose(
      webcam.canvas
    );
    const prediction = await currentModel.predict(posenetOutput);

    // Camel Pose
    if (current.name === "Camel Pose") {
      // console.log(
      //   prediction[0].className + " : " + prediction[0].probability.toFixed(2)
      // );
      // console.log(
      //   prediction[1].className + " : " + prediction[1].probability.toFixed(2)
      // );
      if (prediction[0].probability.toFixed(1) > 0.98) {
        endTime = new Date().getTime();
        cntRef.current += (endTime - startTime) / 1000;
      }
      cntContainer.innerHTML =
        cntRef.current.toFixed(1) + "/" + current.frequency + "sec";
    }

    // Tree Pose
    if (current.name === "Tree Pose") {
      // console.log(
      //   prediction[0].className + " : " + prediction[0].probability.toFixed(2)
      // );
      // console.log(
      //   prediction[1].className + " : " + prediction[1].probability.toFixed(2)
      // );
      if (prediction[0].probability.toFixed(1) > 0.98) {
        endTime = new Date().getTime();
        cntRef.current += (endTime - startTime) / 1000;
      }
      cntContainer.innerHTML =
        cntRef.current.toFixed(1) + "/" + current.frequency + "sec";
    }

    // Push Up & Squat & Side Lunge & Squat & Side Lateral Raise & Lunge
    if (
      current.name === "Push Up" ||
      current.name === "Squat" ||
      current.name === "Side Lunge" ||
      current.name === "Squat" ||
      current.name === "Side Lateral Raise" ||
      current.name === "Lunge" ||
      current.name === "Arm Curl"
    ) {
      // console.log(
      //   prediction[0].className + " : " + prediction[0].probability.toFixed(2)
      // );
      // console.log(
      //   prediction[1].className + " : " + prediction[1].probability.toFixed(2)
      // );
      if (prediction[0].probability.toFixed(2) > 0.9 && poseOn === false) {
        poseOn = true;
      } else if (
        prediction[1].probability.toFixed(2) >= 0.9 &&
        poseOn === true
      ) {
        poseOn = false;
        cntRef.current += 1;
      }
      cntContainer.innerHTML = cntRef.current + "/" + current.frequency;
    }

    // Standing Oblique Bend & Jumping Jacks & Core Stabilizer
    if (
      current.name === "Standing Oblique Bend" ||
      current.name === "Jumping Jacks" ||
      current.name === "Core Stabilizer"
    ) {
      // console.log(
      //   prediction[0].className + " : " + prediction[0].probability.toFixed(2)
      // );
      // console.log(
      //   prediction[1].className + " : " + prediction[1].probability.toFixed(2)
      // );
      if (prediction[0].probability.toFixed(2) > 0.9 && poseOn === false) {
        poseOn = true;
      } else if (
        prediction[1].probability.toFixed(2) >= 0.9 &&
        poseOn === true
      ) {
        poseOn = false;
        cntRef.current += 1;
      }
      cntContainer.innerHTML = cntRef.current + "/" + current.frequency;
    }

    // Burpee
    if (current.name === "Burpee") {
      // console.log(
      //   prediction[0].className + " : " + prediction[0].probability.toFixed(2)
      // );
      // console.log(
      //   prediction[1].className + " : " + prediction[1].probability.toFixed(2)
      // );
      if (prediction[1].probability.toFixed(2) > 0.9 && curPose === 2) {
        curPose = 1;
      } else if (prediction[0].probability.toFixed(2) > 0.9 && curPose === 1) {
        curPose = 0;
      } else if (prediction[2].probability.toFixed(2) > 0.9 && curPose === 0) {
        curPose = 2;
        cntRef.current += 1;
      }
      cntContainer.innerHTML = cntRef.current + "/" + current.frequency;
    }

    drawPose(pose);
  }

  function drawPose(pose) {
    ctx.drawImage(webcam.canvas, 0, 0);
    if (pose) {
      const minPartConfidence = 0.5;
      tmPose.drawKeypoints(pose.keypoints, minPartConfidence, ctx);
      tmPose.drawSkeleton(pose.keypoints, minPartConfidence, ctx);
    }
  }

  return (
    <div>
      {done && <Confetti width={width} height={height} />}
      {loading && <Loading />}
      {transition && (
        <Transition duration={duration} setTransition={setTransition} />
      )}
      <div className="play-container">
        <canvas id="canvas"></canvas>
        <div>
          <div className="process">
            <h2>NEXT:</h2>
            <h1>{next}</h1>
            <p> .</p>
            <p> .</p>
            <p> .</p>
            <p> .</p>
            <h1 id="count"></h1>
          </div>
          <button
            className="skip-button"
            onClick={() => {
              cntRef.current = 10000;
            }}
          >
            Skip
          </button>
        </div>
      </div>
      <IconButton onClick={() => newTab()} style={{ marginLeft: "10%" }}>
        <HelpIcon style={{ color: "white" }} />
      </IconButton>
    </div>
  );
};
