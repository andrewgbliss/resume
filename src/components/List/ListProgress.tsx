import React from 'react';
import { withStyles, lighten } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import LinearProgress from '@material-ui/core/LinearProgress';

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

const ListProgress: React.FC<Props> = ({ title, value }) => {
  return (
    <Box paddingLeft={2} paddingRight={2}>
      <Typography variant="caption">
        <Box fontWeight="fontWeightLight">{title}</Box>
      </Typography>
      <Box m={1}>
        <BorderLinearProgress
          variant="determinate"
          color="secondary"
          value={value}
        />
      </Box>
    </Box>
  );
};

export default ListProgress;
