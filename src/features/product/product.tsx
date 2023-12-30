import { Container } from "@mantine/core";
import Audience from "./audience";
import Features from "./features";

export default function Product() {
  return (
    <Container size="lg" py="xl">
      <Features />
      <Audience />
    </Container>
  );
}
