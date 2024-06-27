
import './about.css'
import team1 from '../../assets/Mario and Adrian A.jpg';
import team2 from '../../assets/Mario and Adrian b.jpg';
import team3 from '../../assets/restaurant chef B.jpg';

const About = () => {
    return (
        <div className="about-container">
            <div className="about-content">
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>
                    Welcome to Little Lemon, a charming restaurant nestled in the heart of Chicago. At Little Lemon, <br />
                    we pride ourselves on offering a delightful dining experience that combines fresh, locally sourced ingredients with the rich culinary traditions of the Mediterranean.  <br />
                    Our cozy, inviting atmosphere is perfect for everything from family gatherings to romantic dinners. Join us and savor our signature dishes, crafted with love and passion by our talented chefs. <br />
                    Little Lemon is not just a place to eat; it's a place to create lasting memories.
                </p>
            </div>
            <div className="img-team">
                <img src={team1} alt="mario and adrian" className="img-team-photo"/>
                <img src={team2} alt="mario and adrian 2" className="img-team-photo" />
                <img src={team3} alt="chef" className="img-team-photo" />
            </div>
        </div>
    )
}

export default About;