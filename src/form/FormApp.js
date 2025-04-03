import "./form.css"

export default function FormApp() {
    return(
        <div className="form__box">
            <form action="#" className="form__app">
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
                    <input type="passconfir" id="passconfir" placeholder="confirmar contraseña" className="content__area" />
                </div>
                <div className="btn__send">
                    <button className="send" type="submit">crear cuenta</button>
                </div>
            </form>
        </div>
    )
}
