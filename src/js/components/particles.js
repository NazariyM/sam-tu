import particles from 'particles.js';

(function () {
  const grayParticles = $('#js-gray-particles').length;

  if (grayParticles) {
    particlesJS.load('js-gray-particles', 'static/particles/gray-particles.json');
  }
}());
