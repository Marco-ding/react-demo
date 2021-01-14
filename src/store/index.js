/**
 * @Author: Aaron
 * @Date:   2017-12-11 14:08:20
 * @Email:  332904234@qq.com
 * @Last modified by:   Aaron
 * @Last modified time: 2017-12-11 17:06:15
 * @Copyright: 1.0
 */

import OrderLine from "./OrderLine";
import Timer from "./timer";
class Stores {
  constructor() {
    this.orderLine = new OrderLine();
    this.timer = new Timer();
  }
}

export default new Stores();
