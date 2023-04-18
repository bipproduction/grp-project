import { Box, Group, Image, Text, TypographyStylesProvider } from '@mantine/core'
import React from 'react'

const Content = () => {
  return (
    <>
      <Group pt={20} p={5}>
        <Image src="/../gerindra.png" alt='a'/>
      </Group>
      <Box p={10} pt={30} pb={40}>
        <Text fw={700} fz={20}>GARUDA RESOURCE PLANNING</Text>
        <Box sx={{
          border: "1px solid red",
          borderRadius: 10,
        }} p={10}>
          <TypographyStylesProvider>
            Terwujudnya tatanan masyarakat Indonesia yang merdeka, berdaulat, bersatu, demokratis, adil dan makmur serta beradab dan berketuhanan  yang berlandaskan Pancasila, sebagaimana termaktub di dalam Pembukaan UUD 1945, merupakan cita-cita bersama dari seluruh rakyat Indonesia. Untuk mewujudkan cita-cita tersebut, hanya dapat dicapai dengan mempertahankan persatuan dan kesatuan bangsa, dengan landasan Pancasila.

            Budaya bangsa dan wawasan kebangsaan harus menjadi modal utama untuk mengeratkan persatuan dan kesatuan. Sehingga perbedaan di antara kita justru menjadi rahmat dan menjadi kekuatan bangsa Indonesia.

            Namun demikian, mayoritas rakyat masih berkubang dalam penderitaan, sistem politik kita tak kunjung mampu merumuskan dan melaksanakan perekonomian Nasional untuk mengangkat harkat dan martabat mayoritas rakyat Indonesia dari kemelaratan.

            Bahkan dalam upaya membangun bangsa, dalam perjalanannya kita telah terjebak sistem ekonomi pasar. Sistem ekonomi pasar telah memporak-porandakan perekonomian bangsa, yang menyebabkan situasi yang sulit bagi kehidupan rakyat dan bangsa. Hal itu berakibat menggelembungnya jumlah rakyat yang miskin dan menganggur. Pada situasi demikian, tidak ada pilihan lain bagi bangsa ini kecuali harus menciptakan suasana kemandirian bangsa dengan membangun sistem ekonomi kerakyatan.
          </TypographyStylesProvider>
        </Box>
      </Box>
    </>
  )
}

export default Content