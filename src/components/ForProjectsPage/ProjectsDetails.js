import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  backDetailsProjet: {
    background: '#FFFFFF',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
});

export default function ProjectsDetails() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.backDetailsProjet}>
        <h4> Details Technique</h4>
        <p>
          Dolly est une application web qui offre au client de pouvoir consulter
          les informations concernants ses films favoris
        </p>
        <div>
          Stack :
          <ul>
            <li>HTML5</li>
            <li>CSS</li>
            <li>Material Ui</li>
            <li>React</li>
            <li>Express Js</li>
          </ul>
        </div>
      </div>
    </>
  );
}
