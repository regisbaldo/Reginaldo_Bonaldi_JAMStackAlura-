import styled from 'styled-components'
import theme from '../../../theme'

const BaseSectionTitle = styled.div`
    width: 295px;
    height: 67px;
    background-color: #8268CA;
    border-radius: ${theme.borderRadius};
    color: #FFFFFF;
    font-weight:bold;
    font-size:20px;
    letter-spacing: 0.25em;
    text-align:center;
    display:flex;
    justify-content:center;
    position:relative;
    left:50%;
    top:-50px;
    transform: translateX(-50%);
`;


export default function SectionTitle(){
    return(
        <BaseSectionTitle>
            <p>PROJETOS</p>
        </BaseSectionTitle>
    )

}