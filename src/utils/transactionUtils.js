export const paginate = (data, page, pageSize) => {
  const start = (page - 1) * pageSize;
  return data.slice(start, start + pageSize);
};

export const calculatePoints = (amount) => {
  let points = 0;
  if (amount > 100) {
    points += 2 * (amount - 100); 
  }  
  if (amount >= 50 && amount <= 100) {
    points += (amount - 50);
  }
  return points;
};
