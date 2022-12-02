import Calendar, { CalendarTileProperties } from 'react-calendar';
import './../components/Calendar.css';

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
    // console.log(memoryDates);
    return memoryDates.find(
      (memDate: Date) =>
        memDate.getDate() === date.getDate() &&
        memDate.getMonth() === date.getMonth() &&
        memDate.getFullYear() === date.getFullYear()
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
