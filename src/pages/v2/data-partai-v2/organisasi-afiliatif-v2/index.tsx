import LayoutDataPartaiV2 from "@/v2/layout_data_partai/layout_data_partai";
import {
  Box,
  Button,
  Drawer,
  Flex,
  Group,
  Image,
  Select,
  Stack,
  Text,
  TextInput,
  UnstyledButton,
  createStyles,
  rem,
} from "@mantine/core";
import React from "react";
import { useRouter } from "next/router";
import {
  IoArrowForwardCircleOutline,
  IoChevronDownCircle,
} from "react-icons/io5";
import { useDisclosure, useShallowEffect } from "@mantine/hooks";
import COLOR from "../../../../../fun/WARNA";
import { _loadOrganisasiAfiliatif } from "@/load_data/organisasi_afiliatif/load_organisasi_afiliatif";
import toast from "react-simple-toasts";
import { api } from "@/lib/api-backend";
import { sUser } from "@/s_state/s_user";
import { useForm } from "@mantine/form";
import { sOrganisasiAfiliatif } from "@/s_state/organisasi_afiliatif/s_organisasi_afiliatif";

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: rem(764),
    backgroundColor: COLOR.hitam,
  },
  user: {
    display: "block",
    width: "100%",
    padding: 15,
    borderRadius: 8,
    color: "white",

    backgroundColor: COLOR.merah,
  },
}));

function OrganisasiAfiliatifV2() {
  const { classes } = useStyles();
  const router = useRouter();
  const [opened, { open, close }] = useDisclosure(false);
  function Afiliatif() {
    router.push("/v2/data-partai-v2");
  }

  useShallowEffect(() => {
    _loadOrganisasiAfiliatif()
  },[])

  const onDataAfiliatif = () => {
    if (Object.values(formAnggotaAfiliatif.values.data).includes("")) {
      return toast("Lengkapi Data Diri");
    }
    fetch(api.apiAnggotaAfiliatifPost, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formAnggotaAfiliatif.values.data),
    }).then((v) => {
      if (v.status === 201) {
        toast("Sukses");
        router.push("/v2/home");
      }
    });
  };

  const formAnggotaAfiliatif = useForm({
    initialValues: {
      data: {
        userId: localStorage.getItem("user_id"),
        masterOrganisasiAfiliatifId: ""
      }
    }
  })

  return (
    <>
      <LayoutDataPartaiV2>
        <Box h={"100%"}>
          <Box pl={40}>
            <Text fz={12} onClick={Afiliatif}>
              Jika Bukan Organisasi Afiliatif, <strong style={{cursor: "pointer"}}>Klik disini !</strong>
            </Text>
          </Box>
          <Stack p={30} pt={50}>
            <Drawer
              opened={opened}
              onClose={close}
              title="Organisasi Afilliatif"
              size={"sm"}
            >
              <Select
                onChange={(val) => {
                  formAnggotaAfiliatif.values.data.masterOrganisasiAfiliatifId =
                    val!;
                }}
                data={sOrganisasiAfiliatif.value.map((val) => ({
                  value: val.id,
                  label: val.name,
                }))}
                radius={"md"}
                mt={10}
                label="Pilih Nama Organisasi Afilliatif"
                placeholder="Pilih Nama Organisasi Afilliatif"
                withAsterisk
              />
              <Button mt={20} fullWidth bg={COLOR.coklat} color="red.9" radius={"md"}
              onClick={onDataAfiliatif}
              >
                SIMPAN
              </Button>
            </Drawer>
            <UnstyledButton
              className={classes.user}
              pr={20}
              pl={20}
              onClick={open}
            >
              <Group>
                <div style={{ flex: 1 }}>
                  <Text size={15} fw={700}>
                    Organisasi Afiliatif
                  </Text>
                </div>
                <IoArrowForwardCircleOutline size="1.5rem" />
              </Group>
            </UnstyledButton>
          </Stack>
        </Box>
      </LayoutDataPartaiV2>
    </>
  );
}

export default OrganisasiAfiliatifV2;
