import {
  Flex,
  Group,
  SimpleGrid,
  Stack,
  TextInput,
  Title,
} from "@mantine/core";
import { useShallowEffect } from "@mantine/hooks";
import datanya from "../v2/sumber_daya_partai/data_table.json";
import { atom, useAtom } from "jotai";

const _list_data = atom<any[]>([]);

export default function Makuro() {
  const [listData, setListData] = useAtom(_list_data);
  useShallowEffect(() => {
    setListData(datanya);
  }, []);
  return (
    <>
      <Title>Makuro</Title>
      {/* {JSON.stringify(datanya)} */}
      <SimpleGrid cols={2}>
        <Stack w={400}>
          {listData.map((v, i) => (
            <Stack key={i}>
              <TextInput
                // key={Math.random()}
                value={v.name}
                onChange={(val) => {
                  const d = [...listData]
                  d[i].name = val.target.value
                  setListData(d);
                }}
              />
            </Stack>
          ))}
        </Stack>
        {JSON.stringify(listData)}
      </SimpleGrid>
    </>
  );
}
