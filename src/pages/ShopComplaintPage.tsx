import ShopComplaint from "components/ComplaintPage/ShopComplaint";
import PrivateHeader from "components/Layout/PrivateHeader";
import React from "react";

const ShopComplaintPage = () => {
  return (
    <>
      <PrivateHeader title="Shop Complaint" />
      <ShopComplaint />
    </>
  );
};

export default ShopComplaintPage;
