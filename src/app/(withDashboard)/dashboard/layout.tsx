import Sidebar from "@/components/shared/Sidebar";
import type { Metadata } from "next";
import { jwtDecode } from "jwt-decode";
export const metadata: Metadata = {
  title: "Next Auth Dashboard",
  description: "Generated by create next app",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const token = localStorage.getItem("accessToken");
  const decodedToken = jwtDecode(token as string);
  console.log(decodedToken);
  return (
    <div className="min-h-screen my-2">
      <div className="flex justify-between">
        <div className="w-[20%]">
          <Sidebar />
        </div>
        <div className="w-[80%] bg-base-200 rounded-box ml-2">{children}</div>
      </div>
    </div>
  );
}
