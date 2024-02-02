"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "../ui/checkbox";
import { siteName } from "@/config/site.config";
import { Icons } from "../icons";
import Image from "next/image";
import { Home, Mail, MessageCircleIcon } from "lucide-react";
import { motion } from "framer-motion";

const customerTypes = ["private", "public", "company", "charity"];

const formSchema = z.object({
  email: z.string().email(),
  customerType: z.string(),
  message: z.string(),
  policy: z.string(),
});

const imageVariant = {
  hidden: {
    opacity: 0,
    scaleX: 0,
  },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 2,
    },
  },
};
const titleVariant = {
  hidden: {
    y: -20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.6,
    },
  },
};
const subTitleVariant = {
  hidden: {
    x: -40,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.8,
      duration: 0.6,
    },
  },
};
const inputVariant = (delay: number) => ({
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 1.4 + delay,
      duration: 0.4,
    },
  },
});

const buttonVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 3,
      duration: 1,
    },
  },
};

function ContactPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  const inputClassName =
    "px-6 pl-12 py-6 placeholder:text-lg text-lg rounded-2xl shadow-lg";

  return (
    <div className="w-full flex container bg-background shadow-lg shadow-primary p-10 relative h-screen rounded-t-[10rem] overflow-hidden">
      <Image
        src={"/contact.jpg"}
        alt="bg"
        width={1280}
        height={1080}
        className="absolute h-full w-1/2 left-0 top-0 object-cover object-right-bottom border-2 border-r-0 border-primary/75"
      />
      <div className="w-full"></div>
      <div className="w-full">
        <div className="flex flex-col gap-4 p-6 bg-background rounded-xl max-w-lg mx-auto">
          <motion.div
            initial="hidden"
            exit={"hidden"}
            animate="visible"
            variants={titleVariant}
            className="flex gap-2 items-center w-full"
          >
            <Icons.logo size={40} />
            <h1 className="text-5xl font-bold">
              <span className="text-primary uppercase">{siteName}</span>
              Contact
            </h1>
          </motion.div>
          <motion.p
            initial="hidden"
            exit={"hidden"}
            animate="visible"
            variants={subTitleVariant}
            className="w-full pl-3 text-muted-foreground text-sm relative before:absolute before:w-1 before:h-full before:bg-muted-foreground/25 before:-left-0 before:rounded-full "
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
            deleniti debitis cum.
          </motion.p>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 w-full max-w-xl mt-10  mx-auto "
            >
              <motion.div
                initial="hidden"
                exit="hidden"
                animate="visible"
                variants={inputVariant(0)}
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Label className="flex items-center relative">
                          <Mail
                            className={"absolute left-4 text-muted-foreground"}
                            size={24}
                          />
                          <Input
                            className={inputClassName}
                            placeholder="your@email.com"
                            {...field}
                          />
                        </Label>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>
              <motion.div
                initial="hidden"
                exit="hidden"
                animate="visible"
                variants={inputVariant(0.4)}
              >
                <FormField
                  control={form.control}
                  name="customerType"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl className="w-full">
                        <Label className="flex items-center relative rounded-xl">
                          <Home
                            className={"absolute left-4 text-muted-foreground"}
                            size={24}
                          />
                          <Select>
                            <SelectTrigger className={inputClassName}>
                              <SelectValue
                                placeholder="Who are you?"
                                className="placeholder:text-muted-foreground"
                              />
                            </SelectTrigger>
                            <SelectContent className="w-full">
                              {customerTypes.map((item, idx) => (
                                <SelectItem key={idx} value={item}>
                                  {item}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </Label>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>
              <motion.div
                initial="hidden"
                exit="hidden"
                animate="visible"
                variants={inputVariant(0.8)}
              >
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Label className="flex  relative rounded-xl">
                          <MessageCircleIcon
                            className={
                              "absolute left-4 top-6 text-muted-foreground -scale-x-100"
                            }
                            size={24}
                          />
                          <Textarea
                            rows={7}
                            className={inputClassName}
                            placeholder="Your Message..."
                            {...field}
                          />
                        </Label>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>
              <motion.div
                initial="hidden"
                exit="hidden"
                animate="visible"
                variants={inputVariant(1.2)}
              >
                <FormField
                  control={form.control}
                  name="policy"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Label className="flex items-center gap-2">
                          <Checkbox {...field} />
                          <span className="text-xs text-muted-foreground">
                            I agreee Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit.
                          </span>
                        </Label>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>

              <motion.div
                initial="hidden"
                exit="hidden"
                animate="visible"
                variants={buttonVariants}
              >
                <Button type="submit" className="rounded-full px-8">
                  Submit
                </Button>
              </motion.div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
