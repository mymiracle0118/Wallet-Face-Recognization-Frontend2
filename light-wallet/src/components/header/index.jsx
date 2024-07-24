const Header = (props) => {
    return (
        <div className="flex justify-between px-[15px] md:px-[5%] h-[100%] w-[100%]">
            <div className="logo h-[100%] flex">
                <img src="/img/nav-logo.png" alt="Navigation Logo" height={"100%"}/>
                <div className="h-[100%] min-w-[400px] flex flex-col justify-center">
                    <h1 className="text-7xl">ANON ID</h1>
                    <p>Easy. Private. Decentralized.</p>
                </div>
            </div>
            <div className="certificate flex flex-col justify-center h-[100%]">
                <p>Powered by:</p>
                <img src="/img/cess-1.png" alt="Navigation Logo" height={"100%"}/>
            </div>
        </div>
    )
}

export default Header;