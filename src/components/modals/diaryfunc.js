import s3 from "../../upload/s3";
export function handleFileUpload(canvasRef, userInfo) {
  //이건 s3에 업로드하는 경우
  return new Promise((resolve, reject) => {
    canvasRef.current.toBlob(
      (blob) => {
        const img = new FormData();
        img.append("file", blob, `${Date.now()}`.png);

        const param = {
          Bucket: "oneulfile",
          Key: "image/" + `${userInfo.userInfo.id}/` + Date.now(),
          ACL: "public-read",
          Body: blob,
          ContentType: "image/",
        };

        s3.upload(param, (err, data) => {
          if (err) {
            reject(err);
          } else {
            return resolve(data);
          }
        });
      },
      "image/jpeg",
      0.8
    );
  });
}
