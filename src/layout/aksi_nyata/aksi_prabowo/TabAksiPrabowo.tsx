import { Tabs } from "@mantine/core";
import RencanaKunjungan from "./RencanaKunjungan";
import ListKunjungan from "./ListUndangan";
import ListUndangan from "./ListUndangan";

const TabAksiPrabowo = () => {
  return (
    <>
      <Tabs color="dark" radius={"md"} variant="outline" defaultValue="Nas">
        <Tabs.List>
          <Tabs.Tab value="Nas">Rencana Kunjungan</Tabs.Tab>
          <Tabs.Tab value="Pro">List Undangan</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="Nas" pt="xs" mt={10}>
          <RencanaKunjungan />
        </Tabs.Panel>

        <Tabs.Panel value="Pro" pt="xs" mt={10}>
          <ListUndangan />
        </Tabs.Panel>
      </Tabs>
    </>
  );
};

export default TabAksiPrabowo;
