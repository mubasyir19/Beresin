export const formatDate = (value: string | Date) => {
  const d = new Date(value);
  return d.toLocaleDateString("id-ID"); // bahasa Indonesia
};
