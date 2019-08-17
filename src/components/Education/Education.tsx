import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SchoolIcon from '@material-ui/icons/School';
import DateRangeIcon from '@material-ui/icons/DateRange';

const useStyles = makeStyles(theme => ({
  education: {
    paddingTop: 0,
    padding: theme.spacing(2),
  },
  educationItem: {
    padding: theme.spacing(),
  },
  title: {
    fontSize: 18,
  },
  pos: {
    marginBottom: 12,
  },
  listItemIcon: {
    color: theme.palette.primary.main,
    minWidth: 50,
  },
  dateListItemIcon: {
    color: theme.palette.primary.main,
    minWidth: 30,
  },
  description: {
    paddingTop: theme.spacing(),
  },
}));

interface Props {
  title: string;
  from: string;
  to: string;
  description: string;
}

const EducationItem: React.FC<Props> = ({ title, from, to, description }) => {
  const classes = useStyles();
  return (
    <div className={classes.educationItem}>
      <Typography className={classes.title} gutterBottom>
        {title}
      </Typography>
      <List disablePadding dense>
        <ListItem disableGutters>
          <ListItemIcon
            classes={{
              root: classes.dateListItemIcon,
            }}
          >
            <DateRangeIcon />
          </ListItemIcon>
          <ListItemText
            disableTypography
            primary={
              <Typography component="div">
                <Box fontWeight="fontWeightRegular">
                  {from} - {to}
                </Box>
              </Typography>
            }
          />
        </ListItem>
      </List>
      <Typography
        className={classes.description}
        color="textSecondary"
        variant="body2"
        component="p"
      >
        {description}
      </Typography>
    </div>
  );
};

const Education: React.FC = () => {
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
            <SchoolIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText
            disableTypography
            primary={
              <Typography variant="h4">
                <Box fontWeight="fontWeightRegular">Education</Box>
              </Typography>
            }
          />
        </ListItem>
      </List>
      <div className={classes.education}>
        <EducationItem
          title="Stevens-Henager College"
          from="Sep, 2002"
          to="Oct, 2006"
          description="Bachelors of Computer Science"
        />
      </div>
    </div>
  );
};

export default Education;
