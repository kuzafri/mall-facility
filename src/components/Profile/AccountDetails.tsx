import React from "react";
import { EmailIcon, LockIcon, PhoneIcon } from "@chakra-ui/icons";
import { Stack, InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { userAtom } from "modules";
import { IonIcon } from "@ionic/react";
import { person } from "ionicons/icons";

const AccountDetails: React.FC = () => {
  const user = useRecoilValue(userAtom);

  return (
    <>
      <div className="relative mt-5 p-3 h-[fit] bg-gray-200 border border-zinc-300 rounded-lg">
        <Stack spacing={4} className="text-black">
          <p className="!mb-[-12px] ">Name</p>
          <InputGroup
            width="full"
            sx={{
              "--banner-color": "colors.gray.100",
            }}
          >
            <InputLeftElement
              pointerEvents="none"
              children={<IonIcon icon={person} className="text-gray-300" />}
            />
            <Input
              type="text"
              value={user.name}
              readOnly
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
              value={user.mobile_no}
              readOnly
              style={{ backgroundColor: "white" }}
            />
          </InputGroup>
        </Stack>
      </div>
    </>
  );
};

export default AccountDetails;
