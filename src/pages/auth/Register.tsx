import React, { useRef } from "react";
import { IonContent, IonImg, useIonViewWillEnter } from "@ionic/react";

/* Custom Component */
import BaseButton from "components/Base/BaseButton";
import PublicHeader from "components/Layout/PublicHeader";

/* Helpers */
import { ToolbarTransitionHelper } from "helpers";

/* Hooks */
import useToastify from "hooks/useToastify";
import useNavigate from "hooks/useNavigate";

/* 3rd Party Component */
import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { EmailIcon, PhoneIcon, LockIcon } from "@chakra-ui/icons";
import { Stack, InputGroup, InputLeftElement, Input } from "@chakra-ui/react";

const Registration: React.FC = () => {
  const { showToast } = useToastify();
  const { goTo } = useNavigate();

  const toolbarRef = useRef<HTMLIonToolbarElement>(null);

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
    // TODO: buat checking if cpassword === password
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

  useIonViewWillEnter(() => {
    ToolbarTransitionHelper(0, toolbarRef);
  });

  return (
    <>
      <PublicHeader ref={toolbarRef} title="Sign Up" />
      <IonContent
        fullscreen
        style={{ "--background": "#4B727A" }}
        // scrollEvents={true}
        // onIonScroll={(e) => {
        //   ToolbarTransitionHelper(e.detail.scrollTop, toolbarRef);
        // }}
      >
        <div className="landing absolute top-0 h-full w-full opacity-5 z-[-1]"></div>
        <div className="p-5 ">
          <div className="h-[150px] flex flex-row items-center justify-center">
            <IonImg
              class="h-full"
              src="assets/img/undraw_Access_account_re_8spm.svg"
            />
          </div>

          <form onSubmit={handleSubmit(onSubmitHandler)} className="my-3">
            <Stack spacing={4}>
              <p className="!mb-[-12px]">Name</p>
              <InputGroup
                width="full"
                sx={{
                  "--banner-color": "colors.gray.100",
                }}
              >
                {/* <InputLeftElement
                  pointerEvents="none"
                  // children={<PeopleIcon color="gray.300" />}
                /> */}
                <Input
                  type="tel"
                  placeholder="Name"
                  style={{ backgroundColor: "white", color: "black" }}
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
                  style={{ backgroundColor: "white", color: "black" }}
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
                  style={{ backgroundColor: "white", color: "black" }}
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
                  style={{ backgroundColor: "white", color: "black" }}
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
                  style={{ backgroundColor: "white", color: "black" }}
                />
              </InputGroup>
            </Stack>

            <BaseButton
              label="Sign Up"
              className="my-3 !bg-[#196B79] w-60 mx-auto drop-shadow-[bg-white] text-white"
            />
          </form>
          <p className="text-sm text-center">
            Already have an account?
            <span className="text-primary" onClick={() => goTo("/login")}>
              Sign In
            </span>
          </p>
        </div>
      </IonContent>
    </>
  );
};

export default Registration;
