import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import { useUser } from '../../../context/Users.context';

const localizer = momentLocalizer(moment);

export default function EventCalendar({ calendarEvent }) {

  const { events } = useUser();

  return (
    <div className="py-2 rounded shadow-md" style={{backgroundColor:"#fdd178"}}>
      <h2 className="text-lg font-semibold mb-4 text-center">Event Calendar</h2>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor={(events) => { return new Date(events.start) }}
        endAccessor={(events) => { return new Date(events.start) }}
        style={{ height: 400,backgroundColor:"#fef8d6" }}
        onSelectEvent={(events) => { calendarEvent(events) }}
        views={['month', 'week', 'day']}
      />
    </div>
  );
}


// startAccessor={(event) => { return moment(event.start) }}