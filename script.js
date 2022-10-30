const bgTransition = KUTE.fromTo(
  '#animation1',
  { path: '#animation1' },
  { path: '#animation2' },
  { repeat: 999, duration: 3000, yoyo: true }
)

bgTransition.start()