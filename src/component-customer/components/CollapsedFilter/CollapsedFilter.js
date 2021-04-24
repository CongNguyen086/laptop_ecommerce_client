import React from 'react'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';

import './CollapsedFilter.scss';

const useInputStyles = makeStyles({
  content: {
    margin: 0,
  },
  expandIcon: {
    padding: '0 12px',
  }
});

function CollapsedFilter(props) {
  const { title, options } = props;
  const summaryClasses = useInputStyles();
  return (
    <div>
      <Accordion
        square={false}
        // onChange={onAccordionChanged}
        TransitionProps={{ timeout: 150 }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="filter-elem"
          onClick={(event) => event.stopPropagation()}
          classes={summaryClasses}
        >
          <h4 className="CollapsedFilter__title">{title}</h4>
        </AccordionSummary>
        <AccordionDetails>
          <ul className="CollapsedFilter__list">
            {options.map((item) => (
              <div key={item.id}>{item.label}</div>
            ))}
        </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default CollapsedFilter;