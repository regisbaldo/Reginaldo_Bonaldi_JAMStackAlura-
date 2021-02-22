import styled from 'styled-components'
import { Text } from '../../foundation/Text';
import { propToStyle } from '../../../theme/utils/propToStyle';

const BaseCapa = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
flex-wrap:wrap;
text-align:center;
height:572px;
${propToStyle('backgroundImage')}

background-repeat:no-repeat;
background-position:center;
`;
const TextCapa = styled.div`
width:300px;

`;


export default function Capa(){
    return (
        <BaseCapa
        backgroundImage={{
            xs: 'url(/images/ImageCapaM.svg)',
            md: 'url(/images/ImageCapaD.svg)',
        }}
        >
        <TextCapa>
            <Text as="span" variant="subTitle">
                    PORTFOLIO
                </Text>
            <Text as="p" variant="title">
                Reginaldo Bonaldi
            </Text>
        </TextCapa>
        </BaseCapa>
    ) 
}   