"use client";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/text-area";
import useContactForm from "../useContactForm";
import Feedback from "./Feedback";
import { IoIosSend } from "react-icons/io";
import Spinner from "@/components/ui/spinner";

export default function ContactForm() {
  const { form, onSubmit, reset, isSuccess, isLoading } = useContactForm();

  if (isSuccess !== null) {
    return <Feedback onReset={reset} isSuccess={isSuccess} />;
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4 justify-start items-start max-w-md w-full"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel htmlFor="name" className="text-slate-400">
                  _name
                </FormLabel>
                <FormControl>
                  <Input placeholder="Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel htmlFor="email" className="text-slate-400">
                  _email
                </FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel htmlFor="message" className="text-slate-400">
                  _message
                </FormLabel>
                <FormControl>
                  <Textarea placeholder="Message" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button variant="secondary" type="submit" disabled={isLoading}>
            {isLoading ? (
              <Spinner className="mr-2" />
            ) : (
              <IoIosSend className="mr-2" />
            )}
            submit-message
          </Button>
        </form>
      </Form>
    </>
  );
}
