import React, { Component } from 'react';
import { ApiService } from '../../services/Api-service';
import Post from '../post/Post';

class Posts extends Component {
    api = new ApiService();
    state = {posts: []};

    async componentDidMount() {
        this.setState({posts: await this.api.getPosts()})
    }

    render() {
        return (
            <div class="text-info">
                {
                    this.state.posts.map(post => (<Post data={post} key={post.id}/>))
                }
            </div>
        );
    }
}

export default Posts;