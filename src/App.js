import "./App.css"
import Choose_Template from "./Sections/Choose_Template.js"
import Integration from "./Sections/Integration/index.js"
import Retail from "./Sections/Retail/index.js"
function App() {
  return (
    <div className="w-[1920px] m-auto">
      <Integration />
      <Retail />
      {/* can't complete this task */}
      <Choose_Template />
    </div>
  )
}

export default App
