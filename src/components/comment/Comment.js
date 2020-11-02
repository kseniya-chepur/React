import React, { Component } from 'react';


class Comment extends Component {
    
    render() {
       let {postId, id, name, email, body} = this.props.data;

        return (
            <div class="list-group-item list-group-item-action list-group-item-info">
                PostId: {postId}
                <br/>
                Id: {id}
                <br/>
                Name: {name}
                <br/>
                Email: {email}
                <br/>
                Body: {body}
            </div>
        );
    }
}

export default Comment;