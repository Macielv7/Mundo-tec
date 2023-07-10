import './index.scss'


export default function Index() {
    return (
        <main classNameName='comp-rodape'>
            <div className='footer'>
                <div className='container'>
                    <div className='about'>
                        <div className='logo'>
                            <h1>Mundo tech</h1>
                        </div>
                        <div className='detail'>
                            <p>We are a team of designers and developers that create high quality WordPress</p>
                            <div className='icon'>

                            </div>
                        </div>
                    </div>
                    <div className='account'>
                        <h3>My Account</h3>
                        <ul>
                            <li>Account</li>
                            <li>Order</li>
                            <li>Cart</li>
                            <li>shipping</li>
                            <li>return</li>
                        </ul>
                    </div>
                    <div className='page'>
                        <h3>Pages</h3>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                            <li>Terma & Condition</li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    )
}