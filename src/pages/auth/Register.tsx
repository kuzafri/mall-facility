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
import PersonIcon from "@mui/icons-material/Person";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextField, InputAdornment } from "@mui/material";
import { useForm, Controller, SubmitHandler } from "react-hook-form";

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
    defaultValues: { name: undefined, email: undefined, password: undefined, cpassword: undefined },
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
        scrollEvents={true}
        onIonScroll={(e) => {
          ToolbarTransitionHelper(e.detail.scrollTop, toolbarRef);
        }}
      >
        <div className="landing absolute top-0 h-full w-full opacity-5 z-[-1]"></div>
        <div className="p-5 ">
          <div className="h-[150px] flex flex-row items-center justify-center">
            <IonImg class="h-full" src="assets/img/signup.png" />
          </div>
          <p className=" text-muted">
            Sign Up to your account to continue fill your tummy!
          </p>

          <form onSubmit={handleSubmit(onSubmitHandler)} className="my-3">
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Name"
                  placeholder="Name"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon className="text-primary" />
                      </InputAdornment>
                    ),
                  }}
                  variant="outlined"
                  fullWidth
                  margin="dense"
                  error={errors.name ? true : false}
                  helperText={errors.name ? errors.name.message : ""}
                  disabled={isSubmitting}
                />
              )}
            />

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
              name="mobileno"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Mobile No"
                  placeholder="Mobile No"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon className="text-primary" />
                      </InputAdornment>
                    ),
                  }}
                  variant="outlined"
                  fullWidth
                  margin="dense"
                  error={errors.mobileno ? true : false}
                  helperText={errors.mobileno ? errors.mobileno.message : ""}
                  disabled={isSubmitting}
                />
              )}
            />

            {/* //TODO: Guna mui-tel-input untuk mobile-no */}

            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Password"
                  placeholder="Password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon className="text-primary" />
                      </InputAdornment>
                    ),
                  }}
                  type="password"
                  variant="outlined"
                  fullWidth
                  margin="dense"
                  error={errors.password ? true : false}
                  helperText={errors.password ? errors.password.message : ""}
                  disabled={isSubmitting}
                />
              )}
            />

            <Controller
              name="cpassword"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Confirm Password"
                  placeholder="Confirm Password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon className="text-primary" />
                      </InputAdornment>
                    ),
                  }}
                  type="password"
                  variant="outlined"
                  fullWidth
                  margin="dense"
                  error={errors.cpassword ? true : false}
                  helperText={errors.cpassword ? errors.cpassword.message : ""}
                  disabled={isSubmitting}
                />
              )}
            />

            <p className="text-muted text-sm">
              By proceeding registration process, I hereby agree all the{" "}
              <span
                className="text-primary inline-block"
                // TODO: Open terms in browser view
                onClick={() => {}}
              >
                Term of Services
              </span>
              {" "}and{" "}
              <span
                className="text-primary inline-block"
                // TODO: Open policy in browser view
                onClick={() => { }}
              >
                Privacy Policy
              </span>
              {" "}of this apps.
            </p>

            <BaseButton label="Sign Up" className="my-3" />
          </form>
          <p className="text-sm text-center">
            Already have an account? {" "}
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
