import { MemoryEntryType } from "../types/memory";
import { toTwelveHourTime } from "../utilities/time";
import { useNavigate } from "react-router-dom";

interface MemoryEntryProps {
  Entry: MemoryEntryType;
}

const MemoryEntry = ({ Entry: { id, title, datetime } }: MemoryEntryProps) => {
  const navigate = useNavigate();
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
    navigate(`/${id}`);
  return (
    <div
      role="button"
      onClick={handleClick}
      className="flex justify-between bg-accent text-black border border-black rounded-md py-3 px-4"
    >
      <p className="flex gap-2 font-mono">
        <span></span>
        {title}
      </p>
      <p className="text-sm font-mono">{toTwelveHourTime(datetime)}</p>
    </div>
  );
};

export default MemoryEntry;
