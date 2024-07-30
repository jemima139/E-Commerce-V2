import React from 'react';
import 'boxicons/css/boxicons.min.css';

export default function Footer() {
  return (
    <div>
      <footer className="my-footer">
        <div className="col-1">
          <h3>USEFUL LINKS</h3>
          <button onClick={() => window.location.href = '/about'}>About</button>
          <button onClick={() => window.location.href = '/services'}>Services</button>
          <button onClick={() => window.location.href = '/contact'}>Contact</button>
          <button onClick={() => window.location.href = '/shop'}>Shop</button>
          <button onClick={() => window.location.href = '/blog'}>Blog</button>
        </div>
        <div className="col-2">
          <h3>NEWSLETTER</h3>
          <form>
            <input type="email" placeholder="Your Email Address" required />
            <button type="submit">SUBSCRIBE NOW</button>
          </form>
        </div>
        <div className="col-3">
          <h3>CONTACT</h3>
          <p>2015 Main Street, New York, NY, 10002</p>
          <div className="social-icons">
            <a href="https://www.facebook.com"><i className="bx bxl-facebook"></i></a>
            <a href="https://www.instagram.com"><i className="bx bxl-instagram"></i></a>
            <a href="https://www.twitter.com"><i className="bx bxl-twitter"></i></a>
          </div>
        </div>
      </footer>
      <style jsx>{`
       
        .my-footer {
          margin-top: 150px;
          width: 100%;
          padding: 100px 15%;
          background-color: #333;
          color: #efefef;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          box-sizing: border-box;
        }
        
        .my-footer div {
          text-align: center;
          flex: 1;
          margin: 10px 0;
        }

        .my-footer div h3 {
          font-weight: 300;
          margin-bottom: 30px;
          letter-spacing: 1px;
        }

        .col-1 button {
          display: block;
          background: none;
          border: none;
          color: #efefef;
          margin-bottom: 10px;
          font-size: 16px;
          cursor: pointer;
          padding: 0;
        }

        form input {
          width: 100%;
          max-width: 400px;
          height: 45px;
          border-radius: 4px;
          text-align: center;
          margin-top: 20px;
          margin-bottom: 40px;
          outline: none;
          border: none;
        }

        form button {
          background: transparent;
          border: 2px solid #fff;
          color: #fff;
          border-radius: 30px;
          padding: 10px 30px;
          font-size: 15px;
          cursor: pointer;
        }

        .social-icons {
          margin-top: 30px;
        }

        .social-icons a {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          width: 40px;
          height: 40px;
          background: transparent;
          border: 2px solid #494D5f;
          border-radius: 50%;
          font-size: 20px;
          color: #fff;
          text-decoration: none;
          margin: 0 5px;
        }

        .social-icons i {
          font-size: 22px;
          margin: 10px;
          cursor: pointer;
        }

        /* Responsive Styles */
        @media (max-width: 1200px) {
          .my-footer {
            padding: 100px 10%;
          }
        }

        @media (max-width: 768px) {
          .my-footer {
            padding: 50px 5%;
            flex-direction: column;
          }

          form input {
            width: 90%;
          }
        }

        @media (max-width: 480px) {
          .my-footer {
            padding: 30px 5%;
          }

          .my-footer div h3 {
            margin-bottom: 20px;
          }

          form input {
            width: 100%;
          }

          form button {
            width: 100%;
            padding: 10px;
          }

          .social-icons a {
            width: 35px;
            height: 35px;
            font-size: 18px;
          }

          .social-icons i {
            font-size: 18px;
            margin: 8px;
          }
        }
    
      `}</style>
    </div>
  );
}
