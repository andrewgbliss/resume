import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import LinkIcon from '@material-ui/icons/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
  wordWrap: {
    wordWrap: 'break-word',
  },
  listItemIcon: {
    color: theme.palette.primary.main,
    minWidth: 40,
  },
}));

interface Props {
  href: string;
}

const LinkItem: React.FC<Props> = ({ href }) => {
  const classes = useStyles();
  return (
    <ListItem>
      <ListItemIcon
        classes={{
          root: classes.listItemIcon,
        }}
      >
        <LinkIcon />
      </ListItemIcon>
      <ListItemText
        disableTypography
        primary={
          <Typography
            component="div"
            variant="body2"
            className={classes.wordWrap}
          >
            <Box fontWeight="fontWeightLight">
              <Link
                target="_blank"
                rel="noreferrer"
                color="inherit"
                href={href}
              >
                {href}
              </Link>
            </Box>
          </Typography>
        }
        classes={{
          root: classes.wordWrap,
        }}
      />
    </ListItem>
  );
};

const Links: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="caption" gutterBottom>
        <Box fontWeight="fontWeightLight">
          Working in open source code is my passion. Below are a list of
          projects, contributions, articles, and social media.
        </Box>
      </Typography>
      <List>
        <LinkItem href="https://www.nthchildconsulting.com" />
        <LinkItem href="https://medium.com/@nthchildconsulting" />
        <LinkItem href="http://www.github.com/andrewgbliss" />
        <LinkItem href="https://www.npmjs.com/~andrewgbliss" />
        <LinkItem href="https://gitlab.com/sundry" />
        <LinkItem href="https://www.linkedin.com/in/andrewgbliss/" />
      </List>
    </div>
  );
};

export default Links;
