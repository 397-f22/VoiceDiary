import Calendar from 'react-calendar';

// TODO: add type
const VoiceCalendar = ({ selectedDate, setSelectedDate }: any) => {
  return (
    <div className="mx-6">
      <Calendar value={selectedDate} onChange={setSelectedDate} />
    </div>
  );
};

export default VoiceCalendar;
