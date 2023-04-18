
import { createStyles, SimpleGrid, Card, Image, Text, Container, AspectRatio, Box } from '@mantine/core';
import { useShallowEffect } from '@mantine/hooks';
import COLOR from '../../../fun/WARNA';

const mockdata = [
    {
        description: "Terwujudnya tatanan masyarakat Indonesia yang merdeka, berdaulat, bersatu, demokratis, adil dan makmur serta beradab dan berketuhanan  yang berlandaskan Pancasila, sebagaimana termaktub di dalam Pembukaan UUD 1945, merupakan cita-cita bersama dari seluruh rakyat Indonesia",
        image: '/../kegiatan.jpeg'
    },
    {
        description: "Terwujudnya tatanan masyarakat Indonesia yang merdeka, berdaulat, bersatu, demokratis, adil dan makmur serta beradab dan berketuhanan  yang berlandaskan Pancasila, sebagaimana termaktub di dalam Pembukaan UUD 1945, merupakan cita-cita bersama dari seluruh rakyat Indonesia",
        image: '/../kegiatan.jpeg'
    },
    {
        description: "Terwujudnya tatanan masyarakat Indonesia yang merdeka, berdaulat, bersatu, demokratis, adil dan makmur serta beradab dan berketuhanan  yang berlandaskan Pancasila, sebagaimana termaktub di dalam Pembukaan UUD 1945, merupakan cita-cita bersama dari seluruh rakyat Indonesia",
        image: '/../kegiatan.jpeg'
    },
    {
        description: "Terwujudnya tatanan masyarakat Indonesia yang merdeka, berdaulat, bersatu, demokratis, adil dan makmur serta beradab dan berketuhanan  yang berlandaskan Pancasila, sebagaimana termaktub di dalam Pembukaan UUD 1945, merupakan cita-cita bersama dari seluruh rakyat Indonesia",
        image: '/../kegiatan.jpeg'
    },
    {
        description: "Terwujudnya tatanan masyarakat Indonesia yang merdeka, berdaulat, bersatu, demokratis, adil dan makmur serta beradab dan berketuhanan  yang berlandaskan Pancasila, sebagaimana termaktub di dalam Pembukaan UUD 1945, merupakan cita-cita bersama dari seluruh rakyat Indonesia",
        image: '/../kegiatan.jpeg'
    },
    {
        description: "Terwujudnya tatanan masyarakat Indonesia yang merdeka, berdaulat, bersatu, demokratis, adil dan makmur serta beradab dan berketuhanan  yang berlandaskan Pancasila, sebagaimana termaktub di dalam Pembukaan UUD 1945, merupakan cita-cita bersama dari seluruh rakyat Indonesia",
        image: '/../kegiatan.jpeg'
    },

];

const useStyles = createStyles((theme) => ({
    card: {
        transition: 'transform 150ms ease, box-shadow 150ms ease',

        '&:hover': {
            transform: 'scale(1.01)',
            boxShadow: theme.shadows.md,
        },
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontWeight: 600,
    },
}));

const Kegiatan = () => {

    const { classes } = useStyles();



    const cards = mockdata.map((article, i) => (
        <Card key={i} p="md" radius="md" sx={{
            backgroundColor: COLOR.coklat
        }} className={classes.card}>
            <AspectRatio ratio={1920 / 1080}>
                <Image src={article.image} radius={10} alt='a' />
            </AspectRatio>
            <Text pt={10} color='white' fz={13} className={classes.title} mt={5}>
                {article.description}
            </Text>
        </Card>
    ));
    return (
        <Box>
            {/* {JSON.stringify(sUser.value)} */}
            <SimpleGrid p={10} cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
                {cards}
            </SimpleGrid>
        </Box>
    );
}
export default Kegiatan