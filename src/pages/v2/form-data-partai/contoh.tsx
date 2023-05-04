import {
  createStyles,

  rem,
} from '@mantine/core';
import { AiOutlinePlusCircle } from "react-icons/ai";
import COLOR from '../../../../fun/WARNA';


const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: rem(764),
    backgroundColor: COLOR.hitam,
  },
}));

const FaqWithBg = () => {
  const { classes } = useStyles();
  return (
      <div className={classes.wrapper}>

      </div>
  );
}
export default FaqWithBg
