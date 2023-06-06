import { api } from '@/lib/api-backend';
import FormDataDiriV2 from '@/v2/form_data_diri/form_data_diri';
import { isEmpty, isNull } from 'lodash';
import { useRouter } from 'next/router';
import React from 'react';

const FormDataDiri = () => {
  const router = useRouter();
  let ada;
  const dataDiri = fetch(api.apiDataDiriGetOne + `?id=${localStorage.getItem("user_id")}`)
  .then(async (res) => {

      if (res.status === 200) {
          router.push("/v2/home");
          ada=1;
      }
  });
  if(isEmpty(ada))return<></>
  return (
    <>
      <FormDataDiriV2/>
    </>
  );
}

export default FormDataDiri;
