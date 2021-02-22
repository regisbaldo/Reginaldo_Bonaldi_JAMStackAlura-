import styled, { css } from 'styled-components';
import { Text } from '../../foundation/Text';
import { Star } from './star';
import { propToStyle } from '../../../theme/utils/propToStyle';
import { Grid } from '../../foundation/layout/Grid';


export default function Card(props) {

    return (
        <BaseCard {...props} flexDirection={{ xs: "column", md: "row" }} >
            <Grid.Container>
                <Grid.Row>
                    <Grid.Col
                        offset={{ xs: 0, md: 0 }}
                        value={{ xs: 12, md: 7 }}
                        display="flex"
                        alignItems="flex-start"
                        justifyContent="center"
                        flexDirection="row"
                        paddingTop={{ xs: 0, md: 0 }}
                        paddingBottom={{ xs: 0, md: 0 }}

                        >
                        <CardImagem src="/images/instalura.webp">

                        </CardImagem>
                    </Grid.Col>
                    <Grid.Col
                        offset={{ xs: 0, md: 0 }}
                        value={{ xs: 12, md: 5 }}
                        display="flex"
                        alignItems="flex-start"
                        justifyContent="center"
                        flexDirection="row"
                        paddingTop={{ xs: 0, md: 0 }}
                        paddingBottom={{ xs: 0, md: 0 }}
                        
                        >
                        <TextArea>
                            <TitleCard >
                                <Text as="p" variant="titleCard">{props.titulo}</Text>
                            </TitleCard>
                            <DescriptionCard >
                                <Text as="p" variant="titleCard">{props.texto}</Text>
                            </DescriptionCard>
                        </TextArea>
                    </Grid.Col>
                </Grid.Row>
            </Grid.Container>


        </BaseCard>

    )
}

const BaseCard = styled.div`
display:flex;
flex-direction:column;
justify-content:start;
align-items:center;
padding-bottom:40px;
flex:1;
    ${function (props) {
        if (props.destaque == 'true') {
            console.log(props.destaque);
            return propToStyle('flexDirection');

        }
    }}

`;

const TitleCard = styled.div`
font-size:20px;
font-weight:bold;
text-align:center;
`;

const DescriptionCard = styled.div`
font-size:20px;
font-weight:bold;
text-align:start;
`;
const TextArea = styled.div`
height:100%;

display:flex;
flex-direction:column;
justify-content:start;

`;

export const CardImagem = styled.img`
    width:100%;
    max-width: 500px;
`;

Card.defaultProps = {
    destaque: false,
    titulo: '',
};