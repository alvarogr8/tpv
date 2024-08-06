import { NavLink } from 'react-router-dom'
import { PATHS } from './constants'
import './Navbar.css'

interface NavbarLinkProps {
  title: string;
  href: string;
}
function NavbarLink({ title, href }: NavbarLinkProps) {
  return (<li>
    <NavLink to={href}>{title}</NavLink>
  </li>)
}

export function Navbar() {
  return (<nav>
    <ol>
      <NavbarLink title="Articulos" href={PATHS.articles} />
      <NavbarLink title="Cajas Diarias" href={PATHS.daily} />
      <NavbarLink title="Clientes" href={PATHS.clients} />
      <NavbarLink title="Compras" href={PATHS.purchases} />
      <NavbarLink title="Devoluciones" href={PATHS.returns} />
      <NavbarLink title="Ventas" href={PATHS.sales} />
    </ol>
  </nav>)
}