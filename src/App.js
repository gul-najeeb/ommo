//scss files
import "./assets/scss/backend.scss";
import "./assets/css/custom.css";
import "tippy.js/dist/tippy.css"; // optional for styling
import { ToastContainer } from "react-toastify";

function App({ children }) {
  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="App">{children}</div>
    </>
  );
}

export default App;
