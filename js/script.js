document.addEventListener('DOMContentLoaded', function () {
    const galleryContainer = document.getElementById('gallery');
    const wipGalleryContainer = document.getElementById('wipGallery');

    // Function to create image containers
    function createImageContainers(container, urls) {
        urls.forEach(url => {
            const imgContainer = document.createElement('div');
            imgContainer.classList.add('img-container');

            const img = document.createElement('img');
            img.src = url;
            img.alt = 'Gallery Image';

            const overlay = document.createElement('div');
            overlay.classList.add('overlay');

            const overlayImg = document.createElement('img');
            overlayImg.src = url;
            overlayImg.alt = 'Gallery Image Overlay';

            overlay.appendChild(overlayImg);
            imgContainer.appendChild(img);
            imgContainer.appendChild(overlay);
            container.appendChild(imgContainer);

            // Add click event listener to each image container
            imgContainer.addEventListener('click', function () {
                imgContainer.classList.toggle('expanded');
            });
        });
    }

    // Example image URLs
    const galleryImageUrls = [
        'images/artworks/ellenjoe.png',
        'images/artworks/miyabifinished.png',
		'images/artworks/ronova.jpg',

        'images/artworks/jane-doeprogress.gif',
        'images/artworks/mesmmerprogress.gif',
		'images/artworks/ellenprogress.gif',

        'images/artworks/jiropfp.png',
        'images/artworks/banner gif_2.gif',
		'images/artworks/Jane DoeFanart.jpg',

        'images/artworks/SachipiecePNG.png',
        'images/artworks/mesmmer.png',
		'images/artworks/nulgath weaponfinal.png',

        'images/artworks/clorindefanart.png',
        'images/artworks/rainhoeNewYear.jpg',
		'images/artworks/Jiroprogressgif.gif',

        'images/artworks/Jiro.jpg',
        'images/artworks/Jironot.jpg',
		'images/artworks/nyxara.jpg',
		
		'images/artworks/oc1.png',
		'images/artworks/rainfanart.png',
		'images/artworks/toxjin.jpg',
		
		'images/artworks/toxjin.gif',
		'images/artworks/jiel.jpg',
		'images/artworks/sorrow.jpg',
		
		'images/artworks/game characnew.jpg',
		'images/artworks/dragonbornnewmark.jpg',
		'images/artworks/sepnew.jpg',
		
		'images/artworks/pokemonnew.jpg',
		'images/artworks/gunner.jpg',
		'images/artworks/infecnew.jpg',
		
		'images/artworks/ayana_irys kaiju.jpg',
		'images/artworks/kenny_ gamera kaiju.jpg',
		'images/artworks/barugonnkid.jpg',
		
		'images/artworks/newpfp.png',
		'images/artworks/pfp.png',
		'images/artworks/dp121.jpg',
		
		'images/artworks/naruto.jpg',
		'images/artworks/toga himiko.jpg',
		'images/artworks/glitchinggirl.jpg',
		
		'images/artworks/hu tao.jpg',
		'images/artworks/xing.jpg',
		'images/artworks/warrior seraph.jpg',
       
    ];

    const wipImageUrls = [
        'images/wips/tof.png',
		'images/wips/malenia.png',
		'images/wips/zomviguarna.png',
		
        'images/wips/shogun.png',
		'images/wips/maid.png',
		'images/wips/goth.png',
		
		'images/wips/mena.png',
		'images/wips/raiden.png',
		'images/wips/arc.png',
        
    ];

    // Populate the main gallery
    createImageContainers(galleryContainer, galleryImageUrls);

    // Populate the "Work in Progress" gallery
    createImageContainers(wipGalleryContainer, wipImageUrls);
});
document.addEventListener('DOMContentLoaded', function () {
    const imgBox = document.querySelector('.img33-box');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                imgBox.style.opacity = '1';
                imgBox.style.transform = 'translateY(0)';
                // Add a class for the pop-up transition
                /*imgBox.classList.add('pop-up');*/
                observer.unobserve(imgBox);
            }
        });
    }, options);

    observer.observe(imgBox);
});

document.addEventListener('DOMContentLoaded', function () {
    const imgBox = document.querySelector('.img332-box');

    const options = {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.5, // Trigger when 50% of the element is visible
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                imgBox.style.opacity = '1';
                imgBox.style.transform = 'translateY(0)';
                observer.unobserve(imgBox);
            }
        });
    }, options);

    observer.observe(imgBox);
});
document.addEventListener('DOMContentLoaded', function () {
    const imgBox = document.querySelector('.img121-box');

    const options = {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.5, // Trigger when 50% of the element is visible
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                imgBox.style.opacity = '1';
                imgBox.style.transform = 'translateY(0)';
                observer.unobserve(imgBox);
            }
        });
    }, options);

    observer.observe(imgBox);
});
document.addEventListener('DOMContentLoaded', function () {
    const infosec = document.querySelector('.info_section');

    const options = {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.5, // Trigger when 50% of the element is visible
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                infosec.style.opacity = '1';
                infosec.style.transform = 'translateY(0)';
                observer.unobserve(infosec);
            }
        });
    }, options);

    observer.observe(infosec);
});

document.addEventListener('DOMContentLoaded', function () {
    const commissionSection = document.querySelector('.commission_section');
    let lastScrollPosition = window.scrollY;

    window.addEventListener('scroll', function () {
        const currentScrollPosition = window.scrollY;

        if (currentScrollPosition > lastScrollPosition) {
            // Scrolling down
            commissionSection.classList.add('scrolled-up');
        } else {
            // Scrolling up
            commissionSection.classList.remove('scrolled-up');
        }

        lastScrollPosition = currentScrollPosition;
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const aboutSection = document.querySelector('.about_section');
    let lastScrollPosition = window.scrollY;

    window.addEventListener('scroll', function () {
        const currentScrollPosition = window.scrollY;

        if (currentScrollPosition > lastScrollPosition) {
            // Scrolling down
            aboutSection.classList.add('scrolled2-up');
        } else {
            // Scrolling up
            aboutSection.classList.remove('scrolled2-up');
        }

        lastScrollPosition = currentScrollPosition;
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const blogSection = document.querySelector('.blog_section');
    let lastScrollPosition = window.scrollY;

    window.addEventListener('scroll', function () {
        const currentScrollPosition = window.scrollY;

        if (currentScrollPosition > lastScrollPosition) {
            // Scrolling down
            blogSection.classList.add('scrolled2-up');
        } else {
            // Scrolling up
            blogSection.classList.remove('scrolled2-up');
        }

        lastScrollPosition = currentScrollPosition;
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const expSection = document.querySelector('.exp_section');
    let lastScrollPosition = window.scrollY;

    window.addEventListener('scroll', function () {
        const currentScrollPosition = window.scrollY;

        if (currentScrollPosition > lastScrollPosition) {
            // Scrolling down
            expSection.classList.add('scrolled2-up');
        } else {
            // Scrolling up
            expSection.classList.remove('scrolled2-up');
        }

        lastScrollPosition = currentScrollPosition;
    });
});
document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('.header');
  const headerOffsetTop = header.offsetTop;

  window.addEventListener('scroll', function () {
    if (window.scrollY >= headerOffsetTop) {
      header.classList.add('sticky');
      header.classList.add('scrolled');
    } else {
      header.classList.remove('sticky');
      header.classList.remove('scrolled');
    }

    // Detect if scrolled to the top
    if (window.scrollY === 0) {
      header.classList.remove('scrolled');
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var infoSection = document.querySelector(".info_section");

  function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function checkVisibility() {
    if (isElementInViewport(infoSection)) {
      infoSection.classList.add("active");
      window.removeEventListener("scroll", checkVisibility);
    }
  }

  // Initial check on page load
  checkVisibility();

  // Check on scroll
  window.addEventListener("scroll", checkVisibility);
});


