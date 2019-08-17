import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
    textAlign: 'center',
    backgroundColor: theme.palette.primary.main,
    color: 'white',
  },
}));

const Footer: React.FC = () => {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <Typography gutterBottom>andrewgbliss.com</Typography>
    </footer>
  );
};

export default Footer;
