export function MessageRight({ message }) {
  return (
    <div className="flex justify-end">
      <div className="mb-2 max-w-3xl self-end rounded-xl rounded-tr-sm bg-blue-500 p-3 text-white shadow-md">
        <p>{message}</p>
      </div>
    </div>
  );
}
