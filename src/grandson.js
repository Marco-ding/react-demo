import React from "react";
import MyContext from './myContext'; //引入父组件的Consumer容器
class Grandson extends React.Component {
  static contextType = MyContext;
  constructor(props,context){
      super(props)
      console.log(11,props,context)
  }
  render() {
    return (<div
      style={{
        border: "1px solid green",
        width: "60%",
        margin: "50px auto",
        textAlign: "center",
      }}
    >
      <p>孙组件。获取传递下来的值:{this.context}</p>
    </div>)
  }
}

export default Grandson