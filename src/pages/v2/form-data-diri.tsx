import { api } from '@/lib/api-backend';
import FormDataDiriV2 from '@/v2/form_data_diri/form_data_diri';
import { Loader } from '@mantine/core';
import { useShallowEffect } from '@mantine/hooks';
import { isEmpty, isNull, isUndefined } from 'lodash';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const FormDataDiri = () => {
  const router = useRouter();
  const [ada, setAda] = useState<boolean | null>(null)
  useShallowEffect(() => {
    loadData()
  }, [])

  async function loadData() {
    const dataDiri = await fetch(api.apiDataDiriGetOne + `?id=${localStorage.getItem("user_id")}`)

    if (dataDiri.status == 200) {
      setAda(true)
      router.push("/v2/home")
    } else {
      setAda(false)
    }
  }



  if (ada == null || ada == true) return <><Loader /></>
  return (
    <>
      <FormDataDiriV2 />
    </>
  );
}

export default FormDataDiri;
