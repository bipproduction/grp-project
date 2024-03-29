import {
  ActionIcon,
  Avatar,
  Box,
  Burger,
  Button,
  Center,
  Container,
  Flex,
  Grid,
  Group,
  Header,
  Menu,
  Text,
  ThemeIcon,
  TypographyStylesProvider,
} from "@mantine/core";
import React from "react";
import COLOR from "../../../fun/WARNA";
import { AiFillLayout, AiFillSetting } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import Content from "./Content";
import Kegiatan from "./Kegiatan";
import ContactUs from "./Contact";
import { sUser } from "@/xg_state.ts/g_selected_page";
import { Router } from "next/router";

const HomeHeader = () => {
  
  const onLogOut = () => {
    localStorage.removeItem('user')
    sUser.value = {}
  }
  return (
    <Box>
      <Header height={70} bg={COLOR.coklat}>
        <Group position="apart" sx={{ height: "100%" }}>
          <Flex
            justify="flex-start"
            align="flex-start"
            direction="column"
            wrap="wrap"
            pl={20}
          >
            <Text fz={25} color="white">
              GARUDA
            </Text>
            <Text fz={15} color="white">
              RESOURCE PLANNING
            </Text>
          </Flex>
          <Group sx={{ height: "100%" }} spacing={0}>
            <Button variant="subtle" color="gray.0">
              Home
            </Button>
            <Button variant="subtle" color="gray.0">
              About
            </Button>
            <Button variant="subtle" color="gray.0">
              Blog
            </Button>
            <Button variant="subtle" color="gray.0">
              Contact Us
            </Button>
          </Group>
          <Group pr={20}>
            <Menu>
              <Menu.Target>
                <Group style={{ cursor: "pointer" }}>
                  <Avatar radius="xl" />
                </Group>
              </Menu.Target>
              <Menu.Dropdown p={20}>
                <Text mt={10} fw={700}>
                  {sUser.value?.name}
                </Text>
                <Text mt={5}>{sUser.value?.email}</Text>
                <Center>
                  <Button
                    component="a"
                    href="../../../Home/DashboardUsername"
                    style={{ cursor: "pointer" }}
                    ta={"center"}
                    mt={20}
                    bg={COLOR.orange}
                    color="orange"
                    radius={20}
                  >
                    Lihat Profile
                  </Button>
                </Center>
              </Menu.Dropdown>
            </Menu>
            <ThemeIcon variant="light" color={COLOR.coklat}>
              <AiFillSetting size={40} color="white" />
            </ThemeIcon>
            <ThemeIcon variant="light" color={COLOR.coklat}>
              <Center
                
                style={{ cursor: "pointer" }}
              >
                <FiLogOut size={25} color="white" onClick={onLogOut} />
              </Center>
            </ThemeIcon>
          </Group>
        </Group>
      </Header>
      <Content />
      <Kegiatan />
      <ContactUs />
    </Box>
  );
};

export default HomeHeader;
