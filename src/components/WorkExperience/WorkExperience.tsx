import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import WorkIcon from '@material-ui/icons/Work';
import DateRangeIcon from '@material-ui/icons/DateRange';

const useStyles = makeStyles(theme => ({
  experience: {
    marginTop: -15,
    paddingTop: 0,
    padding: theme.spacing(2),
  },
  experienceItem: {
    paddingTop: theme.spacing(3),
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
  children: React.ReactNode;
}

const ExperienceItem: React.FC<Props> = ({ title, from, to, children }) => {
  const classes = useStyles();
  return (
    <div className={classes.experienceItem}>
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
        {children}
      </Typography>
    </div>
  );
};

const WorkExperience: React.FC = () => {
  const classes = useStyles();
  return (
    <div>
      <List dense>
        <ListItem>
          <ListItemIcon
            classes={{
              root: classes.listItemIcon,
            }}
          >
            <WorkIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText
            disableTypography
            primary={
              <Typography variant="h4">
                <Box fontWeight="fontWeightRegular">Work Experience</Box>
              </Typography>
            }
          />
        </ListItem>
      </List>
      <div className={classes.experience}>
        <ExperienceItem
          title="Senior Full Stack Web developer / Solo"
          from="Dec, 2017"
          to="Current"
        >
          Implemented Google Cloud services that saved the company thousands of
          dollars per month in hosting costs. Created scalable NodeJS Backend
          RESTful APIs hosted in Kubernetes, highly available React Frontend
          hosted in Firebase, and an effiecent Postgres database. Sped up
          development using Docker and deployments with CI / CD processes in
          Gitlab. Implemented real time web socket messaging for admin and
          customer service departments.
        </ExperienceItem>
        <Divider />
        <ExperienceItem
          title="Senior Full Stack Web developer / Grow"
          from="Feb, 2014"
          to="Nov, 2017"
        >
          Implemented NodeJS RESTful APIs that connected to hundreds of 3rd
          party data sources and APIs. Designed a Postgres data warehouse that
          was scalable and handled huge workloads. Created the React dashboard
          Frontend that would connect in real time to provide business
          intelligence.
        </ExperienceItem>
        <Divider />
        <ExperienceItem
          title="Senior Full Stack Web developer / Media Rain"
          from="Mar, 2013"
          to="Feb, 2014"
        >
          Created a PHP RESTful API in CakePHP that would interface with School
          Specialty, Clever, SES, and Twilio API's. SaaS application would
          deliver alerts to students about events. Students, Teachers and Admins
          could use this app to display calendar information and course
          instruction that could be used offline.
        </ExperienceItem>
        <Divider />
        <ExperienceItem
          title="Web developer / Zagg"
          from="Dec, 2010"
          to="Feb, 2013"
        >
          Created APIs that would interface with 3rd party credit card APIs.
          Authorize.net, Cybersource and Paypal. Created a PHP Backend system
          that customer service could use to create discounts, offers, sales,
          and orders. Developed HTML5 Frontend features that made checkout
          processes faster.
        </ExperienceItem>
        <Divider />
        <ExperienceItem
          title="Web developer / Classtop"
          from="Mar, 2008"
          to="Nov, 2010"
        >
          Maintained a C# application and a low cost efficient PHP application
          that interfaced with Facebook API's. The application was for
          classmates to connect with each on social media and take free courses
          that colleges offered to the public. Skills used: C#, PHP, MySQL,
          HTML, CSS, JQuery
        </ExperienceItem>
        <Divider />
        <ExperienceItem
          title="Web developer / Stevens-Henager College"
          from="Apr, 2002"
          to="Oct, 2006"
        >
          Created and maintained many Coldfusion servers that processed student,
          financial, and admissions information. Implemented many tools in
          reporting and scheduling that improved many admin processes. Skills
          used: Coldfusion, Oracle, HTML, CSS, Javascript
        </ExperienceItem>
      </div>
    </div>
  );
};

export default WorkExperience;
