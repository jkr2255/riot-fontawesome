<mutation-test>
  <div>
    Cache:
    <label><input type=radio name=test value='always' checked={cache == 'always'} onchange={onChangeRadio}>Yes</label>
    <label><input type=radio name=test value='none' checked={cache == 'none'} onchange={onChangeRadio}>No</label>
    <button type=button onclick={run}>Run</button>
    <font-awesome-icon icon={icon} cache={cache} />
  </div>

  <script>
    var tag = this
    tag.cache = 'always'
    tag.icon = 'pause'
    var icons = ['angle-down', 'angle-left', 'angle-up', 'angle-right']
    tag.onChangeRadio = function(e) {
      tag.cache = e.target.value
    }
    tag.run = function() {
      var timeup = false
      var count = 0
      setTimeout(function(){timeup = true}, 1000)
      function loop(){
        if(timeup){
          alert('performed '+ count + ' times')
          return
        }
        tag.icon = icons[count % icons.length]
        count++
        tag.update()
        setImmediate(loop)
      }
      loop()
    }
  </script>
</mutation-test>
