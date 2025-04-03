import "./form.css"

export default function FormApp() {

    function validated(event){
        event.preventDefault();

        //variables de datos de entrada
        let email = document.getElementById("email");
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        let password = document.getElementById("password");
        let passconfir = document.getElementById("passconfir");

        if (email.value === "") {
            console.log("el campo esta vacio")
        } else if(!emailRegex.test(email.value)) {
            console.log("el email es incorrecto")
        }
        if (password.value === ""){
            console.log("el campo esta vacio")
        }
        if (passconfir.value === ""){
            console.log("el campo esta vacio")
        }
        
    }

    return(
        <div className="form__box">
            <form action="#" onSubmit={validated} className="form__app">
                <div className="label__form">
                    <span className="text__area">correo electronico</span>
                    <input type="email" id="email" placeholder="correo electronico" className="content__area" />
                </div>
                <div className="label__form">
                    <span className="text__area">contraseña</span>
                    <input type="password" id="password" placeholder="contraseña" className="content__area" />
                </div>
                <div className="label__form">
                    <span className="text__area">confirmar contraseña</span>
                    <input type="password" id="passconfir" placeholder="confirmar contraseña" className="content__area" />
                </div>
                <div className="btn__send">
                    <button type="submit"className="send">crear cuenta</button>
                </div>
            </form>
        </div>
    )
}
