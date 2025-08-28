// Di Next.js (khususnya di Next.js Router),
// catch-all segment adalah cara untuk menangkap semua segmen URL setelah path tertentu.

// Biasanya ditulis dengan format:
// pages/blog/[...slug].js
// [...slug] artinya: semua segmen setelah /blog/ akan ditangkap ke dalam array bernama slug.

// Misalnya:
// /blog/hello → slug = ["hello"]
// /blog/hello/world → slug = ["hello", "world"]
// /blog/a/b/c → slug = ["a", "b", "c"]

// Optional Catch-all Segment
// Kalau pakai double dot ([[...slug]]) maka route bisa diakses tanpa parameter.
// pages/docs/[[...slug]].js
// /docs → slug = undefined
// /docs/setup → slug = ["setup"]
// /docs/setup/installation → slug = ["setup", "installation"]

// 📌 Kapan dipakai?
// Untuk dynamic routing dengan banyak kemungkinan segmen.

// Contoh nyata:
// Blog dengan nested category (/blog/tech/javascript/nextjs)
// Documentation website (/docs/getting-started/installation)
// File explorer (/files/users/documents/report.pdf)

interface DocsProps {
  params: {
    slug: string[];
  };
}

export default function Docs({ params }: DocsProps) {
  let title;
  if (params.slug?.length === 1) {
    title = `Feature ${params.slug[0]}`;
  }
  if (params.slug?.length === 2) {
    title = `Feature ${params.slug[0]} Concept ${params.slug[1]}`;
  }
  if (params.slug?.length === 3) {
    title = `Feature ${params.slug[0]} Concept ${params.slug[1]} Example ${params.slug[2]}`;
  }
  if (!params.slug) {
    title = "Docs Page";
  }

  return (
    <div>
      <h1>Navbar</h1>
      <p>{title}</p>
      <h2>Footer</h2>
    </div>
  );
}
