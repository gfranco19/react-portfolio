import React from "react";
import Particles from "react-tsparticles";
import "./Particles.css";

function Banner (){
    return(
<Particles className="particle-canvas"
id="tsparticles"
options={{
    "autoPlay": true,
"background": {
"color": {
"value": "#dededeff"
},
"image": "",
"position": "50% 50%",
"repeat": "no-repeat",
"size": "cover",
"opacity": 1
},
"backgroundMask": {
"composite": "destination-out",
"cover": {
"color": {
"value": "#acb6dd"
},
"opacity": 1
},
"enable": false
},
"backgroundMode": {
"enable": false,
"zIndex": -1
},
"detectRetina": true,
"fpsLimit": 60,
"infection": {
"cure": false,
"delay": 0,
"enable": false,
"infections": 0,
"stages": []
},
"interactivity": {
"detectsOn": "canvas",
"events": {
"onClick": {
"enable": false,
"mode": "push"
},
"onDiv": {
"selectors": [],
"enable": false,
"mode": [],
"type": "circle"
},
"onHover": {
"enable": false,
"mode": "repulse",
"parallax": {
  "enable": false,
  "force": 2,
  "smooth": 10
}
},
"resize": true
},
"modes": {
"attract": {
"distance": 200,
"duration": 0.4,
"speed": 1
},
"bounce": {
"distance": 200
},
"bubble": {
"distance": 400,
"duration": 2,
"opacity": 0.5,
"size": 25
},
"connect": {
"distance": 80,
"links": {
  "opacity": 0.5
},
"radius": 50
},
"grab": {
"distance": 400,
"links": {
  "blink": false,
  "consent": false,
  "opacity": 1
}
},
"light": {
"area": {
  "gradient": {
    "start": {
      "value": "#ffffff"
    },
    "stop": {
      "value": "#000000"
    }
  },
  "radius": 1000
},
"shadow": {
  "color": {
    "value": "#000000"
  },
  "length": 2000
}
},
"push": {
"quantity": 4
},
"remove": {
"quantity": 2
},
"repulse": {
"distance": 200,
"duration": 0.4,
"speed": 1
},
"slow": {
"factor": 3,
"radius": 200
},
"trail": {
"delay": 1,
"quantity": 1
}
}
},
"manualParticles": [],
"motion": {
"disable": false,
"reduce": {
"factor": 4,
"value": false
}
},
"particles": {
"bounce": {
"horizontal": {
"random": {
  "enable": false,
  "minimumValue": 0.1
},
"value": 1
},
"vertical": {
"random": {
  "enable": false,
  "minimumValue": 0.1
},
"value": 1
}
},
"collisions": {
"bounce": {
"horizontal": {
  "random": {
    "enable": false,
    "minimumValue": 0.1
  },
  "value": 1
},
"vertical": {
  "random": {
    "enable": false,
    "minimumValue": 0.1
  },
  "value": 1
}
},
"enable": false,
"mode": "bounce"
},
"color": {
"value": "#ffffff",
"animation": {
"enable": false,
"speed": 1,
"sync": true
}
},
"life": {
"count": 0,
"delay": {
"random": {
  "enable": false,
  "minimumValue": 0
},
"value": 0,
"sync": false
},
"duration": {
"random": {
  "enable": false,
  "minimumValue": 0.0001
},
"value": 0,
"sync": false
}
},
"links": {
"blink": false,
"color": {
"value": "#ffffff"
},
"consent": false,
"distance": 150,
"enable": false,
"frequency": 1,
"opacity": 0.4,
"shadow": {
"blur": 5,
"color": {
  "value": "#00ff00"
},
"enable": false
},
"triangles": {
"enable": false,
"frequency": 1
},
"width": 1,
"warp": false
},
"move": {
"angle": {
"offset": 45,
"value": 90
},
"attract": {
"enable": false,
"rotate": {
  "x": 600,
  "y": 1200
}
},
"direction": "none",
"distance": 0,
"enable": true,
"gravity": {
"acceleration": 9.81,
"enable": false,
"maxSpeed": 50
},
"noise": {
"delay": {
  "random": {
    "enable": false,
    "minimumValue": 0
  },
  "value": 0
},
"enable": false
},
"outModes": {
"default": "destroy",
"bottom": "destroy",
"left": "destroy",
"right": "destroy",
"top": "destroy"
},
"random": false,
"size": false,
"speed": 5,
"straight": false,
"trail": {
"enable": false,
"length": 10,
"fillColor": {
  "value": "#000000"
}
},
"vibrate": false,
"warp": false
},
"number": {
"density": {
"enable": true,
"area": 800,
"factor": 1000
},
"limit": 0,
"value": 0
},
"opacity": {
"random": {
"enable": false,
"minimumValue": 0.1
},
"value": 1,
"animation": {
"enable": false,
"minimumValue": 0.1,
"speed": 3,
"sync": false
}
},
"reduceDuplicates": false,
"rotate": {
"random": {
"enable": false,
"minimumValue": 0
},
"value": 0,
"animation": {
"enable": false,
"speed": 0,
"sync": false
},
"direction": "clockwise",
"path": false
},
"shadow": {
"blur": 0,
"color": {
"value": "#000000"
},
"enable": false,
"offset": {
"x": 0,
"y": 0
}
},
"shape": {
"options": {
"polygon": {
  "nb_sides": 5
},
"star": {
  "nb_sides": 5
},
"image": {
  "src": "https://cdn.matteobruni.it/images/particles/github.svg",
  "width": 100,
  "height": 100
},
"images": {
  "src": "https://cdn.matteobruni.it/images/particles/github.svg",
  "width": 100,
  "height": 100
}
},
"type": "circle"
},
"size": {
"random": {
"enable": false,
"minimumValue": 1
},
"value": 20,
"animation": {
"destroy": "max",
"enable": true,
"minimumValue": 0.1,
"speed": 5,
"startValue": "min",
"sync": true
}
},
"stroke": {
"width": 0,
"color": {
"value": "#000000",
"animation": {
  "enable": false,
  "speed": 1,
  "sync": true
}
}
},
"twinkle": {
"lines": {
"enable": false,
"frequency": 0.05,
"opacity": 1
},
"particles": {
"enable": false,
"frequency": 0.05,
"opacity": 1
}
}
},
"pauseOnBlur": true,
"pauseOnOutsideViewport": false,
"themes": [],
"emitters": {
"direction": "top",
"life": {},
"rate": {
"quantity": 2,
"delay": 0.1
},
"size": {
"mode": "percent",
"height": 0,
"width": 100
},
"position": {
"x": 50,
"y": 100
}
}
}
}
/>
    )
}
export default Banner;