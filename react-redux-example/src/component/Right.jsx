import { useDispatch } from "react-redux"

const Right1 = () => {
  return (
    <div>
      <h1>Right1</h1>
      <Right2></Right2>
    </div>
  )
}
const Right2 = () => {
  return (
    <div>
      <h1>Right2</h1>
      <Right3></Right3>
    </div>
  )
}

// +버튼을 클릭하면 num이 1증가되도록 처리
const Right3 = () => {  
  //redux스토어에서 dispatch함수 가져오기
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Right3</h1>
      <input type="button" value="+" onClick={() => {
        //디스패치로 'PLUS' 액션을 전달
        //디스패치 -> reducer
        dispatch({type: "PLUS"});
      }}></input>
    </div>
  )
}

export default Right1;
