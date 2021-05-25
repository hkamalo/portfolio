/* eslint-disable import/no-extraneous-dependencies */
import { useLocation } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import { Route, Screen } from 'react-tiger-transition';
import ContactPage from '../../screens/ContactPage';
import InformationPage from '../../screens/InformationPage';
import HomePage from '../../screens/HomePage';

const useStyles = makeStyles({
  main: {
    background: '#051622',
    color: '#deb992',
    // eslint-disable-next-line prefer-template
  },
});

export default function Main() {
  const location = useLocation();
  const classes = useStyles();

  return (
    <>
      <main className={classes.main}>
        <Route exact path="/">
          <Screen>
            <HomePage />
          </Screen>
        </Route>
        <Route exact path="/informations">
          <Screen>
            <InformationPage />
          </Screen>
        </Route>
        <Route exact path="/contact">
          <Screen>
            <ContactPage />
          </Screen>
        </Route>
      </main>
    </>
  );
}
