import PageContainer from "@/components/ui/page-container";
import ContactForm from "./components/ContactForm";

function ContactPage() {
  return (
    <PageContainer>
      <div className="flex justify-center items-center h-full w-full">
        <ContactForm />
      </div>
    </PageContainer>
  );
}

export default ContactPage;
