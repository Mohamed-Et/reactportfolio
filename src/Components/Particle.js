import { red } from '@material-ui/core/colors';
import React from 'react';
import Particles from 'react-tsparticles';
import styled from 'styled-components';

const Container = styled.div`
  /* We add container just to acces canvas */
  #tsparticles {
    canvas {
      position: absolute !important;
      z-index: -2;
    }
  }
`;

function Particle() {
  return (
    <Container>
      <Particles
        width='80%'
        height='100vh'
        id='tsparticles'
        params={{
          particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: '#d9b44e' },
            shape: {
              type: 'circle',
              stroke: { width: 0.3, color: '#d9b44e' },
              polygon: { nb_sides: 3 },
              image: { src: 'img/github.svg', width: 100, height: 100 },
            },
            opacity: {
              value: 0.4967471076499059,
              random: true,
              anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
            },
            size: {
              value: 4,
              random: true,
              anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
            },
            line_linked: {
              enable: false,
              distance: 150,
              color: '#ffffff',
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2,
              direction: 'none',
              random: true,
              straight: false,
              out_mode: 'bounce',
              bounce: false,
              attract: {
                enable: false,
                rotateX: 1762.6510271448274,
                rotateY: 9213.857641893415,
              },
            },
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: { enable: false, mode: 'grab' },
              onclick: { enable: true, mode: 'push' },
              resize: true,
            },
            modes: {
              grab: { distance: 400, line_linked: { opacity: 1 } },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: { distance: 200, duration: 0.4 },
              push: { particles_nb: 4 },
              remove: { particles_nb: 2 },
            },
          },
          retina_detect: true,
        }}
      />
    </Container>
  );
}

export default Particle;
