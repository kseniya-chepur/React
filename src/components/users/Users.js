import React, { Component } from 'react';
import { ApiService } from '../../services/Api-service';
import User from '../user/User';


class Users extends Component {
    api = new ApiService();
    state = {users: []};

    async componentDidMount() {
        this.setState({users: await this.api.getUsers()})
    }
    
    

    render() {
        return (
            <div className="d-flex text-white">
                {
                    this.state.users.map(user => (<User data={user} key={user.id}/>))
                }
                
            </div>
        );
    }
}

export default Users;