<template>
  <div class="user-profile">
    <div class="user-profile__sidebar">
      <div class="user-profile__user-panel">
        <h1 class="user-profile__username">@{{ user.username }}</h1>
        <div class="user-profile__admin-badge" v-if="user.isAdmin">Admin</div>
        <div class="user-profile__follower-count">
          <strong>Followers:</strong>{{ followers }}
        </div>
      </div>
      <CreateTwootPanel @add-twoot="addTwoot" />
    </div>
    
    <div class="user-profile__twoots-wrapper">
      <TwootItem
        v-for="twoot in user.twoots"
        :key="twoot.id"
        :username="user.username"
        :twoot="twoot"
        @favourite="toggleFavourite"
      />
    </div>
  </div>
</template>

<script>
import TwootItem from "./TwootItem.vue";
import CreateTwootPanel from "./CreateTwootPanel";

export default {
  name: "UserProfile",
  components: { TwootItem, CreateTwootPanel },
  props: {},
  data() {
    return {
      followers: 0,
      user: {
        id: 1,
        username: "_LearnStudent ",
        firstName: "S",
        lastName: "T",
        email: "wl03352521@gmail.com",
        isAdmin: true,
        twoots: [
          { id: 1, content: "Twotter is Amazing!" },
          { id: 2, content: "I learning it from Youtube!" },
        ],
      },
    };
  },
  methods: {
    addTwoot(twoot) {
      this.user.twoots.unshift({
        id: this.user.twoots.length + 1,
        content: twoot,
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.user-profile {
  display: grid;
  grid-gap: 50px;
  grid-template-columns: 1fr 3fr;
  /* width: 100%; */

  padding: 50px 5%;

  .user-profile__user-panel {
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    border: 1px solid #dfe3e8;
    margin-bottom: auto;

    h1 {
      margin: 0;
    }

    .user-profile__admin-badge {
      background: rebeccapurple;
      color: white;
      border-radius: 5px;
      margin-right: auto;
      padding: 0 10px;
      font-weight: bold;
    }
  }

  .user-profile__create-twoot {
    display: flex;
    flex-direction: column;

    border-top: 1px solid #dfe3e8;
    padding-top: 20px;

    &.--exceeded {
      color: red;
      border-color: red;

      button {
        background: red;
        border: none;
        color: white;
      }
    }
  }
}

.user-profile__twoots-wrapper {
  display: grid;
  grid-gap: 10px;
}
</style>
