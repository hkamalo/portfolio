import { Switch, Route } from "react-router";
import HomePage from "../screens/HomePage";
import ContactPage from "../screens/ContactPage";
import ProjectsPage from "../screens/ProjectsPage";

export default function Main() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/projects" component={ProjectsPage} />
      </Switch>
    </main>
  );
}
