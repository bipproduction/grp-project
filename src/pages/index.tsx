import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import LayoutDefault from './login'
import Dashboard from './dashboard'
import Login from '@/layout/auth/form-login'
import apiSeederAgama from './api/seeder/sumber-daya-partai/api-seeder-agama'
import { Avatar, Flex, Group, Menu, Text } from '@mantine/core'
// import { sUser } from '@/xg_state.ts/g_selected_page'
import FormDataDiri from '@/layout/form_data_diri/form_data_diri'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // const onLogOut = () => {
  //   localStorage.removeItem('user')
  //   sUser.value = {}
  // }
  return (
    <>
    {/* <FormDataDiri/> */}
    <LayoutDefault/>
    {/* <Flex
        direction={{ base: 'column', sm: 'row' }}
        gap={{ base: 'sm', sm: 'lg' }}
        justify={{ sm: 'flex-end' }}
      >
        <Group p={20}>
          <Menu>
            <Menu.Target>
              <Group style={{cursor: "pointer"}}>

                <Avatar radius="xl" />
                <Text fw={700}>{sUser.value?.name}</Text>
              </Group> */}
              {/* <Button variant='subtle'></Button> */}
            {/* </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item onClick={onLogOut} color='red'>Logout</Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Flex> */}
    </>
  )
}
