import React from "react";
import { DateTime } from "luxon";
import { Table } from 'react-bootstrap';


export default function DetailedStatsLog({ logs }) {

  const weatherRows = 
  logs.map(matched => {
    return (<tr key={matched.id}>
      <td>{matched.userName}</td>
      <td>{DateTime.fromFormat(matched.date, 'yyyy-MM-dd').toLocaleString(DateTime.DATE_MED)}</td>
      <td>{matched.location.city}, {matched.location.state}</td>
      <td>{matched.pointsReceived}</td>
    </tr>)
  });

  return (
    <Table striped>
      <thead>
        <tr>
          <th>Name</th>
          <th>Date</th>
          <th>Location</th>
          <th>Points</th>
        </tr>
      </thead>
      <tbody>
        {weatherRows}
      </tbody>
    </Table>
  );
}