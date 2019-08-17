import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
    textAlign: 'center',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
}));

const Footer: React.FC = () => {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <Typography gutterBottom>andrewgbliss.com</Typography>
      {/* <Typography gutterBottom>{new Date().toDateString()}</Typography> */}
    </footer>
  );
};

export default Footer;
