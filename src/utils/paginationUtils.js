export const paginate = (data, page, pageSize) => {
  const start = (page - 1) * pageSize;
  return data.slice(start, start + pageSize);
};
