import { useState } from 'react';
import { summarizeText } from '../api';

interface Props {
  onNewSummary: (summary: string) => void;
}

const SummaryForm: React.FC<Props> = ({ onNewSummary }) => {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return alert('Please enter text to summarize.');

    try {
      setLoading(true);
      const { summary } = await summarizeText(text);
      onNewSummary(summary);
      setText('');
    } catch (error) {
      alert('Error summarizing text.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded-xl shadow-lg bg-white">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to summarize..."
        className="w-full p-3 border rounded-lg focus:outline-primary"
        rows={4}
      />
      <button
        type="submit"
        className={`w-full p-2 rounded-lg text-white ${loading ? 'bg-gray-400' : 'bg-primary hover:bg-gray-700'}`}
        disabled={loading}
      >
        {loading ? 'Summarizing...' : 'Summarize'}
      </button>
    </form>
  );
};

export default SummaryForm;
