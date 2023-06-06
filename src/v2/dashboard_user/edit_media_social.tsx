import { api } from "@/lib/api-backend";
import { ModelUserMediaSosial } from "@/model/interface_media_social";
import { Box, Button, Text, TextInput } from "@mantine/core";
import { useShallowEffect } from "@mantine/hooks";
import { atom, useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import React, { useState } from "react";
import COLOR from "../../../fun/WARNA";
import { DataDiri } from "@/model/interface_sumber_daya_partai";
import toast from "react-simple-toasts";
import _ from "lodash";
import { val_loading } from "@/xg_state.ts/val_loading";
import { useRouter } from "next/router";
import { buttonSimpan } from "../component/button-toast";

export const _mediaSocialGet = atomWithStorage<ModelUserMediaSosial[] | null>(
  "media",
  null
);
export const _mediaSocialUp = atomWithStorage<ModelUserMediaSosial[] | any>(
  "",
  []
);
export const _listDataMedia = atom<ModelUserMediaSosial[] | null>([]);

function EditMediaSocial({ thisClosed }: any) {
  const [getMediaSocial, setGetMediaSocial] = useAtom(_mediaSocialGet);
  const [listData, setListData] = useAtom(_mediaSocialUp);
  const [ubah, setUbah] = useAtom(_listDataMedia);
  const [isLoading, setLoading] = useAtom(val_loading);
  const router = useRouter()

  const onEditMediaSocial = async () => {
    setLoading(true);
    console.log(getMediaSocial)
    {getMediaSocial?.map((v) => (
      fetch(api.apiMediaSosialUserUpdate, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(v),
      }).then( async (res) => {
        const data = await res.json()
        if (res.status === 201) {
          // router.reload()
         
          thisClosed()
        }
      })
      ))}
      buttonSimpan()
      // loadDatadiri()
      
      router.reload()
      setLoading(false);
      
    };
    
  useShallowEffect(() => {
    fetch(
      api.apiMediaSosialUserGetByUser +
        `?user=${localStorage.getItem("user_id")}`
    )
      .then((val) => val.json())
      .then(setGetMediaSocial);
  }, []);


  return (
    <>
      {/* <pre>{JSON.stringify(getMediaSocial, null, 2)}</pre> */}
      <Box>
        <Box
          sx={{
            width: "100%",
            backgroundColor: COLOR.abuabu,
            padding: 5,
            borderRadius: 7,
          }}
        >
          <Text fw={700} fz={20} pl={10}>
            Edit Media Sosial
          </Text>
        </Box>
        <Box pt={20}>
          <Box
            p={10}
            sx={{
              backgroundColor: COLOR.abuabu,
              borderRadius: 10,
            }}
          >
            <Box>
              {getMediaSocial?.map((e, i) => (
                <Box key={i}>
                  <TextInput
                    radius={"md"}
                    mt={10}
                    value={e.name}
                    placeholder={e.name}
                    label={e.MasterMediaSocial.name}
                    onChange={(val) => {
                      const perubahan = _.clone(getMediaSocial);
                      e.name = val.currentTarget.value;
                      setUbah(perubahan);
                    }}
                  />
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
        <Button
          fullWidth
          radius={"md"}
          // bg={COLOR.merah}
          color="orange.9"
          type="submit"
          mt={10}
          onClick={onEditMediaSocial}
        >
          Simpan
        </Button>
      </Box>
    </>
  );
}

export default EditMediaSocial;
