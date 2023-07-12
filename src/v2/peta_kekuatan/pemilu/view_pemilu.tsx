import {
  Box,
  Paper,
  Grid,
  Text,
  Select,
  SimpleGrid,
  Table,
  Divider,
  Stack,
  Loader,
  Title,
  Button,
  ActionIcon,
  Group,
} from "@mantine/core";
import COLOR from "../../../../fun/WARNA";
import { api } from "@/lib/api-backend";
import { useShallowEffect } from "@mantine/hooks";
import { useState } from "react";
import _, { isEmpty } from "lodash";

export const ViewPemiluV2 = () => {
  const [prov, setProv] = useState<any[]>([]);
  const [kabkot, setKabkot] = useState<any[]>([]);
  const [kec, setKec] = useState<any[]>([]);
  const [desa, setDesa] = useState<any[]>([]);
  const [selectProv, setSelectProv] = useState({
    id: new Number(),
    name: "",
  });
  const [selectKabkot, setSelectKabkot] = useState({
    id: new Number(),
    name: "",
  });
  const [selectKecamatan, setSelectKecamatan] = useState({
    id: new Number(),
    name: "",
  });
  const [selectDesa, setSelectDesa] = useState({
    id: new Number(),
    name: "",
  });
  const [selectNasional, setSelectNasional] = useState<any>();
  const [nomorTb, setNomorTb] = useState("0");

  useShallowEffect(() => {
    dataPemilu(setSelectProv, setSelectKabkot, setSelectKecamatan);
  }, []);

  async function refreshProv() {
    await fetch(api.apiPemiluGetData)
      .then((res) => res.json())
      .then(async (val) => {
        setProv(val);
      });
  }

  const dataPemilu = async (
    setSelectProv: any,
    setSelectKabkot: any,
    setSelectKecamatan: any
  ) => {
    await fetch(api.apiPemiluGetData)
      .then((res) => res.json())
      .then(async (val) => {
        setProv(val);
        setSelectProv({});
        setSelectKabkot({});
        setSelectKecamatan({});
      });
  };

  const dataPemiluKabkot = async (
    prov: any,
    setSelectKabkot: any,
    setSelectKecamatan: any
  ) => {
    await fetch(api.apiPemiluGetData + `?prov=${prov}`)
      .then((res) => res.json())
      .then(async (val) => {
        if (!isEmpty(val)) {
          setKabkot(val);
          setSelectKabkot({});
          setSelectKecamatan({});
        } else {
          setKabkot([]);
        }
      });
  };

  const dataPemiluKecamatan = async (
    prov: any,
    kab: any,
    setSelectKecamatan: any
  ) => {
    await fetch(api.apiPemiluGetData + `?prov=${prov}&kab=${kab}`)
      .then((res) => res.json())
      .then(async (val) => {
        if (!isEmpty(val)) {
          setKec(val);
          setSelectKecamatan({});
        } else {
          setKec([]);
        }
      });
  };
  const dataPemiluDesa = async (prov: any, kab: any, kec: any) => {
    await fetch(api.apiPemiluGetData + `?prov=${prov}&kab=${kab}&kec=${kec}`)
      .then((res) => res.json())
      .then((val) => setDesa(val));
  };

  const tableHead = (
    <tr>
      <th>Wilayah</th>
      <th>Ir. H. Joko Widodo</th>
      <th>Prabowo Subianto Djojohadikusumo</th>
    </tr>
  );

  const tableBodyProv = prov.map((e) => (
    <tr key={e.id}>
      <td>{e.name}</td>
      <td>{e.value1}</td>
      <td>{e.value2}</td>
    </tr>
  ));

  const tableBodyKabkot = kabkot.map((e) => (
    <tr key={e.id}>
      <td>{e.name}</td>
      <td>{e.value1}</td>
      <td>{e.value2}</td>
    </tr>
  ));

  const tableBodyKecamatan = kec.map((e) => (
    <tr key={e.id}>
      <td>{e.name}</td>
      <td>{e.value1}</td>
      <td>{e.value2}</td>
    </tr>
  ));

  const tableBodyDesa = desa.map((e) => (
    <tr key={e.id}>
      <td>{e.name}</td>
      <td>{e.value1}</td>
      <td>{e.value2}</td>
    </tr>
  ));
  return (
    <>
      <Box>
        <Paper bg={COLOR.abuabu} p={10}>
          <Grid>
            <Grid.Col span={8}>
              <Text size={20} fw={"bold"}>
                Data Pemilu 2019
              </Text>
            </Grid.Col>
          </Grid>
        </Paper>

        {/* Select Wilayah */}
        <Box pt={20}>
          <Paper bg={COLOR.abuabu} p={10} radius={30}>
            <Grid grow justify="center" align="center">
              <Grid.Col span={3}>
                <Select
                  value={selectNasional ? selectNasional : "Nasional"}
                  placeholder="Nasional"
                  radius={20}
                  data={[{ value: "1", label: "Nasional" }]}
                  onChange={(val) => {
                    setSelectNasional(val);
                    dataPemilu(
                      setSelectProv,
                      setSelectKabkot,
                      setSelectKecamatan
                    );
                    setNomorTb("0");
                  }}
                />
              </Grid.Col>
              <Grid.Col span={3}>
                <Select
                  value={
                    (selectProv.id as any)
                      ? (selectProv.id as any)
                      : "Pilih Provinsi"
                  }
                  placeholder={
                    selectProv.name ? selectProv.name : "Pilih Provinsi"
                  }
                  radius={20}
                  searchable
                  data={prov.map((e) => ({
                    value: e.id,
                    label: e.name,
                  }))}
                  onChange={(val) => {
                    // console.log(val)
                    setSelectProv(prov.find((e) => e.id == val));
                    dataPemiluKabkot(val, setSelectKabkot, setSelectKecamatan);
                    setNomorTb("1");
                  }}
                />
              </Grid.Col>
              <Grid.Col span={3}>
                <Select
                  value={
                    (selectKabkot.id as any)
                      ? (selectKabkot.id as any)
                      : "Pilih Kabupaten / Kota"
                  }
                  placeholder={
                    selectKabkot.name
                      ? selectKabkot.name
                      : "Pilih Kabupaten / Kota"
                  }
                  disabled={!selectProv.id ? true : false}
                  searchable
                  radius={20}
                  data={kabkot.map((e) => ({
                    value: e.id,
                    label: e.name,
                  }))}
                  onChange={(val) => {
                    setSelectKabkot(kabkot.find((e) => e.id == val));
                    dataPemiluKecamatan(selectProv, val, setSelectKecamatan);
                    setNomorTb("2");
                  }}
                />
              </Grid.Col>
              <Grid.Col span={3}>
                <Select
                  value={
                    (selectKecamatan.id as any)
                      ? (selectKecamatan.id as any)
                      : "Pilih Kecamatan"
                  }
                  placeholder={
                    selectKecamatan.name
                      ? selectKecamatan.name
                      : "Pilih Kecamatan"
                  }
                  disabled={!selectKabkot.id ? true : false}
                  searchable
                  radius={20}
                  data={kec.map((e) => ({
                    value: e.id,
                    label: e.name,
                  }))}
                  onChange={(val) => {
                    setSelectKecamatan(kec.find((e) => e.id == val));
                    dataPemiluDesa(prov, kabkot, val);
                    setNomorTb("3");
                  }}
                />
              </Grid.Col>
            </Grid>
          </Paper>
        </Box>

        {/* Tampilan Table */}
        <Box pt={20}>
          {(() => {
            if (nomorTb == "0") {
              return (
                <>
                  <Table withColumnBorders withBorder>
                    <thead>{tableHead}</thead>
                    <tbody>{tableBodyProv}</tbody>
                  </Table>
                </>
              );
            } else if (nomorTb == "1") {
              return (
                <>
                  <Table withColumnBorders withBorder>
                    <thead>{tableHead}</thead>
                    <tbody>{tableBodyKabkot}</tbody>
                  </Table>
                </>
              );
            } else if (nomorTb == "2") {
              return (
                <>
                  <Table withColumnBorders withBorder>
                    <thead>{tableHead}</thead>
                    <tbody>{tableBodyKecamatan}</tbody>
                  </Table>
                </>
              );
            } else if (nomorTb == "3") {
              return (
                <>
                  <Table withColumnBorders withBorder>
                    <thead>{tableHead}</thead>
                    <tbody>{tableBodyDesa}</tbody>
                  </Table>
                </>
              );
            }
          })()}
        </Box>
      </Box>
    </>
  );
};
