import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import theme from 'themes/default';
import Layout from 'components/Layout/Layout';
import Footer from 'components/Footer/Footer';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
