import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { PropsWithChildren } from "react";
import { useShallowEffect } from "@mantine/hooks";
import { sUser } from "@/xg_state.ts/g_selected_page";
import Login from "@/layout/auth/form-login";
import _ from "lodash";
import Register from "@/layout/auth/form-register";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Page title</title>
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
        <Authrovider>
          <Component {...pageProps} />
        </Authrovider>
      </MantineProvider>
    </>
  );
}

const Authrovider = ({ children }: PropsWithChildren) => {
  useShallowEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      sUser.value = {};
    } else {
      sUser.value = JSON.parse(user);
    }
  }, []);
  if (sUser.value == null) return <></>;
  if (_.isEmpty(sUser.value))
    return (
      <>
        <Login/>
      </>
    );
  return <>{children}</>;
};
