import styled from 'styled-components'
import SectionTitle from '../SectionTitle'
import { BaseWrapperProjetos, WrapperProjetosBody } from '../Projetos/WrapperProjetos'
import Card from '../Card'
import { Grid } from '../../foundation/layout/Grid';


export default function Projetos({ children }) {
    return (
        <BaseWrapperProjetos
            marginRight={{
                xs: '0px',
                md: '145px',
            }}
            marginLeft={{
                xs: '0px',
                md: '145px',
            }}
        >
            <SectionTitle>
            </SectionTitle>

            <Grid.Container>
                <Grid.Row>
                    <Grid.Col
                        offset={{ xs: 0, md: 2 }}
                        value={{ xs: 12, md: 10 }}
                        display="flex"
                        alignItems="flex-start"
                        justifyContent="center"
                        flexDirection="row"
                        paddingTop={{ xs: 0, md: 0 }}
                        paddingBottom={{ xs: 0, md: 0 }}

                    >
                        <Card destaque="true" titulo="Projeto em destaque" texto='Lorem Ipsum is simply dummy text of the printing and typesetting industry.  versions of Lorem Ipsum.' />
                    </Grid.Col>
                    <Grid.Col
                        offset={{ xs: 0, md: 0 }}
                        value={{ xs: 12, md: 4 }}
                        display="flex"
                        alignItems="flex-start"
                        justifyContent="center"
                        flexDirection="row"
                        paddingTop={{ xs: 0, md: 0 }}
                        paddingBottom={{ xs: 0, md: 0 }}

                    >

                        <Card destaque="true" titulo="Nome do Projeto" />
                    </Grid.Col>
                    <Grid.Col
                        offset={{ xs: 0, md: 0 }}
                        value={{ xs: 12, md: 4 }}
                        display="flex"
                        alignItems="flex-start"
                        justifyContent="center"
                        flexDirection="row"
                        paddingTop={{ xs: 0, md: 0 }}
                        paddingBottom={{ xs: 0, md: 0 }}

                    >

                        <Card destaque="true" titulo="Nome do Projeto" />
                    </Grid.Col>
                    <Grid.Col
                        offset={{ xs: 0, md: 0 }}
                        value={{ xs: 12, md: 4 }}
                        display="flex"
                        alignItems="flex-start"
                        justifyContent="center"
                        flexDirection="row"
                        paddingTop={{ xs: 0, md: 0 }}
                        paddingBottom={{ xs: 0, md: 0 }}

                    >

                        <Card destaque="true" titulo="Nome do Projeto" />
                    </Grid.Col>
                </Grid.Row>

            </Grid.Container>



        </BaseWrapperProjetos>
    )

}

