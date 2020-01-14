;(function() {
  // 响应式布局
  var dpr = window.devicePixelRatio

  function resize() {
    var deviceWidth = document.documentElement.clientWidth
    document.documentElement.style.fontSize = deviceWidth / 6.4 + 'px'
  }
  resize()
  window.onresize = resize

  // 动态切换背景图片
  var base_url = 'http://oxrhnf1ro.bkt.clouddn.com/'
  var images = ['img/back.jpg']
  // for (var i = 1; i <= 15; i++) {
  //   var temp = { src: base_url + i + '.jpg' }
  //   images[i - 1] = temp
  // }
  var options = {
    delay: 7000,
    timer: true,
    shuffle: true,
    firstTransition: 'fade',
    firstTransitionDuration: 5000,
    transition: 'zoomOut',
    transitionDuration: 2000,
    overlay: 'vendor/vegas/overlays/04.png',
    animation: 'kenburns',
    slides: images
  }
  $('body').vegas(options)
  // 倒计时
  var flag = true

  function timeElapse(date) {
    var current = Date()
    var seconds = (Date.parse(current) - Date.parse(date)) / 1000
    let second = seconds
    let minute = seconds / 60
    let hour = seconds / 3600
    var days = Math.floor(seconds / (3600 * 24))
    // if (days == 100 && flag) {
    //   $('body').vegas('options', 'slides', [
    //     {
    //       src: base_url + '100days.jpg'
    //     }
    //   ])
    //   flag = false
    // } else if (days > 100 && !flag) {
      // options.push({
      //   src: base_url + '100days.jpg'
      // })
    //   $('body').vegas('options', 'slides', options)
    //   flag = true
    // }
    seconds = seconds % (3600 * 24)
    var hours = Math.floor(seconds / 3600)
    if (hours < 10) {
      hours = '0' + hours
    }
    seconds = seconds % 3600
    var minutes = Math.floor(seconds / 60)
    if (minutes < 10) {
      minutes = '0' + minutes
    }
    seconds = seconds % 60
    if (seconds < 10) {
      seconds = '0' + seconds
    }
    var result =
      '<span class="digit">' +
      days +
      '</span> 天 <span class="digit">' +
      hours +
      '</span> 小时 <span class="digit">' +
      minutes +
      '</span> 分钟 <span class="digit">' +
      seconds +
      '</span> 秒' + 
      '<div class="didown">也就是' +
      Math.floor(hour) + ' 小时</div>' + 
      '<div class="didown">' +
      Math.floor(minute) + ' 分钟</div>' +
      '<div class="didown">' +
      Math.floor(second) + ' 秒</div>'
    $('#elapseClock').html(result)
  }

  var together = new Date()
  together.setFullYear(2019, 1, 27)
  together.setHours(10)
  together.setMinutes(0)
  together.setSeconds(0)
  together.setMilliseconds(0)

  timeElapse(together)
  setInterval(function() {
    timeElapse(together)
  }, 500)

  // 打字机
  var typewriter = new Typed('.typewriter', {
    strings: [
      '程若佳^600',
      '这是你最喜欢的天蓝色^1000',
      '背景是我最喜欢的人^1000',
      '我们相识的时间或许不长^1000',
      '就像上面的计时器那么久^1000',
      '可是感觉再加几个零都不止^1000',
      '我们的相识是那么奇妙^1000',
      '我把这种莫名其妙叫做缘分^1000',
      '这么多天我觉得我是超级幸福的人^1000',
      '就像踏遍了高山大川^1000',
      '就像看尽了繁华落寞^1000',
      '就像找到了栖息之所^1000',
      '我们自然而然的在一起^1000',
      '没有也很难有正式的仪式^1000',
      '可我想我还差一个告白^1000',
      '一个在那几分钟里让你觉得幸福的宣言^1000',
      '我把这几分钟藏在这一段段代码里^1000',
      '不华丽的才像生活^1000',
      '不声张的才像诉说^1000',
      '我想用我拙劣的笔法告诉你^1000',
      '我喜欢你^1000',
      '我很喜欢你^1000',
      '我特别喜欢你^1000',
      '我第一次把一句话说三遍^1000',
      '你知道我的意思^1000',
      '以后不管山高水长^1000',
      '不管路途艰难^1000',
      '让我陪你一起^1000',
      '程若佳^600',
      '我❤️你^600',
      '我们在一起吧^600'
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: false
  })

  // 微信播放音乐
  wx.config({
    debug: false,
    appId: '',
    timestamp: 1,
    nonceStr: '',
    signature: '',
    jsApiList: []
  })
  wx.ready(function() {
    document.getElementById('music').play()
  })
})()
