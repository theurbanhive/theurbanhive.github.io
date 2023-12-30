import { Box, Container, rem } from "@mantine/core";
import Email from "./email";
import { Faq } from "./faq";
import Team from "./team";

export default function Contact() {
  return (
    <>
      <Container>
        <Team />
        <Box mt={rem(64)} />
      </Container>
      <Email />
      <Container>
        <Box mt={rem(64)} />
        <Faq />
      </Container>
    </>
  );
}
