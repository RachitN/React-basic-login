const Logout = props =>{
 const logout = ()=>{
    props.login(false)
    localStorage.removeItem('loggedIn')
 }
    return(
        <>
        <button onClick={logout}>
            Logout
        </button>
        </>
    )
}

export default Logout