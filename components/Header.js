import Link from 'next/link'
import LinkItem from './LinkItem'
import styles from './Header.module.css'

export default function Header(props) {

    const LinkMenu = (itens) => (
        <li>
            <Link href={itens.link}>
                <a title={itens.label}>{itens.label}</a>
            </Link>
        </li>
    )
    return (
        <nav className={` ${styles.menu} ${styles[props.isOpen]}`}>
            <div>
                <ul>
                    {LinkItem.map(item => (
                        <LinkMenu key={item.id} link={item.link} label={item.label} />
                    ))
                    }
                </ul>
            </div>
        </nav>
    )
}