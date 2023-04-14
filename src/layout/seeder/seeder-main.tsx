import { Box, Tabs } from "@mantine/core"
import SeederDev from "./seeder-dev"
import SeederGetApi from "./seeder-get-api"


const SeederMain = () => {
    return<>
    <Box>
        <Tabs defaultValue={"1"}>
            <Tabs.List >
                <Tabs.Tab value="1">Seeder Dev</Tabs.Tab>
                <Tabs.Tab value="2">API Get Master</Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel value="1">
                <SeederDev/>
            </Tabs.Panel>
            <Tabs.Panel value="2">
                <SeederGetApi/>

            </Tabs.Panel>
        </Tabs>
    </Box>
    
    </>
}

export default SeederMain