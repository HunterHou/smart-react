import React, {Component} from 'react';

class RemarkItem extends Component {

    removeThis() {
        console.log(this.props.index)
        var {index} = this.props;
        this.props.removeRemark(index)
    }

    render() {
        return (<tr>
                <td></td>
                <td>
                    <li onClick={this.removeThis.bind(this)}>{this.props.item}</li>
                </td>

            </tr>
        );
    }
}

export default RemarkItem;
