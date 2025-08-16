import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import React from 'react';
// import ThemeProvider from 'react-bootstrap/ThemeProvider';

import Navigation from './components/Navigation';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Price from './components/Price';
import Prices from './components/Services';
import Mentions from './components/Mentions';
// import BitrixForm from './components/BitrixForm'
import PageFooter from './components/PageFooter';
import FloatingPhoneIcon from './components/FloatingPhoneIcon';

function ContainerExample() {
  const {siteConfig} = useDocusaurusContext();
  return (
    // <ThemeProvider
    //     breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
    //     minBreakpoint="xxs"
    //   >
    <div>

      <Navigation></Navigation>
      <AboutMe></AboutMe>
      <Mentions></Mentions>
      <Education></Education>
      <Prices></Prices>
      <Price></Price>
      {/* <BitrixForm></BitrixForm> */}
      <PageFooter></PageFooter>
      <FloatingPhoneIcon />
    </div>
    // </ThemeProvider>
  );
}

export default ContainerExample;