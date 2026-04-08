document.addEventListener('DOMContentLoaded', function () {
    const galleryContainer = document.getElementById('gallery');
    const wipGalleryContainer = document.getElementById('wipGallery');

    // Function to create image containers
    
// Update the function to read from objects:
function createImageContainers(container, items) {
    items.forEach(item => {
        const url = typeof item === 'string' ? item : item.url;
        const title = item.title || '';
        const description = item.description || '';
        const year = item.year || '';

        const imgContainer = document.createElement('div');
        imgContainer.classList.add('img-container');

        const img = document.createElement('img');
        img.src = url;
        img.alt = title || 'Gallery Image';

        const overlay = document.createElement('div');
        overlay.classList.add('overlay');

        const overlayImg = document.createElement('img');
        overlayImg.src = url;
        overlayImg.alt = title || 'Gallery Image Overlay';

        overlay.appendChild(overlayImg);

        // Build caption only if title or description exists
        if (title || description) {
            const caption = document.createElement('div');
            caption.classList.add('img-caption');

            if (title) {
                const titleEl = document.createElement('span');
                titleEl.classList.add('img-caption-title');
                titleEl.textContent = title;
                caption.appendChild(titleEl);
            }
            if (description) {
                const descEl = document.createElement('span');
                descEl.classList.add('img-caption-desc');
                descEl.textContent = description;
                caption.appendChild(descEl);
            }
            if (year) {
                const yearEl = document.createElement('span');
                yearEl.classList.add('img-caption-year');
                yearEl.textContent = year;
                caption.appendChild(yearEl);
            }
            imgContainer.appendChild(caption);
        }

        imgContainer.appendChild(img);
        imgContainer.appendChild(overlay);
        container.appendChild(imgContainer);

        imgContainer.addEventListener('click', function () {
            imgContainer.classList.toggle('expanded');
        });
    });
}

    // Example image URLs
    const galleryImageUrls = [
        { url: 'images/artworks/ellenjoe.png', title: 'Ellen Joe', description: 'Character fanart', year: '2024'},
        { url: 'images/artworks/miyabifinished.png', title: 'Miyabi', description: 'Character fanart', year: '2025' },
        { url: 'images/artworks/ronova.jpg', title: 'Ronova', description: 'Character fanart', year: '2025' },

        { url: 'images/artworks/jane-doeprogress.gif', title: 'Jane Doe from ZZZ Progression', description: 'Character fanart', year: '2025' },
        { url: 'images/artworks/mesmmerprogress.gif', title: 'Mesmer from Elden Ring Progression', description: 'Character fanart', year: '2025' },
        { url: 'images/artworks/ellenprogress.gif', title: 'Ellen Joe from ZZZ Progression', description: 'Character fanart', year: '2025' },

        { url: 'images/artworks/jiropfp.png', title: 'Profile OC', description: 'OC', year: '2025' },
        { url: 'images/artworks/banner gif_2.gif', title: 'Animation OC', description: 'OC', year: '2025' },
        { url: 'images/artworks/Jane DoeFanart.jpg', title: 'Jane Doe from ZZZ', description: 'Character fanart', year: '2024' },

        { url: 'images/artworks/SachipiecePNG.png', title: 'Vtuber Commision', description: 'Commission Art', year: '2024' },
        { url: 'images/artworks/mesmmer.png', title: 'Mesmer from Elden Ring', description: 'Character fanart', year: '2024' },
        { url: 'images/artworks/nulgath weaponfinal.png', title: 'Weapon Art', description: 'Weapon Contest Winner AQW Link: https://surl.li/wchbpz', year: '2024' },

        { url: 'images/artworks/clorindefanart.png', title: 'Clorinde From Genshin Impact', description: 'Commission Art', year: '2024' },
        { url: 'images/artworks/rainhoeNewYear.jpg', title: 'Rainhoe Vtuber', description: 'Commission Art', year: '2024' },
        { url: 'images/artworks/Jiroprogressgif.gif', title: 'Jiro Piece Progression', description: 'OC fanart', year: '2023' },

        { url: 'images/artworks/Jiro.jpg', title: 'Jiro Polished Art', description: 'OC fanart', year: '2023' },
        { url: 'images/artworks/Jironot.jpg', title: 'Jiro Unpolished Art', description: 'OC fanart', year: '2023' },
        { url: 'images/artworks/nyxara.jpg', title: 'Character Design Nyxara', description: 'character Design', year: '2023' },

        { url: 'images/artworks/oc1.png', title: 'Original Character', description: 'OC fanart', year: '2023' },
        { url: 'images/artworks/rainfanart.png', title: 'Rainhoe Vtuber', description: 'Commissioned Art', year: '2023' },
        { url: 'images/artworks/Toxjin.jpg', title: 'OC', description: 'Banner Art', year: '2020' },
		
        { url: 'images/artworks/toxjin.gif', title: 'OC animation', description: 'OC fanart', year: '2020' },
        { url: 'images/artworks/jiel.jpg', title: 'OC', description: 'Fan Art', year: '2023' },
        { url: 'images/artworks/sorrow.jpg', title: 'OC', description: 'Fan Art', year: '2020' },
		
        { url: 'images/artworks/game characnew.jpg', title: 'Aqw Character Art', description: 'Fanart', year: '2020' },
        { url: 'images/artworks/dragonbornnewmark.jpg', title: 'Aqw Character Art', description: 'Fanart', year: '2020' },
        { url: 'images/artworks/sepnew.jpg', title: 'OC', description: 'Fan Art', year: '2020' },
		
        { url: 'images/artworks/pokemonnew.jpg', title: 'Pokemon Design', description: 'Fanart', year: '2020' },
        { url: 'images/artworks/gunner.jpg', title: 'Aqw Character Art', description: 'Fan Art', year: '2020' },
        { url: 'images/artworks/infecnew.jpg', title: 'OC', description: 'Character Design', year: '2020' },

        { url: 'images/artworks/ayana_irys kaiju.jpg', title: 'Commissioned Art', description: 'Commissioned Art Fiver', year: '2020' },
        { url: 'images/artworks/kenny_ gamera kaiju.jpg', title: 'Commissioned Art', description: 'Commissioned Art Fiver', year: '2020' },
        { url: 'images/artworks/barugonnkid.jpg', title: 'Commissioned Art', description: 'Commissioned Art Fiver', year: '2020' },

        { url: 'images/artworks/newpfp.png', title: 'OC new new new pfp', description: 'OC art', year: '2024' },
        { url: 'images/artworks/pfp.png', title: 'OC new new pfp', description: 'OC Art', year: '2023' },
        { url: 'images/artworks/dp121.jpg', title: 'OC new pfp', description: 'OC Art', year: '2019' },
		
        { url: 'images/artworks/naruto.jpg', title: 'Naruto Fanart', description: 'Art for fun', year: '2020' },
        { url: 'images/artworks/toga himiko.jpg', title: 'Toga Himiko', description: 'Commissioned Art Fiver', year: '2020' },
        { url: 'images/artworks/glitchinggirl.jpg', title: 'Commissioned Art', description: 'Commissioned Art Fiver', year: '2020' },

        { url: 'images/artworks/hu tao.jpg', title: 'Hu tao from Genshin Impact', description: 'Fan Art', year: '2021' },
        { url: 'images/artworks/xing.jpg', title: 'Xingqiu from Genshin Impact', description: 'Fan Art', year: '2021' },
        { url: 'images/artworks/warrior seraph.jpg', title: 'Aqw character Art', description: 'Fan Art', year: '2018' },
       
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

