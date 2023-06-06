import { _dataLogUser, _dataSearchLogUser, _dataSearchTglLogUSer, _loadDataLogUser } from "@/load_data/log_user/load_log_user";
import { Box, Button, Center, Grid, ScrollArea, Table, Text, TextInput, createStyles, rem } from "@mantine/core";
import { useShallowEffect } from "@mantine/hooks";
import { useAtom } from "jotai";
import { useState } from "react";
import moment from "moment";
import 'moment/locale/id'
import { AiOutlineSearch } from "react-icons/ai";
import { DateInput } from "@mantine/dates";
moment.locale('id')


const useStyles = createStyles((theme) => ({
    header: {
        position: 'sticky',
        top: 0,
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
        transition: 'box-shadow 150ms ease',

        '&::after': {
            content: '""',
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            borderBottom: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[2]
                }`,
        },
    },

    scrolled: {
        boxShadow: theme.shadows.sm,
    },
}));


const LogUserDev = () => {
    const { classes, cx } = useStyles();
    const [scrolled, setScrolled] = useState(false);
    const [inputSearch, setInputSearch] = useAtom(_dataSearchLogUser);
    const [inputSearchTgl, setInputSearchTgl] = useAtom(_dataSearchTglLogUSer);
    const [listDataNew, setListDataNew] = useAtom(_dataLogUser);
    const [typeSearch, setTypeSearch] = useState("");
    const [typeSearchTgl, setTypeSearchTgl] = useState("");

    useShallowEffect(() => {
        _loadDataLogUser(inputSearch, inputSearchTgl, setListDataNew);
    }, []);

    const rows = listDataNew.map((e, i) => (
        <tr key={i}>
            <td>{moment(e.createdAt).format('llll')}</td>
            <td>{e.username}</td>
            <td>{e.activity}</td>
            <td>{e.deskripsi}</td>
        </tr>
    ));

    return (
        <>
            <Box>
                <Center m={"lg"}>
                    <Text fw={"bold"} fz={30}>
                        Log User
                    </Text>
                </Center>
            </Box>
            <Box p={20}>
                <Grid>
                    <Grid.Col md={4} lg={4}>
                        <DateInput
                            mt={5}
                            placeholder="Tanggal"
                            radius={"md"}
                            onChange={(val)=>{
                                setTypeSearchTgl(moment(val).format("YYYY-MM-DD"))
                            }}
                        />
                    </Grid.Col>
                    <Grid.Col md={6} lg={6}>
                        <TextInput
                            mt={5}
                            icon={<AiOutlineSearch size={20} />}
                            placeholder="Cari berdasarkan username"
                            radius={"md"}
                            onChange={(val)=>{
                                setTypeSearch(val.target.value)
                            }}
                        />
                    </Grid.Col>
                    <Grid.Col md={2} lg={2}>
                        <Button
                            ta={"center"}
                            fullWidth
                            radius={"md"}
                            onClick={()=>{
                                setInputSearch(typeSearch);
                                setInputSearchTgl(typeSearchTgl);
                                _loadDataLogUser(typeSearch, typeSearchTgl, setListDataNew);
                            }}
                        >
                            Cari
                        </Button>
                    </Grid.Col>
                </Grid>
            </Box>
            <ScrollArea onScrollPositionChange={({ y }) => setScrolled(y !== 0)}>
                <Table p="lg" withBorder withColumnBorders>
                    <thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
                        <tr>
                            <th>Tanggal</th>
                            <th>Username</th>
                            <th>Jenis Aktivitas</th>
                            <th>Deskripsi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </Table>
            </ScrollArea>
        </>
    )
};

export default LogUserDev;