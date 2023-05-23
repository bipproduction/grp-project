import { api } from "@/lib/api-backend";
import { Box, Text } from "@mantine/core";
import { useShallowEffect } from "@mantine/hooks";
import React, { useState } from "react";

function CobaGetData() {
  const [Data1, setListData] = useState<any | null>(null);


useShallowEffect(() => {
  fetch(api.apiDataDiriGetOne + `?id=${localStorage.getItem("user_id")}`)
  .then((val) => val.json())
  .then(setListData);
},[])

  return (
    <>
    {/* {JSON.stringify(Data1)} */}
    <Box>
      
    </Box>
    </>
  )
}

export default CobaGetData;
