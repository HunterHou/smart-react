import React, { Component } from 'react';

class UserItem extends Component {

    removeThis() {
        console.log(this.props.index)
        var { index } = this.props;
        this.props.removeUser(index)
    }

    render() {
        return (
            <tr>
                <td>
                    <span>id</span>
                </td>
                <td>
                    <span>{this.props.item.id}</span>
                </td>
                <td>
                    <span>名称</span>
                </td>
                <td>
                    <span>{this.props.item.name}</span>
                </td>
                <td>
                    <span>创建日期</span>
                </td>
                <td>
                    <span>{this.props.item.createTime === undefined ? "无" : this.props.item.createTime}</span>
                </td>
                <td>
                    <span onClick={this.removeThis.bind(this)} >删除</span>
                </td>
            </tr>
        );
    }
}

export default UserItem;
