import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

export const Experience = () => {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date='2019 - 2023'
          iconStyle={{background: "#3e497a", color:"#fff"}}
          icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>IIT ISM Dhanbad, Jharkhand</h3>
          <p>BTech</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className='vertical-timeline-element--work'
          date='2023 - Present'
          iconStyle={{background: "#e9d35b", color:"#fff"}}
          icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'>Dish Network Technologies</h3>
          <p>SDE</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
};
