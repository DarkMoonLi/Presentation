import { useState } from "react"
import { addNewImage, /*setImage*/ } from "../../store/actionCreators/slideElementActionCreators"
import store from "../../store/store"

type modalWindow = {
    setOpen: (setOpen: boolean) => void
}

export const ModalWindow: React.FC<modalWindow> = ({setOpen}) => {

    //const [url, setUrl] = useState

    return (
        <div
            style={{
                position: 'absolute',
                left: '50%',
                top: '500px'
            }}
        >
            <input id="loadWindow"></input>
            <input type='submit' 
                onClick={() => {
                    const inp = document.getElementById('loadWindow')
                    setOpen(false);
                    if (inp != null) {
                        console.log(inp.innerText)
                    }
                }}
                value="Загрузить"
            ></input>
            {/*<button 
                onClick={() => {
                    const inp = document.getElementById('loadWindow');
                    inp?.click();
                    console.log(inp?);
                    setOpen(false);
                    //store.dispatch(addNewImage(inp.value))
                }}
            >{"Загрузить"}</button>*/}
        </div>
    )
}