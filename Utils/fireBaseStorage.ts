import { uploadBytes, getDownloadURL, ref , listAll} from "firebase/storage";
import { storage } from "@/Config/firebase.config";

function base64ToBlob(base64: any, contentType: any) {
  const byteCharacters = atob(base64);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += 512) {
    const slice = byteCharacters.slice(offset, offset + 512);

    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  return new Blob(byteArrays, { type: contentType });
}

export const uploadImage = async (imageFile: any) => {
  const file = imageFile[0];
  if (!file || !file.src) {
    return;
  }

  //file?.src?.includes('firebasestorage')

  if(file?.src?.includes('https')){
    return file
  } else {
    const contentType = file.type;
    const base64Data = file?.src?.split(",")[1];
    const blob = base64ToBlob(base64Data, contentType);

    const storageRef = ref(storage, `images/${file.name}`);
  
    try {
      const snapshot = await uploadBytes(storageRef, blob);
      console.log(snapshot)
      const downloadURL = await getDownloadURL(snapshot.ref);
      return downloadURL;
    } catch (error) {
      console.error("Upload failed", error);
      throw error;
    }
  }
};
