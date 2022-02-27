import home from '../Assets/Images/home.jpg';

const Home = () => {
    return (
        <img src={home}  style={{height:'100vh',width: '100%', backgroundPosition: 'center', backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}}/>
    )
}

export default Home;