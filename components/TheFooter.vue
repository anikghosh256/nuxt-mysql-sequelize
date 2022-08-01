<template>
<footer>
  <div class="container">
    <div class="wrapper">
  <div class="footer-item footer-1">
    <div class="footer-widget">
      <div class="footer-widget-title">
        <h3>About Us</h3>
      </div>
      <div class="footer-widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quos, quisquam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quos, quisquam.</p>
      </div>
    </div>
  </div>
  <div class="footer-item footer-2">
    <div class="footer-widget">
      <div class="footer-widget-title">
        <h3>Recent Posts</h3>
      </div>
      <div class="footer-widget-content">
        <ul>
          <li>
            <a href="#">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</a>
          </li>
          <li>
            <a href="#">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</a>
          </li>
          <li>
            <a href="#">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="footer-item footer-3">
    <div class="footer-widget">
      <div class="footer-widget-title">
        <h3>Contact Us</h3>
      </div>
      <div class="footer-widget-content">
        <ul>
          <li>
            <a href="#">Lorem ipsum</a>
          </li>
          <li>
            <a href="#">Dolor sit </a>
          </li>
          <li>
            <a href="#"> Consectetur adipisicing</a>
          </li>
          <li>
            <a href="#">Lorem ipsum</a>
          </li>
          <li>
            <a href="#">Dolor sit </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="footer-item footer-4">
    <div class="footer-widget">
      <div class="footer-widget-title">
        <h3>Subscribe</h3>
      </div>
      <div class="footer-widget-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam</p>
        <form action="#" method="post">
          <input type="text" placeholder="Enter your email">
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  </div>
  </div>
  </div>
</footer>
</template>

<style >
  footer {
    background-color: #f9f9f9;
    padding: 40px 0;
    
  }
  .wrapper{
    display: flex;
    gap: 20px;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: flex-start;
    box-sizing: border-box;
  }
  .footer-item {
    width: calc(25% - 20px);
  }
  .footer-widget-content ul {
    padding: 0 20px ;
  }
  .footer-widget-content ul li {
      margin-bottom: 10px;
    }
  .footer-widget-content ul li a {
    color: #222;
    text-decoration: none;
    
  }
  .footer-widget-content ul li a:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 768px) {
    .footer-item {
      width: calc(50% - 20px);
    }
  }
  @media screen and (max-width: 480px) {
    .footer-item {
      width: 100%;
    }
  }
  .footer-widget-content input{
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
  }
  .footer-widget-content button{
    background-color: #222;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    margin-bottom: 10px;
    cursor: pointer;
  }

</style>