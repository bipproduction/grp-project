import { useShallowEffect } from "@mantine/hooks";
import dynamic from "next/dynamic";
import React, { useRef, useState } from "react";

function CobaAja() {
  const ref = useRef();
  const [gambar, setGambar] = useState<any>();

  useShallowEffect(() => {
    apa();
  });
  async function apa() {
    const ini = await import("react-component-export-image");
    // .exportComponentAsPNG;

    setGambar(ini as any);
  }

  return (
    <div>
      <div
        ref={ref as any}
        style={{
          padding: "20px",
          backgroundColor: "red",
        }}
      >
        <div>ini ada diamana</div>
        <h1
          style={{
            padding: "10px",
          }}
        >
          Apa kabarnya
        </h1>
        <button
          style={{
            padding: "10px",
            borderRadius: "10px",
          }}
          onClick={() => gambar!.exportComponentAsPNG(ref as any)}
        >
          Tekan aja untuk simpan
        </button>
      </div>
    </div>
  );
}

export default CobaAja;
