import { _loadStatusKeanggotaan } from '@/load_data/sumber_daya_partai/load_status_keanggotaan';
import { sStatusKeanggotaan } from '@/s_state/sumber_daya_partai/s_status_keanggotaan';
import LayoutDataPartaiV2 from '@/v2/layout_data_partai/layout_data_partai';
import { ActionIcon, Box, Button, Group, Stack, Text, UnstyledButton, createStyles, rem } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useDisclosure, useShallowEffect } from '@mantine/hooks';
import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import React from 'react';
import { IoArrowBackCircleSharp, IoArrowForwardCircleOutline } from 'react-icons/io5';
import COLOR from '../../../../fun/WARNA';
import toast from 'react-simple-toasts';
import { api } from '@/lib/api-backend';
import { ambil_data } from '@/xg_state.ts/g_selected_page';
const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: rem(764),
    backgroundColor: COLOR.hitam,
  },
  user: {
    display: "block",
    width: "100%",
    padding: 7,
    borderRadius: 8,
    color: "white",

    backgroundColor: COLOR.merah,
  },
}));

function AngotaPartai2() {
  const [ambilData, setAmbilData] = useAtom(ambil_data);
  const { classes } = useStyles();
  const router = useRouter()
  const [opened, { open, close }] = useDisclosure(false);
  function AnggotaPartai() {
    router.push("/v2/home");
  }
  const FormAnggotaPartai = () => {
    // console.log(formAnggota.values.data);
    if (Object.values(formAnggota.values.data).includes("")) {
      return toast("Lengkapi Data Diri");
    }
    fetch(api.apiSumberDayaPartaiPost, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formAnggota.values.data),
    }).then((v) => {
      if (v.status === 201) {
        toast("Sukses");
        router.push("/v2/home");
      }
      // router.replace("v2/home");
    });
  };

  const formAnggota = useForm({
    initialValues: {
      data: {
        userId: localStorage.getItem("user_id"),
        masterStatusKeanggotaanId: +ambilData.masterStatusKeanggotaanId,
      },
    },
  });

  useShallowEffect(() => {
    _loadStatusKeanggotaan()
  },[])

  function Afiliatif() {
    router.push("/v2/data-partai-v2/organisasi-afiliatif-v2");
  }
  function Back() {
    router.push("/v2/data-partai-v2");
  }
  return (
<>
<LayoutDataPartaiV2>
        <Box h={"100%"}>
          <Box pl={40}></Box>
          <Box pl={40}>
            <Text fz={12} onClick={Afiliatif}>
              Jika Termasuk Organisasi Afiliatif, <strong style={{ cursor: "pointer" }}>Klik disini !</strong>
            </Text>
          </Box>
          <Stack p={30} pt={35}>
          <ActionIcon onClick={Back} variant="transparent">
            <IoArrowBackCircleSharp size="2rem"  color={COLOR.merah}/>
          </ActionIcon>
          <UnstyledButton className={classes.user} pr={20} pl={20} bg={"white"}>
              <Group>
                <div style={{ flex: 1 }}>
                  <Text size={15}   color="dark">
                    Anggota Partai
                  </Text>
                </div>
              </Group>
            </UnstyledButton>
            <Button
              mt={20}
              fullWidth
              bg={COLOR.coklat}
              radius={"md"}
              color="red.9"
              onClick={FormAnggotaPartai}
            >
              SIMPAN
            </Button>
          </Stack>
        </Box>
      </LayoutDataPartaiV2>
</>
  );
}

export default AngotaPartai2;
