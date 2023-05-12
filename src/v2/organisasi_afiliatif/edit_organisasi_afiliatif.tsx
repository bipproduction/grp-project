import { buttonReset, buttonSimpan } from "@/v2/component/button-toast";
import {
    Box,
    Button,
    Flex,
    Grid,
    Group,
    Mark,
    NumberInput,
    Paper,
    Select,
    SimpleGrid,
    Text,
    TextInput,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useShallowEffect } from "@mantine/hooks";
import { useState } from "react";
import toast from "react-simple-toasts";
import { useForm } from "@mantine/form";
import COLOR from "../../../fun/WARNA";

const EditOrganisasiAfiliatifV2 = ({ thisClosed }: any) => {
    const [organisasiAfiliatif, setOrganisasiAfiliatif] = useState<any | []>([
        "Struktur Partai",
    ]);

    useShallowEffect(() => {
        loadOrganisasiAfiliatif();
    }, []);

    async function loadOrganisasiAfiliatif() {
        const res = await fetch(
            "/api/get/sumber-daya-partai/api-get-organisasi-afiliatif"
        )
            .then((res) => res.json())
            .then((val) =>
                setOrganisasiAfiliatif(Object.values(val).map((e: any) => e.name))
            );
    }

    const formEditOrganisasiAfiliatif = useForm({
        initialValues: {
            data: {
                nik: '',
                nama: '',
                email: '',
                tempatLahir: '',
                tanggalLahir: '',
                jenisKelamin: '',
                phoneNumber: '',
                instagram: '',
                facebook: '',
                tiktok: '',
                twitter: '',
                agama: '',
                pekerjaan: '',
                alamat: '',
                provinsi: '',
                kabkot: '',
                kecamatan: '',
                desa: '',
                rtrw: '',
                organisasiAfiliatif: '',
            },
            validate: {
                email: (value: string) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            },
        },
    });

    const onEdit = () => {
        console.log(formEditOrganisasiAfiliatif.values.data)
        if (Object.values(formEditOrganisasiAfiliatif.values.data).includes("")) {
            return toast("Lengkapi Data diri");
        }

        if (formEditOrganisasiAfiliatif.values.validate.email(formEditOrganisasiAfiliatif.values.data.email) != null) {
            return toast("Invalid email");
        }

        //disini pengaplikasian api

        buttonSimpan();
        thisClosed();
    }

    return (
        <>
            <Box>
                <Paper bg={COLOR.abuabu} p={10}>
                    <Grid>
                        <Grid.Col span={8}>
                            <Text size={20} fw={"bold"}>
                                Edit Organisasi Afiliatif
                            </Text>
                        </Grid.Col>
                    </Grid>
                </Paper>
                <Box>
                    {/* {JSON.stringify(organisasiAfiliatif)} */}
                    <Flex gap="md" pt={20}>
                        <Box w={100}>
                            <Button
                                fullWidth
                                color="orange.9"
                                bg={COLOR.orange}
                                radius={"xl"}
                                onClick={onEdit}
                            >
                                Simpan
                            </Button>
                        </Box>
                        <Box w={100}>
                            <Button
                                fullWidth
                                color="orange.9"
                                bg={COLOR.orange}
                                radius={"xl"}
                                onClick={() => {
                                    formEditOrganisasiAfiliatif.reset();
                                    buttonReset()
                                }}
                            >
                                Reset
                            </Button>
                        </Box>
                    </Flex>
                </Box>

                <Box pt={20}>
                    <SimpleGrid cols={2}>
                        <Box>
                            <Paper bg={COLOR.abuabu} p={20}>
                                <Flex direction={"column"}>
                                    <Text fz={20} fw={"bold"}>
                                        Form Data Diri
                                    </Text>
                                    <Text fz={10}>
                                        <Text span c={"red"}>
                                            **
                                        </Text>{" "}
                                        Wajib diisi
                                    </Text>
                                </Flex>
                                <Box>
                                    <Flex direction={"column"}>
                                        <NumberInput placeholder="NIK" label="**" {...formEditOrganisasiAfiliatif.getInputProps("data.nik")} />
                                        <TextInput placeholder="Nama" label="**" {...formEditOrganisasiAfiliatif.getInputProps("data.nama")} />
                                        <TextInput placeholder="Email" label="**" {...formEditOrganisasiAfiliatif.getInputProps("data.email")} />
                                        <TextInput placeholder="Tempat Lahir" label="**" {...formEditOrganisasiAfiliatif.getInputProps("data.tempatLahir")} />
                                        <DateInput placeholder="Tanggal Lahir" label="**" {...formEditOrganisasiAfiliatif.getInputProps("data.tanggalLahir")} />
                                        <Select
                                            data={[
                                                { value: "laki", label: "Laki-Laki" },
                                                { value: "perempuan", label: "Perempuan" },
                                            ]}
                                            placeholder="Jenis Kelamin"
                                            label="**"
                                            {...formEditOrganisasiAfiliatif.getInputProps("data.jenisKelamin")}
                                        />
                                        <NumberInput placeholder="Nomor Telepon" label="**" {...formEditOrganisasiAfiliatif.getInputProps("data.phoneNumber")} />
                                        <TextInput
                                            radius={"md"}
                                            mt={10}
                                            placeholder="Instargram"
                                            label="**"
                                            {...formEditOrganisasiAfiliatif.getInputProps("data.instagram")}
                                        />
                                        <TextInput
                                            radius={"md"}
                                            mt={10}
                                            placeholder="Facebook"
                                            label="**"
                                            {...formEditOrganisasiAfiliatif.getInputProps("data.facebook")}
                                        />
                                        <TextInput
                                            radius={"md"}
                                            mt={10}
                                            placeholder="TikTok"
                                            label="**"
                                            {...formEditOrganisasiAfiliatif.getInputProps("data.tiktok")}
                                        />
                                        <TextInput
                                            radius={"md"}
                                            mt={10}
                                            placeholder="Twitter"
                                            label="**"
                                            {...formEditOrganisasiAfiliatif.getInputProps("data.twitter")}
                                        />
                                        <Select
                                            data={[
                                                { value: "islam", label: "Islam" },
                                                { value: "Protestan", label: "Protestan" },
                                                { value: "Katolik", label: "Katolik" },
                                                { value: "Hindu", label: "Hindu" },
                                                { value: "Buddha", label: "Buddha" },
                                                { value: "Khonghucu", label: "Khonghucu" },
                                            ]}
                                            radius={"md"}
                                            mt={10}
                                            placeholder="Agama"
                                            label="**"
                                            {...formEditOrganisasiAfiliatif.getInputProps("data.agama")}
                                        />
                                        <TextInput
                                            radius={"md"}
                                            mt={10}
                                            placeholder="Pekerjaan"
                                            label="**"
                                            {...formEditOrganisasiAfiliatif.getInputProps("data.pekerjaan")}
                                        />
                                        <TextInput
                                            radius={"md"}
                                            mt={10}
                                            placeholder="Alamat"
                                            label="**"
                                            {...formEditOrganisasiAfiliatif.getInputProps("data.alamat")}
                                        />
                                        <Select
                                            data={[
                                                { value: "Bali", label: "Bali" },
                                                { value: "Jawa timur", label: "Jawa Timur" },
                                            ]}
                                            radius={"md"}
                                            mt={10}
                                            placeholder="Provinsi"
                                            label="**"
                                            {...formEditOrganisasiAfiliatif.getInputProps("data.provinsi")}
                                        />
                                        <Select
                                            data={[
                                                { value: "Banyuwangi", label: "Banyuwangi" },
                                                { value: "Malang", label: "Malang" },
                                            ]}
                                            radius={"md"}
                                            mt={10}
                                            placeholder="Kabupaten / Kota"
                                            label="**"
                                            {...formEditOrganisasiAfiliatif.getInputProps("data.kabkot")}
                                        />
                                        <Select
                                            data={[
                                                { value: "Geteng", label: "Genteng" },
                                                { value: "Glenmore", label: "Glenmore" },
                                            ]}
                                            radius={"md"}
                                            mt={10}
                                            placeholder="Kecamatan"
                                            label="**"
                                            {...formEditOrganisasiAfiliatif.getInputProps("data.kecamatan")}
                                        />
                                        <TextInput
                                            radius={"md"}
                                            mt={10}
                                            placeholder="Desa / Cabang"
                                            label="**"
                                            {...formEditOrganisasiAfiliatif.getInputProps("data.desa")}
                                        />
                                        <TextInput
                                            radius={"md"}
                                            mt={10}
                                            placeholder="RT - __, RW - __"
                                            label="**"
                                            {...formEditOrganisasiAfiliatif.getInputProps("data.rtrw")}
                                        />
                                    </Flex>
                                </Box>
                            </Paper>
                        </Box>
                        <Box>
                            <Paper bg={COLOR.abuabu} p={20}>
                                <Flex direction={"column"}>
                                    <Text fz={20} fw={"bold"}>
                                        Keanggotaan Organisasi Afiliatif
                                    </Text>
                                    <Text fz={10}>
                                        <Text span c={"red"}>
                                            **
                                        </Text>{" "}
                                        Wajib diisi
                                    </Text>
                                </Flex>
                                <Box>
                                    <Flex direction={"column"}>
                                        <Select
                                            label="**"
                                            placeholder="Pilih Organisasi Afiliatif"
                                            nothingFound="No options"
                                            data={organisasiAfiliatif}
                                            {...formEditOrganisasiAfiliatif.getInputProps("data.organisasiAfiliatif")}
                                        />
                                    </Flex>
                                </Box>
                            </Paper>
                        </Box>
                    </SimpleGrid>
                </Box>
            </Box>
        </>
    );
};

export default EditOrganisasiAfiliatifV2;
