"use client";

export default function Error() {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-10rem)]">
      <h1 className="text-4xl font-bold">500</h1>
      <p className="text-xl font-semibold">Ops! something went bad</p>
    </div>
  );
}
