<font-awesome-layers>
  <span class={layerClass} style={layerStyle}>
    <yield />
  </span>

  <script>
    const tag = this
    tag.layerStyle = opts.layerStyle
    const applyClass = param => {
      tag.layerClass = param.fixedWidth ? 'fa-layers fa-fw' : 'fa-layers'
    }
    applyClass(opts)
    tag.on('update', () => {
      if(!tag.parent) return
      applyClass(opts)
      tag.layerStyle = opts.layerStyle
    })
  </script>
</font-awesome-layers>
