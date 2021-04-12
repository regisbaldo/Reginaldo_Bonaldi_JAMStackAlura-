import styled from 'styled-components';

export const HeaderWrapper = styled.div`
    background-color: #FFFFFF;
    height:67px;
    padding-left:20px;
    padding-right:20px;
    display:flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
`;

HeaderWrapper.BrandWrapper = styled.div`
    height:80%;
   
`;

HeaderWrapper.BrandImage = styled.img`
    height:100%;
    color:#FFFFFF;
    border-radius: 50%;
    border:5px solid #39CC9B;
    font-size:18;
    font-weight:bold;
`;
HeaderWrapper.Navbar = styled.nav`
    list-style: none;
    
`;
