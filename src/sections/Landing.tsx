/* eslint-disable max-len */
import React from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import SiteData from '../SiteData.json';

type Anchor = 'top' ;

const Landing = () => {
  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event
        && event.type === 'keydown'
        && ((event as React.KeyboardEvent).key === 'Tab'
          || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  return (
    <div className="landing pl-24 flex items-center">
      <div className="flex flex-col text-white space-y-8">
        <div className="font-extrabold text-[5rem]">{SiteData.landing.heading1}</div>
        <div className="text-[2rem] font-bold">
          {SiteData.landing.heading2a}
          <span className="text-[#FFE156]">{SiteData.landing.heading2b}</span>
        </div>
        <div className="w-[80%] text-lg">
          {SiteData.landing.subheading}
        </div>
        <div className="flex space-x-4">
          <button type="button" className="px-8 py-3 uppercase bg-[#336CAE]">{SiteData.landing.button1}</button>
          <button type="button" onClick={toggleDrawer('top', true)} className="px-8 py-3 border-2 uppercase bg-white text-black">{SiteData.landing.button2}</button>
        </div>
      </div>
      <SwipeableDrawer
        anchor="top"
        open={state.top}
        onClose={toggleDrawer('top', false)}
        onOpen={toggleDrawer('top', true)}
      >
        <div style={{ minHeight: '100px' }} />
      </SwipeableDrawer>
    </div>
  );
};

export default Landing;
