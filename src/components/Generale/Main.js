/* eslint-disable import/no-extraneous-dependencies */
import { Switch, Route, useLocation } from 'react-router';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import HomePage from '../../screens/HomePage';
import ContactPage from '../../screens/ContactPage';
import ProjectsPage from '../../screens/ProjectsPage';
import './Style.css';

export default function Main() {

  const location = useLocation();

  return (
    <main>
      <TransitionGroup>
        <CSSTransition timeout={300} classNames="fade" key={location.key}>
          <Switch location={location}>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/contact" component={ContactPage} />
            <Route exact path="/projects" component={ProjectsPage} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </main>
  );
}
