import Calendar, { CalendarTileProperties } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const VoiceCalendar = ({
  selectedDate,
  setSelectedDate,
  memoryDates,
}: {
  selectedDate: Date;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
  memoryDates: Date[];
}) => {
  const tileClassName = ({ date }: CalendarTileProperties) => {
    return memoryDates.find(
      (memDate: Date) =>
        memDate.getMonth() === date.getMonth() &&
        memDate.getDate() === date.getDate()
    )
      ? 'bg-accent'
      : '';
  };

  return (
    <div className="mx-6">
      <Calendar
        value={selectedDate}
        onChange={setSelectedDate}
        tileClassName={tileClassName}
      />
    </div>
  );
};

export default VoiceCalendar;
