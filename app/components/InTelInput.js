

// pages/index.js

import { useEffect, useState } from 'react';
import Head from 'next/head';
import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';

const Home = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    const input = document.querySelector("#mobile_code");
    const iti = intlTelInput(input, {
      initialCountry: "in",
      separateDialCode: true,
      utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js"
    });

    input.addEventListener('blur', () => {
      setIsValid(iti.isValidNumber());
    });

    return () => {
      input.removeEventListener('blur', () => {
        setIsValid(iti.isValidNumber());
      });
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      alert(`Phone number is valid: ${phoneNumber}`);
    } else {
      alert('Phone number is invalid');
    }
  };

  return (
    <>
      <Head>
        <title>International telephone input</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900&display=swap');
        body {
          height: 100%;
          margin: 0;
          font-family: 'Roboto', sans-serif;
        }

        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }

        .form-area {
          background-color: #fff;
          box-shadow: 0px 5px 10px rgba(90, 116, 148, 0.3);
          padding: 40px;
          border-radius: 6px;
          width: 100%;
          max-width: 400px;
        }

        .form-control {
          display: block;
          width: 100%;
          height: auto;
          padding: 15px 19px;
          font-size: 1rem;
          line-height: 1.4;
          color: #475F7B;
          background-color: #FFF;
          border: 1px solid #DFE3E7;
          border-radius: .267rem;
          transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
        }

        .form-control:focus {
          color: #475F7B;
          background-color: #FFF;
          border-color: #5A8DEE;
          outline: 0;
          box-shadow: 0 3px 8px 0 rgb(0 0 0 / 10%);
        }

        .btn-primary {
          color: #ffffff;
          background-color: #428BCA;
          border-color: #357EBD;
          font-size: 14px;
          cursor: pointer;
          padding: 10px 20px;
          border-radius: 4px;
          margin-top: 20px;
        }

        .btn-primary:focus, .btn-primary:hover {
          background-color: #3276B1;
          border-color: #285E8E;
        }

        .btn-primary:active {
          box-shadow: inset 0 3px 5px rgba(0,0,0,.125);
        }

        .error {
          color: red;
          font-size: 0.9em;
          margin-top: 5px;
        }
      `}
      </style>
      <div className="container">
        <div className="form-area">
          <div className="form-inner">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="tel"
                  id="mobile_code"
                  className="form-control"
                  placeholder="Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
                {!isValid && <div className="error">Invalid phone number</div>}
              </div>
              <button type="submit" className="btn btn-primary form-submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;












