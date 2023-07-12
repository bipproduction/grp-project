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
} from "@mantine/core";
import COLOR from "../../../../fun/WARNA";
import { api } from "@/lib/api-backend";
import { useShallowEffect } from "@mantine/hooks";
import { useState } from "react";
import _, { isEmpty } from "lodash";
import toast from "react-simple-toasts";

interface ModelProv {
  id: number;
  name: string;
  value1: string;
  value2: string;
}

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

  const [refresh, setRefresh] = useState("1");

  useShallowEffect(() => {
    dataPemilu();
  }, []);

  useShallowEffect(() => {
    if (refresh) {
      dataPemilu();
    }
  }, []);

  async function refreshProv() {
    await fetch(api.apiPemiluGetData)
      .then((res) => res.json())
      .then(async (val) => {
        setProv(val);
      });
  }

  const dataPemilu = async () => {
    await fetch(api.apiPemiluGetData)
      .then((res) => res.json())
      .then(async (val) => {
        setProv(val);
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
      {/* {JSON.stringify(selectProv.id)}
      <Button onClick={() => setRefresh(Math.random().toString())}>Klik</Button>
      {JSON.stringify(refresh)} */}

      <Box>
        <Paper bg={COLOR.abuabu} p={10}>
          <Grid>
            <Grid.Col span={8}>
              <Text size={20} fw={"bold"}>
                Data Pemilu
              </Text>
            </Grid.Col>
          </Grid>
        </Paper>

        {/* Select Wilayah */}
        <Box pt={20}>
          <Paper bg={COLOR.abuabu} p={10} radius={30}>
            <SimpleGrid cols={3}>
              <Select
                clearable={selectProv.id == undefined ? true : false}
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
                  setSelectProv(prov.find((e) => e.id == val));
                  dataPemiluKabkot(val, setSelectKabkot, setSelectKecamatan);
                  setRefresh(val as any);
                }}
              />
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
                disabled={selectProv.id == 0 ? true : false}
                radius={20}
                data={kabkot.map((e) => ({
                  value: e.id,
                  label: e.name,
                }))}
                onChange={(val) => {
                  setSelectKabkot(kabkot.find((e) => e.id == val));
                  dataPemiluKecamatan(selectProv, val, setSelectKecamatan);
                }}
              />
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
                disabled={selectKabkot.id == 0 ? true : false}
                radius={20}
                data={kec.map((e) => ({
                  value: e.id,
                  label: e.name,
                }))}
                onChange={(val) => {
                  setSelectKecamatan(kec.find((e) => e.id == val));
                  dataPemiluDesa(prov, kabkot, val);
                }}
              />
              {/* <Select
                placeholder="Desa"
                radius={20}
                data={desa.map((e) => ({
                  value: e.id,
                  label: e.name,
                }))}
                onChange={(val) => {
                  setSelectDesa(desa.find((e) => e.id == val));
                }}
              /> */}
            </SimpleGrid>
          </Paper>
        </Box>

        {/* Tampilan Table */}
        <Box pt={20}>
          {(() => {
            if (isEmpty(kabkot)) {
              return (
                <>
                  <Table withColumnBorders withBorder>
                    <thead>
                      <tr>
                        <th>Wilayah</th>
                        <th>Jokowi</th>
                        <th>Prabowo</th>
                      </tr>
                    </thead>
                    <tbody>{tableBodyProv}</tbody>
                  </Table>
                </>
              );
            } else if (isEmpty(kec)) {
              return (
                <>
                  <Table withColumnBorders withBorder>
                    <thead>
                      <tr>
                        <th>Wilayah</th>
                        <th>Jokowi</th>
                        <th>Prabowo</th>
                      </tr>
                    </thead>
                    <tbody>{tableBodyKabkot}</tbody>
                  </Table>
                </>
              );
            } else if (isEmpty(desa) && !isEmpty(kec)) {
              return (
                <>
                  <Table withColumnBorders withBorder>
                    <thead>
                      <tr>
                        <th>Wilayah</th>
                        <th>Jokowi</th>
                        <th>Prabowo</th>
                      </tr>
                    </thead>
                    <tbody>{tableBodyKecamatan}</tbody>
                  </Table>
                </>
              );
            } else if (!isEmpty(prov) && !isEmpty(kabkot) && !isEmpty(kec)) {
              return (
                <>
                  <Table withColumnBorders withBorder>
                    <thead>
                      <tr>
                        <th>Wilayah</th>
                        <th>Jokowi</th>
                        <th>Prabowo</th>
                      </tr>
                    </thead>
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
