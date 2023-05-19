import { Select } from "@mantine/core";
import React from "react";

function Class3({ onchange }: { onchange: (val: string) => void }) {
  return (
    <div>
      <Select
        onChange={onchange}
        data={[
          {
            label: "ini dari tiga",
            value: "3",
          },
        ]}
      />
    </div>
  );
}

export default Class3;
