import './App.css';
import Posts from './components/posts/Posts';
import Users from './components/users/Users';
import 'bootstrap/dist/css/bootstrap.min.css';
import Comments from './components/comments/Comments';

function App() {
  return (
    <div>
        <Users/>
        <Posts/>
        <Comments/>
    </div>
  );
}

export default App;
