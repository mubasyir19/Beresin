export function getInitialsFromTwoWords(fullName: string): string {
  if (!fullName) {
    return ""; // Mengembalikan string kosong jika input kosong
  }

  // Memisahkan string menjadi array kata berdasarkan spasi.
  // .filter(word => word.length > 0) memastikan kita tidak memasukkan string kosong
  // jika ada spasi ganda (contoh: "  John Doe").
  const words = fullName.split(" ").filter((word) => word.length > 0);
  let initials = "";

  if (words.length > 0) {
    // Ambil huruf pertama dari kata pertama
    initials += words[0][0].toUpperCase();
  }

  if (words.length > 1) {
    // Jika ada kata kedua, ambil huruf pertama dari kata kedua
    initials += words[1][0].toUpperCase();
  }

  return initials;
}
