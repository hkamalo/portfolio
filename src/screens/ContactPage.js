// ------------------ IMPORT COMPONENTS & STYLES -------------//
import Backdrop from '@material-ui/core/Backdrop';
import {
  Button,
  Fade,
  Modal,
  Grow,
  TextField,
  InputBase,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import axios from 'axios';
import React from 'react';
// import { useForm } from 'react-hook-form';
// ---------------------- STYLE CSS -------------------------//

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      display: 'flex',
      paddingTop: '1em',
    },
  },
  contact: {
    height: '100vh',
    width: '100%',
  },
  message: {
    textAlign: 'center',
    marginBottom: '1em',
  },
  form: {
    padding: '2em',
    maxWidth: '60ch',
    margin: '2em auto',
    borderRadius: '1rem',
    borderLeft: '1px solid #1ba098',
    borderRight: '1px solid #1ba098',
  },
  textField: {
    display: 'flex',
    height: '7vh',
    padding: theme.spacing(2),
    color: '#1ba098',
    '&:hover': {
      borderBottom: '1px solid #1ba098',
    },
  },
  messageField: {
    display: 'flex',
    height: '10vh',
    padding: theme.spacing(2),
    color: '#1ba098',
    borderRadius: theme.shape.borderRadius,
    '&:hover': {
      border: '1px solid #1ba098',
    },
  },
  button: {
    padding: 14,
    width: '35ch',
    maxWidth: '100%',
    marginTop: 22,
    margin: 'auto',
    display: 'flex',
    marginBottom: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid var(--darker-grey)',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  input: {
    color: '#1ba098',
  },
}));
// --------------------------- FONCTION CONTACT --------------------------//

export default function ContactPage() {
  // const apiBase = process.env.REACT_APP_API_BASE_URL;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  // const { register, handleSubmit, reset } = useForm();
  const {
    message,
    form,
    textField,
    button,
    modal,
    paper,
    input,
    messageField,
    contact,
  } = useStyles();
  // const onSubmit = (form) => {
  //   axios
  //     .post(`${apiBase}/contact`, form)
  //     .then((res) => reset())
  //     .catch((err) => console.log(err));
  // };

  return (
    <Grow in timeout={1900} style={{ transitionDelay: '700ms' }}>
      <div className={contact}>
        <h2 className={message}>Contact</h2>
        <p className={message}>(mettre photo + descriptif personnel)</p>
        <form
          className={form}
          // onSubmit={handleSubmit(onSubmit)}
          method="POST"
          action="send"
        >
          <InputBase
            className={textField}
            id="outlined-basic"
            placeholder="Entreprise"
            variant="outlined"
            required
            color="#1ba098"
            InputProps={{
              className: input,
            }}
            // {...register('firstName')}
          />
          <InputBase
            className={textField}
            id="outlined-basic"
            placeholder="Nom"
            variant="outlined"
            required
            // {...register('firstName')}
          />
          <InputBase
            className={textField}
            id="outlined-basic"
            placeholder="Prénom"
            variant="outlined"
            required
            // {...register('lastName')}
          />
          <InputBase
            className={textField}
            id="outlined-basic"
            name="email"
            placeholder="email@email.com"
            variant="outlined"
            type="email"
            required
            // {...register('email')}
          />
          <InputBase
            className={messageField}
            id="outlined-multiline-basic"
            multiline
            placeholder="Votre message"
            defaultValue=""
            variant="outlined"
            required
            // {...register('text')}
          />
          <div>
            <Button
              className={button}
              variant="contained"
              color="primary"
              type="submit"
              onClick={handleOpen}
            >
              Envoyer
            </Button>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              className={modal}
              open={open}
              onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={open}>
                <div className={paper}>
                  <p>
                    Merci pour votre message, je reviens vers vous dans les
                    meilleurs délais
                  </p>
                </div>
              </Fade>
            </Modal>
          </div>
        </form>
      </div>
    </Grow>
  );
}
