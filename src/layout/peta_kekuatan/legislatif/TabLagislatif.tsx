import { Tabs } from "@mantine/core";
import DPRLegislatif from "./DPRLegislatif";
import DPRDProvinsiLegislatif from "./DPRDProvinsiLegislatif";
import DPRDKabLegislatif from "./DPRDKabLegislatif";

const TabLegislatif = () => {
  return (
    <>
      <Tabs color="dark" radius={"md"} variant="outline" defaultValue="Nas">
        <Tabs.List>
          <Tabs.Tab value="Nas">DPR RI</Tabs.Tab>
          <Tabs.Tab value="Pro">DPRD Provinsi</Tabs.Tab>
          <Tabs.Tab value="Kab">DPRD Kabupaten / Kota</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="Nas" pt="xs" mt={10}>
          <DPRLegislatif />
        </Tabs.Panel>

        <Tabs.Panel value="Pro" pt="xs" mt={10}>
          <DPRDProvinsiLegislatif />
        </Tabs.Panel>

        <Tabs.Panel value="Kab" pt="xs" mt={10}>
          <DPRDKabLegislatif />
        </Tabs.Panel>
      </Tabs>
    </>
  );
};

export default TabLegislatif;
