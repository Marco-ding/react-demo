/**
 * @Author: Aaron
 * @Date:   2017-12-11 11:55:15
 * @Email:  332904234@qq.com
 * @Filename: timer.js
 * @Last modified by:   Aaron
 * @Last modified time: 2017-12-12 08:37:23
 * @Copyright: 1.0
 */

import { observable, action } from "mobx";

// // 定义一个观察的对象
// let appState = observable({
//   timer: 10
// })

// // 定义action(动作)
// appState.resetTimer = action(() => {
//   console.log('hello word');
//   appState.timer = 0;
// });

// export default appState;

 class Timer {
  @observable
  mytimer = {
    timer: 10
  };
  @observable todos = []

  @action
  resetTime() {
    console.log("hello word");
    this.mytimer.timer = 0;
  }
}

const timer = new Timer()
export default timer