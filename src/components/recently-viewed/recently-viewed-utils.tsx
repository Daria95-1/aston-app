import { HistoryItem } from '@slices/user-slice'; 

export const getFilteredHistory = (
  history: HistoryItem[],
  nonVisible: string,
  limit: number = 5
): HistoryItem[] => {
  return history
    .filter((oneOfHistory) => oneOfHistory.key !== nonVisible)
    .slice(0, limit);
};