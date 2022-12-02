import { useState } from 'react';
import { MemoryEntryType } from '../types/memory';
import MemoryEntry from './MemoryEntry';
import NavBar from './NavBar';
import VoiceCalendar from './Calendar';

interface MemoriesProps {
  memoryEntries: MemoryEntryType[];
}

const Memories = ({ memoryEntries }: MemoriesProps) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const filteredMems = memoryEntries.filter(
    (entry) =>
      entry.datetime.getDate() === selectedDate.getDate() &&
      entry.datetime.getMonth() === selectedDate.getMonth()
  );

  return (
    <div className="flex flex-col w-full h-screen gap-8">
      <NavBar />
      <div className="mx-auto">
        <VoiceCalendar
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          memoryDates={memoryEntries.map((entry) => entry.datetime)}
        />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col mx-6 gap-3">
          <h2 className="font-mono text-xl">{selectedDate.toDateString()}</h2>
          {filteredMems.length > 0 ? (
            filteredMems.map((entry, idx) => (
              <MemoryEntry key={idx} Entry={entry} />
            ))
          ) : (
            <p className="font-mono bg-accent p-3 rounded-md text-center">
              You did not record any entries on this date!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Memories;
