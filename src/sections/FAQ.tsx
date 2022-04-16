/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SiteData from '../SiteData';

const FAQ = () => {
  const [expanded, setExpanded] = React.useState<Number | false>(false);

  const handleChange = (panel: Number) => (event: any, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className="flex p-8 pt-16 justify-between min-h-[450px]" id="faq">
      <div className="flex flex-col space-y-8 py-4 px-10">
        <div className="text-6xl font-bold">
          {SiteData.faq.heading1}
          <br />
          {SiteData.faq.heading2}
        </div>
        <div>{SiteData.faq.subHeading}</div>
      </div>
      <div className="min-w-[40rem]">
        {SiteData.faq.data.map((ele, index) => (
          <Accordion expanded={expanded === index} onChange={handleChange(index)} key={index} className="mb-4 !shadow-none">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ flexShrink: 0, fontWeight: 'bold' }}>
                {ele.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {ele.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
