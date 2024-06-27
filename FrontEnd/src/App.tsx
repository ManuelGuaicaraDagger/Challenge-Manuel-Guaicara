import { Typography } from "@mui/material"
import PokemonList from "./components/pokemonList/PokemonList"


function App() {

  return (
    <>
    <Typography variant="h1" align="center">Battle of Pokemon</Typography>
     <PokemonList />
     {/* <PreviousBattles /> */}
    </>
  )
}

export default App
