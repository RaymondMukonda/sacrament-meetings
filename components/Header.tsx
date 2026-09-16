export default function Header() {
  const today = new Date();
  const date = today.toLocaleDateString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <header className="bg-[var(--color-primary)] text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Johannesburg Ward</h1>
      <span>{date}</span>
    </header>
  );
}
