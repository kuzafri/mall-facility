import React from "react";
import { IonImg } from "@ionic/react";
import { RenderIf } from "components/Base";

const Card: React.FC<any> = ({ complaint }) => {
  return (
    <>
      <div className="bg-white m-5 rounded-lg mt-10 shadow-lg p-3">
        <h3 className="text-center text-xl">
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
        </h3>

        <div className="mt-5">
          <RenderIf condition={"shop_id" in complaint}>
            <div className="flex flex-row space-x-3">
              <p>Shop Name: </p>
              <p>{complaint?.shop?.name}</p>
            </div>
          </RenderIf>
          <RenderIf condition={!("shop_id" in complaint)}>
            <div className="flex flex-row space-x-3">
              <p>Odysses Shopping Centre</p>
            </div>
          </RenderIf>
          <div className="flex flex-row space-x-3">
            <p>Description: </p>
            <p>{complaint?.description}</p>
          </div>
          <div
            className={`mt-5 gap-3 grid ${
              complaint.complaint_image.length > 0
                ? `grid-cols-${complaint.complaint_image.length}`
                : "grid-cols-1"
            }`}
          >
            {complaint.complaint_image.map((image: string, index: number) => (
              <IonImg src={image} key={image + index} />
            ))}
          </div>
          {/* <Swiper className="mt-5" modules={[Pagination]}>
            {complaint.complaint_image.map((image: string, index: number) => (
              <SwiperSlide key={image + index} className="h-[30vh]">
                <div className="flex flex-row">
                  <IonImg src={image} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper> */}
        </div>
      </div>
    </>
  );
};

export default Card;
