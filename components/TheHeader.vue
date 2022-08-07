<template>
  <header>
    <div class="container">
      <div class="header-wrapper">
        <div class="brand-log">
          <nuxt-link> Home </nuxt-link>
        </div>
        <nav>
          <ul>
            <li>
              <nuxt-link to="/"> Home </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/about"> About </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/contact"> Contact </nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<style>
  header {
    background-color: #f9f9f9;
    padding: 5px 0;
  }
  .header-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .brand-log {
    font-weight: 600;
  }
  nav ul {
    list-style: none;
    display: flex;
    gap: 25px;
    align-items: center;
    margin-top: revert;
  }
  nav ul li a {
    color: #222;

    text-decoration: none;
  }
  nav ul li a:hover {
    color: #0070f3;
  }
</style>
