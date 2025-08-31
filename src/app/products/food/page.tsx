// 2. Menggunakan useRouter() (navigasi programatik)
// Kadang kita butuh navigasi lewat event (misalnya setelah klik tombol atau login berhasil).
// Kita bisa pakai useRouter dari next/navigation (untuk App Router).

// Fungsi Router:
// router.push("/path") → pindah ke halaman baru (seperti link biasa)
// router.replace("/path") → pindah tapi tanpa simpan history (tidak bisa back)
// router.back() → kembali ke halaman sebelumnya

// Apa itu useSearchParams?
// useSearchParams adalah hook dari next/navigation yang digunakan untuk mengambil
// dan membaca query string (URL search params) di App Router.

// Method yang tersedia
// useSearchParams() mengembalikan URLSearchParams (API bawaan JavaScript).
// Artinya bisa pakai method seperti:
// .get("key") → ambil nilai pertama dari key
// .getAll("key") → ambil semua nilai dengan key yang sama
// .has("key") → cek apakah param ada
// .toString() → ambil semua query string

"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { use } from "react";

export default function FoodPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  console.log(searchParams.get("id"));

  return (
    <div className="flex flex-col gap-5">
      Food Page
      <button
        onClick={() => router.push("/products")}
        className="p-2 w-[300px] bg-amber-700 text-white rounded-2xl"
      >
        back to Products
      </button>
    </div>
  );
}
