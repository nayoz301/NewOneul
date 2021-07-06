import React from 'react'
import {
  Boxcontainer,
  ListName,
  MyList,
  Select,
} from '../../styles/mypage/GetMyDiary.style';
import MyCard from './dummy/MyCards';


const GetMyDiary = () => {
  return (
    <Boxcontainer >
      <ListName>나의 일기</ListName>
      <Select>
        <option value="" hidden>
          선택
        </option>
        <option value="1">전체</option>
        <option value="2">공개</option>
        <option value="3">비공개</option>
      </Select>
      <MyList>
        <MyCard />
      </MyList>
    </Boxcontainer >
  )
}

export default GetMyDiary
