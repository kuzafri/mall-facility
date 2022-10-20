import React, { useEffect, useState } from "react";
import { IonContent, IonFooter, IonImg } from "@ionic/react";
import Card from "components/ComplaintDetails/Card";
import SinglePageHeader from "components/Layout/SinglePageHeader";
import { Report, reportFactory, userAtom } from "modules";
import { BaseButton, RenderIf } from "components/Base";
import { useRecoilValue } from "recoil";

const ComplaintDetails: React.FC = (props: any) => {
  const id = props.match.params.id ?? "";
  const user = useRecoilValue(userAtom);

  const [complaint, setComplaint] = useState<Report>(new Report());

  useEffect(() => {
    reportFactory()
      .getReport(id)
      .then((complaint: Report) => {
        setComplaint(complaint);
      });
  }, [id]);

  return (
    <>
      <SinglePageHeader title="Complaint Details" />
      <IonContent fullscreen>
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
          user.role !== "3" &&
          (user.id !== complaint?.user_id || user.id === complaint?.shop_id)
        }
      >
        <IonFooter className="px-3">
          <div className="flex flex-col space-y-3 my-3">
            <BaseButton label="Accept" />
            <BaseButton
              label="Reject"
              className="!bg-transparent border !drop-shadow-none border-primary !text-rose-500"
            />
          </div>
        </IonFooter>
      </RenderIf>
    </>
  );
};

export default ComplaintDetails;
