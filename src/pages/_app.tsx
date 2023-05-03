import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { PropsWithChildren } from "react";
import { useShallowEffect } from "@mantine/hooks";
import { sUser } from "@/xg_state.ts/g_selected_page";
import Login from "@/layout/auth/form-login";
import _ from "lodash";
import Register from "@/layout/auth/form-register";
import DashboardV2 from "./v2/dashboard";
import SignIn from "./v2/signin";
import { api } from "@/lib/api-backend";
import SignUp from "./v2/signup";
import FormSignUp from "@/v2/auth/form-signup";

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
    const userId = localStorage.getItem("user_id");
    fetch(api.apiGetOneUser + `?id=${userId}`)
      .then((v) => v.json())
      .then((v) => (sUser.value = v));
  }, []);
  if (sUser.value == undefined) return <>{JSON.stringify(sUser.value)} </>;
  if (_.isEmpty(sUser.value))
    return (
      <>
        {<SignUp/>}
      </>
    );
  return <>{children}</>;
};
