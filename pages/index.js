import { useAuth } from "@frontegg/nextjs";
import { useRouter } from "next/router";
import styles from '../styles/Home.module.css';

function Home() {
    const router = useRouter();
    const { user } = useAuth();
    console.log(user);

    return (
        <div className={styles.container}>
            {user ? <span>{user.name}</span> : 'Not logged in'}
            <div onClick={()=>router.push('/my-account')}>Check protected route</div>
        </div>
    )
}

export default Home