import { MemoryEntryType } from "../types/memory";
import MemoryEntry from "./MemoryEntry";
import NavBar from "./NavBar";

interface MemoriesProps {
  memoryEntries: MemoryEntryType[];
}

const Memories = ({ memoryEntries }: MemoriesProps) => {
  const filterDays = (lowerBound: number, upperBound: number) => {
    const newList = memoryEntries.filter((memory) => {
      const daysSince =
        new Date().valueOf() / 86400000 - memory.datetime.valueOf() / 86400000;
      return lowerBound <= daysSince && upperBound > daysSince;
    });
    return newList;
  };

  const pastDay = filterDays(0, 1);
  const pastWeek = filterDays(1, 7);
  const longTerm = filterDays(7, 86400000);

  const filteredMemories = {
    "Past Day": pastDay,
    "Past Week": pastWeek,
    "Long Term": longTerm,
  };

  return (
    <div className="flex flex-col w-full h-screen gap-8">
      <NavBar />
      <div className="flex flex-col gap-4">
        {Object.entries(filteredMemories).map(([key, value]) => {
          return (
            value.length != 0 && (
              <div className="flex flex-col mx-6 gap-3" key={key}>
                <h2 className="font-mono text-xl">{key}</h2>
                {value.map((entry, idx) => (
                  <MemoryEntry key={idx} Entry={entry} />
                ))}
              </div>
            )
          );
        })}
      </div>
    </div>
  );
};

export default Memories;
