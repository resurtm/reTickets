import React from 'react';

import RoomSelector from 'editor/room-selector';
import YearSelector from 'editor/year-selector';
import Calendar from 'editor/calendar/calendar';

export default class RoomsEditor extends React.Component {
  render() {
    return (
      <div className="columns">
        <div className="column is-two-thirds">

          <div className="columns">
            <div className="column is-one-third">
              <RoomSelector/>
            </div>
            <div className="column">
              <YearSelector/>
            </div>
          </div>

          <Calendar/>

        </div>
        <div className="column">

          sidebar

        </div>
      </div>
    );
  }
}