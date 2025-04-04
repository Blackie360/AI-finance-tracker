import DashboardPage from "./page";
import { BarLoader } from "react-spinners";
import { Suspense } from "react";

export default function Layout() {
  return (
    <div className="px-5">
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Dashboard
        </h1>
      </div>
      <Suspense
        fallback={<BarLoader className="mt-4" width={"100%"} color="#282729FF" />}
      >
        <DashboardPage />
      </Suspense>
    </div>
  );
}
