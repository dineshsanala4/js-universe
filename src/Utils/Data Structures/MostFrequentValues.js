const getFrequentValues = (arr, k) => {
  const frequencyMap = new Map();

  for (const num of arr) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }

  const sortedByFrequency = [...frequencyMap.entries()].sort(
    (a, b) => b[1] - a[1]
  );

  // Get the top k most frequent values
  const topFrequent = sortedByFrequency.slice(0, k).map((entry) => entry[0]);

  return topFrequent;
};

export default getFrequentValues;
