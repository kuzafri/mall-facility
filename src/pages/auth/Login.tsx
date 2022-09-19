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
import MailIcon from "@mui/icons-material/Mail";
import LockIcon from "@mui/icons-material/Lock";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextField, InputAdornment } from "@mui/material";
import { useForm, Controller, SubmitHandler } from "react-hook-form";

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
      <PublicHeader ref={toolbarRef} title="Sign In" path="/landing" />
      <IonContent
        fullscreen
        scrollEvents={true}
        onIonScroll={(e) => {
          ToolbarTransitionHelper(e.detail.scrollTop, toolbarRef);
        }}
      >
        <div className="landing absolute top-0 h-full w-full opacity-5 z-[-1]"></div>
        <div className="px-5">
          <div className="h-[300px] flex flex-row items-center justify-center">
            <IonImg src="assets/img/browser-window-displaying-workspace.png" />
          </div>
          <p className=" text-muted">
            Login to your account to continue fill your tummy!
          </p>

          <form onSubmit={handleSubmit(onSubmitHandler)} className="my-3">
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Email"
                  placeholder="Email"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MailIcon className="text-primary" />
                      </InputAdornment>
                    ),
                  }}
                  variant="outlined"
                  fullWidth
                  margin="dense"
                  error={errors.email ? true : false}
                  helperText={errors.email ? errors.email.message : ""}
                  disabled={isSubmitting}
                />
              )}
            />

            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Password"
                  type="password"
                  placeholder="Password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon className="text-primary" />
                      </InputAdornment>
                    ),
                  }}
                  variant="outlined"
                  fullWidth
                  margin="dense"
                  error={errors.password ? true : false}
                  helperText={errors.password ? errors.password.message : ""}
                  disabled={isSubmitting}
                />
              )}
            />

            <p
              className="text-sm text-primary"
              onClick={() => goTo("/forgot-password")}
            >
              Forgot Password?
            </p>

            <BaseButton label="Log In" className="my-3" />
          </form>
          <p className="text-sm text-center">
            Didn't have an account?
            <span className="text-primary" onClick={() => goTo("/register")}>
              Create an account
            </span>
          </p>
        </div>
      </IonContent>
    </>
  );
};

export default Login;
