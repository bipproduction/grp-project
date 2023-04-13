import { Anchor, Button, NavLink } from "@mantine/core"
import {apiSeeder} from "../../lib/api-seeder"

const SeederGetApi = () => {
    return<>
    <Anchor href={apiSeeder.apiSeederAgama}  target={"_blank"}>Agama: {apiSeeder.apiSeederAgama}</Anchor>
    
    
    </>
}

export default SeederGetApi