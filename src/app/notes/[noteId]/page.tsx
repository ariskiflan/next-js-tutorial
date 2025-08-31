// Dynamic Routing adalah fitur di Next.js yang memungkinkan kita membuat halaman dengan URL yang dinamis, berdasarkan parameter.
// Berbeda dengan static route (/about, /contact) yang fixed.
// Dynamic route bisa berubah sesuai data, misalnya /blog/1, /blog/2, /blog/nextjs-routing.

// 📌 Cara Membuat Dynamic Route
// Di Next.js, dynamic route dibuat dengan menambahkan tanda kurung siku [] pada nama file di folder pages.

// Struktur folder:
// pages/
//  └── blog/
//       └── [id].js

////////////////////////////////////////////////////////////////////////////////

// 1. Static Metadata
// Static metadata adalah metadata yang ditentukan secara langsung (hardcode) di dalam file page.js atau layout.js,
// dan tidak berubah-ubah.
// Contoh: title, description, atau favicon default untuk seluruh aplikasi.

// 2. Dynamic Metadata
// Dynamic metadata digunakan kalau metadata harus menyesuaikan dengan data tertentu.
// Biasanya dipakai untuk:
// Halaman detail (misalnya novel, artikel, produk, dsb.)
// SEO per halaman berdasarkan data API
// Next.js menyediakan fungsi generateMetadata() untuk membuat metadata dinamis.

import { notFound } from "next/navigation";
import { Metadata } from "next";

interface NoteProps {
  params: Promise<{ noteId: string }>; // sekarang params adalah Promise
}

export const generateMetadata = async ({
  params,
}: NoteProps): Promise<Metadata> => {
  const { noteId } = await params; // ✅ tunggu params selesai

  return {
    title: `Note Detail ${noteId}`,
  };
};

export default async function Note({ params, searchParams }: any) {
  const { noteId } = await params; // ✅ params harus di-await
  const query = await searchParams; // ✅ searchParams juga harus di-await

  console.log("noteId:", noteId);
  console.log("query:", query);

  if (parseInt(noteId) > 5) {
    notFound();
  }

  return (
    <h3>
      Note Detail {noteId} - query id: {query.id}
    </h3>
  );
}
