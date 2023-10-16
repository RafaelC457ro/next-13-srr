export function SubTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative text-secondary font-semibold	text-xl py-2 indent-8 before:inline before:absolute before:w-4 before:h-full before:bg-secondary before:left-0 before:top-0 before:rounded">
      {children}
    </div>
  );
}
