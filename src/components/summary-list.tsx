interface Summary {
    _id: string;
    text: string;
    summary: string;
  }
  
  interface Props {
    summaries: Summary[];
  }
  
  const SummaryList: React.FC<Props> = ({ summaries }) => (
    <div className="mt-8 space-y-4">
      <h2 className="text-3xl font-bold text-primary">Previous Summaries</h2>
      {summaries.length === 0 ? (
        <p className="text-gray-500">No summaries available.</p>
      ) : (
        <ul className="space-y-4">
          {summaries.map((item) => (
            <li key={item._id} className="p-4 bg-white shadow rounded-lg">
              <p className="font-semibold text-gray-700 mb-2">Original:</p>
              <p className="text-gray-600">{item.text}</p>
  
              <p className="font-semibold text-primary mt-4">Summary:</p>
              <p className="text-gray-800">{item.summary}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
  
  export default SummaryList;
  