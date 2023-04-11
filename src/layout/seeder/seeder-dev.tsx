import { apiSeeder } from "@/lib/api-seeder";
import {
  Box,
  Button,
  Center,
  Flex,
  Loader,
  Paper,
  Stack,
  Text,
} from "@mantine/core";
import { useState } from "react";
import toast from "react-simple-toasts";

const SeederDev = () => {
  // User
  const syncUserRole = async () =>
    await fetch(apiSeeder.apiUserRole).then(async (e) => e.status == 200);

  // Sumber Daya Partai
  // profile Umum
  const syncSeederAgama = async () =>
    await fetch(apiSeeder.apiSeederAgama).then(async (e) => e.status == 200);
  const syncSeederJenisKelamin = async () =>
    await fetch(apiSeeder.apiSeederJenisKelamin).then(
      async (e) => e.status == 200
    );
  const syncSeederMediaSocial = async () =>
    await fetch(apiSeeder.apiSeederMediaSocial).then(
      async (e) => e.status == 200
    );
    const syncSeederPekerjaan = async () => 
    await fetch(apiSeeder.apiSeederPekerjaan).then(
        async (e) => e.status == 200
    )

  // status keanggotaan
  const syncSeederTingkatPengurus = async () =>
  await fetch(apiSeeder.apiSeederTingkatPengurus).then(
    async (e) => e.status == 200
  );
  const syncSeederStatusKeanggotaan = async () =>
    await fetch(apiSeeder.apiSeederStatusKenaggotaan).then(
      async (e) => e.status == 200
    );
  const syncSeederKaderPartai = async () =>
    await fetch(apiSeeder.apiSeederKaderPartai).then(
      async (e) => e.status == 200
    );
    const syncSeederSayapPartai = async () =>
    await fetch(apiSeeder.apiSeederSayapPartai).then(
      async (e) => e.status == 200
    );
  const syncSeederOrganisasiAfiliatif = async () =>
    await fetch(apiSeeder.apiSeederOrganisasiAfiliatif).then(
      async (e) => e.status == 200
    );

  // tingkat pengurus
  const syncSeederDewanPembina = async () =>
    await fetch(apiSeeder.apiSeederJabatanDewanPembina).then(
      async (e) => e.status == 200
    );
  const syncSeederDewanPimpinanCabang = async () =>
    await fetch(apiSeeder.apiSeederJabatanDewanPimpinanCabang).then(
      async (e) => e.status == 200
    );
  const syncSeederDewanPimpinanDaerah = async () =>
    await fetch(apiSeeder.apiSeederJabatanDewanPimpinanDaerah).then(
      async (e) => e.status == 200
    );
  const syncSeederDewanPimpinanPusat = async () =>
    await fetch(apiSeeder.apiSeederJabatanDewanPimpinanPusat).then(
      async (e) => e.status == 200
    );
  const syncSeederPerwakilanPartaiDiluarNegeri = async () =>
    await fetch(apiSeeder.apiSeederJabatanPerwakilanPartaiDiluarNegeri).then(
      async (e) => e.status == 200
    );
  const syncSeederPimpinanAnakCabang = async () =>
    await fetch(apiSeeder.apiSeederJabatanPimpinanAnakCabang).then(
      async (e) => e.status == 200
    );
  const syncSeederPimpinanRanting = async () =>
    await fetch(apiSeeder.apiSeederJabatanPimpinanRanting).then(
      async (e) => e.status == 200
    );

  // Peta Kekuatan
  const syncSeederPartaiPengusung = async () =>
    await fetch(apiSeeder.apiSeederPartaiPengusung).then(
      async (e) => e.status == 200
    );
  // calon pemilih potensial
  const syncSeederPemilihPotensial = async () =>
    await fetch(apiSeeder.apiSeederCalonPemilihPotensial).then(
      async (e) => e.status == 200
    );

  return (
    <>
      <Box>
        <Center m={"lg"}>
          <Text fw={"bold"}>Seeder For Database</Text>
        </Center>
        <Stack>
          <Paper p={"lg"} bg={"cyan.1"}>
            <Text>User</Text>
            <ButtonSync loadData={syncUserRole} name={"Sync User Role"} />
          </Paper>
          <Box>
            <Center>
              <Text>Sumber Daya Partai</Text>
            </Center>
            <Stack>
              <Paper bg={"gray.3"} p="lg">
                <Text>Status Keanggotaan</Text>
                <Flex gap={"sm"} wrap="wrap">
               <ButtonSync
                    loadData={syncSeederTingkatPengurus}
                    name={"Sync Tingkat Pengurus"}
                  />
                <ButtonSync
                    loadData={syncSeederStatusKeanggotaan}
                    name={"Sync Status Keanggotaan"}
                  />
                  <ButtonSync
                    loadData={syncSeederKaderPartai}
                    name={"Sync Kader Partai"}
                  />
                  <ButtonSync
                    loadData={syncSeederSayapPartai}
                    name={"Sync Sayap Partai"}
                  />
                  <ButtonSync
                    loadData={syncSeederOrganisasiAfiliatif}
                    name={"Sync Organisasi Afiliatif"}
                  />
                </Flex>
              </Paper>
              <Paper bg={"blue.1"} p="lg">
                <Text>Tingkat Partai</Text>
                <Flex gap={"sm"} wrap="wrap">
                  <ButtonSync
                    loadData={syncSeederDewanPembina}
                    name={"Sync Dewan Pembina"}
                  />
                  <ButtonSync
                    loadData={syncSeederDewanPimpinanCabang}
                    name={"Sync D.Pimpinan Cabang"}
                  />
                  <ButtonSync
                    loadData={syncSeederDewanPimpinanDaerah}
                    name={"Sync D.Pimpinan Daerah"}
                  />
                  <ButtonSync
                    loadData={syncSeederDewanPimpinanPusat}
                    name={"Sync D.Pimpinan Pusat"}
                  />
                  <ButtonSync
                    loadData={syncSeederPerwakilanPartaiDiluarNegeri}
                    name={"Sync Perwakilan Partai Luar Negeri"}
                  />
                  <ButtonSync
                    loadData={syncSeederPimpinanAnakCabang}
                    name={"Sync Pimpinan Anak Cabang"}
                  />
                  <ButtonSync
                    loadData={syncSeederPimpinanRanting}
                    name={"Sync Pimpinan Ranting"}
                  />
                </Flex>
              </Paper>

              <Paper bg={"grape.1"} p="lg">
                <Text>Profile Umum</Text>
                <Flex gap={"sm"}>
                  <ButtonSync
                    loadData={syncSeederAgama}
                    name={"Sync Seeder Agama"}
                  />
                  <ButtonSync
                    loadData={syncSeederJenisKelamin}
                    name={"Sync Seeder Jenis Kelamin"}
                  />
                  <ButtonSync
                    loadData={syncSeederMediaSocial}
                    name={"Sync Seeder Media Social"}
                  />
                  <ButtonSync
                    loadData={syncSeederPekerjaan}
                    name={"Sync Seeder Pekerjaan"}
                  />
                </Flex>
              </Paper>
            </Stack>
          </Box>
          <Box>
            <Center>
              <Text>Peta Kekuatan Partai</Text>
            </Center>
            <Paper bg={"lime.1"} p={"lg"}>
              <Flex gap={"sm"}>
                <ButtonSync
                  loadData={syncSeederPartaiPengusung}
                  name={"Sync Partai Pengusung"}
                />
                <ButtonSync
                  loadData={syncSeederPemilihPotensial}
                  name={"Sync Calon Pemilih Potensial"}
                />
              </Flex>
            </Paper>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

interface ModelLoadData {
  loadData: () => Promise<boolean>;
  name: string;
  disable?: boolean;
  bg?: string;
}

const ButtonSync = ({ loadData, name, disable, bg }: ModelLoadData) => {
  const [isLoading, setisLoading] = useState(false);

  const load = async () => {
    setisLoading(true);
    if (await loadData()) {
      toast(`seeder sukses`);
      return setisLoading(false);
    }

    toast("error !!!");
    return setisLoading(false);
  };

  return (
    <>
      <Button
        bg={bg ?? ""}
        disabled={isLoading}
        w={250}
        leftIcon={isLoading && <Loader color={"orange"} />}
        onClick={load}
      >
        {name}
      </Button>
    </>
  );
};

export default SeederDev;
