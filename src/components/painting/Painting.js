import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
// import Canvas from "./Canvas";
import "./style.css";
let arr_Colors = [
  "#e32119",
  "#ff3b30",
  "#f65314",
  "#ff9900",
  "#fbb034",
  "#fdbd10",
  "#ffcc00",
  "#ffdd00",
  "#c1d82f",
  "#a4c639",
  "#7cbb00",
  "#34a853",
  "#008200",
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

const Painting = () => {
  const [filling, setFilling] = useState(false);
  const [painting, setPainting] = useState(false);
  const [eraser, setEraser] = useState(false);
  const [erasing, setErasing] = useState(false);
  const [lineWeight, setLineWeight] = useState(2.5);

  const canvasRef = useRef(null);
  const ctx = useRef();
  const BASE_COLOR = "2c2c2c";
  const CANVAS_WIDTH = 700;
  const CANVAS_HEIGHT = 400;

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
    ctx.current.fillStyle = "white";
    ctx.current.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); //사이즈 수정 필요
  };

  function handleFillClick() {
    setFilling(true);
    setPainting(false);
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
  }

  const onMouseMove = ({ nativeEvent }) => {
    const x = nativeEvent.offsetX;
    const y = nativeEvent.offsetY;

    if (!painting && !erasing && ctx) {
      ctx.current.beginPath();
      console.log("CTX", ctx.current.beginPath());
      ctx.current.moveTo(x, y);
    } else if (painting) {
      ctx.current.globalCompositeOperation = "source-over";
      ctx.current.lineTo(x, y);
      ctx.current.stroke();
      console.log(ctx.current.globalCompositeOperation);
    } else if (erasing) {
      ctx.current.globalCompositeOperation = "destination-out";
      ctx.current.lineWidth = 15;
      ctx.current.beginPath();
      console.log("비긴패스", ctx.current.beginPath());
      ctx.current.arc(x, y, 10, 0, 4 * Math.PI);
      ctx.current.fill();
      ctx.current.moveTo(x, y);
      ctx.current.lineTo(x, y);
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

  function disableRightClick(e) {
    e.preventDefault(); //우클릭 방지 ㅋㅋ
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    ctx.current = canvas.getContext("2d");
    ctx.current.strokeStyle = BASE_COLOR;
    ctx.current.fillStyle = BASE_COLOR;
  }, []);

  return (
    <div>
      <section id="controls">
        <span className="controls_btns">
          {/* <button id={`button_${button}`}></button> */}
          {/* {whichOne==='picture' ? :} */}
          <button id="clearBtn" onClick={handleClearClick}>
            clear
          </button>
          <button id="paintBtn" onClick={handlePaintClick}>
            paint
          </button>
          <button id="fillBtn" onClick={handleFillClick}>
            fill
          </button>
          <button id="eraserBtn" onClick={handleEraserClick}>
            eraser
          </button>
        </span>
        <span id="lineWeightRange">
          <input
            type="range"
            min="0.1"
            max="5"
            defaultValue={"2.5"}
            step="0.1"
            onChange={handleRangeChange}
          />
        </span>
        {/* <button id="whichOneBtn" onClick={whichOneFunc}>
            {whichOne}
          </button> */}

        {/* <input
            type="file"
            name="file"
            onChange={handleUploadClick}
            className="picture"
            ref={picRef}
          /> */}
        <span>
          <label className="input-file-button" for="input-file">
            Search File
          </label>
          <input
            type="file"
            id="input-file"
            name="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleInsertImage}
          />
          {/* <button
            type="button"
            className="input-file-button"
            onClick={handlePost}
          >
            upload
          </button> */}
          <button
            type="button"
            className="input-file-button"
            onClick={handleFileUpload}
          >
            upload
          </button>
        </span>
        <div className="submit_btns"></div>
      </section>
      <section className="colors">
        {arr_Colors.map((color, idx) => (
          <span
            className="color"
            key={idx}
            style={{ backgroundColor: `${color}` }}
            onClick={handleColorClick}
          ></span>
        ))}
      </section>
      {/* <div
        className="imgPreviewDiv"
        width="700" //수정 필요
        height="400" //수정 필요
        style={{ display: previewURL === null ? "none" : "block" }}
      >
        {$preview}
      </div> */}
      <canvas
        className="canvas"
        ref={canvasRef}
        width="700" //수정 필요
        height="400" //수정 필요
        onMouseMove={onMouseMove}
        onMouseDown={startPainting}
        onMouseUp={stopPainting}
        onMouseLeave={stopPainting}
        onClick={handleCanvasClick}
        onContextMenu={disableRightClick}
        // style={{ display: previewURL === null ? "block" : "none" }}
      ></canvas>
    </div>
  );
};

export default Painting;
