"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { allServicesContactForm } from "@/lib/constant";
import { ToasterToast, useToast } from "./ui/use-toast";
import axios from "axios";
import { Loader } from "lucide-react";

const formSchema = z.object({
  username: z
    .string({ required_error: "Your name is required" })
    .min(2, { message: "It should be greater than 2 characters" })
    .max(50, { message: "Don't you think it's too big for a name?" }),
  email: z
    .string({ required_error: "Email address is required" })
    .email({ message: "Please check your email address" }),
  contact: z
    .string({ required_error: "Your contact details are required" })
    .length(10, { message: "Please check your contact number" }),
  items: z.array(z.string()).refine((value) => value.length > 0, {
    message: "You have to select at least one item.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      contact: "",
      items: [],
    },
  });

  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  useEffect(() => {
    form.setValue("items", selectedServices);
  }, [selectedServices, form]);

  const handleSelect = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((item) => item !== service)
        : [...prev, service]
    );
  };

  async function onSubmit(values: FormValues): Promise<void | ToasterToast> {
    if (!values.username || !values.email || !values.contact || !values.items) {
      return toast({
        variant: "destructive",
        title: "Scheduled: Catch up",
        description: "Friday, February 10, 2023 at 5:57 PM",
      });
    }
    try {
      setLoading(true);
      await axios
        .post("/api/email-send-to-client", {
          name: values.username,
          email: values.email,
          contact: values.contact,
          service: values.items,
        })
        .then((response) => {
          setLoading(false);
          return toast({
            title: "Contact from has been submitted",
          });
        })
        .catch((err) => {
          return toast({
            title: err.message,
            variant: "destructive",
          });
        });
    } catch (error: any) {
      return toast({
        title: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
      form.reset();
      setSelectedServices([]);
    }
  }

  return (
    <div className="mb-40  lg:w-10/12 m-auto px-3">
      <div className="flex flex-col  lg:items-start lg:flex-row lg:justify-between my-8">
        <div className="text-5xl font-bold">How can we help you?</div>
        <Link className="cursor-pointer" href="mailto:info@technosysincor.com">
          info@technosysincor.com
        </Link>
      </div>
      <div className="border-white border p-4 md:p-8 rounded-3xl">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8">
              <div className="space-y-4 w-full lg:w-1/2">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input placeholder="Username" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="contact"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contact</FormLabel>
                      <FormControl>
                        <Input placeholder="Contact" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-full lg:w-1/2">
                <FormField
                  control={form.control}
                  name="items"
                  render={() => (
                    <FormItem>
                      <FormLabel className="text-3xl mb-4 font-bold">
                        I am interested in
                      </FormLabel>
                      <FormControl>
                        <div className="flex flex-wrap gap-2">
                          {allServicesContactForm.map((item) => (
                            <label
                              key={item.id}
                              className={`flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-full cursor-pointer ${
                                selectedServices.includes(item.service)
                                  ? "bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500"
                                  : "bg-gray-800"
                              }`}
                              onClick={() => handleSelect(item.service)}
                            >
                              <input
                                type="checkbox"
                                name={item.service}
                                value={item.service}
                                className="hidden"
                                checked={selectedServices.includes(
                                  item.service
                                )}
                                onChange={() => handleSelect(item.service)}
                              />
                              <span>{item.service}</span>
                            </label>
                          ))}
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <Button className="w-2/6" type="submit">
              {loading ? <Loader /> : "Submit"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
