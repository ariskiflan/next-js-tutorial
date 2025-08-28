// Route Group adalah fitur di Next.js App Router (mulai v13)
// yang memungkinkan kita mengelompokkan beberapa route di dalam satu folder tanpa memengaruhi URL.
// Dibuat dengan kurung ( ) pada nama folder.
// Bagus untuk mengorganisir struktur folder tanpa mengubah path publik.

// Kapan dipakai?
// Mengelompokkan route berdasarkan domain fitur
// Misalnya (auth) untuk login & register, (marketing) untuk landing page, (dashboard) untuk fitur internal.
// Mengelola layout berbeda per group
// Next.js memungkinkan tiap group punya layout.tsx sendiri.

// Route Group → pakai ( ), untuk mengatur struktur folder dan layout, tidak memengaruhi URL.
// Private Folder → pakai _, untuk menyimpan komponen/helper internal agar tidak jadi route.

export default function Login() {
  return <div>Login page</div>;
}
