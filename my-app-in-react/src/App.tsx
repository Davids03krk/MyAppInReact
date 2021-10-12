import { BrowserRouter as Router, Route } from "react-router-dom";
import UserPosts from './pages/UserPosts/user-posts';
import Users from './pages/Users/users';

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Users />
      </Route>
      <Route exact path="/users">
        <Users />
      </Route>
      <Route exact path="/user-posts/:userId">
        <UserPosts />
      </Route>
    </Router>
  );
}

export default App;
