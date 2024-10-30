import React from 'react'
// import "./button.css"

const Button = () => {
  return (
    <button >
      <div>
        <style>
          {`
          #button {
            position: relative;
            display: inline-block;
            padding: 15px 30px;
            margin: 40px 0;
            color: #9946ff;
            font-size: 24px;
            text-decoration: none;
            text-transform: uppercase;
            overflow: hidden;
            transition: 0.5s;
            letter-spacing: 4px;
            /* -webkit-box-reflect: below 1px linear-gradient(transparent, #0005); */
          }
          
          #button:hover {
            background-color: #9946ff;
            color: #c9c9c9;
            box-shadow: 0 0 5px #9946ff, 0 0 25px #9946ff, 0 0 50px #9946ff,
              0 0 200px #9946ff;
          }
          
          #button span {
            position: absolute;
            display: block;
          }
          
          #button:nth-child(1) {
            filter: hue-rotate(290deg);
          }
          
          #button:nth-child(3) {
            filter: hue-rotate(110deg);
          }
          
          #button span:nth-child(1) {
            top: 0;
            left: -100%;
            width: 100%;
            height: 2px;
            background: linear-gradient(90deg, transparent, #9946ff);
            animation: animate1 1s linear infinite;
          }
          
          @keyframes animate1 {
            0% {
              left: -100%;
            }
          
            50%,
            100% {
              left: 100%;
            }
          }
          
          #button span:nth-child(2) {
            top: -100%;
            right: 0;
            width: 2px;
            height: 100%;
            background: linear-gradient(180deg, transparent, #9946ff);
            animation: animate2 1s linear infinite;
            animation-delay: 0.25s;
          }
          
          @keyframes animate2 {
            0% {
              top: -100%;
            }
          
            50%,
            100% {
              top: 100%;
            }
          }
          
          #button span:nth-child(3) {
            bottom: 0;
            right: -100%;
            width: 100%;
            height: 2px;
            background: linear-gradient(270deg, transparent, #9946ff);
            animation: animate3 1s linear infinite;
            animation-delay: 0.5s;
          }
          
          @keyframes animate3 {
            0% {
              right: -100%;
            }
          
            50%,
            100% {
              right: 100%;
            }
          }
          
          #button span:nth-child(4) {
            bottom: -100%;
            left: 0;
            width: 2px;
            height: 100%;
            background: linear-gradient(360deg, transparent, #9946ff);
            animation: animate4 1s linear infinite;
            animation-delay: 0.75s;
          }
          
          @keyframes animate4 {
            0% {
              bottom: -100%;
            }
          
            50%,
            100% {
              bottom: 100%;
            }
          }
          
          `}
        </style>
      </div>
      <span id="button"  >
        <span className="absolute block"></span>
        <span className="absolute block"></span>
        <span className="absolute block"></span>
        <span className="absolute block"></span>
        Explore now
      </span>
    </button>
  )
}

export default Button