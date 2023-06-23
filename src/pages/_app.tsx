import { AppProps } from "next/app";
import Head from "next/head";
import {
  LoadingOverlay,
  MantineProvider,
  Modal,
  Stack,
  Title,
} from "@mantine/core";
import React, { PropsWithChildren, useState } from "react";
import { useDisclosure, useShallowEffect } from "@mantine/hooks";
import Login from "@/layout/auth/form-login";
import _ from "lodash";
import Register from "@/layout/auth/form-register";
import DashboardV2 from "./v2/dashboard";
import SignIn from "./v2/signin";
import { api } from "@/lib/api-backend";
import SignUp from "./v2/signup";
import FormSignUp from "@/v2/auth/form-signup";
import { Modak } from "next/font/google";
import { sUser } from "@/s_state/s_user";
import { useRouter } from "next/router";
import SeederEnd from "./seeder";
import { useAtom } from "jotai";
import { val_loading } from "@/xg_state.ts/val_loading";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>GRP</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "light",
        }}
      >
        <LoadingProvicer>
          <DevSeeder>
            <Authrovider>
              <Component {...pageProps} />
            </Authrovider>
          </DevSeeder>
        </LoadingProvicer>
      </MantineProvider>
    </>
  );
}

function LoadingProvicer({ children }: { children: React.ReactNode }) {
  const [isLoading, setLoading] = useAtom(val_loading);
  return (
    <>
      {children}
      <LoadingOverlay
        // h={"100vh"}
        maw={"100%"}
        visible={isLoading}
        overlayBlur={2}
        transitionDuration={0}
        overlayOpacity={0.3}
      />
    </>
  );
}

const Authrovider = ({ children }: PropsWithChildren) => {
  const [isSignup, setIsSignup] = useState(false);

  useShallowEffect(() => {
    const user = localStorage.getItem("user_id");
    //console.table(user)
    if (!user) {
      sUser.value = [];
    } else {
      //sUser.value = JSON.parse(user)
      fetch(api.apiGetOneUser + `?id=${user}`)
        .then((v) => v.json())
        .then((v) => (sUser.value = v));
      //sUser.value = user
    }
  }, []);

  if (sUser.value == undefined) return <></>;
  if (_.isEmpty(sUser.value))
    return (
      <Stack>
        {isSignup ? (
          <SignUp />
        ) : (
          <SignIn
            onSignUp={() => {
              setIsSignup(true);
            }}
          />
        )}
      </Stack>
    );

  return <>{children}</>;
};

const DevSeeder = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const dev = router.query.dev;

  if (router.query.dev == undefined) router.query.dev = "false";
  if (dev == "true") return <SeederEnd />;

  return <>{children}</>;
};
