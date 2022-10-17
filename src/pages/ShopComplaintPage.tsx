import React, { useEffect, useState } from "react";
import { IonContent } from "@ionic/react";
import ShopComplaint from "components/ComplaintPage/ShopComplaint";
import SinglePageHeader from "components/Layout/SinglePageHeader";
import { ReportType, Shop, reportTypeFactory, shopFactory } from "modules";

const ShopComplaintPage: React.FC = () => {
  const [reportType, setReportType] = useState<ReportType[]>([]);
  const [shopList, setShopList] = useState<Shop[]>([]);

  useEffect(() => {
    reportTypeFactory()
      .getReportTypes()
      .then((data) => {
        setReportType(data);
      });

    shopFactory()
      .getShops()
      .then((data) => {
        setShopList(data);
      });
  }, []);

  return (
    <>
      <SinglePageHeader title="Shop Complaint" path="/home" />
      <IonContent>
        <ShopComplaint reportType={reportType} shopList={shopList} />
      </IonContent>
    </>
  );
};

export default ShopComplaintPage;
