import React, { useRef } from "react";
import { IonContent, IonImg, useIonViewWillEnter } from "@ionic/react";

/* Custom Component */
import BaseButton from "components/Base/BaseButton";
import PublicHeader from "components/Layout/PublicHeader";

/* Helpers */
import {
  getLocalStorage,
  setLocalStorage,
  ToolbarTransitionHelper,
} from "helpers";

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
import { EmailIcon, LockIcon } from "@chakra-ui/icons";
import { authFactory, User, userAtom } from "modules";
import { useSetRecoilState } from "recoil";

const Login: React.FC = () => {
  const { showToast } = useToastify();
  const { goTo } = useNavigate();

  const toolbarRef = useRef<HTMLIonToolbarElement>(null);
  const setUser = useSetRecoilState(userAtom);

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

  const onSubmitHandler: SubmitHandler<FormSchemaType> = async (data: any) => {
    const result = (await authFactory().login(data)) as User;

    if (Object.entries(result).length > 0) {
      setUser(result);
      setLocalStorage("user", result);
      if (result.role === "3") {
        goTo("/home", "forward", "pop");
      } else if (result.role === "2") {
        goTo("/tenanthome", "forward", "pop");
      } else {
        goTo("/adminhome", "forward", "pop");
      }
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
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <>
                    <p className="!mb-[-12px] text-white">Email Address</p>
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
                        type="text"
                        placeholder="Email Address"
                        style={{ backgroundColor: "white", color: "black" }}
                        {...field}
                      />
                    </InputGroup>
                  </>
                )}
              />

              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <>
                    <p className="!mb-[-12px] text-white">Password</p>
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
                        type="password"
                        placeholder="Password"
                        style={{ backgroundColor: "white", color: "black" }}
                        {...field}
                      />
                    </InputGroup>
                  </>
                )}
              />
            </Stack>

            <p
              className="text-sm text-white mt-3 mb-3"
              onClick={() => goTo("/forgot-password")}
            >
              Forgot Password?
            </p>

            <BaseButton
              label="Log In"
              className="my-3 !bg-[#196B79] w-60 mx-auto drop-shadow-[bg-white] text-white"
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
