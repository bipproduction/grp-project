import DataAksiGerindra from '@/layout/aksi_nyata/aksi_gerindra/DataAksiGerindra';
import { Select } from '@mantine/core';
import React, { useState } from 'react';
import Garuda from './garuda';
import SayapPartai from './sayapPartai';

function Cobadata({ onchange}: { onchange: (val: string) => void }) {
  const [value, setValue] = useState<any>()
  const [valnya, setValnya] = useState({
    dataPartai: ""
  })
  return (
    <div>
      {JSON.stringify(valnya)}
      <SayapPartai
      onchange={(val) => {
        setValnya({...valnya, dataPartai: val})
      }}
      />
    </div>
  );
}

export default Cobadata;
