<template>
    <router-view data-bs-theme="dark" />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap');

html {
  scroll-behavior: smooth;
}

.light-theme{
    background-color:  #FAF9F6 !important;
    color: #171717 !important;
}
.dark-theme{
    background-color:  #171717 !important;
    color: #FAF9F6 !important;
}

#app {
    font-family: 'Nunito Sans' !important;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}

h1,h2,h3,h4,h5,h6 {
    font-family: 'Montserrat' !important;
    font-weight: bold !important;
}

.fullscreen{
    min-height: 100vh;
    width: calc(100vw - 20px);
    max-width: 1500px;
    /* max-height: 900px; */
}
.centralize{
    display: flex;
    justify-content: center;
    align-items: center;
}
.centralize-col{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

nav {
    padding: 30px;
}

nav a {
    font-weight: bold;
    color: #2c3e50;
}

nav a.router-link-exact-active {
    color: #42b983;
}
</style>
