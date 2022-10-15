import { EmailIcon, PhoneIcon, LockIcon } from "@chakra-ui/icons";
import {
  Stack,
  InputGroup,
  InputLeftElement,
  Input,
  Textarea,
  Select,
} from "@chakra-ui/react";
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
      <form onSubmit={handleSubmit(onSubmitHandler)} className="my-3 p-4 ">
        <Stack spacing={4}>
          <p className="!mb-[-12px] text-[#7b7b7b]">Name</p>
          <InputGroup
            width="full"
            sx={{
              "--banner-color": "colors.gray.100",
            }}
          >
            <Input type="tel" style={{ backgroundColor: "white" }} />
          </InputGroup>

          <p className="!mb-[-12px] text-[#7b7b7b]">Email Address</p>
          <InputGroup
            width="full"
            sx={{
              "--banner-color": "colors.gray.100",
            }}
          >
            <Input type="tel" style={{ backgroundColor: "white" }} />
          </InputGroup>

          <p className="!mb-[-12px] text-[#7b7b7b]">Mobile Number</p>
          <InputGroup
            width="full"
            sx={{
              "--banner-color": "colors.gray.100",
            }}
          >
            <Input type="tel" style={{ backgroundColor: "white" }} />
          </InputGroup>

          <p className="!mb-[-12px] text-[#7b7b7b]">Shop</p>
          <InputGroup
            width="full"
            sx={{
              "--banner-color": "colors.gray.100",
            }}
          >
            <Select
              placeholder="Select shop"
              style={{ backgroundColor: "white", color: "gray", width: "100%" }}
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </InputGroup>

          <p className="!mb-[-12px] text-[#7b7b7b]">Type of Complaint</p>
          <InputGroup
            width="full"
            sx={{
              "--banner-color": "colors.gray.100",
            }}
          >
            <Select
              placeholder="Select type of complaint"
              style={{ backgroundColor: "white", color: "gray", width: "100%" }}
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </InputGroup>

          <p className="!mb-[-12px] text-[#7b7b7b]">Image of Complaint</p>
          <InputGroup
            width="full"
            sx={{
              "--banner-color": "colors.gray.100",
            }}
          >
            <Input type="file" className="text-black" />
          </InputGroup>

          <p className="!mb-[-12px] text-[#7b7b7b]">Description</p>
          <InputGroup
            width="full"
            sx={{
              "--banner-color": "colors.gray.100",
            }}
          >
            <Textarea style={{ backgroundColor: "white" }} />
          </InputGroup>
        </Stack>

        <BaseButton
          label="Submit"
          className="my-3 !bg-[#196B79] w-[60%] mt-12 float-right mx-auto drop-shadow-[bg-white] text-white"
        />
      </form>
    </>
  );
};

export default ShopComplaint;
function showToast(arg0: string, arg1: string) {
  throw new Error("Function not implemented.");
}
