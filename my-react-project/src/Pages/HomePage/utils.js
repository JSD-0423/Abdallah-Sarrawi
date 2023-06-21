export const sortData = (selectedKey, cardsData) => {
  const sortedData = [...cardsData].sort((a, b) => {
    if (a[selectedKey] < b[selectedKey]) {
      return -1;
    }
    if (a[selectedKey] > b[selectedKey]) {
      return 1;
    }
    return 0;
  });
  return sortedData;
};

export const sortOptions = [
  { label: "Autho Name", value: "name" },
  { label: "Topic Title", value: "topic" },
];
