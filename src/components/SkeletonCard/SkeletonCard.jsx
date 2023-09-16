export default function SkeletonCard() {
  return (
    <div className="fade-in-line border-t-24 p-8 h-fit relative z-10 w-full border-4 border-gray-200 rounded-lg bg-white hover:opacity-100">
      <div
        role="status"
        className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center"
      >
        <div className="w-full">
          <div className="h-2.5 bg-gray-200 w-full rounded-full w-48 mb-4"></div>
          <div className="h-2 bg-gray-200 rounded-full max-w-[480px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full max-w-[440px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full max-w-[460px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full max-w-[360px]"></div>
        </div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}
