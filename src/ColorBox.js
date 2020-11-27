import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    // start if statement
    if (this.props.opacity >= 0.2) {
        return (
          <div className="color-box" style={{opacity: this.props.opacity /*replace null with the value -- aka "console out" the current values*/}}>
            <ColorBox opacity={this.props.opacity -0.1}/>
                {/* subtract .1 from opacity property. aka `opacity={}` syntax */}
          </div>
        )
    } else {
        return null /* return null aka dont return a div at all*/
    }
  }

}

  // {/* WRITTEN IN TERNARY  */}
  // render() {
  //    return (
  //     <div className="color-box" style={{opacity: this.props.opacity}}>
  //         {this.props.opacity >= 0.2 ? <ColorBox opacity={this.props.opacity - 0.1} /> : null}
  //       </div>
  //    )
  // }
