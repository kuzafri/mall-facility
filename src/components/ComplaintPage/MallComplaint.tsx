import React, { useState } from "react";
import { z } from "zod";
import { useRecoilValue } from "recoil";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { IonIcon, IonImg, IonLabel } from "@ionic/react";
import { imageOutline, trashOutline } from "ionicons/icons";

/** Custom Component **/
import { BaseButton, RenderIf } from "components/Base";
import { Stack, InputGroup, Input, Textarea, Select } from "@chakra-ui/react";

/** Helpers/Hooks **/
import { userAtom, reportFactory } from "modules";
import { usePhotoGallery } from "hooks/usePhotoGallery";

const MallComplaint: React.FC<any> = ({ reportType }) => {
  const user = useRecoilValue(userAtom);
  const { takePhoto, photos, removePhoto } = usePhotoGallery();

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
    data = { ...data, complaint_image: [...photos] };
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
          {photos.length > 0 ? (
            <div className="border border-primary h-[12rem] rounded-lg border-dashed p-3 pb-8 grid grid-cols-3 gap-3">
              {photos.map((photo, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center relative"
                >
                  <IonImg src={photo.webviewPath} />
                  <div
                    className="absolute flex flex-row items-center space-x-1 bottom-[-1.5rem] border border-primary px-1 rounded-full text-xs"
                    onClick={() => {
                      removePhoto(index);
                      console.log(photos);
                    }}
                  >
                    <IonIcon icon={trashOutline} className="text-primary" />
                    <span className="text-primary">Delete</span>
                  </div>
                </div>
              ))}
              <RenderIf condition={photos.length < 3}>
                <div
                  className="border border-gray-500 border-dashed rounded-lg p-3 flex flex-col items-center justify-center"
                  onClick={takePhoto}
                >
                  <IonIcon
                    icon={imageOutline}
                    className="text-3xl text-gray-500"
                  />
                  <IonLabel className="text-xs text-gray-500">
                    Add Image
                  </IonLabel>
                </div>
              </RenderIf>
            </div>
          ) : (
            <div className="border border-primary h-[12rem] rounded-lg border-dashed p-3 grid grid-cols-3">
              <div
                className="border border-gray-500 border-dashed rounded-lg p-3 flex flex-col items-center justify-center"
                onClick={takePhoto}
              >
                <IonIcon
                  icon={imageOutline}
                  className="text-3xl text-gray-500"
                />
                <IonLabel className="text-xs text-gray-500">Add Image</IonLabel>
              </div>
            </div>
          )}

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
        <div className="flex flex-row justify-end w-full">
          <BaseButton
            label="Submit"
            className="mt-5 !bg-[#196B79] w-[60%] drop-shadow-[bg-white] text-white"
          />
        </div>
      </form>
    </>
  );
};

export default MallComplaint;
