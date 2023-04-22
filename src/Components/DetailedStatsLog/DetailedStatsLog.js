import React from "react";
import { DateTime } from "luxon";
import { Table } from 'react-bootstrap';


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