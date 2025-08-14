export default function ButtonSkeleton({
  rounded = "rounded-md",
}) {
  return (
    <div
      className={`bg-gray-300 dark:bg-gray-700 ${rounded} animate-pulse py-4 px-7`}
    ></div>
  );
}
