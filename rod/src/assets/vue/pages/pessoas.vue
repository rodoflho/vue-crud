<template>
  <f7-page>
    <f7-navbar title="About F7" back-link="Back" sliding></f7-navbar>
    <div class="block-title">Lista de Pessoas</div>
      <div class="list accordion-list">
        <ul>
          <li v-for="pessoa in pessoas.data" :key="pessoa.id" class="accordion-item">
            <a href="#" class="item-content item-link">
              <div class="item-inner">
                <div class="item-title">{{ pessoa.first_name }}</div>
              </div>
            </a>
            <div class="accordion-item-content">
              <div class="block">
                <p>{{ pessoa.avatar }}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <!-- Extended FAB Center Bottom (Red) -->
      <div class="fab fab-extended fab-center-bottom color-red">
        <a v-bind:href="'/create'" >
          <i class="icon f7-icons ios-only">add</i>
          <i class="icon material-icons md-only">add</i>
          <div class="fab-text">Create</div>
        </a>
      </div>
  </f7-page>
</template>
<script>
 export default {
  computed: {
    pessoas () {
      return this.$store.getters.pessoas
    }
  }
  };
</script>
