import React, { Component } from 'react';
import UserItem from './UserItem'
import '../css/RemarkList.css'
import axios from 'axios'

class UserList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            inputValue: '',
            systemTime: '3333',
            msg: '',
        };
        this.inputChange = this.inputChange.bind(this);
        this.addUser = this.addUser.bind(this);

    }

    componentDidMount() {

        var self = this;
        axios({
            method: 'get',
            url: 'http://localhost:8088/user/all',
            data: {
                name:"李四"
            }
        }).then(function (response) {
            var result = response.data;
            if (result.success) {
                self.setState({
                    msg: result.message,
                    users: result.data
                });
            } else {
                self.setState({
                    msg: result.message,
                    users: []
                });
            }
        });
    }


    inputChange(e) {
        this.setState({
            inputValue: e.target.value
        })

    }

    addUser() {
        var { inputValue } = this.state;
        var user = { name: inputValue }
        var self = this;
        axios({
            method: 'get',
            url: 'http://localhost:8088/user/add',
            data: {
                name:inputValue
            }
        }).then(function (response) {
            var result = response.data;
            if (result.success) {
                self.setState({
                    msg: result.message,
                    users: [...this.state.users, user]
                });
            } else {
                self.setState({
                    msg: result.message,
                });
            }
        });
    }

    removeUser(index) {
        var list = this.state.users;
        list.splice(index, 1)
        this.setState({ users: list })
    }

    render() {
        let head = { "align": "center" };
        return (
            <div>
                <div style={head}>
                    <label>姓名</label>
                    <input value={this.state.inputValue} onChange={this.inputChange} />
                    <button onClick={this.addUser}>添加花名册</button>
                    <span>{this.state.msg}</span>
                </div>
                <div>
                    <table className="remark-list-table">
                        <tbody>
                            {this.state.users.map((item, index) => {
                                return <UserItem key={index} index={index} item={item}
                                    removeUser={this.removeUser.bind(this)}></UserItem>
                            })}
                        </tbody>

                    </table>

                </div>
            </div>

        );
    }
}

export default UserList;
