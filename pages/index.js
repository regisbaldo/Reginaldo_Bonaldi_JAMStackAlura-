import Cabecalho from '../src/componentes/commons/Cabecalho'
import Capa from '../src/componentes/commons/Capa'
import Card from '../src/componentes/commons/Card';
import Footer from '../src/componentes/commons/Footer'
import Projetos from '../src/componentes/commons/Projetos'
import { Box } from '../src/componentes/foundation/Box';

export default function Home() {
  return (
    <Box
    flex="1"
    display="flex"
    flexWrap="wrap"
    flexDirection="column"
    justifyContent="space-between"
 
    >
      <Cabecalho></Cabecalho>
      <Capa></Capa>
      <Projetos>
      </Projetos>
      <Footer></Footer>
    </Box>
    
  )
}
