export default function Badge({ children }) {
  return (
    <span className="inline-block max-w-fit rounded-full bg-bg border border-border px-4 py-1 text-xs font-semibold tracking-widest text-muted uppercase">
      {children}
    </span>
  );
}