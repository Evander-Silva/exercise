<template>
  <section>
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
  data(){
    return {
      contacts: [
        {
          id: '0',
          name: 'João da Silva',
          cellphone: '+55 (94) 9 9129 7564',
          email: 'joao_silva@email.com',
          photo: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        // {
        //   id: '0',
        //   name: 'João da Silva',
        //   cellphone: '+55 (94) 9 9129 7564',
        //   email: 'joao_silva@email.com',
        //   photo: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        // },
        // {
        //   id: '0',
        //   name: 'João da Silva',
        //   cellphone: '+55 (94) 9 9129 7564',
        //   email: 'joao_silva@email.com',
        //   photo: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        // },
        // {
        //   id: '0',
        //   name: 'João da Silva',
        //   cellphone: '+55 (94) 9 9129 7564',
        //   email: 'joao_silva@email.com',
        //   photo: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        // },
        // {
        //   id: '0',
        //   name: 'João da Silva',
        //   cellphone: '+55 (94) 9 9129 7564',
        //   email: 'joao_silva@email.com',
        //   photo: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        // }
      ]
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