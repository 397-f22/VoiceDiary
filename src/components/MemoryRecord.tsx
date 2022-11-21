import { useNavigate, useParams } from "react-router";
import { MemoryEntryType } from "../types/memory";
import { toTwelveHourTime } from "../utilities/time";
import NavBar from "./NavBar";

interface MemoryRecordProps {
  data: MemoryEntryType[];
}

const MemoryRecord = ({ data }: MemoryRecordProps) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const navigateToHome = () => navigate("/");
  const entry = data.find((entry) => entry.id === parseInt(id || ""));
  if (!entry)
    return (
      <div className="m-4">
        <h1 className="text-black text-2xl font-semibold">Error</h1>
        <hr className="my-2" />
        <p className="bg-red-100 border border-red-700 px-4 py-1">
          The requested entry of <b>id: {id}</b> does not exist.
        </p>
        <p className="text-blue-500 underline my-2" onClick={navigateToHome}>
          Home
        </p>
      </div>
    );
  const { title, datetime, transcript } = entry;
  return (
    <>
      <NavBar />
      <div className="flex flex-col m-4 gap-4">
        <div className="bg-accent p-4 rounded-xl">
          <h1 className="font-mono text-xl overflow-hidden text-ellipsis">
            {title}
          </h1>
          <p className="text-xs text-mono justify-self-end">
            {`${datetime.toDateString()} ${toTwelveHourTime(datetime)}`}
          </p>
        </div>
        <div className="font-mono">
          <h2 className="text-primary font-graduate">Transcript</h2>
          <p className="border rounded-md p-3 font-mono text-lg shadow-sm">
            {transcript}
          </p>
        </div>
      </div>
    </>
  );
};

export default MemoryRecord;
