import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Profile from 'components/Profile/Profile';
import Skills from 'components/Skills/Skills';
import Languages from 'components/Languages/Languages';
import WorkExperience from 'components/WorkExperience/WorkExperience';
import Education from 'components/Education/Education';
import Links from 'components/Links/Links';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(),
  },
  paper: {
    margin: theme.spacing(),
  },
}));

const Layout: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} sm={5} md={4}>
        <Paper className={classes.paper} elevation={6}>
          <Profile />
          <Divider />
          <div className="no-print">
            <Skills />
            <Languages />
          </div>
          <Divider />
          <Links />
        </Paper>
      </Grid>
      <Grid item xs={12} sm={7} md={8}>
        <Grid container direction="column">
          <Grid item>
            <Paper className={classes.paper} elevation={6}>
              <WorkExperience />
            </Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.paper} elevation={6}>
              <Education />
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Layout;
