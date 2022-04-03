/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AccordianData = [{
  heading: 'How many Contacts we Have?',
  text: 'Yet bed any for  assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.'
}, {
  heading: 'How many Contacts we Have?',
  text: 'Yet bed any for  assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.'
}, {
  heading: 'How many Contacts we Have?',
  text: 'Yet bed any for  assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.'
}, {
  heading: 'How many Contacts we Have?',
  text: 'Yet bed any for  assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.'
}];
const FAQ = () => {
  const [expanded, setExpanded] = React.useState<Number | false>(false);

  const handleChange = (panel: Number) => (event: any, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className="flex p-8 pt-16  space-x-4 min-h-[450px]">
      <div className="flex flex-col  space-y-8 py-4 px-10">
        <div className="text-6xl font-bold">
          Any questions?
          {' '}
          <br />
          We got you.
        </div>
        <div>Yet bed any for  assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.</div>
      </div>
      <div>
        {AccordianData.map((ele, index) => (
          <Accordion expanded={expanded === index} onChange={handleChange(index)} key={index} className="mb-4 !shadow-none">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ flexShrink: 0, fontWeight: 'bold' }}>
                {ele.heading}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {ele.text}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
