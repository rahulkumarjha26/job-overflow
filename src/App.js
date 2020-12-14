import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Recruiter from './Main/Recruiter';
import Candidate from './Main/Candidate';
import RecruiterDetails from './Main/RecruiterDetails';
import CandidateDetails from './Main/CandidateDetails';
import MainSection from './Main/MainSection';

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route  path='/' exact component={MainSection} />
        <Route   path='/recruiter' component={Recruiter} />
        <Route   path='/candidate' component={Candidate} />
        <Route   path='/recruiter-details' component={RecruiterDetails} />
        <Route   path='/candidate-details' component={CandidateDetails} /> *
      </Switch>
    </Router>
    
    
    </>
  );
}

export default App;
