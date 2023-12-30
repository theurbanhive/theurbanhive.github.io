import Section from "@/components/section";
import { SimpleGrid, rem } from "@mantine/core";
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";
import User from "./user";

export default function Team() {
  return (
    <Section
      id="team"
      header="Our team"
      title="Meet our founders"
      description="Each of us has a unique story and wealth of experience in different
        fields. Together we have built a product that will help people be
        more productive and focused on what really matters."
    >
      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl">
        <User
          displayName="I-Miun Liu"
          imageUrl="https://media.licdn.com/dms/image/D5603AQHpQMtNZKZ46w/profile-displayphoto-shrink_200_200/0/1669830795366?e=1709164800&v=beta&t=r86sn0Rr864VO3bX4APz5eCx1oElP92c7IadUP8xuBA"
          position="Product"
          blurb="I’ve been the owner and operator of several cafes, bars, and boba shops over the past 21+yrs. It has stretched me and has allowed me to constantly evolve to meet customer, employee, and business needs."
        >
          <TwitterIcon style={{ width: rem(18), height: rem(18) }} />
          <InstagramIcon style={{ width: rem(18), height: rem(18) }} />
          <Link href="https://www.linkedin.com/in/i-miun-liu/" target="_blank">
            <LinkedinIcon style={{ width: rem(18), height: rem(18) }} />
          </Link>
          <GithubIcon style={{ width: rem(18), height: rem(18) }} />
        </User>

        <User
          displayName="John Taing"
          imageUrl="https://media.licdn.com/dms/image/C4D03AQFYhZYdu1htKQ/profile-displayphoto-shrink_800_800/0/1516276847882?e=1709164800&v=beta&t=v0hwDnqoiNJN7-n063TWMvfpKBJ2ilmgGfUoHmAofo8"
          position="Product"
          blurb="Technical project lead with experience in multiple agile product life cycles. Excels with technical project management, product development, team communications, mobile software development."
        >
          <TwitterIcon style={{ width: rem(18), height: rem(18) }} />
          <InstagramIcon style={{ width: rem(18), height: rem(18) }} />
          <Link href="https://www.linkedin.com/in/trutaing/" target="_blank">
            <LinkedinIcon style={{ width: rem(18), height: rem(18) }} />
          </Link>
          <GithubIcon style={{ width: rem(18), height: rem(18) }} />
        </User>

        <User
          displayName="Amritha Dilip"
          imageUrl="https://media.licdn.com/dms/image/D5603AQFDzaq3hQZpGw/profile-displayphoto-shrink_200_200/0/1675416035584?e=1709164800&v=beta&t=fP6cUGHWXsSR_v1y3NDELI73t3JB7ShZ5jSEicR4_t4"
          position="Engineering"
          blurb="Tech lead with over 10 years of experience in building frameworks and working with high-scale services such as Cortana, Bing, etc. An epistemophile at heart and I thrive in creative & collaborative environments."
        >
          <TwitterIcon style={{ width: rem(18), height: rem(18) }} />
          <InstagramIcon style={{ width: rem(18), height: rem(18) }} />
          <Link
            href="https://www.linkedin.com/in/amritha-dilip/"
            target="_blank"
          >
            <LinkedinIcon style={{ width: rem(18), height: rem(18) }} />
          </Link>
          <GithubIcon style={{ width: rem(18), height: rem(18) }} />
        </User>
      </SimpleGrid>
    </Section>
  );
}
