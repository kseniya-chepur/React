import React, { Component } from 'react';

class User extends Component {
    render() {

        let {id, name, username, email} = this.props.data;
        return (
            <div className={!(`${id}` % 2) ? "p-2 flex-fill bg-primary" : "p-2 flex-fill bg-success"}>
                {id} - {name} - {username} - {email}
            </div>
        );
    }
}

export default User;