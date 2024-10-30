import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarComponent = ({ events, setEvents }) => {
    const [date, setDate] = useState(new Date());

    const handleDateClick = () => {
        
        
            setEvents([...events, { date }]);
        
    };

    return (
        <div>
            <Calendar
                onChange={setDate}
                value={date}
                onClickDay={handleDateClick}
            />
            <ul>
                {events.map((event, index) => (
                    <li key={index}>
                       {event.date.toString()}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CalendarComponent;
