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
import profileImg from 'assets/img/andrew.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
  profileImg: {
    width: '100%',
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
    <div>
      <img src={profileImg} alt="Andrew" className={classes.profileImg} />
      <div className={classes.root}>
        <Typography variant="h5" gutterBottom>
          <Box fontWeight="fontWeightBold">Andrew G Bliss</Box>
        </Typography>
        <Typography variant="caption" gutterBottom>
          <Box fontWeight="fontWeightLight">
            Quality by design, building complex cloud applications with a solid
            technical background, a keen eye for detail and a self motivated,
            user-centered attitude.
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
                  <Box fontWeight="fontWeightMedium">
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
                  <Box fontWeight="fontWeightMedium">Lehi, UT</Box>
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
                  <Box fontWeight="fontWeightMedium">
                    andrewgbliss@gmail.com
                  </Box>
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
                  <Box fontWeight="fontWeightMedium">801.440.5615</Box>
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
