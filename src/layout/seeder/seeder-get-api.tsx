import {
  Anchor,
  Box,
  Button,
  Flex,
  NavLink,
  Space,
  Stack,
  Table,
  Text,
} from "@mantine/core";
import ApiGetAll from "../../lib/api-get.json";

const SeederGetApi = () => {
  return (
    <>
      {/* <Stack> */}
      <Flex wrap={"wrap"}>
        <Table m={"lg"} p="lg" withBorder withColumnBorders striped>
          <thead>
            <tr>
              {/* <th>No</th> */}
              <th>Menu</th>
              <th>Title</th>
              <th>API-GET</th>
            </tr>
          </thead>
          <tbody>
            {ApiGetAll.map((e, i) => (
              <tr key={i}>
                {/* <td>{i++}</td> */}
                <td>{e.dir}</td>
                <td>{e.title}</td>
                <td>
                  <Anchor href={e.api} target="_blank">
                    {e.api}
                  </Anchor>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Flex>

      {/* </Stack> */}
    </>
  );
};

export default SeederGetApi;
