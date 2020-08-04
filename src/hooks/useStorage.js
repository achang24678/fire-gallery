import { useState, useEffect } from "react";
import { projectStorage, projectFirestore, timestamp } from "../fb/config";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // get img ref we uploaded
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection("images"); //auto create collection if not found

    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        // set progress
        setProgress(percentage);
      },
      (err) => {
        // set error
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        collectionRef.add({ url, createdAt: timestamp() });
        // set url when img finished uploading
        setUrl(url);
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
