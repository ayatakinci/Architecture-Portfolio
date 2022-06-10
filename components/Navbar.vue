<template>
  <div
    data-collapse="medium"
    data-animation="default"
    data-duration="400"
    data-w-id="58db7844-5919-d71b-dd74-2323ed8dffe9"
    data-easing="ease"
    data-easing2="ease"
    role="banner"
    class="header w-nav"
    style="opacity: 1"
  >
    <div class="container-default w-container">
      <div class="header-wrapper">
        <div class="split-content header-right">
          <a
            href="/"
            aria-current="page"
            class="brand w-nav-brand w--current"
            aria-label="home"
            ><img
              src="~/assets/image/Logo.png"
              alt="You X Webflow Template - Logo"
              class="header-logo"
          /></a>
        </div>
        <div class="split-content header-center">
          <nav role="navigation" class="nav-menu w-nav-menu">
            <ul role="list" class="header-navigation">
              <li class="nav-item-wrapper">
                <a href="/" aria-current="page" class="nav-link w--current opacity">Home</a>
              </li>
              <li class="nav-item-wrapper">
                <a href="/about" class="nav-link opacity">About</a>
              </li>
              <li class="nav-item-wrapper">
                <a href="/portfolio" class="nav-link opacity">Portfolio</a>
              </li>
              <li class="nav-item-wrapper">
                <div
                  data-hover="false"
                  data-delay="0"
                  data-w-id="db29b40c-7868-3d9a-45ad-267063d37dd8"
                  class="nav-link-dropdown w-dropdown"
                  style="max-width: 1248px"
                >
                  <div
                    class="nav-link dropdown w-dropdown-toggle "
                    id="w-dropdown-toggle-0"
                    aria-controls="w-dropdown-list-0"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    role="button"
                    tabindex="0"
                  >
                    <div class="nav-link opacity"><NuxtLink to="/ProjectPage">Projects</NuxtLink></div>
                   
                  </div>
                </div>
              </li>
            </ul>
            <a
              href="mailto:john@you.com"
              class="email-header-wrapper show-mobile w-inline-block"
              ><img
                src="https://assets.website-files.com/61129bb2ecedf803564c68ec/6112a4fa0865622bd03376a4_email-icon-personal-x-template.svg"
                alt="Email Icon - You X Webflow Template"
                class="image email-header-icon"
              />
              <div>gulcatay.mimar@gmail.com</div></a
            >
          </nav>

          <div
            class="menu-button w-nav-button"
            id="btn"
            onclick="myFunction()"
            style="-webkit-user-select: text"
            aria-label="menu"
            role="button"
            tabindex="0"
            aria-controls="w-nav-overlay-0"
            aria-haspopup="menu"
            aria-expanded="false"
          >
            <div class="menu-button-icon-main-wrapper">
              <div class="menu-button-icon-wrapper">
                <div class="menu-icon-line-top"></div>
                <div class="menu-icon-line-middle"></div>
                <div class="menu-icon-line-bottom"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="split-content header-left">
          <a
            href="mailto:john@you.com"
            class="email-header-wrapper w-inline-block"
            ><img
              src="https://assets.website-files.com/61129bb2ecedf803564c68ec/6112a4fa0865622bd03376a4_email-icon-personal-x-template.svg"
              alt="Email Icon - You X Webflow Template"
              class="image email-header-icon"
            />
            <div>gulcatay.mimar@gmail.com</div></a
          >
        </div>
      </div>
    </div>
  
  </div>
</template>
<script>
  export default {
    data: () => ({
      
    }),
    mounted() {
      const recaptchaScript = document.createElement('script')
      recaptchaScript.setAttribute('src', 'https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=61129bb2ecedf803564c68ec')
      document.head.appendChild(recaptchaScript)

      const deneme = document.createElement('script')
      deneme.setAttribute('src', 'https://assets.website-files.com/61129bb2ecedf803564c68ec/js/webflow.19742290c.js')
      document.head.appendChild(deneme)
    },
    methods: {
      
    }
  }
</script>