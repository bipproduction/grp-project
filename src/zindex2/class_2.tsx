import { Select } from '@mantine/core';
import React from 'react';

function Class2({ onchange }: { onchange: (val: string) => void }) {
  return (
    <div>
      <Select
      onChange={onchange}
       data={[{
        label: "ini dari dua",
        value: "2"
      }]}/>
    </div>
  );
}

export default Class2;
