import { EmailIcon, LockIcon, PhoneIcon } from "@chakra-ui/icons";
import { Stack, InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import React from "react";

const AccountDetails = () => {
  return (
    <>
      <div className="relative mt-[-13rem] p-3 mx-auto w-[90%] h-[20%] bg-gray-200 rounded-lg">
        <Stack spacing={4}>
          <p className="!mb-[-12px]">Name</p>
          <InputGroup
            width="full"
            sx={{
              "--banner-color": "colors.gray.100",
            }}
          >
            <InputLeftElement
              pointerEvents="none"
              //   children={<EmailIcon color="gray.300" />}
            />
            <Input
              type="tel"
              placeholder="Ku zafri"
              style={{ backgroundColor: "white" }}
            />
          </InputGroup>

          <p className="!mb-[-12px]">Phone Number</p>
          <InputGroup
            width="full"
            sx={{
              "--banner-color": "colors.gray.100",
            }}
          >
            <InputLeftElement
              pointerEvents="none"
              children={<PhoneIcon color="gray.300" />}
            />
            <Input
              type="tel"
              placeholder="012-34854959"
              style={{ backgroundColor: "white" }}
            />
          </InputGroup>
        </Stack>
      </div>
    </>
  );
};

export default AccountDetails;
