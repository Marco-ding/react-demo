import React from 'react'
import { observable } from "mobx";
import { inject, observer } from 'mobx-react';
import Try from './../../components/try/index'
import MobxTest from './../../components/MobxTest/index'

@inject('orderLine')
@inject('timer')
@observer
class Home extends React.Component {
  constructor(props) {
    super(props)
    console.log(3333,this.props.orderLine)
    
  }
  id = Math.random();
  render () {
    console.log(this.props)
    const {theme} = this.props
    return (
      <div>
        <h2>Home {theme}</h2>
        <Try></Try>
        <MobxTest></MobxTest>
      </div>
    )
  }
}


  export default Home