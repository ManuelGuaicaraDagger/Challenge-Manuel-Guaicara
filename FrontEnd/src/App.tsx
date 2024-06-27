import PokemonList from "./components/pokemonList/PokemonList"
import title from "./assets/images/Battle-of-Pokemon-27-6-2024 (1).png"
import { Grid } from "@mui/material"
import Footer from "./components/footer/Footer"


function App() {

  return (
    <>
    <Grid container justifyContent="center">
    <img src={title} alt="Battle of Pokemon" />
    </Grid>
     <PokemonList />
     <Footer />
    </>
  )
}

export default App
