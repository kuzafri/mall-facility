import React from "react";
import { InputGroup, Input, Button, InputRightElement } from "@chakra-ui/react";
import { IonContent, IonImg } from "@ionic/react";
import SinglePageHeader from "components/Layout/SinglePageHeader";

const TenantSendVoucher: React.FC = () => {
  return (
    <>
      <SinglePageHeader title="Send Voucher" />
      <IonContent>
        <div className="mx-3">
          <IonImg
            src="assets/img/voucher.jpg"
            className="h-[40%] mx-auto shadow-md mt-10 bg-white"
          />
          <div className="bg-white mx-auto mt-5 p-4 rounded-md shadow-md">
            Enter the receipent email :
            <div className="py-3">
              <InputGroup
                width="full"
                sx={{
                  "--banner-color": "colors.gray.100",
                }}
              >
                <Input type="email" placeholder="Email" bg="white" />
                <InputRightElement
                  width="4.5rem"
                  children={
                    <Button colorScheme="teal" size="sm">
                      Send
                    </Button>
                  }
                />
              </InputGroup>
            </div>
          </div>
        </div>
      </IonContent>
    </>
  );
};

export default TenantSendVoucher;
