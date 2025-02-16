import Navbar from './navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './create';
import BlogDetails from './BlogDetails';
import Not from './New';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path="/"> 
              <Home/>
            </Route>
            <Route path="/create"> 
              <Create/>
            </Route>
            <Route path="/blogs/:id"> 
              <BlogDetails/>
            </Route>
            <Route>
              <Not path='*'></Not>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  
  );
}

export default App;