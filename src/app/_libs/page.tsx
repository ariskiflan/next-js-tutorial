// Di Next.js App Router (mulai v13) ada konsep Private Folders,
// yaitu folder di dalam app/ yang tidak ikut menjadi route meskipun namanya ada di dalam struktur direktori.
// Private folders ditandai dengan underscore _ di awal nama folder (_namaFolder).

// Kenapa ada Private Folders?
// Next.js App Router membentuk route berdasarkan struktur folder di app/.
// Kadang kita ingin punya folder untuk menyimpan kode, tapi bukan untuk route.

// Di sinilah private folder berguna:
// Menyimpan komponen lokal (misal Card, Table khusus dashboard).
// Menyimpan utilitas/helper terkait route itu saja.
// Menjaga struktur app tetap bersih tanpa takut kebocoran route.

export default function page() {
  return <h1>this should be private</h1>;
}
