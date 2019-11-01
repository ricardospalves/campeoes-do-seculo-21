<template>
  <div class="teams">
    <div
      v-for="team in teams"
      class="teams__cell"
      :key="team.id"
    >
      <Team
        class="teams__team"
        :id="team.id"
        :crest="team.crest"
      >
        <h3 class="teams__title" slot="text">
          {{ team.shortname }}
        </h3>
      </Team>
    </div>
  </div>
</template>

<style>
.teams {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));

  max-width: 1024px;
  margin: 0 auto;
}

.teams__cell {
  padding: .5rem;
}

.teams__team {
  display: block;
  padding: 1.5em .5rem;

  text-align: center;
  text-decoration: none;

  transition: .2s;
  border-radius: .25rem;
  color: inherit;
  box-shadow: 0 1px 1px rgba(0, 0, 0, .05),
              0 2px 2px rgba(0, 0, 0, .05),
              0 4px 4px rgba(0, 0, 0, .05);
}

.teams__team:hover,
.teams__team:focus {

  background-color: rgba(0, 0, 0, .05);
  box-shadow: 0 1px 1px rgba(0, 0, 0, .1),
              0 2px 2px rgba(0, 0, 0, .1),
              0 4px 4px rgba(0, 0, 0, .1),
              0 8px 8px rgba(0, 0, 0, .1),
              0 16px 16px rgba(0, 0, 0, .1);
}

.teams__title {
  margin: .5rem 0 0;
  font-size: 1rem;
}

.teams__team svg {
  --size: 6rem;

  display: block;
  width: var(--size);
  height: var(--size);
  margin-left: auto;
  margin-right: auto;
}
</style>

<script>
import Team from './Team'

export default {
  props: [
    'teams'
  ],
  components: {
    Team
  }
}
</script>
