export function MessageLeft({ message }) {
  return (
    <div className="flex justify-start">
      <div className="mb-2 max-w-xs rounded-xl rounded-tl-sm bg-blue-500 p-3 text-white shadow-md">
        <p>{message}</p>
      </div>
    </div>
  );
}
