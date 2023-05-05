import { Text } from "@mantine/core";
import Countdown from "react-countdown";

const PemiluV2 = () => {
    const Completionist = () => <span>Time to Waiting!</span>;
  return (
    <>
    
      <Countdown date={Date.now() + 100000000}>
        <Completionist/>

      </Countdown>
      <Text fw={"bold"}>COOMING SOON !!</Text>
    </>
  );
};

export default PemiluV2;
