import React, { Component } from 'react';
import { ApiService } from '../../services/Api-service';
import Comment from '../comment/Comment';


class Comments extends Component {
    api = new ApiService();
    state = {comments: []};

    async componentDidMount() {
        this.setState({comments: await this.api.getComments()})
    }
    render() {
        return (
            <div>
                {
                    this.state.comments.map(comment => (<Comment data={comment} key={comment.id}/>))
                
                }
            </div>
        );
    }
}

export default Comments;