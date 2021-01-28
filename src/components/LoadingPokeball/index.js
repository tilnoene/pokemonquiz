import styled from 'styled-components';

const LoadingPokeball = styled.div`

.item{ 
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    top:0;
    bottom:0;
    animation: loading 2s infinite;
}

.ball{
  border-radius: 50%;
  width: 200px;
  height: 200px;
  border: 10px solid #1d1d1b; 
  z-index: 100;
  display: block;
  margin: auto;
  left: 0;
  right: 0;
  top:0;
  bottom:0;  
  position: absolute;
}

.half-ball{
  margin: auto;
  left: 0;
  right: 0;
  top:100px;
  bottom:0;
  z-index: 0;
  position: absolute;
  background-color: white;
  border-radius: 0 0 90px 90px;
  width: 200px;
  height: 100px;
}

.horizon{
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom:0;    
  margin-top: auto;
  border-radius: 0px;
  width: 200px;
  height: 40px;
  background-color: #1d1d1b;
  z-index: 3;
}

.big-button{
  z-index: 4;
  margin: auto;
  left: 0;
  right: 0;
  top:0;
  bottom:0;
  border-radius: 50%;
  border: 10px solid #1d1d1b;
  position: absolute;
  height: 60px;
  width: 60px; 
  background-color: white;
}

.small-button{
  z-index: 5;
  margin: auto;
  left: 0;
  right: 0;
  top:0;
  bottom:0;
  border-radius: 50%;
  border: 6px solid #1d1d1b;
  position: absolute;
  height: 38px;
  width: 38px; 
  background-color: white;
}

@keyframes loading {
  0 { transform: translate(0, 0) rotate(0); }
  25% { transform: translate(-8px, 0) rotate(-18deg); }
  33% { transform: translate(8px, 0) rotate(18deg); }
  50% { transform: translate(-8px, 0) rotate(-12deg); }
  60% { transform: translate(8px, 0) rotate(18deg); }
  100% { transform: translate(0, 0) rotate(0); }
}
`

export default LoadingPokeball;