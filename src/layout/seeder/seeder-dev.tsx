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
  // User Role
  const syncUserRole = async () =>
    await fetch(apiSeeder.apiUserRole).then(async (e) => e.status == 200);

  // User
  const syncUser =async () => 
    await fetch(apiSeeder.apiUserSeeder).then(async (e) => e.status == 200);

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
    );

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

  // aset partai
  const syncSeederStatusAset = async () =>
    await fetch(apiSeeder.apiSeederStatusAset).then(
      async (e) => e.status == 200
    );
  const syncSeederKategoriAset = async () =>
    await fetch(apiSeeder.apiSeederKategoriAset).then(
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
  // legislatif
  const syncSeederTingkatLegislatif = async () =>
    await fetch(apiSeeder.apiSeederTingkatLegislatif).then(
      async (e) => e.status == 200
    );
  // ekeskutif
  const syncSeederTingkatEksekutif = async () =>
    await fetch(apiSeeder.apiSeederTingkatEksekutif).then(
      async (e) => e.status == 200
    );
  const syncSeederStatusEksekutif = async () =>
    await fetch(apiSeeder.apiSeederStatusEksekutif).then(
      async (e) => e.status == 200
    );
  const syncSeederJabatanEksekutifProvinis = async () =>
    await fetch(apiSeeder.apiSeederJabatanEksekutifProvinsi).then(
      async (e) => e.status == 200
    );
  const syncSeederJabatanEksekutifKabkot = async () =>
    await fetch(apiSeeder.apiSeederJabatanEksekutifKabkot).then(
      async (e) => e.status == 200
    );
  const syncSeederJabatanEksekutifKota = async () =>
    await fetch(apiSeeder.apiSeederJabatanEksekutifKota).then(
      async (e) => e.status == 200
    );
  const syncSeederJabatanEksekutifKabupaten = async () =>
    await fetch(apiSeeder.apiSeederJabatanEksekutifKabupaten).then(
      async (e) => e.status == 200
    );
  // no urut TPS
  const syncSeederNomorUrutTps = async () =>
    await fetch(apiSeeder.apiSeederNomorUrutTps).then(
      async (e) => e.status == 200
    );

  // Aksi Nyata
  const syncSeederStatusAksiNyata = async () =>
    await fetch(apiSeeder.apiSeederStatusAksiNyata).then(
      async (e) => e.status == 200
    );

  // Wilayah
  const syncSeederNegara = async () =>
    await fetch(apiSeeder.apiSeederNamaNegara).then(
      async (e) => e.status == 200
    );
  const syncSeederProvinsi = async () =>
    await fetch(apiSeeder.apiSeederNamaProvinsi).then(
      async (e) => e.status == 200
    );

  return (
    <>
      <Box>
        <Center m={"lg"}>
          <Text fw={"bold"} fz={30}>
            Seeder For Database
          </Text>
        </Center>
        <Stack>
          <Box bg={"gray.3"} p={"sm"}>
            <Stack>
              <Center>
                <Text fz={20}>User & Profile</Text>
              </Center>
              <Paper p={"lg"} bg={"cyan.1"}>
                <Text>User</Text>
                <Flex gap={"sm"}>
                  <ButtonSync loadData={syncUserRole} name={"Sync User Role"} />
                  <ButtonSync loadData={syncUser} name={"Sync User"} />
                </Flex>
              </Paper>
              <Paper bg={"cyan.1"} p="lg">
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
              <Paper bg={"cyan.1"} p="lg">
                <Text>Negara & Wilayah</Text>
                <Flex gap={"sm"}>
                  <ButtonSync
                    loadData={syncSeederNegara}
                    name={"Sync Seeder Negara"}
                  />
                  <ButtonSync
                    loadData={syncSeederProvinsi}
                    name={"Sync Seeder Provinsi"}
                  />
                </Flex>
              </Paper>
            </Stack>
          </Box>
          <Box bg={"gray.3"} p={"sm"}>
            <Stack>
              <Center>
                <Text fz={20}>Sumber Daya Partai</Text>
              </Center>
              <Paper bg={"red.1"} p="lg">
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
              <Paper bg={"red.1"} p="lg">
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
              <Paper bg={"red.1"} p={"lg"}>
                <Text>Aset Partai</Text>
                <Flex gap={"sm"}>
                  <ButtonSync
                    loadData={syncSeederStatusAset}
                    name={"Sync Seeder Status Aset"}
                  />
                  <ButtonSync
                    loadData={syncSeederKategoriAset}
                    name={"Sync Seeder Kategori Aset"}
                  />
                </Flex>
              </Paper>
            </Stack>
          </Box>
          <Box bg={"gray.3"} p="sm">
            <Stack>
              <Center>
                <Text fz={20}>Peta Kekuatan Partai</Text>
              </Center>
              <Paper bg={"green.1"} p={"lg"}>
                <Text>Calmil dan Partai Pengusung</Text>

                <Flex gap={"sm"}>
                  <ButtonSync
                    loadData={syncSeederPemilihPotensial}
                    name={"Sync Calon Pemilih Potensial"}
                  />
                  <ButtonSync
                    loadData={syncSeederPartaiPengusung}
                    name={"Sync Partai Pengusung"}
                  />
                </Flex>
              </Paper>
              <Paper bg={"green.1"} p={"lg"}>
                <Text>Legislatif</Text>

                <Flex gap={"sm"} wrap={"wrap"}>
                  <ButtonSync
                    loadData={syncSeederTingkatLegislatif}
                    name={"Sync Tingkat Legislatif"}
                  />

                  <ButtonSync
                    loadData={syncSeederNomorUrutTps}
                    name={"Sync No Urut TPS"}
                  />
                </Flex>
              </Paper>
              <Paper bg={"green.1"} p={"lg"}>
                <Text>Ekekutif</Text>
                <Flex gap={"sm"} wrap="wrap">
                  <ButtonSync
                    loadData={syncSeederTingkatEksekutif}
                    name={"Sync Tingkat Eksekutif"}
                  />
                  <ButtonSync
                    loadData={syncSeederStatusEksekutif}
                    name={"Sync Status Eksekutif"}
                  />
                  <ButtonSync
                    loadData={syncSeederJabatanEksekutifProvinis}
                    name={"Sync J.Eksekutif Provinsi"}
                  />
                  <ButtonSync
                    loadData={syncSeederJabatanEksekutifKabkot}
                    name={"Sync J.Eksekutif Kabupaten/Kota"}
                  />
                  <ButtonSync
                    loadData={syncSeederJabatanEksekutifKota}
                    name={"Sync J.Eksekutif Kota"}
                  />
                  <ButtonSync
                    loadData={syncSeederJabatanEksekutifKabupaten}
                    name={"Sync J.Eksekutif Kabupaten"}
                  />
                </Flex>
              </Paper>
            </Stack>
          </Box>
          <Box bg={"gray.3"} p={"sm"}>
            <Stack>
              <Center>
                <Text fz={20}>Aksi Nyata</Text>
              </Center>
              <Paper bg={"teal.1"} p={"lg"}>
                <Flex>
                  <ButtonSync
                    loadData={syncSeederStatusAksiNyata}
                    name={"Sync Status Aksi Nyata"}
                  />
                </Flex>
              </Paper>
            </Stack>
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
        radius={30}
        variant={"outline"}
        leftIcon={isLoading && <Loader color={"orange"} />}
        onClick={load}
      >
        {name}
      </Button>
    </>
  );
};

export default SeederDev;
