import Logout from "../Logout/logout"

const Welcome = props=>{
    return(
        <>
        <h1>
            Welcome
        </h1>
        <Logout login ={props.login}></Logout>
        </>
    )
}

export default Welcome