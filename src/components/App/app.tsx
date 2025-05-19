import Welcome from "../../pages/welcome/welcome";

type Errors = {
    errorCount: number,
}

function App({errorCount}: Errors) {
    return(
        <Welcome errorCount={errorCount}/>
    );
}

export default App;