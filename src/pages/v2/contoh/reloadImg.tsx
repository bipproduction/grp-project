import { _dataImagesData } from "@/load_data/media_social/load_media_social";
import { Button, Text, Group, Image } from "@mantine/core";
import { useForceUpdate, randomId } from "@mantine/hooks";
import { useAtom } from "jotai";




const Demo = () => {
  const forceUpdate = useForceUpdate();
  const [image, setImage] = useAtom(_dataImagesData);

  return (
    <Group position="center">
      <Image
        width={170}
        height={180}
        radius={5}
        src={`/api/form-data-diri/data-diri-get-gambar?id=${image?.id}`}
        alt="gambar"
      />
      <Text>{randomId()}</Text>
      <Button onClick={forceUpdate}>Force update</Button>
    </Group>
  );
};
export default Demo;
