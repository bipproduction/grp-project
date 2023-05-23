import LayoutDataPartaiV2 from "@/v2/layout_data_partai/layout_data_partai";
import {
  Box,
  Button,
  Drawer,
  Flex,
  Group,
  Image,
  Stack,
  Text,
  TextInput,
  UnstyledButton,
  createStyles,
  rem,
} from "@mantine/core";
import React from "react";
import COLOR from "../../../../fun/WARNA";
import { useRouter } from "next/router";
import {
  IoArrowForwardCircleOutline,
  IoChevronDownCircle,
} from "react-icons/io5";
import { useDisclosure } from "@mantine/hooks";
import KaderPartai from "./kader-partai";
import AngotaPartaiV2 from "./angota-partai";
import { useAtom } from "jotai";
import { number } from "echarts";
import { ambil_data } from "@/xg_state.ts/g_selected_page";

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

function DataPartaiV2() {
  const { classes } = useStyles();
  const router = useRouter();
  const [opened, { open, close }] = useDisclosure(false);
  const [ambilData, setAmbilData] = useAtom(ambil_data);

  function StrukturPartai() {
    router.push("/v2/data-partai-v2/struktur-partai-v2");
  }
  function SayapPartai() {
    router.push("/v2/data-partai-v2/sayap-partai-v2");
  }
  function AnggotaPartai() {
    router.push("/v2/home");
  }
  function Afiliatif() {
    router.push("/v2/data-partai-v2/organisasi-afiliatif-v2");
  }
  return (
    <>
      <LayoutDataPartaiV2>
        <Box h={"100%"}>
          <Box pl={40}>
            <Text fz={12} onClick={Afiliatif}>
              Jika Termasuk Organisasi Afiliatif,{" "}
              <strong style={{ cursor: "pointer" }}>Klik disini !</strong>
            </Text>
          </Box>
          <Stack p={30} pt={50}>
            {/* {JSON.stringify(ambilData)} */}
            <UnstyledButton
              className={classes.user}
              pr={20}
              pl={20}
              onClick={() => {
                setAmbilData({
                  ...ambilData,
                  masterStatusKeanggotaanId: "1",
                  // sayapPartai: ""
                });

                StrukturPartai();
              }}
            >
              <Group>
                <div style={{ flex: 1 }}>
                  <Text size={15} fw={700}>
                    Struktur Partai
                  </Text>
                </div>
                <IoArrowForwardCircleOutline size="1.5rem" />
              </Group>
            </UnstyledButton>
            <UnstyledButton
              className={classes.user}
              pr={20}
              pl={20}
              onClick={() => {
                setAmbilData({
                  ...ambilData,
                  masterStatusKeanggotaanId: "2",
                  // strukturpartaiId: ""
                })
                SayapPartai()
              }}
            >
              <Group>
                <div style={{ flex: 1 }}>
                  <Text size={15} fw={700}>
                    Sayap Partai
                  </Text>
                </div>
                <IoArrowForwardCircleOutline size="1.5rem" />
              </Group>
            </UnstyledButton>

            {/* kader partai */}
            <KaderPartai />
            {/* kader partai */}

            {/* Anggota Partai */}
            <AngotaPartaiV2 />
            {/* Anggota Partai */}
          </Stack>
        </Box>
      </LayoutDataPartaiV2>
    </>
  );
}

export default DataPartaiV2;
