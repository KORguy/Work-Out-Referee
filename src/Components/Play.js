import React, { useEffect } from "react";
import * as tmPose from "@teachablemachine/pose";
import "../App.css";

import mdl from "./mdl";

var modelDict = {};

// 여기에 모델별 링크달기, (null은 실제로 로딩된 모델 넣을 자리)
modelDict["Side Lateral Raise"] = new mdl(
  "https://teachablemachine.withgoogle.com/models/Le0GKoUbo/",
  null
);
modelDict["Burpy"] = new mdl(
  "https://teachablemachine.withgoogle.com/models/Le0GKoUbo/",
  null
);
modelDict["Jumping Jacks"] = new mdl(
  "https://teachablemachine.withgoogle.com/models/gxMzBpeb4/",
  null
);

export const Play = ({ workOutPlan }) => {
  let model, webcam, ctx, maxPredictions;

  // Function to load all the models in advance
  async function loadModels(URL, mdl) {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";
    mdl.setModel(await tmPose.load(modelURL, metadataURL));
  }

  async function init() {
    // Loading Models
    console.log("loading models");
    for (var i = 0; i < workOutPlan.list.length; i++) {
      let temp = modelDict[workOutPlan.list[i].name];
      await loadModels(temp.link, temp);
    }
    console.log("loading completed");

    // Set up webcam
    const flip = true;
    webcam = new tmPose.Webcam(500, 500, flip);
    await webcam.setup();
    webcam.play();

    model = modelDict[workOutPlan.list[0].name].model;
    maxPredictions = model.getTotalClasses();

    window.requestAnimationFrame(loop);

    const canvas = document.getElementById("canvas");
    canvas.width = 500;
    canvas.height = 500;
    ctx = canvas.getContext("2d");
  }

  async function loop(timestamp) {
    webcam.update();
    await predict();
    window.requestAnimationFrame(loop);
  }

  async function predict() {
    const { pose, posenetOutput } = await model.estimatePose(webcam.canvas);
    const prediction = await model.predict(posenetOutput);

    for (let i = 0; i < maxPredictions; i++) {
      console.log(
        prediction[i].className + ": " + prediction[i].probability.toFixed(2)
      );
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

  useEffect(() => {
    init();
  }, []);

  return (
    <div className="play-container">
      <canvas id="canvas"></canvas>
      <div className="process">
        <h2>NEXT:</h2>
        <h1>Jumping Jacks</h1>
        <p> .</p>
        <p> .</p>
        <p> .</p>
        <p> .</p>
        <h1>Count / 15</h1>
      </div>
    </div>
  );
};
