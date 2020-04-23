import React from 'react';
import Box from '@material-ui/core/Box';
import TranslateIcon from '@material-ui/icons/Translate';
import ListHeader from 'components/List/ListHeader';
import Language from 'components/List/ListProgress';

const Languages: React.FC = () => {
  return (
    <>
      <ListHeader title="Languages" icon={<TranslateIcon />} />
      <Box paddingLeft={2} paddingRight={2} paddingBottom={4}>
        <Language title="English" value={100} />
        <Language title="Japanese" value={60} />
      </Box>
    </>
  );
};

export default Languages;
