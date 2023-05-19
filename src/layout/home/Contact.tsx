import {
  TextInput,
  Textarea,
  SimpleGrid,
  Group,
  Title,
  Button,
  Box,
  Image,
  Center,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import COLOR from "../../../fun/WARNA";

const ContactUs = () => {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validate: {
      name: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
      subject: (value) => value.trim().length === 0,
    },
  });

  return (
    <>
      <Box p={10} pt={30}>
        <Box
          p={20}
          sx={{
            borderRadius: 10,
            border: "1px solid red",
          }}
        >
          <SimpleGrid
            p={10}
            cols={2}
            breakpoints={[{ maxWidth: "sm", cols: 1 }]}
          >
            <Image radius={20} src={"/../gerindra.png"} alt="a"/>
            <Box>
              <form onSubmit={form.onSubmit(() => {})}>
                <Title
                  order={2}
                  size="h1"
                  sx={(theme) => ({
                    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
                  })}
                  weight={900}
                  align="center"
                  color={COLOR.coklat}
                >
                  Get in touch
                </Title>

                <SimpleGrid
                  cols={2}
                  mt="xl"
                  breakpoints={[{ maxWidth: "sm", cols: 1 }]}
                >
                  <TextInput
                    label="Name"
                    placeholder="Your name"
                    name="name"
                    variant="filled"
                    {...form.getInputProps("name")}
                  />
                  <TextInput
                    label="Email"
                    placeholder="Your email"
                    name="email"
                    variant="filled"
                    {...form.getInputProps("email")}
                  />
                </SimpleGrid>

                <TextInput
                  label="Subject"
                  placeholder="Subject"
                  mt="md"
                  name="subject"
                  variant="filled"
                  {...form.getInputProps("subject")}
                />
                <Textarea
                  mt="md"
                  label="Message"
                  placeholder="Your message"
                  maxRows={10}
                  minRows={5}
                  autosize
                  name="message"
                  variant="filled"
                  {...form.getInputProps("message")}
                />

                <Group position="center" mt="xl">
                  <Button
                    type="submit"
                    size="md"
                    bg={COLOR.coklat}
                    color="orange.9"
                  >
                    Send message
                  </Button>
                </Group>
              </form>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
};
export default ContactUs;
