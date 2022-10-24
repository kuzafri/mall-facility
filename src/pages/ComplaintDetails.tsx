import React, { useState } from "react";
import {
  IonContent,
  IonFooter,
  IonImg,
  IonLoading,
  IonToolbar,
  useIonViewWillEnter,
} from "@ionic/react";
import Card from "components/ComplaintDetails/Card";
import SinglePageHeader from "components/Layout/SinglePageHeader";
import { Report, reportFactory, userAtom } from "modules";
import { BaseButton, RenderIf } from "components/Base";
import { useRecoilValue } from "recoil";
import useNavigate from "hooks/useNavigate";
import useToastify from "hooks/useToastify";

const ComplaintDetails: React.FC = (props: any) => {
  const id = props.match.params.id ?? "";
  const user = useRecoilValue(userAtom);
  const { goTo } = useNavigate();
  const { showToast } = useToastify();

  const [complaint, setComplaint] = useState<Report>(new Report());
  const [isOpen, setIsOpen] = useState(false);

  useIonViewWillEnter(() => {
    reportFactory()
      .getReport(id)
      .then((complaint: Report) => {
        setComplaint(complaint);
      });
  });

  const updateStatusHandler = (status: string) => {
    setIsOpen(true);
    const { complaint_image, ...rest } = complaint;
    reportFactory()
      .updateReport(id, {
        ...rest,
        status,
      })
      .then(() => {
        showToast("success", "Complaint status updated");
        setTimeout(() => {
          setIsOpen(false);
          if (user.role === "1") {
            goTo("/adminlist");
          } else if (user.role === "2") {
            goTo("/tenantcomplaintlist");
          } else {
            goTo("/complantlist");
          }
        }, 1500);
      });
  };

  return (
    <>
      <SinglePageHeader title="Complaint Details" />
      <IonContent fullscreen>
        <IonLoading isOpen={isOpen} />
        <div>
          <IonImg
            class=" w-[70%] mx-auto mt-5"
            src="assets/img/undraw_wait_in_line_o2aq.svg"
          />
        </div>
        <Card complaint={complaint} />
      </IonContent>
      <RenderIf
        condition={
          (user.role !== "3" &&
            user.id === complaint?.shop?.owner &&
            complaint.status !== "Complete" &&
            complaint.status !== "Rejected") ||
          (user.role === "1" &&
            complaint.status !== "Complete" &&
            complaint.status !== "Rejected" &&
            !("shop_id" in complaint))
        }
      >
        <IonFooter>
          <IonToolbar className="px-3 bg-white">
            <div className="flex flex-col space-y-3 my-3">
              <RenderIf condition={complaint.status === "Pending"}>
                <BaseButton
                  label="Accept"
                  onClick={() => {
                    updateStatusHandler("Processing");
                  }}
                />
              </RenderIf>
              <RenderIf condition={complaint.status === "Processing"}>
                <BaseButton
                  label="Complete"
                  onClick={() => {
                    updateStatusHandler("Complete");
                  }}
                />
              </RenderIf>
              <BaseButton
                label="Reject"
                className="!bg-transparent border !drop-shadow-none border-primary !text-rose-500"
                onClick={() => {
                  updateStatusHandler("Rejected");
                }}
              />
            </div>
          </IonToolbar>
        </IonFooter>
      </RenderIf>
    </>
  );
};

export default ComplaintDetails;
