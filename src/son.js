import React from "react";
import MyContext from './myContext'; //引入父组件的Consumer容器
import Grandson from "./grandson.js"; //引入子组件
// function Son(props) {
//   return (
//     //Consumer容器,可以拿到上文传递下来的name属性,并可以展示对应的值
//     <Consumer>
//       {(name) => (
//         <div
//           style={{
//             border: "1px solid blue",
//             width: "60%",
//             margin: "20px auto",
//             textAlign: "center",
//           }}
//         >
//           <p>子组件。获取父组件的值:{name}</p>
//           {/* 孙组件内容 */}
//           <Grandson />
//         </div>
//       )}
//     </Consumer>
//   );
// }
// export default Son;
class Son extends React.Component{
    static contextType = MyContext;
    render() {
        return (<div
          style={{
            border: "1px solid blue",
            width: "60%",
            margin: "20px auto",
            textAlign: "center",
          }}
        >
          <p>子组件。获取父组件的值:{this.context}</p>
          {/* 孙组件内容 */}
          <Grandson />
        </div>)
    }
}

export default Son