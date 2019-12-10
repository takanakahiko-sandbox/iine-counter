<template>
  <div class="container">
    <div class="content">
      <a class="big-button" href="#" @click="increment">
      <svg class="likeButton" viewBox="0 0 500 500">
        <path class="heart" d="M250,187.4c-31.8-47.8-95.5-19.8-95.5,32.2c0,35.2,31.8,60.3,55.7,79.2c24.9,19.7,31.8,23.9,39.8,31.8 c7.9-7.9,14.6-12.6,39.8-31.8c24.3-18.5,55.7-44.4,55.7-79.6C345.5,167.6,281.8,139.7,250,187.4z"/>
      </svg>
      <i class="fa fa-share"></i>
    </a>
    <p class="counter">{{count}}いいね</p>
    <div class="credit">presented by Prickathon</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import firebase from "firebase"
import db from './firestore'

const num_shards = 10;

export default Vue.extend({
  data() {
    return {
      count: -1
    };
  },
  mounted() {
    db.collection('counter').onSnapshot(snapshot => {
      let total_count = 0;
      snapshot.forEach(doc => total_count += doc.data().count );
      this.count =  total_count;
    });
  },
  methods: {
    increment() {
      const shard_id = Math.floor(Math.random() * num_shards).toString();
      const shard_ref = db.collection('counter').doc(shard_id);
      return shard_ref.update("count", firebase.firestore.FieldValue.increment(1));
    }
  }
});
</script>

<style lang="scss">
body {
  background: linear-gradient(-135deg, #E4A972, #9941D8) fixed;
}

.container {
  font-family: 'ヒラギノ角ゴ StdN','Hiragino Kaku Gothic StdN',sans-serif;
  height: 70vh;
  margin: 0 auto;
  margin-top: 15vh;
  text-align: center;
  color: White;
  display: flex;
  justify-content: center;
  align-items: center;
}

.counter{
  font-size: 40px;
}

.credit{
  margin: 50px;
}

.big-button {
  margin: 0 auto;
  display: block;
  width: 200px;
  height: 200px;
  background:white;
  text-align: center;
  border-radius: 50%;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.12);

  .heart {
    fill: rgb(253, 163, 163);
  }
}
</style>
