import React from 'react';
import { makeStyles, withStyles, lighten } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import LinearProgress from '@material-ui/core/LinearProgress';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import GamePadIcon from '@material-ui/icons/Gamepad';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
  skills: {
    paddingTop: 0,
    paddingBottom: 0,
    padding: theme.spacing(2),
  },
  skill: {
    padding: theme.spacing(0, 2),
  },
  listItemIcon: {
    color: theme.palette.primary.main,
    minWidth: 40,
  },
}));

const BorderLinearProgress = withStyles(theme => ({
  root: {
    height: 20,
    backgroundColor: lighten(theme.palette.primary.main, 0.5),
    borderRadius: 20,
  },
  bar: {
    borderRadius: 20,
    backgroundColor: theme.palette.primary.main,
  },
}))(LinearProgress);

interface Props {
  title: string;
  value: number;
}

const Skill: React.FC<Props> = ({ title, value }) => {
  const classes = useStyles();
  return (
    <div className={classes.skill}>
      <Typography variant="caption">
        <Box fontWeight="fontWeightLight">{title}</Box>
      </Typography>
      <BorderLinearProgress
        className={classes.margin}
        variant="determinate"
        color="secondary"
        value={value}
      />
    </div>
  );
};

const Skills: React.FC = () => {
  const classes = useStyles();
  return (
    <div>
      <List>
        <ListItem>
          <ListItemIcon
            classes={{
              root: classes.listItemIcon,
            }}
          >
            <GamePadIcon />
          </ListItemIcon>
          <ListItemText
            disableTypography
            primary={
              <Typography variant="h6">
                <Box fontWeight="fontWeightRegular">Skills</Box>
              </Typography>
            }
          />
        </ListItem>
      </List>
      <div className={classes.skills}>
        <Skill title="Responsive Web Design" value={80} />
        <Skill title="Golang" value={55} />
        <Skill title="NodeJS" value={90} />
        <Skill title="React" value={85} />
        <Skill title="PostgreSQL" value={70} />
      </div>
    </div>
  );
};

export default Skills;
