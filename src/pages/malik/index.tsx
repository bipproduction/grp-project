import { MalikWrapper } from "@/wraper/malik_wrapper";
import { useHookstate } from "@hookstate/core";
import { Button, Modal, Stack, Table, Title } from "@mantine/core";
import Link from "next/link";

import { useState } from "react";

const listData = Array.from(new Array(100)).map((v, i) => i + 1);
import { hookstate } from "@hookstate/core";

export const val_muncul1 = hookstate(false);
export const val_muncul2 = hookstate(false);
export const val_data = hookstate("");
export default function Malik() {
  const muncul1 = useHookstate(val_muncul1);
  const muncul2 = useHookstate(val_muncul2);
  // const valData = useHookstate(val_data);
  //   const muncul2 = useHookstate(val_muncul2);
  return (
    <>
      <Table>
        <tbody>
          {listData?.map((item: any, i) => (
            <tr key={item}>
              <td>
                <Button
                  onClick={() => {
                    muncul1.set(true);
                    // valData.set(item);
                  }}
                >
                  Tombol {item}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* <Modal opened={muncul1.value} onClose={() => muncul1.set(false)}>
        <Stack>
          <Title>Muncul 1</Title>
          <Title>{valData.value}</Title>
        </Stack>
      </Modal> */}
      <Modal
        opened={muncul1.value}
        onClose={() => muncul1.set(false)}
        size={"lg"}
      >
        <Title>Muncul 1</Title>
        <Button
          onClick={() => {
            muncul1.set(false);
            muncul2.set(true);
          }}
        >
          Muncul 2
        </Button>
      </Modal>

      <Modal
        opened={muncul2.value}
        onClose={() => {
          muncul2.set(false);
          muncul1.set(true);
        }}
        size={"md"}
      >
        <Title>Muncul 2</Title>
        <Button
          onClick={() => {
            muncul1.set(true);
            muncul2.set(false);
          }}
        >
          Simpan
        </Button>
      </Modal>
    </>
    // <>
    //   <Button
    //     onClick={() => {
    //       muncul1.set(true);
    //     }}
    //   >
    //     Muncul 1
    //   </Button>

    // </>
  );
}
