export default function PageContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="grow overflow-hidden">{children}</section>;
}
