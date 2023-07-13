import { Text } from "@mantine/core";
import Countdown from "react-countdown";
import { ViewPemiluV2 } from "./view_pemilu";

const PemiluV2 = () => {
  const Completionist = () => <span>Time to Waiting!</span>;
  return (
    <>
      {/* <Countdown date={Date.now() + 1000000000}>
        <Completionist />
      </Countdown>
      <Text fw={"bold"}>COOMING SOON !!</Text> */}
      <ViewPemiluV2/>
    </>
  );
};

export default PemiluV2;
