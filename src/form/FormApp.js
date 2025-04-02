import "./form.css"

export default function FormApp() {
    return(
        <div className="form__box">
            <form action="#" className="form__app">
                <div className="label__form">
                    <span className="text__area">email</span>
                    <input type="email" id="email" placeholder="enter email" className="content__area" />
                </div>
                <div className="label__form">
                    <span className="text__area">password</span>
                    <input type="password" id="password" placeholder="create password" className="content__area" />
                </div>
                <div className="label__form">
                    <span className="text__area">confirm password</span>
                    <input type="passconfir" id="passconfir" placeholder="confirm password" className="content__area" />
                </div>
                <div className="btn__send">
                    <button className="send" type="submit">create account</button>
                </div>
            </form>
        </div>
    )
}
