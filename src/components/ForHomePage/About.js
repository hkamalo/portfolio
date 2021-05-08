import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    '& > *': {
      margin: 10,
    },
  },
  home: {
    position: 'relative',
    height: 1500,
    width: 'auto',
    background:
      'radial-gradient(52.52% 39.17% at 50% 66.95%, #F3F3F3 0%, #FFFFFF 100%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'solid 1px',
  },
  menu: {
    display: 'flex',
    justifyContent: 'flex-end',
    height: 50,
    width: 'auto',
    margin: 5,
    padding: 2,
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    color: 'white',
  },
  content: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '50%',
    height: '20%',
    border: 'solid 1px',
    margin: 20,
    paddingTop: 50,
    paddingBottom: 50,
  },
  skills: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '100%',
    height: '60%',
    background: '#FFFFFF',
    boxShadow:
      '0px 0px 100px rgba(0, 0, 0, 0.05), 0px 1px 3px rgba(0, 0, 0, 0.05)',
    borderRadius: 20,
  },
  image: {
    width: 300,
    height: 170,
  },
  skillsElements: {
    width: '70%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default function About() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.text}>text</div>
      <img
        className={classes.image}
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.gannett-cdn.com%2F-mm-%2F438112d08852a5cf64fb668899b62a1c6abcfadb%2Fc%3D0-104-5312-3105%26r%3Dx1683%26c%3D3200x1680%2Flocal%2F-%2Fmedia%2F2017%2F05%2F23%2FWIGroup%2FAppleton%2F636311326049773956-UC.jpg&f=1&nofb=1"
        alt=""
      />
    </>
  );
}
