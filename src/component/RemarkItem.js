import React, { Component } from 'react';

class RemarkItem extends Component {

  removeThis() {
    console.log(this.props.index)
    var { index } = this.props;
    this.props.removeRemark(index)
  }
  render() {
    return (<li onClick={this.removeThis.bind(this)}>{this.props.item}</li>
    );
  }
}

export default RemarkItem;
