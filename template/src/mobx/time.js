import {observable, action} from 'mobx'

class Time {
  @observable
  curTime = 0

  constructor (time) {
    this.curTime = time
  }

  @action
  getCurTime () {
    this.curTime = Date.now()
  }
}

let time = new Time(Date.now())

export default time
