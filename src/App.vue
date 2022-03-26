<template>
<h1>Hello world</h1>
</template>

<script>
import {TournamentGenerator} from "@/lib/UserListGenerator";

const tournament = new TournamentGenerator(64);
tournament.RoundsGenerator.createRoundsArr().getRoundsCounter();

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
