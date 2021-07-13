import{ useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router'
import styles from './Header.module.scss';

export function Header(){
  const router = useRouter();
  const [search, setSearch] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    router.push(`items?search=${search}`);
    return ;
  }

  return <header className={styles.container}>
    <div className={`${styles.alt} container`}>
      <div className={styles.logo}>
        <Link href="/">
          <span>
            <Image alt="Logo" height="36" src="/logo.png" width="53" />
          </span>
        </Link>
      </div>
      <form action="" className={styles.form} onSubmit={onSubmit}>
        <input type="text" onChange={(e)=>setSearch(e.target.value)} placeholder="Buscar produtos" />
        <button>ENVIAR</button>
      </form>
    </div>
  </header>
}
