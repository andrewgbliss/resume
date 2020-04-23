import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import EmailIcon from '@material-ui/icons/Email';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import HomeIcon from '@material-ui/icons/Home';
import WebIcon from '@material-ui/icons/Web';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import profileImg from 'assets/img/andy.jpg';
import logoImg from 'assets/img/logo.png';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
  },
  wrapper: {
    padding: theme.spacing(2),
  },
  profileImg: {
    width: '100%',
  },
  logoImg: {
    width: 32,
    position: 'absolute',
    top: 10,
    left: 10,
  },
  wordWrap: {
    wordWrap: 'break-word',
  },
  listItemIcon: {
    color: theme.palette.primary.main,
    minWidth: 40,
  },
}));

const Profile: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img src={profileImg} alt="Andrew" className={classes.profileImg} />
      <img src={logoImg} alt="Logo" className={classes.logoImg} />
      <div className={classes.wrapper}>
        <Typography variant="h5" gutterBottom>
          <Box fontWeight="fontWeightBold">Andrew G Bliss</Box>
        </Typography>
        <Typography variant="caption" gutterBottom>
          <Box fontWeight="fontWeightLight">
            Senior full stack web developer with 15 plus years of professional
            experience. Current stack is React, Express, Node, and Postgres.
            Motto is quality by having a keen eye for detail and responsive user
            experiences.
          </Box>
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon
              classes={{
                root: classes.listItemIcon,
              }}
            >
              <WebIcon />
            </ListItemIcon>
            <ListItemText
              disableTypography
              primary={
                <Typography component="div" variant="body2">
                  <Box fontWeight="fontWeightLight">
                    Senior Full Stack Web Developer
                  </Box>
                </Typography>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemIcon
              classes={{
                root: classes.listItemIcon,
              }}
            >
              <HomeIcon />
            </ListItemIcon>
            <ListItemText
              disableTypography
              primary={
                <Typography component="div" variant="body2">
                  <Box fontWeight="fontWeightLight">Lehi, UT</Box>
                </Typography>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemIcon
              classes={{
                root: classes.listItemIcon,
              }}
            >
              <EmailIcon />
            </ListItemIcon>
            <ListItemText
              disableTypography
              primary={
                <Typography component="div" variant="body2">
                  <Box fontWeight="fontWeightLight">andrewgbliss@gmail.com</Box>
                </Typography>
              }
              classes={{
                root: classes.wordWrap,
              }}
            />
          </ListItem>
          <ListItem>
            <ListItemIcon
              classes={{
                root: classes.listItemIcon,
              }}
            >
              <LocalPhoneIcon />
            </ListItemIcon>
            <ListItemText
              disableTypography
              primary={
                <Typography component="div" variant="body2">
                  <Box fontWeight="fontWeightLight">801.440.5615</Box>
                </Typography>
              }
            />
          </ListItem>
        </List>
      </div>
    </div>
  );
};

export default Profile;
