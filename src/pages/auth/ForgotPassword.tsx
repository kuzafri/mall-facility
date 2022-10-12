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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller, SubmitHandler } from "react-hook-form";

const ForgotPassword: React.FC = () => {
  const { showToast } = useToastify();
  const { goTo } = useNavigate();

  const toolbarRef = useRef<HTMLIonToolbarElement>(null);

  const FormSchema = z.object({
    email: z
      .string({
        required_error: "Email is required",
      })
      .email({ message: "Invalid email address" }),
  });

  type FormSchemaType = z.infer<typeof FormSchema>;

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormSchemaType>({
    defaultValues: { email: "" },
    resolver: zodResolver(FormSchema),
  });

  const onSubmitHandler: SubmitHandler<FormSchemaType> = (data: any) => {
    console.log(data);

    if (data.email === "admin@gmail.com") {
      window.location.href = "/home";
      reset({ email: "" });
    } else {
      showToast("error", "Invalid credential, please try again");
    }
  };

  useIonViewWillEnter(() => {
    ToolbarTransitionHelper(0, toolbarRef);
  });

  return (
    <>
      <PublicHeader ref={toolbarRef} title="Forgot Password" />
      <IonContent
        fullscreen
        scrollEvents={true}
        onIonScroll={(e) => {
          ToolbarTransitionHelper(e.detail.scrollTop, toolbarRef);
        }}
      >
        <div className="landing absolute top-0 h-full w-full opacity-5 z-[-1]"></div>
        <div className="px-5">
          <div className="h-[200px] flex flex-row items-center justify-center">
            <IonImg class="h-full" src="assets/img/forgot-password.png" />
          </div>
          <p className=" text-muted">
            Don't worry! It happens. Please enter your email address for your
            account.
          </p>

          <form
            onSubmit={handleSubmit(onSubmitHandler)}
            className="my-3"
          ></form>

          <BaseButton label="Submit" className="my-3" />
        </div>
      </IonContent>
    </>
  );
};

export default ForgotPassword;
