import axios from 'axios';

const API_URL = 'http://localhost:8000';

export const summarizeText = async (text: string) => {
  const response = await axios.post(`${API_URL}/summarize`, { text });
  return response.data;
};

export const getSummaries = async () => {
  const response = await axios.get(`${API_URL}/summaries`);
  return response.data.summaries;
};
