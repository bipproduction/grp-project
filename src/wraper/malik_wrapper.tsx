import { AppShell, Title } from "@mantine/core";
import { PropsWithChildren } from "react";

export function MalikWrapper({ children }: PropsWithChildren) {
    return <>
        <AppShell header={<Title>Ini Adalah Headernya</Title>}>
            <Provider>
                {children}
            </Provider>
        </AppShell>
    </>
}

function Provider({ children }: PropsWithChildren) {
    if (false) return <Title>Login Dulu</Title>
    return <>
        {children}
    </>
}