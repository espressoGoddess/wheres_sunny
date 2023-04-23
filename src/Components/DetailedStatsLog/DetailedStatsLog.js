import React from "react";
import { DateTime } from "luxon";
import { Table } from 'react-bootstrap';
import PropTypes from 'prop-types';


export default function DetailedStatsLog({ logs }) {

  const weatherRows = 
  logs.map(matched => {
    return (<tr key={matched.id}>
      <td>{DateTime.fromFormat(matched.date, 'yyyy-MM-dd').toLocaleString(DateTime.DATE_MED)}</td>
      <td>{matched.location.city}, {matched.location.state}</td>
      <td>{matched.is_day ? 'yes' : 'no'}</td>
      <td>{matched.pointsReceived}</td>
    </tr>)
  });

  return (
    <Table striped>
      <thead>
        <tr>
          <th>Date</th>
          <th>Location</th>
          <th>Was it Daylight?</th>
          <th>Points</th>
        </tr>
      </thead>
      <tbody>
        {weatherRows}
      </tbody>
    </Table>
  );
}

DetailedStatsLog.propTypes = {
  logs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    is_day: PropTypes.bool.isRequired,
    pointsReceived: PropTypes.number.isRequired,
    location: PropTypes.shape({
      city: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired
    })
  })).isRequired
}