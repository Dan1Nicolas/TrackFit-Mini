import { MotivationalMessage } from "./components/MotivationalMessage"
import Welcome from "./components/welcome"
import { ExerciseList } from "./components/ExerciseList"

function App() {
  return (
    <>
      <Welcome/>
      <ExerciseList />
      <footer style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "20px",
          backgroundColor: "grey",
          padding: "20px"
        }}>

          <MotivationalMessage
            message="Seja natural !"
            author="Zeka Ramos"
        />

        <MotivationalMessage
          message="O corpo alcança o que a mente acredita !"
          author="Internet"
        />

        <MotivationalMessage
          message="No pain, no gain !"
          author="Intenet"
        />
      </footer>
    </>
  )
}

export default App