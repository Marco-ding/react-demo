

// const Topic = ({ match }) => {
//   console.log(7777777,match)
//   return (
//     <div>
//       <h3>{match.params.topicId}</h3>
//     </div>
//   )};

//   export default Topic
import React from 'react'

class Topic extends React.Component {
  constructor(props){
    super(props)
    console.log(4444444,props)
  }
  componentDidUpdate (prevProps) {
    // 上面步骤3，通过参数更新数据
   console.log(77,prevProps)
 
  }
  render(){
    const { topicId } = this.props.match.params
    return (
      <div>
        <h3>{topicId}</h3>
      </div>
    )
  }
}

export default Topic