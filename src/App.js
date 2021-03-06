//import React from 'react';
import "./App.css";
//import React, {useState} from 'react';
//import Progress from 'react-progressbar';

const ConvertFlashtoReact = () => {
  return (
    <div className="form">
      <ContentForm />
    </div>
  );
};

const ContentForm = () => {
  const audioTune = new Audio("./sounds/150.mp3");
  //const [seconds,setTimer] = useState(0);
  //const [isActive,setActive] = useState(false);

  /*const startTimer = () => {
     const interval = setInterval(() => {
      if(!isActive)
      {
        setTimer(seconds => seconds + 1);
      }
      else clearInterval(interval);
    }, 1000);
}

const progressbar=()=>{
  return(
      <Progress completed={seconds} />
  );
}
*/

  /*const changeImage=()=>{
  startTimer();
    if(seconds == 12)
    {
      return(
        document.getElementById("image1").style.display = "none",
        document.getElementById("image2").style.display = "block"
      );
    }

}*/
  // !!! You have to use state to change visibility because it is React not raw Javascript.
  // Please see AppSuggest.js to see how to use state.
  const playSound = () => {
    audioTune.play();
    //startTimer();
    return (
      (document.getElementById("play").style.display = "none"),
      (document.getElementById("pause").style.display = "block")
    );
  };

  const pauseSound = () => {
    audioTune.pause();
    //setActive(false);
    return (
      (document.getElementById("play").style.display = "block"),
      (document.getElementById("pause").style.display = "none")
    );
  };

  // !!! start with lower case because it is event.
  const ResetSound = () => {
    audioTune.pause();
    audioTune.currentTime = 0;
    return (
      (document.getElementById("play").style.display = "block"),
      (document.getElementById("pause").style.display = "none")
    );
  };
  const conTentText = () => {
    return (
      <div className="text">
        <div>
          <p>
            <p className="color">&emsp;&emsp;상사:</p>&emsp;다시 한번 축하해요.
            프로젝트를 아주 잘 수행했어요 당신은 리더로 승진할 자격이 충
            <p>&emsp;&emsp;&emsp;&emsp;&emsp; 분히 있어요</p>
          </p>
        </div>
        <div>
          <p>
            <p className="color">&emsp;&emsp;리더:</p>&emsp;승진할 수 있도록
            적극 추천해 주셔서 감사합니다. 승진이 되어 너무 기쁩니다.{" "}
          </p>
        </div>
        <div>
          <p>
            <p className="color">남자 동료:</p>&emsp;승진을 공지하는 을 봤어. 참
            잘 됐어.
          </p>
        </div>
      </div>
    );
  };
  return (
    <div>
      <div className="row">
        <div className="formImage">
          <img alt="khung" src="./shapes/122.svg" />
        </div>
        <div className="form1" id="image1">
          <img alt="Image1" src="./images/144.jpg" />
        </div>
        <div id="play">
          <img alt="ImageBT1" src="./buttons/1.png" onClick={playSound} />
        </div>
        <div id="pause">
          <img alt="ImageBT3" src="./buttons/3.png" onClick={pauseSound} />
        </div>
        <div id="reset">
          {" "}
          <img alt="ImageBT2" src="./buttons/2.png" onClick={ResetSound} />
        </div>
      </div>
      <div className="row">
        <div className="fromtext">
          <img alt="ImageFormText" src="./images/119.png" />
        </div>
        <div className="scroll">{conTentText()}</div>
      </div>
    </div>
  );
};

export default ConvertFlashtoReact;
