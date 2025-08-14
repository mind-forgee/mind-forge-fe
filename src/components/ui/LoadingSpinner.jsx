export default function LoadingSpinner({
  visible = true,
  size = 24, 
  color = "border-gray-500",
  fullscreen = false,
}) {
  if (!visible) return null;

  const spinner = (
    <div
      className={`animate-spin rounded-full border-b-2 ${color}`}
      style={{
        width: size,
        height: size,
      }}
    ></div>
  );

  if (fullscreen) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
        {spinner}
      </div>
    );
  }

  return spinner;
}
