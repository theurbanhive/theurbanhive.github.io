import { Container } from "@mantine/core";
import Audience from "./audience";
import Contact from "./contact";
import Features from "./features";

export default () => {
  return (
    <Container size="lg" py="xl">
      <Features />
      <Audience />
      <Contact />
    </Container>
  );
};
