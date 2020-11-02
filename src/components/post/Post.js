import React, { Component } from 'react';

class Post extends Component {
    render() {

        let {userId, id, title, body} = this.props.data
        return (
            <div class="list-group-item list-group-item-action list-group-item-secondary">
                UserId: {userId} 
                <br/>
                Id: {id} 
                <br/>
                Title: {title} 
                <br/>
                Body: {body}
            </div>
        );
    }
}

export default Post;