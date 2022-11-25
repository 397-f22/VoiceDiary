import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
// TODO: add type



const VoiceCalendar = ({ selectedDate, setSelectedDate, memoryDates }: any) => {
  const tileClassName = ({ date, view }: any ) => {
    if (memoryDates.find(({memdate} : any) => memdate === date)) {
      return 'highlightedDates';
    }
    return ''; 
  }
  
  
  return (
    <div className="mx-6">
      <Calendar value={selectedDate}
                onChange={setSelectedDate}
                tileClassName={tileClassName} />
    </div>
  );
};

export default VoiceCalendar;
