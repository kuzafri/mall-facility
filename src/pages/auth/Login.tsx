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
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
} from "@chakra-ui/react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { PhoneIcon, CheckIcon, EmailIcon, LockIcon } from "@chakra-ui/icons";

const Login: React.FC = () => {
  const { showToast } = useToastify();
  const { goTo } = useNavigate();

  const toolbarRef = useRef<HTMLIonToolbarElement>(null);

  const FormSchema = z.object({
    email: z
      .string({
        required_error: "Email is required",
      })
      .email({ message: "Invalid email address" }),
    password: z.string({
      required_error: "Password is required",
    }),
  });

  type FormSchemaType = z.infer<typeof FormSchema>;

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormSchemaType>({
    defaultValues: { email: "", password: "" },
    resolver: zodResolver(FormSchema),
  });

  const onSubmitHandler: SubmitHandler<FormSchemaType> = (data: any) => {
    // console.log(data);

    if (data.email === "admin@gmail.com" && data.password === "admin") {
      window.location.href = "/home";
      reset({ email: "", password: "" });
    } else {
      showToast("error", "Invalid credential, please try again");
    }
  };

  useIonViewWillEnter(() => {
    ToolbarTransitionHelper(0, toolbarRef);
  });

  return (
    <>
      <PublicHeader ref={toolbarRef} title="Log In" path="/landing" />
      <IonContent fullscreen style={{ "--background": "#4B727A" }}>
        <div className="absolute top-0 h-full w-full opacity-5 z-[-1]"></div>
        <div className="px-5">
          <div className="h-[300px] flex flex-row items-center justify-center">
            <IonImg src="assets/img/undraw_login_re_4vu2.svg" />
          </div>

          <form onSubmit={handleSubmit(onSubmitHandler)} className="my-3">
            <Stack spacing={4}>
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
            </Stack>

            <p
              className="text-sm text-primary"
              onClick={() => goTo("/forgot-password")}
            >
              Forgot Password?
            </p>

            <BaseButton
              label="Log In"
              className="my-3 !bg-[#196B79] w-60 mx-auto drop-shadow-[bg-white] text-white"
              onClick={() => goTo("/home")}
            />
          </form>
          <p className="text-sm text-black text-center">
            Didn't have an account?
            <span className="!text-white" onClick={() => goTo("/register")}>
              Create an account
            </span>
          </p>
        </div>
      </IonContent>
    </>
  );
};

export default Login;
