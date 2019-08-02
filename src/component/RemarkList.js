import React, { Component } from 'react';
import RemarkItem from './RemarkItem'

class RemarkList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      remarks: [],
      inputValue: ''
    };
    this.inputChange = this.inputChange.bind(this);
    this.addRemark = this.addRemark.bind(this);

  }
  inputChange(e) {
    this.setState({
      inputValue: e.target.value
    })

  }
  addRemark() {
    var { inputValue } = this.state;
    this.setState({
      remarks: [...this.state.remarks, inputValue]
    })
  }

  removeRemark(index) {
    var list = this.state.remarks;
    list.splice(index, 1)
    this.setState({ remarks: list })
  }

  render() {
    return (
      <div>
        <div>
          <input value={this.state.inputValue} onChange={this.inputChange} />
          <button onClick={this.addRemark}>添加</button>
        </div>
        <div>
          <table >
            <tbody >
              <tr>
                <td>
                  <ul>
                    {this.state.remarks.map((item, index) => {
                      return <RemarkItem key={index} index={index} item={item} removeRemark={this.removeRemark.bind(this)}></RemarkItem>
                    })}
                  </ul>
                </td>
              </tr>
            </tbody>

          </table>

        </div>
      </div>

    );
  }
}

export default RemarkList;
