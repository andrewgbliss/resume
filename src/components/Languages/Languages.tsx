import React from 'react';
import { makeStyles, withStyles, lighten } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import LinearProgress from '@material-ui/core/LinearProgress';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import TranslateIcon from '@material-ui/icons/Translate';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
  languages: {
    paddingTop: 0,
    padding: theme.spacing(2),
  },
  language: {
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

const Language: React.FC<Props> = ({ title, value }) => {
  const classes = useStyles();
  return (
    <div className={classes.language}>
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

const Languages: React.FC = () => {
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
            <TranslateIcon />
          </ListItemIcon>
          <ListItemText
            disableTypography
            primary={
              <Typography variant="h6">
                <Box fontWeight="fontWeightRegular">Languages</Box>
              </Typography>
            }
          />
        </ListItem>
      </List>
      <div className={classes.languages}>
        <Language title="English" value={100} />
        <Language title="Japanese" value={40} />
      </div>
    </div>
  );
};

export default Languages;
