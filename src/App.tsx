import { Dashboard } from "./components/Dashboard"
import { Header } from "./components/Header"
import data from "../src/assets/data.json"

export const App = () => {
  return (
    <div className="bg-pink-200 min-h-screen box-border flex flex-col p-10">
      <Header></Header>
      <Dashboard data={data} />
    </div>
  )
}
