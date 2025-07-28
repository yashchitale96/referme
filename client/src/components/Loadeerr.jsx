import React from 'react';
import styled from 'styled-components';

const Loaderr = () => {
  return (
    <StyledWrapper role="status" aria-live="polite">
      <div className="loader-container">
        <div className="three-body">
          <div className="three-body__dot" />
          <div className="three-body__dot" />
          <div className="three-body__dot" />
        </div>
        <p className="loader-message">Hang tight! Loading awesome content… 🚀</p>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  width: 100vw;
  height: 60vh;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  z-index: 9999;
  .loader-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2.5rem 2rem;
    border-radius: 2rem;
    background: rgba(40, 30, 80, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31,38,135,0.37);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1.5px solid rgba(255,255,255,0.12);
    min-width: 220px;
    min-height: 220px;
  }
  .loader-message {
    margin-top: 2.2rem;
    font-size: 1.2rem;
    font-weight: 600;
    color: #fff;
    text-align: center;
    letter-spacing: 0.01em;
    text-shadow: 0 2px 8px rgba(80, 80, 180, 0.18);
    background: linear-gradient(90deg, #a78bfa, #f472b6, #60a5fa);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .three-body {
    --uib-size: 48px;
    --uib-speed: 0.8s;
    --uib-color: #a78bfa;
    position: relative;
    display: inline-block;
    height: var(--uib-size);
    width: var(--uib-size);
    animation: spin78236 calc(var(--uib-speed) * 2.5) infinite linear;
    margin: 0 auto;
  }
  .three-body__dot {
    position: absolute;
    height: 100%;
    width: 30%;
  }
  .three-body__dot:after {
    content: '';
    position: absolute;
    height: 0%;
    width: 100%;
    padding-bottom: 100%;
    background: linear-gradient(135deg, #a78bfa 0%, #f472b6 50%, #60a5fa 100%);
    border-radius: 50%;
    box-shadow: 0 2px 12px 0 rgba(167,139,250,0.18);
  }
  .three-body__dot:nth-child(1) {
    bottom: 5%;
    left: 0;
    transform: rotate(60deg);
    transform-origin: 50% 85%;
  }
  .three-body__dot:nth-child(1)::after {
    bottom: 0;
    left: 0;
    animation: wobble1 var(--uib-speed) infinite ease-in-out;
    animation-delay: calc(var(--uib-speed) * -0.3);
  }
  .three-body__dot:nth-child(2) {
    bottom: 5%;
    right: 0;
    transform: rotate(-60deg);
    transform-origin: 50% 85%;
  }
  .three-body__dot:nth-child(2)::after {
    bottom: 0;
    left: 0;
    animation: wobble1 var(--uib-speed) infinite calc(var(--uib-speed) * -0.15) ease-in-out;
  }
  .three-body__dot:nth-child(3) {
    bottom: -5%;
    left: 0;
    transform: translateX(116.666%);
  }
  .three-body__dot:nth-child(3)::after {
    top: 0;
    left: 0;
    animation: wobble2 var(--uib-speed) infinite ease-in-out;
  }
  @keyframes spin78236 {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  @keyframes wobble1 {
    0%, 100% { transform: translateY(0%) scale(1); opacity: 1; }
    50% { transform: translateY(-66%) scale(0.65); opacity: 0.8; }
  }
  @keyframes wobble2 {
    0%, 100% { transform: translateY(0%) scale(1); opacity: 1; }
    50% { transform: translateY(66%) scale(0.65); opacity: 0.8; }
  }
  @media (max-width: 600px) {
    .loader-container { min-width: 120px; min-height: 120px; padding: 1.2rem 0.5rem; }
    .three-body { --uib-size: 32px; }
    .loader-message { font-size: 1rem; }
  }
  @media (prefers-color-scheme: dark) {
    .loader-container {
      background: rgba(20, 20, 40, 0.45);
      border: 1.5px solid rgba(80,80,180,0.18);
    }
  }
`;

export default Loaderr;
