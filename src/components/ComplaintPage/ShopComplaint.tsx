import { EmailIcon, PhoneIcon, LockIcon } from "@chakra-ui/icons";
import { Stack, InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { BaseButton } from "components/Base";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";

const ShopComplaint = () => {
  const FormSchema = z.object({
    name: z.string({
      required_error: "Name is required",
    }),
    email: z
      .string({
        required_error: "Email is required",
      })
      .email({ message: "Invalid email address" }),
    password: z.string({
      required_error: "Password is required",
    }),
    cpassword: z.string({
      required_error: "Please confirm your password",
    }),
    mobileno: z.string({
      required_error: "Mobile number is required",
    }),
  });

  type FormSchemaType = z.infer<typeof FormSchema>;

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormSchemaType>({
    defaultValues: {
      name: undefined,
      email: undefined,
      password: undefined,
      cpassword: undefined,
    },
    resolver: zodResolver(FormSchema),
  });

  const onSubmitHandler: SubmitHandler<FormSchemaType> = (data: any) => {
    console.log(data);

    if (data.email === "admin@gmail.com" && data.password === "admin") {
      if (data.password === "admin" && data.cpassword === "admin") {
        window.location.href = "/verification";
        reset({
          name: "",
          email: "",
          password: "",
          cpassword: "",
          mobileno: "",
        });
      }
    } else {
      showToast("error", "Invalid credential, please try again");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className="my-3 p-4 exclude"
      >
        <Stack spacing={4}>
          <p className="!mb-[-12px]">Name</p>
          <InputGroup
            width="full"
            sx={{
              "--banner-color": "colors.gray.100",
            }}
          >
            <InputLeftElement
              pointerEvents="none"
              // children={<PeopleIcon color="gray.300" />}
            />
            <Input
              type="tel"
              placeholder="Name"
              style={{ backgroundColor: "white" }}
            />
          </InputGroup>

          <p className="!mb-[-12px]">Email Address</p>
          <InputGroup
            width="full"
            sx={{
              "--banner-color": "colors.gray.100",
            }}
          >
            <InputLeftElement
              pointerEvents="none"
              children={<EmailIcon color="gray.300" />}
            />
            <Input
              type="tel"
              placeholder="Email Address"
              style={{ backgroundColor: "white" }}
            />
          </InputGroup>

          <p className="!mb-[-12px]">Mobile Number</p>
          <InputGroup
            width="full"
            sx={{
              "--banner-color": "colors.gray.100",
            }}
          >
            <InputLeftElement
              pointerEvents="none"
              children={<PhoneIcon color="gray.300" />}
            />
            <Input
              type="tel"
              placeholder="Mobile Number"
              style={{ backgroundColor: "white" }}
            />
          </InputGroup>

          <p className="!mb-[-12px]">Password</p>
          <InputGroup
            width="full"
            sx={{
              "--banner-color": "colors.gray.100",
            }}
          >
            <InputLeftElement
              pointerEvents="none"
              children={<LockIcon color="gray.300" />}
            />
            <Input
              type="tel"
              placeholder="Password"
              style={{ backgroundColor: "white" }}
            />
          </InputGroup>

          <p className="!mb-[-12px]">Confirm Password</p>
          <InputGroup
            width="full"
            sx={{
              "--banner-color": "colors.gray.100",
            }}
          >
            <InputLeftElement
              pointerEvents="none"
              children={<LockIcon color="gray.300" />}
            />
            <Input
              type="tel"
              placeholder="Confirm Password"
              style={{ backgroundColor: "white" }}
            />
          </InputGroup>
        </Stack>

        <BaseButton
          label="Sign Up"
          className="my-3 !bg-[#196B79] w-60 mx-auto drop-shadow-[bg-white] text-white"
        />
      </form>
    </>
  );
};

export default ShopComplaint;
function showToast(arg0: string, arg1: string) {
  throw new Error("Function not implemented.");
}
