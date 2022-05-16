/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import SiteData from '../SiteData';
import NoticeBG from '../assets/notice_bg.png';

type Anchor = 'top' | 'right';

interface INoticeData {
  month: string;
  year: string;
  title: string;
  url: string;
}

const noticeAPI = 'www.mynoticeapi.com';

const Landing = () => {
  const [notices, setNotices] = useState<Array<INoticeData>>([
    {
      month: 'MAY', year: '2022', title: 'Placement opportunity for BBA, B.Com and MBA students of batch passing out in year 2022 in the company Zone Media', url: 'http://www.ipu.ac.in/Pubinfo2022/n290422%20(15).pdf'
    },
    {
      month: 'MAY', year: '2022', title: 'Placement opportunity for B.Tech, BCA and MCA students of batch passing out in year 2022 in the company Bristlecone', url: 'http://www.ipu.ac.in/Pubinfo2022/n290422%20(14).pdf'
    },
    {
      month: 'MAY', year: '2022', title: 'Placement opportunity for B.Tech (CSE, IT, ECE, EEE, EE, ICE and ME) students of 2022 batch in NEXUS ENGICONSULTS PVT. LTD', url: 'http://www.ipu.ac.in/Pubinfo2022/n290422%20(13).pdf'
    },
    {
      month: 'MAY', year: '2022', title: 'Placement opportunity for B.Tech students of batch passing out in year 2022 in the company RxLogix Corporation', url: 'http://www.ipu.ac.in/Pubinfo2022/n280422%20(9).pdf'
    },
    {
      month: 'MAY', year: '2022', title: 'Placement opportunity for B.Tech MAE/Mechatronics students of 2022 batch in the company T R Solutions LLP', url: 'http://www.ipu.ac.in/Pubinfo2022/n4260422%20(8).pdf'
    }
  ]);
  const [state, setState] = useState({
    top: false,
    right: false,
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
  useEffect(() => {
    (async () => {
      const data = await fetch(noticeAPI);
      const dataJSON = await data.json();
      setNotices(dataJSON);
    })();
  }, []);
  return (
    <div className="landing pl-24 flex items-center w-screen" id="home">
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
          <button type="button" onClick={toggleDrawer('right', true)} className="px-8 py-3 uppercase bg-[#336CAE]">{SiteData.landing.button1}</button>
          <button type="button" onClick={toggleDrawer('top', true)} className="px-8 py-3 border-2 uppercase bg-white text-black">{SiteData.landing.button2}</button>
        </div>
      </div>
      <SwipeableDrawer
        anchor="top"
        open={state.top}
        onClose={toggleDrawer('top', false)}
        onOpen={toggleDrawer('top', true)}
      >
        <div className="w-full h-[60vh] p-4">
          <div className="w-full h-full grid grid-cols-7 grid-rows-2 gap-2">
            {SiteData.landing.schools.map((school) => (
              <a href={school.url} target="_blank" rel="noreferrer">
                <div className="relative w-full h-full flex justify-center items-center">
                  <div className="absolute w-full h-full bg-black z-0">
                    <img src={school.image} className="w-full h-full object-cover opacity-70 hover:opacity-50 blur-[1px]" alt="school" />
                  </div>
                  <div className="z-10 text-4xl text-center text-white font-bold">{school.name}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </SwipeableDrawer>
      <SwipeableDrawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer('right', false)}
        onOpen={toggleDrawer('right', true)}
      >
        <div className="w-[35vw] h-screen flex flex-col p-4 items-center relative">
          <div className="absolute w-full h-full z-0 top-0">
            <img src={NoticeBG} alt="background" className="object-cover w-full h-full" />
          </div>
          <div className="w-full text-2xl font-bold flex justify-end z-10"><div className="scale-x-110 w-fit" role="button" onKeyDown={toggleDrawer('right', false)} tabIndex={0} onClick={toggleDrawer('right', false)}>X</div></div>
          <div className="text-2xl text-center mb-8 flex items-center cursor-default z-10">
            <div className="flex flex-col">
              IMPORTANT&nbsp;
              <div className="w-3/4 bg-blue-500 h-1 rounded-sm" />
            </div>
            <div className="text-white bg-blue-500 p-2 rounded-sm">NOTICES</div>
          </div>
          <div className="flex flex-col justify-between h-full w-full z-10">
            {notices.map((notice) => (
              <a href={notice.url} target="_blank" rel="noreferrer">
                <div className="flex h-24 border-2 border-blue-500 items-center">
                  <div className="flex flex-col h-24 w-24 shrink-0 items-center justify-center text-white bg-blue-500 -translate-x-1">
                    <span>{notice.month}</span>
                    <span className="text-2xl font-bold">{notice.year}</span>
                  </div>
                  <p className="text-ellipsis p-2">{notice.title}</p>
                </div>
              </a>
            ))}
          </div>
          <a href="http://www.ipu.ac.in/career_plcmnt.php" className="z-10" target="_blank" rel="noreferrer">
            <div className="text-white bg-blue-500 p-2 mt-4 rounded-sm">Show More</div>
          </a>
        </div>
      </SwipeableDrawer>
    </div>
  );
};

export default Landing;
