// Apa itu Navigation di Next.js?
// Navigation (navigasi) di Next.js adalah cara untuk berpindah halaman di dalam aplikasi.
// Berbeda dengan link HTML biasa (<a>),
// Next.js menyediakan komponen dan hook khusus supaya navigasi lebih cepat (client-side navigation) tanpa reload full page.

// 1. Menggunakan <Link> (paling umum)
// <Link> adalah komponen bawaan Next.js untuk navigasi client-side.

// 2. Menggunakan useRouter() (navigasi programatik)
// Kadang kita butuh navigasi lewat event (misalnya setelah klik tombol atau login berhasil).
// Kita bisa pakai useRouter dari next/navigation (untuk App Router).

// 3. Redirect Server-side
// Kalau navigasi harus dilakukan di server (misalnya user belum login), kita bisa pakai redirect() dari next/navigation.

// Static vs Dynamic Navigation
// Static Navigation → link langsung ke halaman tertentu (pakai <Link>).
// Dynamic Navigation → link dengan parameter dinamis.

// Contoh:
// <Link href={`/novel/${novel.id}`}>{novel.title}</Link>

// 1. prefetch di <Link>
// Apa itu prefetch?
// prefetch berfungsi untuk memuat data & JavaScript halaman tujuan secara otomatis di background, bahkan sebelum user mengklik link tersebut.
// Tujuannya supaya navigasi ke halaman berikutnya jadi super cepat.

// Default Behavior
// Secara default, Next.js akan melakukan prefetch jika link terlihat di viewport (kelihatan di layar).
// Jadi user akan merasa halaman tujuan terbuka instan saat klik.

// 2. scroll di <Link>
// Apa itu scroll?
// scroll menentukan apakah halaman akan scroll ke atas (top) setelah navigasi.

// Default Behavior
// Default = true → setelah klik link, halaman otomatis scroll ke atas.
// Kalau di-set false → posisi scroll tetap dipertahankan (berguna untuk navigasi antar tab/konten).

// 3. Apa itu replace?
// replace digunakan untuk navigasi ke halaman baru TANPA menyimpan history di browser.
// Artinya: setelah pindah halaman, user tidak bisa klik tombol "Back" (←) untuk kembali ke halaman sebelumnya.

// Apa itu usePathname?
// usePathname adalah hook dari next/navigation (App Router) yang digunakan untuk mengambil path URL aktif saat ini.

// Bisa dipakai untuk:
// Menentukan halaman mana yang sedang aktif
// Membuat highlight di menu navigasi
// Logika kondisional berdasarkan route

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();
  console.log(pathName);

  return (
    <div>
      <ul className="flex gap-2">
        <Link
          className={pathName === "/products/food" ? "text-red-500" : ""}
          prefetch={false}
          href={"/products/food"}
        >
          Food
        </Link>
        <Link
          className={pathName === "/products/sports" ? "text-red-500" : ""}
          href={"/products/sports"}
        >
          Sports
        </Link>
        <Link
          className={pathName === "/products/technology" ? "text-red-500" : ""}
          href={"/products/technology"}
        >
          Technology
        </Link>
      </ul>
      {children}
    </div>
  );
}
