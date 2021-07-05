import { useState, useEffect, useRef } from 'react'
import imageCompression from 'browser-image-compression';
import axios from 'axios';
import {
  ImgUpload,
  ImgView,
  ImgEdit,
  ImgUploadBtn,
} from '../../styles/mypage/ProfileImg.style';

const ProfileImg = () => {
  const [file, setFile] = useState('');
  const [previewURL, setPreviewURL] = useState('');
  const [preview, setPreview] = useState(null);
  const fileRef = useRef();
  const [fileUrl, setFileUrl] = useState("");

  useEffect(() => {
    if (file !== '') //처음 파일 등록하지 않았을 때를 방지
      setPreview(<img src={previewURL}></img>);
    return () => {
    }
  }, [previewURL])

  const handleFileOnChange = async (event) => {//파일 불러오기
    event.preventDefault();
    let file = event.target.files[0];
    let reader = new FileReader();

    const options = {
      maxSizeMB: 2,
      maxWidthOrHeight: 180
    }

    try {
      const compressedFile = await imageCompression(file, options);
      setFile(compressedFile);

      // resize된 이미지의 url을 받아 fileUrl에 저장
      const promise = imageCompression.getDataUrlFromFile(compressedFile);
      promise.then(result => {
        setFileUrl(result);
      })
    } catch (error) {
      console.log(error);
    }

    reader.onloadend = (e) => {
      setFile(file);
      setPreviewURL(reader.result);
    }
    if (file)
      reader.readAsDataURL(file);
  }

  const handleFileButtonClick = (e) => {//버튼 대신 클릭하기
    e.preventDefault();
    fileRef.current.click(); // file 불러오는 버튼을 대신 클릭함
  }

  const handleImgSubmit = async (picture, accessToken) => {
    await axios
      .patch("https://oneul.site/O_NeulServer/user/edit", {
        picture: picture
      }, {
        headers: {
          accessToken: accessToken,
          "Content-Type": "application/json"
        },
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <>
      <ImgUpload>
        <ImgView src={fileUrl} alt="profile_img" />
      </ImgUpload>
      <ImgEdit>
        <input ref={fileRef} hidden={true} type='file' accept='image/jpg,image/png,image/jpeg,image/gif'
          id='profile_img_upload' onChange={handleFileOnChange}
        />
        <ImgUploadBtn onClick={handleFileButtonClick}>파일선택</ImgUploadBtn>
        <ImgUploadBtn onClick={handleImgSubmit}>저장</ImgUploadBtn>
      </ImgEdit>
    </>
  )
}

export default ProfileImg