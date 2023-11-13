import React, { useEffect, useState } from "react";
import Fingerprint2 from "fingerprintjs2";


const PeripheralsDetection = () => {
  const [fingerprint, setFingerprint] = useState("");

  useEffect(() => {
    const detectFingerprint = async () => {
      try {
        const fingerprint = await new Promise((resolve, reject) => {
          Fingerprint2.get((components) => {
            const values = components.map((component) => component.value);
            const fingerprint = Fingerprint2.x64hash128(values.join(""), 31);
            resolve(fingerprint);
          });
        });

        setFingerprint(fingerprint);
      } catch (error) {
        console.error("Error detecting fingerprint:", error);
      }
    };

    detectFingerprint();
  }, []);

  return (
    <div>
      <h2>Fingerprint Detected:</h2>
      <p>{fingerprint}</p>
    </div>
  );
};

export default PeripheralsDetection;
