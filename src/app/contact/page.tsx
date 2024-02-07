import PageTransition from "@/components/ui/page-transition";
import ContactForm from "./components/ContactForm";

function ContactPage() {
  return (
    <PageTransition>
      <div className="flex justify-center items-center h-full w-full">
        <ContactForm />
      </div>
    </PageTransition>
  );
}

export default ContactPage;
