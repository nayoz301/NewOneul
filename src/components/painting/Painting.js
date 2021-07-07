import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import MusicModal from "../modals/MusicModal";
import "./Painting.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaintBrush,
  faFillDrip,
  faEraser,
} from "@fortawesome/free-solid-svg-icons";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import {
  faImage as farImage,
  faFile as farFile,
  faStickyNote as farStickyNote,
} from "@fortawesome/free-regular-svg-icons";
import { fontSize } from "react-icons-kit/icomoon";
let arr_Colors = [
  "#e32119",
  "#ff3b30",
  "#f65314",
  "#ff9900",
  "#fbb034",
  "#fdbd10",
  "#ffcc00",
  "#ffdd00",
  "#d2ea32",
  "#8ee000",
  "#6cc644",
  "#2dbe60",
  "#00b22d",
  "#5ec6f2",
  "#00a4e4",
  "#4285f4",
  "#147efb",
  "#0064d2",
  "#5856d6",
  "#833ab4",
  "#8a7967",
  "#7f7f7f",
  "white",
  "#2c2c2c",
];

const Painting = (props) => {
  const [filling, setFilling] = useState(false);
  const [painting, setPainting] = useState(false);
  const [eraser, setEraser] = useState(false);
  const [erasing, setErasing] = useState(false);
  const [lineWeight, setLineWeight] = useState(2.5);

  const canvasRef = useRef(null);
  const ctx = useRef();
  const fileRef = useRef();

  const BASE_COLOR = "2c2c2c";
  const CANVAS_WIDTH = 1000;
  const CANVAS_HEIGHT = 600;

  const canvas = canvasRef.current;

  //세이브파일 구현 완료
  const [selectedFile, setSelectedFile] = useState(null);
  function handleUploadClick(e) {
    setSelectedFile(e.target.files[0]);
  }
  // const handlePost = async () => { //이건 그냥 업로드할 때 쓰는 함수
  //   if (selectedFile) {
  //     const img = new FormData();
  //     img.append("file", selectedFile);

  //     await axios
  //       .post("http://localhost:4000/upload", img, {
  //         header: {
  //           "content-type": "multipart/form-data",
  //           credentials: true,
  //         },
  //       })
  //       .then((res) => {
  //         alert("파일이 성공적으로 저장되었습니다. 글을 작성해주세요");
  //       })
  //       .catch((err) => {
  //         alert("파일이 저장되지 않았습니다. 다시 시도해주세요");
  //       });
  //   } else {
  //     alert("파일을 업로드해주세요");
  //   }
  // };

  function handleFileUpload() {
    console.log(canvasRef.current);
    canvasRef.current.toBlob(
      function (blob) {
        const img = new FormData();
        img.append("file", blob, `${Date.now()}.jpeg`);
        console.log(blob);
        axios
          .post("http://localhost:4000/upload", img, {
            header: {
              "content-type": "multipart/form-data",
              credentials: true,
            },
          })
          .then((res) => {
            alert("파일이 성공적으로 저장되었습니다. 글을 작성해주세요");
          })
          .catch((err) => {
            alert("파일이 저장되지 않았습니다. 다시 시도해주세요");
          });
      },
      "image/jpeg",
      0.8 //내릴수록 화질 안좋고 용량 줄어듦
    );
  }

  // const updateCanvas = async (e) => { //이거랑 handleInsertImage 차이 알아보기 이건 한번에 삽입이 안되고 그건 한번에 가능
  //   setSelectedFile(e.target.files[0]);
  //   e.preventDefault();
  //   let reader = new FileReader();
  //   let file = e.target.files[0];
  //   console.log(reader);
  //   reader.onloadend = () => {
  //     setPreviewURL(reader.result);
  //   };
  //   reader.readAsDataURL(file);
  //   const ctx = canvasRef.current.getContext("2d");
  //   const img = new Image();
  //   img.crossOrigin = "Anonymus";
  //   img.src = previewURL;
  //   img.onload = () => {
  //     ctx.drawImage(img, 0, 0, 700, 400);
  //   };
  // };

  function handleInsertImage(e) {
    e.preventDefault();
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    var reader = new FileReader();
    reader.onload = function (event) {
      var img = new Image();
      img.onload = function () {
        ctx.drawImage(img, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(e.target.files[0]);
  }
  //세이프파일 구현 완료
  //이미지 혹은 그림판 선택 버튼

  const [previewURL, setPreviewURL] = useState(null);
  const [whichOne, setWhichOne] = useState("canvas");
  const whichOneFunc = (e) => {
    //useState에 의해서 버튼 innerText 변환 함수
    console.log(e.target.innerText);
    if (whichOne === "canvas") {
      setWhichOne("picture");
    } else {
      setWhichOne("canvas");
    }
  };

  // const handleImgPreview = (e) => {
  //   setSelectedFile(e.target.files[0]);
  //   e.preventDefault();
  //   let reader = new FileReader();
  //   let file = e.target.files[0];
  //   console.log(reader);
  //   reader.onloadend = () => {
  //     setPreviewURL(reader.result);
  //   };
  //   reader.readAsDataURL(file);
  // };

  // let $preview = null;
  // if (previewURL) {
  //   $preview = <img src={previewURL} />;
  // } else {
  //   $preview = (
  //     <div className="previewText">Please select an Image for Preview</div>
  //   );
  // }

  // let profile_preview = null;
  // if (selectedFile !== "") {
  //   profile_preview = <img className="profile_preview" src={previewURL}></img>;

  // }
  //이미지 혹은 그림판 선택 버튼

  //내꺼
  const startPainting = () => {
    if (eraser === true) {
      setPainting(false);
      setErasing(true);
      setFilling(false);
    } else {
      setPainting(true);
      setErasing(false);
    }
    console.log(
      "eraser::",
      eraser,
      "erasing::",
      erasing,
      "painting::",
      painting,
      "filling::",
      filling
    );
  };

  const stopPainting = () => {
    setPainting(false);
    setErasing(false);
  };

  const handlePaintClick = (e) => {
    ctx.current.lineWidth = lineWeight;
    setFilling(false);
    setEraser(false);
    setErasing(false);
    console.log(
      "페인팅:",
      painting,
      "필링:",
      filling,

      "Eraser::",
      eraser,
      "Erasing:",
      erasing
    );
  };

  const handleClearClick = () => {
    ctx.current.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  };

  function handleFillClick() {
    setFilling(true);
    setPainting(false);
    setEraser(false);
    setErasing(false);
  }

  // function getMouesPosition(e) {
  //   var mouseX = ((e.offsetX * canvas.width) / canvas.clientWidth) | 0;
  //   var mouseY = ((e.offsetY * canvas.height) / canvas.clientHeight) | 0;
  //   return { x: mouseX, y: mouseY };
  // }

  const onMouseMove = ({ nativeEvent }) => {
    const getMouesPosition = (nativeEvent) => {
      var mouseX =
        ((nativeEvent.offsetX * canvas.width) / canvas.clientWidth) | 0;
      var mouseY =
        ((nativeEvent.offsetY * canvas.height) / canvas.clientHeight) | 0;
      return { x: mouseX, y: mouseY };
    };
    const canvas = canvasRef.current;
    const canvasBounds = canvasRef.current.getBoundingClientRect();
    // const x = getMouesPosition(nativeEvent).x;
    // const y = getMouesPosition(nativeEvent).y;

    // const x = nativeEvent.offsetX;
    // const y = nativeEvent.offsetY;

    // let x = nativeEvent.clientX - canvasBounds.left;
    // let y = nativeEvent.clientY - canvasBounds.top;
    // let x = nativeEvent.clientX - canvas.offsetLeft;
    // let y = (nativeEvent.clientY - canvas.offsetTop)height;
    // const x = (nativeEvent.offsetX / canvas.clientWidth) * 2 - 1;
    // const y = (1 - nativeEvent.offsetY / canvas.clientHeight) * 2 - 1;
    // let x = nativeEvent.clientX - canvas.offsetLeft;
    // let y = (nativeEvent.clientY - canvas.offsetTop)height;

    // var sx = canvas.width / window.innerWidth;
    // var sy = canvas.height / window.innerHeight;

    // let x = (nativeEvent.clientX - canvasBounds.left) / sx;
    // let y = (nativeEvent.clientY - canvasBounds.top) / sy;

    // var mouseX = nativeEvent.clientX - ctx.canvas.offsetLeft;
    // var mouseY = nativeEvent.clientY - ctx.canvas.offsetTop;

    // console.log(
    //   "무브마우스",
    //   getMouesPosition(nativeEvent),
    //   window.innerWidth,
    //   canvas.offsetLeft,
    //   canvas.clientHeight,
    //   window.innerWidth,
    //   canvas.width,
    //   nativeEvent.offsetX,
    //   nativeEvent.clientX,
    //   canvasBounds,
    //   canvasBounds.left,
    //   canvas.offsetBottom //캔버스안에서 탑 레프트 무조건 0
    // );

    if (ctx && !painting && !erasing) {
      ctx.current.beginPath();
      console.log("CTX", ctx.current.beginPath());
      // ctx.current.moveTo(x, y);
    } else if (painting) {
      ctx.current.globalCompositeOperation = "source-over";
      ctx.current.lineTo(
        getMouesPosition(nativeEvent).x,
        getMouesPosition(nativeEvent).y
      );
      ctx.current.stroke();
      console.log("x,y", nativeEvent.offsetX, nativeEvent.offsetY);
    } else if (erasing) {
      ctx.current.globalCompositeOperation = "destination-out";
      ctx.current.lineWidth = 15;
      ctx.current.beginPath();
      console.log("비긴패스", ctx.current.beginPath());
      ctx.current.arc(
        getMouesPosition(nativeEvent).x,
        getMouesPosition(nativeEvent).y,
        10,
        0,
        4 * Math.PI
      );
      ctx.current.fill();
      ctx.current.moveTo(
        getMouesPosition(nativeEvent).x,
        getMouesPosition(nativeEvent).y
      );
      ctx.current.lineTo(
        getMouesPosition(nativeEvent).x,
        getMouesPosition(nativeEvent).y
      );
      ctx.current.stroke();
    }
  };
  const handleEraserClick = () => {
    setEraser(true);
  };

  //내꺼

  const handleColorClick = (e) => {
    console.log("버튼 컬러클릭");
    const color = e.target.style.backgroundColor;
    ctx.current.strokeStyle = color;
    ctx.current.fillStyle = color;
  };

  const handleRangeChange = (e) => {
    setLineWeight(e.target.value);
    console.log("선 굵기:::", lineWeight);
    ctx.current.lineWidth = lineWeight;
  };

  const handleCanvasClick = () => {
    if (filling) {
      // ctx.current.fillStyle = "black";
      ctx.current.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); //사이즈 수정 필요
    }
  };

  const disableRightClick = (e) => {
    e.preventDefault(); //우클릭 방지 ㅋㅋ
  };

  const handleFileButtonClick = (e) => {
    //파일업로드 버튼
    e.preventDefault();
    fileRef.current.click(); // file 불러오는 버튼을 대신 클릭함
  };

  useEffect(() => {
    const canvas = canvasRef.current;

    canvas.style.width = "100%";
    canvas.style.height = "100%";

    ctx.current = canvas.getContext("2d");
    ctx.current.strokeStyle = BASE_COLOR;
    ctx.current.fillStyle = BASE_COLOR;
  }, []);

  return (
    <div id="canvas_wrapper">
      <section id="controls">
        <span className="control_btns">
          <button id="clearBtn" onClick={handleClearClick}>
            <FontAwesomeIcon
              icon={farStickyNote}
              style={{ fontSize: 20, border: "none", padding: "0 0" }}
            />
          </button>
          <button id="paint_btn" onClick={handlePaintClick}>
            <FontAwesomeIcon
              icon={faPaintBrush}
              style={{ fontSize: 20, border: "none", padding: "0 0" }}
            />
          </button>
          <button id="fill_btn" onClick={handleFillClick}>
            <FontAwesomeIcon
              icon={faFillDrip}
              style={{ fontSize: 20, border: "none", padding: "0 0" }}
            />
          </button>
          <button id="eraser_btn" onClick={handleEraserClick}>
            <FontAwesomeIcon
              icon={faEraser}
              style={{ fontSize: 20, border: "none", padding: "0 0" }}
            />
          </button>

          <button id="input_btn" onClick={handleFileButtonClick}>
            <FontAwesomeIcon
              icon={farImage}
              style={{ fontSize: 20, border: "none", padding: "0 0" }}
            />
          </button>
          <input
            ref={fileRef}
            type="file"
            id="input_file"
            name="file"
            accept="image/*"
            hidden={true}
            onChange={handleInsertImage}
          />

          <span>
            <input
              id="lineWeightRange"
              type="range"
              min="0.1"
              max="15"
              defaultValue={"3"}
              step="0.1"
              onChange={handleRangeChange}
            />
          </span>

          <button id="clearBtn" onClick={props.musicModalOnOff}>
            <FontAwesomeIcon
              icon={faMusic}
              style={{ fontSize: 20, border: "none", padding: "0 0" }}
            />
            {/* <MusicModal
              musicOpen={musicOpen}
              musicModalOnOff={musicModalOnOff}
              header="Modal heading"
            /> */}
          </button>

          {/* <button
            type="button"
            className="input_file_button"
            onClick={handleFileUpload}
          >
            upload
          </button> */}
        </span>
      </section>
      <section id="colors">
        {arr_Colors.map((color, idx) => (
          <span
            className="color"
            key={idx}
            style={{ backgroundColor: `${color}` }}
            onClick={handleColorClick}
          ></span>
        ))}
      </section>

      <section style={{ position: "relative" }}>
        <canvas
          id="canvas"
          ref={canvasRef}
          width={`${CANVAS_WIDTH}`}
          height={`${CANVAS_HEIGHT}`}
          onMouseMove={onMouseMove}
          onMouseDown={startPainting}
          onMouseUp={stopPainting}
          onMouseLeave={stopPainting}
          onClick={handleCanvasClick}
          onContextMenu={disableRightClick}
        ></canvas>
      </section>
    </div>
  );
};

export default Painting;
