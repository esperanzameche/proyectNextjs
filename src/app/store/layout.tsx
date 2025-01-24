export default function Layout({children}:{children:React.ReactNode}){
    return (
        <main>
            <nav>navegacion de las categorias</nav>
            { children }
        </main>
    )
}