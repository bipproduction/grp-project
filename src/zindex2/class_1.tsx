import { Select } from "@mantine/core";
import React from "react";

function Class1({ onchange }: { onchange: (val: string) => void }) {
  return (
    <div>
      <Select
        onChange={onchange}
        data={[
          {
            label: "ini dari satu",
            value: "1",
          },
        ]}
      />
    </div>
  );
}

export default Class1;
