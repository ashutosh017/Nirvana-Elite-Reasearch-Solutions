import type React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";
import { GraduationCap, Users, LogOut, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

async function signOut() {
  "use server";
  //   cookies().delete("admin-token")
  (await cookies()).delete("admin-token");
  redirect("/admin/login");
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white">
        <div className="p-4">
          <Link href="/admin" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8" />
            <span className="font-bold text-xl">Admin Panel</span>
          </Link>
        </div>
        <nav className="mt-8">
          <Link
            href="/admin"
            className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-700"
          >
            <Users className="h-5 w-5" />
            <span>Users</span>
          </Link>
          <Link
            href="/admin/reviews"
            className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-700"
          >
            <Star className="h-5 w-5" />
            <span>Reviews</span>
          </Link>
        </nav>
        <form action={signOut} className="absolute bottom-4 left-4">
          <Button
            variant="ghost"
            className="text-white hover:text-white hover:bg-gray-700"
          >
            <LogOut className="h-5 w-5 mr-2" />
            Sign Out
          </Button>
        </form>
      </div>

      {/* Main content */}
      <div className="flex-1 bg-gray-100">{children}</div>
    </div>
  );
}
