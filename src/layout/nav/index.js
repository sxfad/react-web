import Link from 'next/link';
import s from './style.module.less';

export default function Nav() {
    return (
        <nav className={s.root}>
            <ul>
                <li><Link href="/">首页</Link></li>
                <li><Link href="/about">关于我们</Link></li>
                <li></li>
                <li></li>
            </ul>
        </nav>
    );
}
