<template>
<div class="xl:px-32 2xl:px-44">
  <Navbar
    :title="$t('nav.titleGoal')"
    :key="$i18n.locale"
    @darkLightChild="darkLightParent"
  />
  <Goal :updateModeChild="updateMode"/>
</div>

</template>

<script>
import Navbar from "@/components/navbar/Navbar.vue";
import Goal from "@/components/goal/Goal.vue";

export default {
  components: {
    Navbar,
    Goal,
  },
  data: function () {
    return {
      updateMode: false,
    };
  },
  methods: {
    darkLightParent() {
      this.updateMode = !this.updateMode;
    },
  },
};
</script>

<style></style>
