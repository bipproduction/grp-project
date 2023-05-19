import { Select, TextInput } from "@mantine/core";
import React, { useState } from "react";
import Cobadata from ".";

function SayapPartai({ onchange }: { onchange: (val: string) => void }) {
  return (
    <div>
      {/* <TextInput label="sayap1" />
      <TextInput label="sayap2" /> */}
      <Select
        data={[
          {
            label: "sayap1",
            value: "1",
          },
        ]}
        onChange={onchange}
      />
    </div>
  );
}

export default SayapPartai;
