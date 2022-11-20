import { MemoryEntryType } from "../types/memory";
import MemoryEntry from "./MemoryEntry";
import NavBar from "./NavBar";

interface MemoriesProps {
  memoryEntries: MemoryEntryType[];
}

const Memories = ({ memoryEntries }: MemoriesProps) => {
  return (
    <>
      <NavBar />
      <div className="flex flex-col mx-3 gap-3">
        {memoryEntries.map((entry) => (
          <MemoryEntry key={entry.id} Entry={entry} />
        ))}
      </div>
    </>
  );
};

export default Memories;
