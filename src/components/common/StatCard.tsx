import type { ReactNode } from "react";

type StatCardProps = {
  title: string;
  value: string;
  description: string;
  icon: ReactNode;
};

export default function StatCard({
  title,
  value,
  description,
  icon,
}: StatCardProps) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">
            {title}
          </p>

          <h2 className="mt-3 text-3xl font-bold text-gray-900">
            {value}
          </h2>

          <p className="mt-2 text-sm text-green-600">
            {description}
          </p>
        </div>

        <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
          {icon}
        </div>
      </div>
    </div>
  );
}