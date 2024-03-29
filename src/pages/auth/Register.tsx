import React, { useRef, useState } from "react";
import { IonContent, IonIcon, IonImg, useIonViewWillEnter } from "@ionic/react";

/* Custom Component */
import BaseButton from "components/Base/BaseButton";
import PublicHeader from "components/Layout/PublicHeader";

/* Helpers */
import { ToolbarTransitionHelper } from "helpers";
import { authFactory } from "modules";

/* Hooks */
import useNavigate from "hooks/useNavigate";

/* 3rd Party Component */
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import {
  EmailIcon,
  LockIcon,
  PhoneIcon,
  ViewIcon,
  ViewOffIcon,
} from "@chakra-ui/icons";
import {
  Stack,
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
} from "@chakra-ui/react";
import { BasePopupModal } from "components/Base";
import { checkmarkCircle, person } from "ionicons/icons";

const Registration: React.FC = () => {
  const { goTo } = useNavigate();
  const [isSuccess, setSuccess] = useState(false);
  const [showPassword, setShowPasword] = useState(false);
  const [showConfirmPassword, setConfirmShowPasword] = useState(false);

  const toolbarRef = useRef<HTMLIonToolbarElement>(null);

  const FormSchema = z.object({
    name: z
      .string({
        required_error: "Name is required",
      })
      .min(1),
    email: z
      .string({
        required_error: "Email is required",
      })
      .email({ message: "Invalid email address" })
      .min(1),
    password: z
      .string({
        required_error: "Password is required",
      })
      .min(8),
    // TODO: buat checking if cpassword === password
    confirm_password: z
      .string({
        required_error: "Please confirm your password",
      })
      .min(8),
    mobile_no: z
      .string({
        required_error: "Mobile number is required",
      })
      .min(1),
  });

  type FormSchemaType = z.infer<typeof FormSchema>;
  // type FormSchemaType = User;

  const { control, handleSubmit, reset } = useForm<FormSchemaType>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirm_password: "",
      mobile_no: "",
    },
    resolver: zodResolver(FormSchema),
  });

  const onSubmitHandler: SubmitHandler<FormSchemaType> = async (data: any) => {
    try {
      await authFactory().register(data);
      setSuccess(true);
      reset({
        name: "",
        email: "",
        password: "",
        confirm_password: "",
        mobile_no: "",
      });
    } catch (error: any) {
      throw new Error(error);
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
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <>
                    <p className="!mb-[-12px] text-white">Name</p>
                    <InputGroup
                      width="full"
                      sx={{
                        "--banner-color": "colors.gray.100",
                        backgroundColor: "color.white.100",
                      }}
                    >
                      <InputLeftElement
                        pointerEvents="none"
                        children={
                          <IonIcon icon={person} className="text-gray-300" />
                        }
                      />
                      <Input
                        type="text"
                        placeholder="Name"
                        style={{ backgroundColor: "white", color: "black" }}
                        {...field}
                      />
                    </InputGroup>
                  </>
                )}
              />

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
                name="mobile_no"
                control={control}
                render={({ field }) => (
                  <>
                    <p className="!mb-[-12px] text-white">Mobile Number</p>
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
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        style={{ backgroundColor: "white", color: "black" }}
                        {...field}
                      />
                      {showPassword ? (
                        <InputRightElement
                          children={<ViewOffIcon color="gray.300" />}
                          onClick={() => {
                            setShowPasword(!showPassword);
                          }}
                        />
                      ) : (
                        <InputRightElement
                          children={<ViewIcon color="gray.300" />}
                          onClick={() => {
                            setShowPasword(!showPassword);
                          }}
                        />
                      )}
                    </InputGroup>
                  </>
                )}
              />

              <Controller
                name="confirm_password"
                control={control}
                render={({ field }) => (
                  <>
                    <p className="!mb-[-12px] text-white">Confirm Password</p>
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
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm Password"
                        style={{ backgroundColor: "white", color: "black" }}
                        {...field}
                      />
                      {showConfirmPassword ? (
                        <InputRightElement
                          children={<ViewOffIcon color="gray.300" />}
                          onClick={() => {
                            setConfirmShowPasword(!showConfirmPassword);
                          }}
                        />
                      ) : (
                        <InputRightElement
                          children={<ViewIcon color="gray.300" />}
                          onClick={() => {
                            setConfirmShowPasword(!showConfirmPassword);
                          }}
                        />
                      )}
                    </InputGroup>
                  </>
                )}
              />
            </Stack>

            {/* <p className="text-muted text-sm">
              By proceeding registration process, I hereby agree all the{" "}
              <span
                className="text-primary inline-block"
                // TODO: Open terms in browser view
                onClick={() => {}}
              >
                Term of Services
              </span>{" "}
              and{" "}
              <span
                className="text-primary inline-block"
                // TODO: Open policy in browser view
                onClick={() => {}}
              >
                Privacy Policy
              </span>{" "}
              of this apps.
            </p> */}

            <BaseButton
              label="Sign Up"
              className="my-3 !bg-[#196B79] w-60 mx-auto drop-shadow-[bg-white] text-white"
            />
          </form>
          <p className="text-sm text-center">
            Already have an account?{" "}
            <span
              className="text-white font-semibold"
              onClick={() => goTo("/login")}
            >
              Sign In
            </span>
          </p>
        </div>
      </IonContent>

      <BasePopupModal
        isOpen={isSuccess}
        closeModal={() => {
          setSuccess(false);
          goTo("/login");
        }}
      >
        <div className="flex flex-col items-center justify-center py-10">
          <IonIcon
            icon={checkmarkCircle}
            className="text-green-500 text-[6.5rem]"
          />
          <div className="mt-5">
            <h3 className="font-semibold text-2xl">Successfully Registered!</h3>
          </div>
        </div>
      </BasePopupModal>
    </>
  );
};

export default Registration;
