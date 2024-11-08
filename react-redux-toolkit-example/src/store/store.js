import { configureStore } from "@reduxjs/toolkit";
import { countSlice } from "./counterSlice";
//인자: {}각 슬라이스의 리듀서 넣기
export const store = configureStore ( {
  reducer: {
    //각 슬라이스의 리듀서가 들어가는 위치
    //슬라이스 이름 : 리듀서함수
    counter: countSlice.reducer
  }
});