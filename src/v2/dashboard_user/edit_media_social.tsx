import { api } from "@/lib/api-backend";
import { ModelUserMediaSosial } from "@/model/interface_media_social";
import { Box, Button, Text, TextInput } from "@mantine/core";
import { useShallowEffect } from "@mantine/hooks";
import { atom, useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import React, { useState } from "react";
import COLOR from "../../../fun/WARNA";
import {
  DataDiri,
  ModelSumberDayaPartai,
  User,
} from "@/model/interface_sumber_daya_partai";
import toast from "react-simple-toasts";
import _ from "lodash";
import { val_loading, val_loadingMedia } from "@/xg_state.ts/val_loading";
import { useRouter } from "next/router";
import { buttonSimpan } from "../component/button-toast";
import { _postLogUser } from "@/load_data/log_user/post_log_user";

const val_media_social_edit = atomWithStorage("val_media_social_edit", false);

export const _mediaSocialGet = atomWithStorage<ModelUserMediaSosial[] | null>(
  "media",
  null
);
export const _mediaSocialUp = atomWithStorage<ModelUserMediaSosial | null>(
  "media_data",
  null
);
export const _listDataMedia = atom<ModelUserMediaSosial[] | null>([]);

function EditMediaSocial({ keluarMedia }: any) {
  const [getMediaSocial, setGetMediaSocial] = useAtom(_mediaSocialGet);
  const [listData, setListData] = useAtom(_mediaSocialUp);
  const [ubahMedia, setUbahMedia] = useAtom(_listDataMedia);
  const [openMediaSocial, setOpenMediaSocial] = useAtom(val_media_social_edit);
  // const [isLoading, setLoadingMedia] = useAtom(val_loadingMedia);
  const router = useRouter();
  const [isLoading, setLoading] = useAtom(val_loading) 

  const onEditMediaSocial = async () => {
    // setLoadingMedia(true);
    setLoading(true)
    await new Promise((r) => setTimeout(r, 300))
    {
      getMediaSocial?.map(async(v) => {
        const body = {
          id: v.id,
          MasterMediaSocial: v.MasterMediaSocial,
          masterMediaSocialId: v.masterMediaSocialId,
          name: v.name,
        };
        fetch(api.apiMediaSosialUserUpdate, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        });
        // console.log(body);
        await new Promise((r) => setTimeout(r, 500))
        // router.reload();
      });
    }
    setLoading(false)
    loadMediaEdit()
    keluarMedia(true);
    setOpenMediaSocial(false);
    buttonSimpan();
    _postLogUser(
      localStorage.getItem("user_id"),
      "UBAH",
      "User mengubah data sosial media user"
    );
    // loadMediaEdit()
    // loadDatadiri()

    // router.reload()
  };

  useShallowEffect(() => {
    loadMediaEdit()
  },[])
  async function loadMediaEdit() {
    fetch(api.apiMediaSosialUserGetByUser + `?user=${localStorage.getItem("user_id")}`)
    .then(async (val) => {
      if (val.status == 200) {
        const data = await val.json()
        setGetMediaSocial(data)
        return
      }
    })
  }

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
                    placeholder={e.name}
                    value={e.name}
                    label={e.MasterMediaSocial.name}
                    onChange={(val) => {
                      const perubahan = _.clone(getMediaSocial);
                      e.name = val.currentTarget.value;
                      setUbahMedia(perubahan);
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
