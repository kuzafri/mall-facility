import React from "react";
import { Stack, InputGroup, Input, Textarea, Select } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { BaseButton } from "components/Base";
import { userAtom, reportFactory } from "modules";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useRecoilValue } from "recoil";
import { z } from "zod";

const MallComplaint: React.FC<any> = ({ reportType }) => {
  const user = useRecoilValue(userAtom);

  const FormSchema = z.object({
    name: z.string({
      required_error: "Name is required",
    }),
    email: z
      .string({
        required_error: "Email is required",
      })
      .email({ message: "Invalid email address" }),
    mobileno: z.string({
      required_error: "Mobile number is required",
    }),
    report_type_id: z.string({
      required_error: "Type of Complaint is required",
    }),
    description: z.string().optional(),
  });

  type FormSchemaType = z.infer<typeof FormSchema>;

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormSchemaType>({
    defaultValues: {
      name: user.name,
      email: user.email,
      mobileno: user.mobile_no,
      report_type_id: undefined,
      description: undefined,
    },
    resolver: zodResolver(FormSchema),
  });

  const onSubmitHandler: SubmitHandler<FormSchemaType> = async (data: any) => {
    await reportFactory().createReport(data);

    reset({
      name: undefined,
      email: undefined,
      mobileno: undefined,
      report_type_id: undefined,
      description: undefined,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmitHandler)} className="my-3 p-4 ">
        <Stack spacing={4}>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <>
                <p className="!mb-[-12px] text-[#7b7b7b]">Name</p>
                <InputGroup
                  width="full"
                  sx={{
                    "--banner-color": "colors.gray.100",
                  }}
                >
                  <Input type="text" bg="white" {...field} />
                </InputGroup>
              </>
            )}
          />

          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <>
                <p className="!mb-[-12px] text-[#7b7b7b]">Email Address</p>
                <InputGroup
                  width="full"
                  sx={{
                    "--banner-color": "colors.gray.100",
                  }}
                >
                  <Input type="email" bg="white" {...field} />
                </InputGroup>
              </>
            )}
          />

          <Controller
            name="mobileno"
            control={control}
            render={({ field }) => (
              <>
                <p className="!mb-[-12px] text-[#7b7b7b]">Mobile Number</p>
                <InputGroup
                  width="full"
                  sx={{
                    "--banner-color": "colors.gray.100",
                  }}
                >
                  <Input type="tel" bg="white" {...field} />
                </InputGroup>
              </>
            )}
          />

          <Controller
            name="report_type_id"
            control={control}
            render={({ field }) => (
              <>
                <p className="!mb-[-12px] text-[#7b7b7b]">Type of Complaint</p>
                <Select placeholder="Select option" bg="white" {...field}>
                  {reportType.map((type: any) => (
                    <option key={"test" + type.id} value={type.id}>
                      {type.name}
                    </option>
                  ))}
                </Select>
              </>
            )}
          />

          <p className="!mb-[-12px] text-[#7b7b7b]">Image of Complaint</p>
          <InputGroup
            width="full"
            sx={{
              "--banner-color": "colors.gray.100",
            }}
          >
            <Input type="file" className="text-black" />
          </InputGroup>

          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <>
                <p className="!mb-[-12px] text-[#7b7b7b]">Description</p>
                <InputGroup
                  width="full"
                  sx={{
                    "--banner-color": "colors.gray.100",
                  }}
                >
                  <Textarea bg="white" {...field} />
                </InputGroup>
              </>
            )}
          />
        </Stack>

        <BaseButton
          label="Submit"
          className="my-3 !bg-[#196B79] w-[60%] mt-12 float-right mx-auto drop-shadow-[bg-white] text-white"
        />
      </form>
    </>
  );
};

export default MallComplaint;
