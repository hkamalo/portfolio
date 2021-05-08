import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  text: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    border: '1px solid',
    width: '50%',
    MaxWidth: '100%',
    textAlign: 'justify'
    

  },
  image: {
    width: 300,
    height: 170,
  },
});

export default function About() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.text}>
        <h2>About</h2>
        <p>J’ai décidé d’évoluer dans l’univers tech après un parcours axé sur le business et le management.</p>
        <p>Ce qui m’a motivé dans cette décision est la liberté de création offert par le métier de développeur.</p>
      </div>
      <img
        className={classes.image}
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.gannett-cdn.com%2F-mm-%2F438112d08852a5cf64fb668899b62a1c6abcfadb%2Fc%3D0-104-5312-3105%26r%3Dx1683%26c%3D3200x1680%2Flocal%2F-%2Fmedia%2F2017%2F05%2F23%2FWIGroup%2FAppleton%2F636311326049773956-UC.jpg&f=1&nofb=1"
        alt=""
      />
    </>
  );
}
