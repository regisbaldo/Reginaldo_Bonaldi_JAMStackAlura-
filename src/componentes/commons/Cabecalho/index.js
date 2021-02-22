import {CabecalhoWrapper} from '../Cabecalho/CabecalhoWrapper'

export default function Cabecalho(){
    return(
        <CabecalhoWrapper>
            <CabecalhoWrapper.Logo>
                {'<RB/>'}
            </CabecalhoWrapper.Logo>
            <CabecalhoWrapper.Navbar>
                <li>Sobre Mim</li>
                <li>Contato</li>
            </CabecalhoWrapper.Navbar>
        </CabecalhoWrapper>

    );


}