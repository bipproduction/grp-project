import { apiGetMaster } from '@/lib/api-get-master';
import { Box, Button } from '@mantine/core';
import { useShallowEffect } from '@mantine/hooks';
import React, { useState } from 'react';

function Data1() {
  const [listData, setListData] = useState<any[]>();
  useShallowEffect(() => {
    fetch(apiGetMaster.apiGetStatusKeanggotaan)
      .then((val) => val.json())
      .then(setListData);
  },[]);
  return (
    <>
    {listData?.map((v,i) => (
      <Box key={i}>
        <Button></Button>
      </Box>
    ))}
    </>
  );
}

export default Data1;
