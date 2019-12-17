import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(theme => ({
  icon: {
    color: theme.palette.primary.main,
    minWidth: 40,
  },
}));

interface Props {
  title: string;
  icon: any;
}

const ListHeader: React.FC<Props> = ({ title, icon }) => {
  const classes = useStyles();
  return (
    <List>
      <ListItem>
        <ListItemIcon
          classes={{
            root: classes.icon,
          }}
        >
          {icon}
        </ListItemIcon>
        <ListItemText
          disableTypography
          primary={
            <Typography variant="h6">
              <Box fontWeight="fontWeightRegular">{title}</Box>
            </Typography>
          }
        />
      </ListItem>
    </List>
  );
};

export default ListHeader;
