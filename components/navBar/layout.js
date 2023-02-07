import NavBar from './navBar';

export default function Layout({children}) {
    return(
        <div className=''>
            <NavBar />
            <main>{children}</main>
        </div>
    )
}