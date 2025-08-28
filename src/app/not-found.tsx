// Not Found Page adalah halaman khusus yang ditampilkan ketika user membuka URL yang tidak ada.
// Misalnya, jika user akses /halaman-yang-tidak-ada, Next.js akan mengarahkannya ke halaman 404.

// Buat file khusus bernama not-found.tsx di dalam folder app.
// Bisa juga buat not-found.tsx di dalam route tertentu → hanya berlaku di route itu.

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="mt-2">Halaman yang Anda cari tidak ditemukan bro...</p>
    </div>
  );
}
