<template>
  <section>
    <div class="frame" />
    <div class="content">
      <img :src="contact.photo" class="photo">
      <div class="name">{{contact.name}}</div>
      <div class="cellphone">
        {{contact.cellphone}}
      </div>
      <div class="email">{{contact.email}}</div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactCard',
  props: ['contact']
}
</script>

<style scoped>
section{
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: .5rem;
  width: 20rem;
  height: 15rem;
  padding-top: .2rem;
  display: block;
}
.frame{
  background-color: rgb(209, 209, 209);
  height: 5rem;
  border-radius: .5rem .5rem 0 0;
  margin: .1rem;
  display: block;
}
.content{
  line-height: 1.5rem;
}
img{
  display: block;
  width: 6rem;
  height: 6rem;
  object-fit: cover;
  border-radius: 100%;
  border: solid .4rem white;
  margin-left: auto;
  margin-right: auto;
  margin-top: -3rem;
}
.name{
  font-weight: bold;
}

</style>