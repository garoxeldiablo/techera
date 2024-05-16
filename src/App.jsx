import { BrowserRouter } from "react-router-dom";
import MainApp from "./mainapp";

export default function App(){
    return(
        <BrowserRouter>
            <MainApp/>
        </BrowserRouter>
    )
}