<template>
  <section>
    <b-button tag="router-link" to="/add-contact">Add Contact</b-button>
    <div class="schedule">
    <contact-card v-for="(contact, i) in contacts" :key="i" :contact="contact" />
    </div>
  </section>
</template>

<script>
import ContactCard from '@/components/ContactCard.vue'
export default {
  name: "ContactPanel",
  components: {
    ContactCard
  },
  computed: {
    contacts(){
      return this.$store.state.contacts;
    }
  }
}
</script>

<style scoped>
.schedule{
  display: grid;
  grid-template-columns: 20rem 20rem 20rem;
  gap: 1rem;
  width: fit-content;
  max-width: 64rem;
  margin: auto;
}
</style>