import { useAuthUser } from "@frontegg/nextjs";
import styles from '../../styles/Home.module.css';

function Test() {
    const user = useAuthUser();

    return (
        <div className={styles.container}>
            <div>
                <img src={user?.profilePictureUrl} width={80} height={80} alt={user?.name}/>
            </div>
            <div>
                <span>Logged in as: {user?.name}</span>
            </div>
            <div>
                <button onClick={() => alert(user.accessToken)}>What is my access token?</button>
            </div>
            <div>
                <button onClick={() => window.location.href = '/account/logout'}>Click me to logout</button>
            </div>
        </div>
    )
}

export default Test