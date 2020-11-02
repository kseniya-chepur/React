export class ApiService {
    url_users = 'https://jsonplaceholder.typicode.com/users';
    url_posts = 'https://jsonplaceholder.typicode.com/posts';
    url_comments = 'https://jsonplaceholder.typicode.com/comments';

    async getUsers() {
        return (await fetch(this.url_users)).json();
    }
    async getPosts() {
        return (await fetch(this.url_posts)).json();
    }
    async getComments() {
        return (await fetch(this.url_comments)).json();
    }
}












