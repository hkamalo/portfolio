/* eslint-disable import/no-extraneous-dependencies */
import { useLocation } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import { Navigation, Route, Screen, Link, glide } from 'react-tiger-transition';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import HomePage from '../../screens/HomePage';
import ContactPage from '../../screens/ContactPage';
import ProjectsPage from '../../screens/ProjectsPage';

const useStyles = makeStyles({
  main: {
    background: '#f5f5f5',
  },
});
export default function Main() {
  const location = useLocation();
  const classes = useStyles();

  return (
    <main className={classes.main}>
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
