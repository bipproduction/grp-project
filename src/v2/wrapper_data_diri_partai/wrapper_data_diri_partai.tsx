import { AppShell, Box } from '@mantine/core';
import React, { PropsWithChildren } from 'react';

function WrapperDataDiriPartai({children}: PropsWithChildren) {
  return (
    <Box>{children}</Box>
  );
}

export default WrapperDataDiriPartai;
