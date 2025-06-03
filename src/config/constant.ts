export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BERESIN;

export const status = [
  { value: "NOT_STARTED", label: "Belum Mulai" },
  { value: "IN_PROGRESS", label: "Sedang Progress" },
  { value: "ON_HOLD", label: "Review" },
  { value: "COMPLETED", label: "Selesai" },
];

export const priority = [
  { value: "LOW", label: "Low" },
  { value: "MEDIUM", label: "Medium" },
  { value: "HIGH", label: "High" },
];
