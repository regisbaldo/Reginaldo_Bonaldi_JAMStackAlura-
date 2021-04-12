import React from 'react';
import Header from '../src/componentes/commons/Header';
import Cover from '../src/componentes/commons/Cover';
import Footer from '../src/componentes/commons/Footer';
import { Box } from '../src/componentes/foundation/Box';
import { Grid } from '../src/componentes/foundation/layout/Grid';
import Section from '../src/componentes/commons/Section';
import Card from '../src/componentes/commons/Card';
import Button from '../src/componentes/commons/Button';

export default function Home() {
  return (
    <Box
      flex="1"
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="space-between"
    >

      <Header />

      <Grid.Container>
        <Grid.Row>
          <Grid.Col
            offset={{ xs: 0, md: 4 }}
            value={{ xs: 12, md: 4 }}
            display="flex"
            alignItems="flex-start"
            justifyContent="center"
            flexDirection="row"
          >
            <Cover />
          </Grid.Col>

        </Grid.Row>
      </Grid.Container>
      <Section alignItems="center">
        <Button type="secondary" text="More about me" />
      </Section>
      <Section name="work" paddingTop="50px">
        <Grid.Container>
          <Grid.Row>
            <Grid.Col
              offset={{ xs: 0, md: 0 }}
              value={{ xs: 12, md: 4 }}
              display="flex"
              alignItems="flex-start"
              justifyContent="center"
              flexDirection="row"
            >
              <Card title="Full-stack Projects" subTitle="FULL PROJECTS" />
            </Grid.Col>
            <Grid.Col
              offset={{ xs: 0, md: 0 }}
              value={{ xs: 12, md: 4 }}
              display="flex"
              alignItems="flex-start"
              justifyContent="center"
              flexDirection="row"
            >
              <Card title="Back-end Projects" subTitle="SYSTEM " />
            </Grid.Col>
            <Grid.Col
              offset={{ xs: 0, md: 0 }}
              value={{ xs: 12, md: 4 }}
              display="flex"
              alignItems="flex-start"
              justifyContent="center"
              flexDirection="row"
            >
              <Card title="Front-end  Projects" subTitle="INTERFACES" />

            </Grid.Col>
            <Grid.Col
              offset={{ xs: 0, md: 4 }}
              value={{ xs: 12, md: 4 }}
              display="flex"
              alignItems="flex-start"
              justifyContent="center"
              flexDirection="row"
            >
              <Card title="Others" />

            </Grid.Col>

          </Grid.Row>
        </Grid.Container>
      </Section>
      <Footer
        alignSelf="center"
      />
    </Box>

  );
}
