
import {BrowserRouter,Route,Switch} from 'react-router-dom';

import HomePage from './Components/Home/HomePage';
import NotFoundPage from './Components/NotFoundPage/NotFoundPage';
import AboutPage from './Components/About/AboutPage';
import Header from './Components/Common/Header';
import CoursePage from './Components/Courses/CoursesPage';
function App() {
  return (
    <BrowserRouter >

      {/* <NavBar/> */}
      <div className="container-fluid">
        <Header/>
      <Switch>
      <Route exact path="/" component={HomePage}></Route>
      <Route exact path="/about" component={AboutPage}></Route>
      <Route exact path="/about" component={CoursePage}></Route>
      {/* <Route exact path="/FSDF" component={ArticlePage}></Route> */}
      <Route  component={NotFoundPage}></Route>
      </Switch>
      </div>
      
    </BrowserRouter>
  );
}

export default App;
