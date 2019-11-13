const string = `
.skin * {
  margin: 0;
  padding: 0;
}
*,
.skin *::after,
.skin *::before {
  box-sizing: border-box;
}
.skin {
  position: relative;
  background: #ffe600;
  min-height: 50vh;
}
.eye {
  position: absolute;
  background: #2e2e2e;
  height: 64px;
  width: 64px;
  left: 50%;
  margin-left: -32px;
  top: 70px;
  border: 3px solid black;
  border-radius: 50%;
}
.eye::before {
  content: "";
  display: block;
  height: 32px;
  width: 32px;
  background: white;
  border: 3px solid black;
  border-radius: 50%;
  position: relative;
  left: 5px;
}
.eye.left {
  transform: translateX(-128px);
}
.eye.right {
  transform: translateX(128px);
}
.nose {
  position: absolute;
  width: 0px;
  height: 0px;
  top: 100px;
  left: 50%;
  margin-left: -20px;
  border: 20px solid black;
  border-radius: 17px;
  border-color: black transparent transparent transparent;
}
@keyframes noseWave {
  0% {
    transform: rotate(0deg);
  }
  33% {
    transform: rotate(5deg);
  }
  66% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.nose:hover {
  animation: noseWave 0.25s infinite linear;
}
.cheek {
  position: absolute;
  background: red;
  height: 90px;
  width: 90px;
  left: 50%;
  margin-left: -45px;
  top: 195px;
  border: 3px solid black;
  border-radius: 50%;
}
.cheek.left {
  transform: translateX(-170px);
}
.cheek > img {
  position: relative;
  left: 50%;
  top: 50%;
}

.cheek.left > img {
  transform: rotateY(180deg);
  transform-origin: 0 0;
}
.cheek.right {
  transform: translateX(170px);
}
.mouth1 {
  width: 200px;
  height: 50px;
  left: 50%;
  margin-left: -100px;
  position: relative;
  top: 150px;
  z-index: 1;
}
.lip {
  width: 100px;
  height: 25px;
  border-bottom: 3px solid black;
  position: absolute;
  background: #ffe600;
}
.lip.left {
  border-left: 3px solid black;
  border-bottom-left-radius: 100px;
  transform: rotate(-15deg);
}
.lip.right {
  border-right: 3px solid black;
  border-bottom-right-radius: 100px;
  transform: rotate(15deg);
  left: 100px;
}
.mouth2 {
  width: 160px;
  height: 190px;
  left: 50%;
  margin-left: -80px;
  top: 110px;
  position: relative;
  overflow: hidden;
}
.mouth2 > .out {
  background: #9b000a;
  width: 160px;
  height: 500px;
  bottom: 0;
  position: absolute;
  border-radius: 100px/300px;
  border: 3px solid black;
  overflow: hidden;
}
.mouth2 > .out > .in {
  background: #ff485f;
  position: absolute;
  width: 200px;
  height: 200px;
  left: 50%;
  bottom: -45px;
  margin-left: -100px;
  border-radius: 300px;
}`;

export default string;
