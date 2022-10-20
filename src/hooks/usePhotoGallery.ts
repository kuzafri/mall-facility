import React, { useState } from "react";
import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}

export function usePhotoGallery() {
  const [photos, setPhotos] = useState<UserPhoto[]>([]);

  const takePhoto = async () => {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,
      quality: 90,
      saveToGallery: true,
    });

    const fileName = new Date().getTime() + ".jpeg";
    const newPhotos = [
      {
        filepath: fileName,
        webviewPath: photo.dataUrl,
        ...photo,
      },
      ...photos,
    ];
    setPhotos(newPhotos);
  };

  const removePhoto = (index: number) => {
    setPhotos((currentPhoto) => currentPhoto.filter((_, i) => i !== index));
  };

  const clearPhoto = () => {
    setPhotos([]);
  };

  return {
    photos,
    takePhoto,
    removePhoto,
    clearPhoto,
  };
}
