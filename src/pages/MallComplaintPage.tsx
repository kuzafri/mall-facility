import MallComplaint from "components/ComplaintPage/MallComplaint";
import PrivateHeader from "components/Layout/PrivateHeader";
import React from "react";

const MallComplaintPage = () => {
  return (
    <>
      <PrivateHeader title="Shop Complaint " />
      <MallComplaint />
    </>
  );
};

export default MallComplaintPage;
