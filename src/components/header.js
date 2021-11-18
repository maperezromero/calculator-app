export const Header = () =>{

    const handleTheme = (e) => {
        const theme = e.target.valueAsNumber;
        if(theme === 0) {
            document.body.removeAttribute('class');
            document.body.classList.toggle("theme-1")
        } else if (theme === 1){
            document.body.removeAttribute('class');
            document.body.classList.toggle("theme-2");
        } else{
            document.body.removeAttribute('class');
            document.body.classList.toggle("theme-3");
        }
        
    }

    return(
        <span className = "header">
            <span className = "title">
                calc
            </span>
            <span className = "theme-container">
                <span className = "text-theme">
                    THEME
                </span>
                <span className = "theme-selector">
                    <span className = "text-theme">
                        1
                    </span>
                    <span className = "text-theme">
                        2
                    </span>
                    <span className = "text-theme">
                        3
                    </span>
                    <div className="switch-theme">
                        <input type="range" min="0" max="2"  className="slider" id="myRange" defaultValue="0" onChange={(e)=>handleTheme(e)}/>
                    </div> 

                </span>

            </span>
        </span>
    )
}