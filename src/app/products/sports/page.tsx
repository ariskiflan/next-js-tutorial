// 3. Redirect Server-side
// Kalau navigasi harus dilakukan di server (misalnya user belum login), kita bisa pakai redirect() dari next/navigation.
// 👉 Ini dijalankan sebelum render page, jadi user tidak sempat lihat halaman yang di tuju dulu.

import React from "react";
import { redirect } from "next/navigation";

export default function SportsPage() {
  const isLogin = false;

  if (!isLogin) {
    redirect("/products");
  }
  return <div>Sports Page</div>;
}
