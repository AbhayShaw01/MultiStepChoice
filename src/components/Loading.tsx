export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full flex-col h-56  flex items-center ">
        <span>
          <div
            className="animate-spin inline-block size-10 border-[6px] border-current border-t-transparent text-blue-600 rounded-full dark:text-yellow-500"
            role="status"
            aria-label="loading"
          ></div>
        </span>
        <p className="text-center font-bold">
          Finding learning path recommendations for you based on <br />
          your responses
        </p>
      </div>
    </div>
  );
}
