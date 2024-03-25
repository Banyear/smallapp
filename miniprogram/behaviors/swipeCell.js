export const swipeCellBehavior = Behavior({
  data: {
    swipeCellQueue: []
  },
  methods: {
    swipeCellOpen(event) {
      //用户打开滑块触发
      const instance = this.selectComponent(`#${event.target.id}`)
      this.data.swipeCellQueue.push(instance)
    },
    onSwipeCellPage() {
      this.onSwipeCellCommonClick()
    },
    onSwipeCellClick() {},
    onSwipeCellCommonClick() {
      this.data.swipeCellQueue.forEach((instance) => {
        instance.close()
      })
    }
  }
})
