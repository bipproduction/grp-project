import { Box } from "@mantine/core"
import {PropsWithChildren} from "react"


function WarpPage({children}: PropsWithChildren ){
    return (
        <Box>{children}</Box>
    )
}

export default WarpPage