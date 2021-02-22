import styled, {css} from 'styled-components'

export const CabecalhoWrapper = styled.div`
    font-family: 'Nunito Sans', sans-serif;
    background-color: #332261;
    height:63px;
    padding-left:28px;
    padding-right:28px;
    display:flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
`;


CabecalhoWrapper.Logo = styled.div`
    color:#FFFFFF;
    font-size:18;
    font-weight:bold;
`;
CabecalhoWrapper.Navbar = styled.nav`
    width:146px;
    list-style: none;
    color:#FFFFFF;
    font-size:18;
    font-weight:bold;
    display:flex;
    align-items: center;
    justify-content: space-between;

`;