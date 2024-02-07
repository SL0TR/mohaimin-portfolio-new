import UnderConstructionAlert from "@/components/UnderConstructionAlert";
import PageTransition from "@/components/ui/page-transition";

export default function Notfound() {
  return (
    <PageTransition>
      <div className="flex justify-center items-center h-full w-full">
        <UnderConstructionAlert />
      </div>
    </PageTransition>
  );
}
