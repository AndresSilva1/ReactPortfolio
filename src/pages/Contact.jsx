import Header from "../components/Header"

function Contact(){

    return(
        <div>
            <Header text="Contact Page!!!!!!" />
            <form>
                <input type="text" name="email"/>
            </form>
           <a href="mailto:andresx1930@gmail.com"> <h4>Contact Me</h4></a>
        </div>
    )
}

export default Contact