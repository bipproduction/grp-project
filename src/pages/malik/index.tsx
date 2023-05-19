import { MalikWrapper } from "@/wraper/malik_wrapper";
import { Title } from "@mantine/core";
import Link from "next/link";

export default function Malik() {
    return <>
        <MalikWrapper>
            <Title>Ini Alah Index</Title>
            <Link href={'/malik/halaman-2'} >Pindah Ke halaman 2</Link>
        </MalikWrapper>
    </>
}