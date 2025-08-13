import { Skeleton } from "@/components/ui/skeleton";

function ClientsTableCardSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {Array.from({ length: 16 }).map((_, i) => (
        <div
          key={i}
          className="bg-white w-full rounded-lg border border-gray-200 shadow-md p-4 flex flex-col justify-between"
        >
          <div className="flex flex-col justify-center items-center gap-2">
            <Skeleton className="h-5 w-32" />
            <Skeleton className="h-4 w-40" />
            <Skeleton className="h-4 w-40" />
          </div>
          <div className="flex justify-between items-center px-4 mt-3">
            <Skeleton className="h-5 w-5 rounded-full" />
            <Skeleton className="h-5 w-5 rounded-full" />
            <Skeleton className="h-5 w-5 rounded-full" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default ClientsTableCardSkeleton;
