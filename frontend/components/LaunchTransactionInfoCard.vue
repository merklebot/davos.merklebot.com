<template>
  <CardContainer title="Launch info">
    <p class="text-md mt-2 text-white">
      launch status: <span class="text-yellow-500">{{ robot.cps.status }}</span>
    </p>
  </CardContainer>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { useRobot } from '~/store/robot'
import { makeSubscanLink, addressShort } from '~/plugins/robonomics'

export default defineComponent({
  setup () {
    const robot = useRobot()

    return { robot, makeSubscanLink, addressShort }
  }
})
</script>
