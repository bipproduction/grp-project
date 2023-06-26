import { AppProps } from "next/app";
import Head from "next/head";
import {
  LoadingOverlay,
  MantineProvider,
  Modal,
  Stack,
  Title,
  DEFAULT_THEME
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
  const customLoader = (
    <svg
      width="54"
      height="54"
      viewBox="0 0 38 38"
      stroke={DEFAULT_THEME.colors.orange[9]}
    >
      <g fill="none" fillRule="evenodd">
        <g transform="translate(1 1)" strokeWidth="2">
          <circle strokeOpacity=".5" cx="18" cy="18" r="18" />
          <path d="M36 18c0-9.94-8.06-18-18-18">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 18 18"
              to="360 18 18"
              dur="1s"
              repeatCount="indefinite"
            />
          </path>
        </g>
      </g>
    </svg>
  );
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
        loader={customLoader}
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
