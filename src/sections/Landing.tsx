/* eslint-disable max-len */
import React from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

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
        <div className="font-extrabold text-[5rem]">We Are Proud</div>
        <div className="text-[2rem] font-bold">
          Students of
          {' '}
          <span className="text-[#FFE156]">Indraprastha University</span>
        </div>
        <div className="w-[80%] text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quas cumque optio totam doloremque iure quae eos adipisci deserunt voluptate alias rem debitis tempora, esse nemo illo delectus assumenda ex.
        </div>
        <div className="flex space-x-4">
          <button type="button" className="px-8 py-3 uppercase bg-[#336CAE]">Our Mission</button>
          <button type="button" onClick={toggleDrawer('top', true)} className="px-8 py-3 border-2 uppercase bg-white text-black">Our Schools</button>
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
