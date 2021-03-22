import Header from '../src/componentes/commons/Header'
import Cover from '../src/componentes/commons/Cover'
import Footer from '../src/componentes/commons/Footer'
import Projects from '../src/componentes/commons/Projects'
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
      <Header></Header>
      <Cover></Cover>
      <Projects>
      </Projects>
      <Footer></Footer>
    </Box>
    
  )
}
