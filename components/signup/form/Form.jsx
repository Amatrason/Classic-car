import "./form.css"

export default function Form() {
    return (
        <form className="form" action="#">
            <h3 className="form__title">Join</h3>
            <label>
                Name
                <input type="text" name="name" id="" />
            </label>
            <label>
                Email
                <input type="email" name="email" id="" />
            </label>
        </form>
    )
}