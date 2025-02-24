const siteNavHamburger = document.querySelector('#site-nav-hamburger')
const mobileSiteNavClose = document.querySelector('#mobile-site-nav-close')
const mobileSiteNavLinks = document.querySelectorAll('.mobile-site-nav-link')

siteNavHamburger.addEventListener('click', () => {
  document.body.classList.add('show-mobile-nav')
})

mobileSiteNavClose.addEventListener('click', () => {
  document.body.classList.remove('show-mobile-nav')
})

for (const mobileSiteNavLink of mobileSiteNavLinks) {
  const url = new URL(mobileSiteNavLink.href)

  if (isInternalPageLink(url)) {
    mobileSiteNavLink.addEventListener('click', (e) => {
      document.body.classList.remove('show-mobile-nav')
    })
  }
}

function isInternalPageLink(url) {
  return (
    url.origin === window.location.origin &&
    url.pathname === window.location.pathname
  )
}

window.addEventListener('load', () => {
  const bgImgSections = document.querySelectorAll('[data-bg-img]')

  setTimeout(() => {
    for (const section of bgImgSections) {
      section.style.backgroundImage = `url(${section.dataset.bgImg})`
    }
  }, 0)
})

const banner = document.querySelector('.banner')

if (banner) {
  const bannerContainer = banner.querySelector('.banner-container')

  window.addEventListener('scroll', () => {
    console.log(window.scrollY)
    bannerContainer.style.transform = `translateX(${-window.scrollY * 0.5}px)`
  })
}