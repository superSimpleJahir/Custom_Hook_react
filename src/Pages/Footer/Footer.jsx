import './Footer.css'
const Footer = () => {
  return (
    <footer>
      <div className="container flex">
        <div className="companyDetails">
          <img src="https://i.postimg.cc/wMJv3vxB/logo.png" />
          <p>But i must explain to you all this mistaken idea of dencouncing pleasure.</p>
        </div>

        <div className="link">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#">About Our Company</a>
            </li>
            <li>
              <a href="#">Services WE provide</a>
            </li>
            <li>
              <a href="#">Career & Opportunity</a>
            </li>
            <li>
              <a href="#">Privacy & policy</a>
            </li>
            <li>
              <a href="#">Contact US</a>
            </li>
          </ul>
        </div>

        <div className="company link">
          <h4>Company</h4>
          <ul>
            <li>
              <a href="#">About Company</a>
            </li>
            <li>
              <a href="#">Our Testimonials</a>
            </li>
            <li>
              <a href="#">Latest News</a>
            </li>
            <li>
              <a href="#">Our misson</a>
            </li>
            <li>
              <a href="#">Get a free Quot</a>
            </li>
          </ul>
        </div>

        <div className="contact link">
          <h4>Contact us</h4>
          <ul>
            <li>
              <a href="#">Sagrada Familia, Herba</a>
            </li>
            <li>
              <a href="#">Street Front USA</a>
            </li>
            <li>
              <a href="#">brandoxide@gmail.com</a>
            </li>
            <li>
              <a href="#">002-568423591</a>
            </li>
          </ul>
        </div>

        <div className="followUs">
          <h4>Follow Us</h4>
          <div className="social">
            <a href="#">
              <img src="./img/12.svg" />
            </a>
            <a href="#">
              <img src="./img/twitter.svg" />
            </a>
            <a href="#">
              <img src="./img/instagram.svg" />
            </a>
            <a href="#">
              <img src="./img/linked.svg" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
