import React from "react";
import { IonIcon, IonText } from "@ionic/react";
import { chevronForward } from "ionicons/icons";
import { Report } from "modules";
import { RenderIf } from "components/Base";
import useNavigate from "hooks/useNavigate";

const UserItemList: React.FC<any> = (props: any) => {
  const { goTo } = useNavigate();

  return (
    <div className="my-5 mx-3 space-y-3">
      <RenderIf condition={props.complaintList.length > 0}>
        {props.complaintList.map((complaint: Report, index: number) => (
          <div
            key={`DUMMYCOMPLAINT-${index}`}
            className="bg-white p-5 rounded-lg shadow-md flex flex-row justify-between items-center"
            onClick={() => {
              goTo(`/complaint/${complaint.id}`);
            }}
          >
            <div>
              <h3>
                Complaint{" "}
                <span className="text-xs text-gray-400">#{complaint.id}</span>{" "}
              </h3>
              <div className="mt-3">
                <p className="text-sm">
                  Status:{" "}
                  <RenderIf condition={complaint?.status === "Pending"}>
                    <span className="text-yellow-500">{complaint?.status}</span>
                  </RenderIf>
                  <RenderIf condition={complaint?.status === "Processing"}>
                    <span className="text-orange-500">{complaint?.status}</span>
                  </RenderIf>
                  <RenderIf condition={complaint?.status === "Complete"}>
                    <span className="text-green-500">{complaint?.status}</span>
                  </RenderIf>
                  <RenderIf condition={complaint?.status === "Rejected"}>
                    <span className="text-rose-500">{complaint?.status}</span>
                  </RenderIf>
                </p>
                <p className="text-sm">Type: {complaint.report_type.name}</p>
                <RenderIf condition={"shop_id" in complaint}>
                  <p className="text-sm">Shop: {complaint?.shop?.name}</p>
                </RenderIf>

                <RenderIf condition={!("shop_id" in complaint)}>
                  <p className="text-sm">Odyssey Shopping Center</p>
                </RenderIf>
              </div>
            </div>
            <IonIcon icon={chevronForward} className="text-2xl" />
          </div>
        ))}
      </RenderIf>
      <RenderIf condition={props.complaintList.length === 0}>
        <p className="text-zinc-500 text-center">List Empty</p>
      </RenderIf>
    </div>
  );
};

export default UserItemList;
