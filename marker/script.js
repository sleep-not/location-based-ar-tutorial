AFRAME.registerComponent('rotation-reader', {
  /**
   * We use IIFE (immediately-invoked function expression) to only allocate one
   * vector or euler and not re-create on every tick to save memory.
   */
  tick: (function () {
    var position = new THREE.Vector3();
    var rotation = new THREE.Euler();

    return function () {
      this.el.object3D.getWorldPosition(position);
      this.el.object3D.getWorldRotation(rotation);
      // position and rotation now contain vector and euler in world space.
    };
  })
});


AFRAME.registerComponent('vidhandler', {
            init: function() {
                this.toggle = false;
                this.vid = document.querySelector("#vid");
                this.vid.pause();
            },
            tick: function() {
                if (this.el.object3D.visible == true) {
                    if (!this.toggle) {
                        this.toggle = true;
                        this.vid.play();
                    }
                } else {
                    this.toggle = false;
                    this.vid.pause();
                }
            }
        });

        function refreshpage() {
            location.reload();
        }

        function playvid() {
            vid.play();
        }