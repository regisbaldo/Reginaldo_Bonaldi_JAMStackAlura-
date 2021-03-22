import {HeaderWrapper} from '../Header/HeaderWrapper'

export default function Header(){
    return(
        <HeaderWrapper>
            <HeaderWrapper.Brand>
                {'<RB/>'}
            </HeaderWrapper.Brand>
            <HeaderWrapper.Navbar>
                <li>Sobre Mim</li>
                <li>Contato</li>
            </HeaderWrapper.Navbar>
        </HeaderWrapper>

    );


}