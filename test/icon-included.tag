<icon-included>
  <font-awesome-icon icon={name} />

  <script>
    var tag = this
    this.name = 'camera'
    var candidates = ['camera', 'cut', 'save']
    setInterval(function(){
      tag.name = candidates[Math.floor(Math.random() * candidates.length)]
      tag.update()
    }, 1000)
  </script>
</icon-included>
