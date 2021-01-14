import React from 'react'
import { observable } from "mobx";
import Try from './../../components/try/index'

class Home extends React.Component {
  constructor(props) {
    super(props)
  }
  id = Math.random();
  render () {
    console.log(this.props)
    const {theme} = this.props
    return (
      <div>
        <h2>Home {theme}</h2>
        <Try></Try>
      </div>
    )
  }
}


  export default Home