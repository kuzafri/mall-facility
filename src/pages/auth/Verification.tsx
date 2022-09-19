import React, { useState, useRef, useEffect } from "react";
import { IonContent, IonImg, useIonViewWillEnter } from "@ionic/react";

/* Helpers */
import { ToolbarTransitionHelper } from "helpers";

/* Hooks */
import useToastify from "hooks/useToastify";
import useNavigate from "hooks/useNavigate";

/* Custom Component */
import BaseButton from "components/Base/BaseButton";
import PublicHeader from "components/Layout/PublicHeader";

/* 3rd party Component */
import { z, ZodError } from "zod";
import ReactCodeInput from "react-verification-code-input";

const Verification: React.FC = () => {
  const { showToast } = useToastify();
  const { goTo } = useNavigate();

  const toolbarRef = useRef<HTMLIonToolbarElement>(null);
  const [code, setCode] = useState<string[]>([]);
  const [timer, setTimer] = useState<any>(59);
  const [isDisabled, setIsDisabled] = useState(true)

  const FormSchema = z.string({
    required_error: "Please insert your code",
  }).min(4, "The code is at least 4 digit");

  const onSubmitHandler = async () => {
    const result = await FormSchema.spa(code[0]);

    if(result.success) {
      // TODO: send code to verify
      // ...

      showToast("success", "Phone Number Verified!");
    } else {
      if (result.error instanceof ZodError) {
        showToast("error", result.error.flatten().formErrors[0]);
      }
    }
  };

  const resendCodeHandler = () => {
    if (!isDisabled) {
      setIsDisabled(true)
      // TODO: trigger api resend email
      // ...
      setTimer(59);
    } else {
      showToast("info", "Please wait to try again");
    }
  }

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (timer > 10) setTimer(+timer - 1);
      if (timer <= 10 && timer > 0) setTimer("0" + (+timer - 1));
      if (timer === "01") setIsDisabled(!isDisabled);
      if (timer === 0) {
        clearInterval(myInterval);
      }
    }, 1000);

    return () => {
      clearInterval(myInterval);
    };
  })

  useIonViewWillEnter(() => {
    ToolbarTransitionHelper(0, toolbarRef);
  });

  return (
    <>
      <PublicHeader ref={toolbarRef} title="Verification" />
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
            <IonImg class="h-full" src="assets/img/verification.png" />
          </div>
          <p className=" text-muted text-center">Verify your phone number</p>
        </div>
        <ReactCodeInput
          fields={4}
          className="verification-input !w-full"
          values={code}
          onChange={(value: string) => setCode([value])} //replace existing array, react-code-input return value in array
        />
        <p className=" text-muted text-center mt-5 text-sm">
          Didn't receive any code?{" "}
          <span className="text-primary" onClick={resendCodeHandler}>
            {isDisabled ? `Resend again in (0:${timer})` : "Resend Code"}
          </span>
        </p>

        <BaseButton label="Submit" className="mt-6 w-4/5 mx-10" onClick={onSubmitHandler} />
      </IonContent>
    </>
  );
};

export default Verification;
