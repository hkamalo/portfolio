/* eslint-disable import/no-extraneous-dependencies */
import { useLocation } from 'react-router';
import { Navigation, Route, Screen, Link, glide } from 'react-tiger-transition';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import HomePage from '../../screens/HomePage';
import ContactPage from '../../screens/ContactPage';
import ProjectsPage from '../../screens/ProjectsPage';

export default function Main() {
  const location = useLocation();

  return (
    <main>
      <Route exact path="/">
        <Screen>
          <HomePage />
        </Screen>
      </Route>
      <Route exact path="/projects">
        <Screen>
          <ProjectsPage />
        </Screen>
      </Route>
      <Route exact path="/contact">
        <Screen>
          <ContactPage />
        </Screen>
      </Route>
    </main>
  );
}
