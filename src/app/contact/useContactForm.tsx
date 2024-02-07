import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, set, useForm } from "react-hook-form";
import { ContactFormValues } from "./type";
import { contactFormSchema } from "./schema";
import { useState } from "react";
import { sendEmail } from "@/lib/utils";

export default function useContactForm() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });
  // null is initial state and it will be changed to true or false after form submission
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  function reset() {
    setIsSuccess(null);
  }

  const onSubmit: SubmitHandler<ContactFormValues> = async (data) => {
    setIsLoading(true);
    try {
      const response = await sendEmail(data);
      if (response.ok) {
        setIsSuccess(true);
        form.reset();
        return;
      }

      setIsSuccess(false);
    } catch (_) {
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    form,
    onSubmit,
    isSuccess,
    reset,
    isLoading,
  };
}
