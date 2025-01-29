import { Category, Colors, Navigation, Price, Products, Recommended, Sidebar } from "./components"
import "./app.css"
const App = () => {
  return (
    <div className="container-app">
      <Sidebar />
      <div className="main-content">
        <Navigation />
        <Recommended />
        <Products />
      </div>

    </div>
  )
}

export default App