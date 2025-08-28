// Dynamic Routing adalah fitur di Next.js yang memungkinkan kita membuat halaman dengan URL yang dinamis, berdasarkan parameter.
// Berbeda dengan static route (/about, /contact) yang fixed.
// Dynamic route bisa berubah sesuai data, misalnya /blog/1, /blog/2, /blog/nextjs-routing.

// 📌 Cara Membuat Dynamic Route
// Di Next.js, dynamic route dibuat dengan menambahkan tanda kurung siku [] pada nama file di folder pages.

// Struktur folder:
// pages/
//  └── blog/
//       └── [id].js

import { notFound } from "next/navigation";
interface NoteProps {
  params: {
    noteId: string;
  };
}

export default function Note({ params }: NoteProps) {
  if (parseInt(params.noteId) > 5) {
    notFound();
  }
  return <h3>Note Detail {params.noteId} </h3>;
}
