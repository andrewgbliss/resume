import React from 'react';
import Box from '@material-ui/core/Box';
import GamePadIcon from '@material-ui/icons/Gamepad';
import ListHeader from 'components/List/ListHeader';
import Skill from 'components/List/ListProgress';

const Skills: React.FC = () => {
  return (
    <>
      <ListHeader title="Skills" icon={<GamePadIcon />} />
      <Box paddingLeft={2} paddingRight={2}>
        <Skill title="React" value={85} />
        <Skill title="Node" value={90} />
        <Skill title="Javascript" value={95} />
        <Skill title="PostgreSQL" value={75} />
        <Skill title="Kubernetes" value={70} />
        <Skill title="Responsive UI" value={85} />
      </Box>
    </>
  );
};

export default Skills;
