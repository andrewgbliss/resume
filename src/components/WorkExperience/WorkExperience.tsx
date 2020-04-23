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
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';

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
  skills: Array<string>;
  children: React.ReactNode;
}

const ExperienceItem: React.FC<Props> = ({
  title,
  from,
  to,
  skills,
  children,
}) => {
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
      <Box p={2}>
        <Grid container>
          {skills.map((skill: string) => (
            <Grid item key={skill}>
              <Box paddingTop={1} paddingRight={1}>
                <Chip label={skill} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
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
          title="Senior Full Stack Web Developer / Solo"
          from="Dec, 2017"
          to="Current"
          skills={['React', 'Node', 'Postgres', 'Kubernetes']}
        >
          Solo is a CRM platform for clients to sell solar and roofing panels.
          Migrated legacy PHP, MySQL systems to a React, Node, Postgres stack,
          saving the company thousands of dollars in scaling issues. Refactored
          UI to a responsive web design. Implemented realtime socket messaging
          bewteen sales representatives to improve sales. Planned and
          implemented database backups, replicas, caching. Introduced best
          practices, unit testing and CI / CD pipelines. Created a financial
          system to allow auto generating of invoices, saving many tedious
          hours, speeding up client payments, and increasing company income.
        </ExperienceItem>
        <Divider />
        <ExperienceItem
          title="Senior Full Stack Web Developer / Grow"
          from="Feb, 2014"
          to="Nov, 2017"
          skills={['React', 'Angular', 'Node', 'Postgres', 'AWS']}
        >
          Grow is a company that collects data from APIs and displays metrics in
          business intelligences dashboards. Implemented NodeJS RESTful APIs
          that connected to hundreds of 3rd party data sources. Designed
          scalable Postgres data warehouses. Created the React dashboard
          frontend that would connect in real time to provide business
          intelligence.
        </ExperienceItem>
        <div className="no-print">
          <ExperienceItem
            title="Senior Full Stack Web Developer / Media Rain"
            from="Mar, 2013"
            to="Feb, 2014"
            skills={['PHP', 'MySQL', 'Angular', 'HTML', 'CSS']}
          >
            Created a PHP RESTful API in CakePHP that would interface with
            School Specialty, Clever, SES, and Twilio API's. SaaS application
            would deliver alerts, emails and texts, to students about events.
            Students, Teachers and Admins could use this app to display calendar
            information and course instruction that could be used offline.
          </ExperienceItem>
          <Divider />
          <ExperienceItem
            title="Web Developer / Zagg"
            from="Dec, 2010"
            to="Feb, 2013"
            skills={['PHP', 'MySQL', 'Javascript', 'HTML', 'CSS']}
          >
            Created APIs that would interface with 3rd party credit card APIs.
            Authorize.net, CyberSource and PayPal. Created a PHP Backend system
            that customer service could use to create discounts, offers, sales,
            and orders. Developed HTML5 Frontend features that made checkout
            processes faster.
          </ExperienceItem>
          <Divider />
          <ExperienceItem
            title="Web Developer / Classtop"
            from="Mar, 2008"
            to="Nov, 2010"
            skills={['PHP', 'MySQL', 'Javascript', 'HTML', 'CSS']}
          >
            Maintained a C# application and a low cost efficient PHP application
            that interfaced with Facebook API's. The application was for
            classmates to connect with each on social media and take free
            courses that colleges offered to the public. Implemented server
            scaling as we found out that many connections would become processor
            intensive.
          </ExperienceItem>
          <Divider />
          <ExperienceItem
            title="Web Developer / Stevens-Henager College"
            from="Apr, 2002"
            to="Oct, 2006"
            skills={['Coldfusion', 'Oracle', 'Javascript', 'HTML', 'CSS']}
          >
            Created and maintained many Coldfusion servers that processed
            student, financial, and admissions information. Implemented many
            tools in reporting and scheduling that improved many admin
            processes.
          </ExperienceItem>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
