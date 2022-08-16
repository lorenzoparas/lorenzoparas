import TabletNavBar from '../components/TabletNavBar';
import Home from './pages/Home';
import About from './pages/About';
import WorkExperiences from './pages/WorkExperiences';
import Projects from './pages/Projects';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import {
	Switch,
	Route
} from 'react-router-dom';
import Album from './pages/Album';

function Desktop() {
    return (
        <span>
            <Switch>
                <Route exact path='/'>
                    <Home/>
                </Route>
                <Route path='/about'>
                    <About/>
                </Route>
                <Route path='/work-experiences'>
                    <WorkExperiences/>
                </Route>
                <Route path='/software-projects'>
                    <Projects/>
                </Route>
                <Route path='/gallery/:album'>
                    <Album/>
                </Route>
                <Route path='/gallery'>
                    <Gallery/>
                </Route>
                <Route path='/contact'>
                    <Contact/>	
                </Route>
            </Switch>
            <TabletNavBar/>
        </span>
    );
}

export default Desktop;