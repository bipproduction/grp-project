import {
  Box,
  Button,
  Center,
  Image,
  Paper,
  SimpleGrid,
  Text,
} from "@mantine/core";
import React from "react";
import COLOR from "../../../../fun/WARNA";
import TabEdit from "./TabEdit";

const EditDataAset = () => {
  return (
    <>
      <Paper
        p={2}
        pt={14}
        pb={14}
        sx={{
          borderRadius: 10,
          background: COLOR.abuabu,
        }}
      >
        <Text ml={10}>Edit Data Asset</Text>
      </Paper>
      <Box pt={20}>
        <SimpleGrid
          cols={2}
          breakpoints={[
            { maxWidth: 980, cols: 2, spacing: "xl" },
            { maxWidth: 755, cols: 1, spacing: "xl" },
          ]}
        >
          <Box>
            <Box
              sx={{
                backgroundColor: COLOR.abuabu,
                borderRadius: 10,
              }}
            >
              <Center p={10}>
                <Image
                  width={600}
                  height={300}
                  src={"/../aset.jpeg"}
                  radius={10}
                  alt="a"
                />
              </Center>
              <Center>
                <Button
                  radius={"xl"}
                  mt={20}
                  color="orange.9"
                  bg={COLOR.orange}
                >
                  Unggah Foto
                </Button>
              </Center>
              <Center mt={20}>
                <Text fw={700} fz={25}>
                  Mobil
                </Text>
              </Center>
            </Box>
          </Box>
          <Box>
            <TabEdit />
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
};

export default EditDataAset;
