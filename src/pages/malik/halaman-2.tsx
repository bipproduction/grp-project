import { MalikWrapper } from "@/wraper/malik_wrapper";
import { Title } from "@mantine/core";
import Link from "next/link";

export default function Halaman2() {
    return <>
        <MalikWrapper>
            <Title>Ini Halaman 2</Title>
            <Link href={'/malik'} >Pindah Ke Halaman Pertama</Link>
        </MalikWrapper>
    </>
}