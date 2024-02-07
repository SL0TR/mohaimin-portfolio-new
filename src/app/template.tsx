export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="w-full grow h-full overflow-hidden">{children}</div>;
}
