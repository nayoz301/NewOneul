export const login = (accessToken, userInfo) => {
  return {
    type: "LOG_IN",
    accessToken,
    userInfo,
  };
};

export const logout = () => {
  return {
    type: "LOG_OUT",
  };
};

export const modifyAccessToken = (accessToken) => {
  return {
    type: "MODIFY_ACCESS_TOKEN",
    accessToken,
  };
};

export const fetchAllUnloginDiary = (publicDiary, musicList) => {
  return {
    type: "FETCH_ALL_UNLOGIN_DATA",
    publicDiary,
    musicList,
  };
};

export const fetchAllLoginDiary = (publicDiary, myDiary, musicList) => {
  return {
    type: "FETCH_ALL_LOGIN_DATA",
    publicDiary,
    myDiary,
    musicList,
  };
};

<<<<<<< HEAD
export const addNewPublicDiary = (newPublicDiary) => {
  return {
    type: "ADD_NEW_PUBLIC_DIARY",
    payload: newPublicDiary,
  };
};

export const addNewPrivateDiary = (newPrivateDiary) => {
  return {
    type: "ADD_NEW_PRIVATE_DIARY",
    payload: newPrivateDiary,
  };
};
=======
export const addEmpathy = (diaryId, newEmphathyObj) => {
  return {
    type: "ADD_EMPATHY",
    diaryId,
    newEmphathyObj,
  };
};

export const removeEmpathy = (diaryId, empathyId) => {
  return {
    type: "REMOVE_EMPATHY",
    diaryId,
    empathyId,
  };
};

// function handleFileUpload(ref) {
//   //이건 s3에 업로드하는 경우
//   ref.current.toBlob(
//     function (blob) {
//       const img = new FormData();
//       img.append("file", blob, ${Date.now()}.jpeg);
//       console.log(blob);

//       const param = {
//         Bucket: "oneulfile",
//         Key: "image/" + "abc",
//         ACL: "public-read",
//         Body: blob,
//         ContentType: "image/",
//       };

//       s3.upload(param, function (err, data) {
//         console.log(err);
//         console.log(data);
//       });
//     },
//     "image/jpeg",
//     0.8
//   );
// }

// handleFileUpload(canvasRef)
>>>>>>> 07691fb7d3d0c9f9b41ee8dd3a267bd60b341a17
