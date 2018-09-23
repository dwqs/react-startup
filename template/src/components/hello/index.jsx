import './index.less'

import React from 'react'

export default class Hello extends React.PureComponent{
  constructor (props) {
    super(props)
    this.state = {
      desc: 'A simple template webpack 4 + react 16 + react-router 4 setup for projects'
    }
  }

  render () {
    return (
      <div className="desc">
        <p>{this.state.desc}</p>
        <img src="/assets/logo.png" alt="logo" style=\{{margin: "10px"}}/>
      </div>
    )
  }
}
