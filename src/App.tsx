// src/App.tsx
import { useEffect, useState } from 'react';
import { getSummaries } from './api';
import SummaryForm from './components/summary-form';
import SummaryList from './components/summary-list';

interface Summary {
  _id: string;
  text: string;
  summary: string;
}

const App = () => {
  const [summaries, setSummaries] = useState<Summary[]>([]);

  const fetchSummaries = async () => {
    try {
      const data = await getSummaries();
      setSummaries(data);
    } catch (error) {
      console.error('Error fetching summaries:', error);
    }
  };

  useEffect(() => {
    fetchSummaries();
  }, []);

  const addNewSummary = () => fetchSummaries();

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-primary mb-8 text-center">Text Summarizer</h1>
      <SummaryForm onNewSummary={addNewSummary} />
      <SummaryList summaries={summaries} />
    </div>
  );
};

export default App;
