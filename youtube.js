const recommendVideos = [
    { title: "What are Input Controls? User Interface(UI) Design Elements.", description: "Club UX", videoID: "D-jl1E-_WBE", views: "1.8K views" },
    { title: "What is Container in User Interface(UI) Design", description: "Club UX", videoID: "POtqGPrjdMI", views: "1.5K views" },
    { title: "UI Design Essentials: Creating Buttons in Design Systems", description: "DesignCode", videoID: "jts39CN4fLk", views: "8.5K views" },
    { title: "UI and UX Design Course: Navigation", description: "Kerev Design", videoID: "-Iwf6tecoZ8", views: " 3.5K views" },
    { title: "Toggle or Checkbox? UI Design Tips 6", description: "Malewicz", videoID: "ZpROQCLO56Q", views: "8.5K views" },
    { title: "Material UI Tutorial #7 - Text Fields", description: "Net Ninja", videoID: "sTdt2cJS2dg", views: "113K views" },
    { title: "UI Elements/Components | Types and Importance of UI Elements", description: "uxable - learning ux together", videoID: "roF6ocfArK0", views: "12K views"},
    { title: "Create a DROPDOWN MENU in Figma (Tutorial)", description: "Mavi Design", videoID: "uI3k9Ol-Mp4", views: "579K views" },
    { title: "Create Interactive Radio Buttons in Figma-2 Methods (Free Project Files Included)", description: "UxDan", videoID: "mWIJghK6YiM", views: "2.1K views" },
    { title: "Daily UI - Day 056 - Breadcrumbs", description: "Caler Edwards", videoID: "1zSKJgzd5fw", views: " 6.5K views" },
    { title: "Slider UI Animation Tutorial - Adding Motion to your Designs", description: "Caler Edwards", videoID: "PECpQBSnEIQ", views: "18K views" },
    { title: "How to use icons in UI design", description: "Nick Babich", videoID: "L9keN02a_qw", views: "1.2K views" },
];

const shortVideos = [
  { title: "What do UX Designers actually do? Ft. Microsoft UX Designer", videoID: "2Q9pFMwi3cs", views: " 553K views"},
  { title: "The Future of UI/UX Design", videoID: "SRWLLJ6h5l4", views: "153K views"},
  { title: "App UI Design with Adobe XD", videoID: "mZvB7ksm9PI", views: "350K views" },
  { title: "What is UI and UX Design?", videoID: "rKqwGUMGbq8", views: "24K views" },
  { title: "The Difference between UI and UX Design", videoID: "Ar_rFTRO8P4", views: "40K views" },
  { title: "Unveiling UI/UX Designers' Psychology Hacks!", videoID: "7-CEqe3IZmo", views: "29 views" },
  { title: "Color Psychology Hacks for Stunning UI/UX Design", videoID: "LvVyNzLTlZU", views: "54 views" },
  { title: "How Does Psychology In UI/UX Affect User Behavior?|Intellipaat", videoID: "elje7bnAL-s", views: "11K views"},
  { title: "7 Psychology Rules in UX Design and Product Design", videoID: "2voBm_EWldw", views: "2.3K views" },
];

const channels = [
  { 
    name: "Club UX", 
    url: "https://www.youtube.com/@ClubUX", 
    logo: "youtubesubs/clubux.jpg" 
  },
  { 
    name: "DesignCode", 
    url: "https://www.youtube.com/@DesignCodeTeam", 
    logo: "youtubesubs/designcode.jpg" 
  },
  { 
    name: "Kerev Design", 
    url: "https://www.youtube.com/@KerevDesign", 
    logo: "youtubesubs/kerev.jpg"  
  },
  { 
    name: "Malewicz", 
    url: "https://www.youtube.com/@MalewiczHype", 
    logo: "youtubesubs/malewicz.jpg" 
  },
  { 
    name: "Net Ninja", 
    url: "https://www.youtube.com/@NetNinja", 
    logo: "youtubesubs/ninja.jpg"  
  },
  { 
    name: "uxable - learning ux together", 
    url: "https://www.youtube.com/@uxable-learninguxtogether5943", 
    logo: "youtubesubs/uxable.jpg"  
  },
  { 
    name: "Mavi Design", 
    url: "https://www.youtube.com/@mavidesign", 
    logo: "youtubesubs/mavi.jpg"  
  },
  { 
    name: "UxDan", 
    url: "https://www.youtube.com/@uxdanio", 
    logo: "youtubesubs/dan.jpg"  
  },
  { 
    name: "Caler Edwards", 
    url: "https://www.youtube.com/@CalerEdwards", 
    logo: "youtubesubs/caler.jpg"  
  },
  { 
    name: "Nick Babich", 
    url: "https://www.youtube.com/@babichnick", 
    logo: "youtubesubs/nick.jpg"  
  }
];

function renderSubscriptions() {
  const subscriptionsList = document.querySelector('.subscriptions ul');
  subscriptionsList.innerHTML = '';

  channels.forEach(channel => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = channel.url;
    link.target = "_blank";

    const logo = document.createElement('img');
    logo.src = channel.logo;
    logo.alt = `${channel.name} logo`;
    logo.classList.add('channel-logo');

    link.appendChild(logo);
    link.appendChild(document.createTextNode(channel.name));

    listItem.appendChild(link);
    subscriptionsList.appendChild(listItem);
  });
}

renderSubscriptions();




function displayThumbnails() {
  const topThumbnailsContainer = document.querySelector('.top-thumbnails');
  const bottomThumbnailsContainer = document.querySelector('.bottom-thumbnails');
  topThumbnailsContainer.innerHTML = "";
  bottomThumbnailsContainer.innerHTML = "";

  const screenWidth = window.innerWidth;

  if (screenWidth > 1500) {
    recommendVideos.forEach((video) => {
      const thumbnailElement = document.createElement('div');
      thumbnailElement.classList.add('thumbnail');
      thumbnailElement.innerHTML = `
        <a href="playback.html?videoID=${video.videoID}">
          <img src="https://img.youtube.com/vi/${video.videoID}/0.jpg" alt="${video.title}" class="video-thumbnail" />
          <div class="info">
            <div class="title">${video.title}</div>
            <div class="description">${video.description}</div>
            <div class="extra-info"><span class="views">${video.views}</span></div>
          </div>
        </a>
      `;
      topThumbnailsContainer.appendChild(thumbnailElement);
    });
    bottomThumbnailsContainer.parentElement.style.display = 'none';
  } else {
    const topVideos = recommendVideos.slice(0, 6);
    const bottomVideos = recommendVideos.slice(6);

    topVideos.forEach((video) => {
      const thumbnailElement = document.createElement('div');
      thumbnailElement.classList.add('thumbnail');
      thumbnailElement.innerHTML = `
        <a href="playback.html?videoID=${video.videoID}">
          <img src="https://img.youtube.com/vi/${video.videoID}/0.jpg" alt="${video.title}" class="video-thumbnail" />
          <div class="info">
            <div class="title">${video.title}</div>
            <div class="description">${video.description}</div>
            <div class="extra-info"><span class="views">${video.views}</span></div>
          </div>
        </a>
      `;
      topThumbnailsContainer.appendChild(thumbnailElement);
    });

    bottomVideos.forEach((video) => {
      const thumbnailElement = document.createElement('div');
      thumbnailElement.classList.add('thumbnail');
      thumbnailElement.innerHTML = `
        <a href="playback.html?videoID=${video.videoID}">
          <img src="https://img.youtube.com/vi/${video.videoID}/0.jpg" alt="${video.title}" class="video-thumbnail" />
          <div class="info">
            <div class="title">${video.title}</div>
            <div class="description">${video.description}</div>
            <div class="extra-info"><span class="views">${video.views}</span></div>
          </div>
        </a>
      `;
      bottomThumbnailsContainer.appendChild(thumbnailElement);
    });

    bottomThumbnailsContainer.parentElement.style.display = 'block';
  }
}

window.onload = displayThumbnails;
window.onresize = displayThumbnails;








function displayShorts() {
  const shortsContainer = document.querySelector('.shorts-container');
  shortsContainer.innerHTML = "";

  const screenWidth = window.innerWidth;
  let shortsToShow;

  if (screenWidth > 1500) {
    shortsToShow = shortVideos.length;
  } else {
    shortsToShow = 5;
  }

  shortVideos.slice(0, shortsToShow).forEach((video) => {
    const shortElement = document.createElement('div');
    shortElement.classList.add('short');

    shortElement.innerHTML = `
      <a href="playback.html?videoID=${video.videoID}">
        <img src="https://img.youtube.com/vi/${video.videoID}/0.jpg" alt="${video.title}" class="short-thumbnail" />
        <div class="title">${video.title}</div>
        <div class="extra-info"><span class="views">${video.views}</span></div>
      </a>
    `;

    shortsContainer.appendChild(shortElement);
  });
}

window.onload = function() {
  displayThumbnails();
  displayShorts();
};

window.onresize = function() {
  displayThumbnails();
  displayShorts();
};



function searchVideos() {
  const searchInput = document.getElementById('search').value;
  console.log("Searching for:", searchInput);
}

function voiceSearch() {
  alert("Voice search functionality coming soon!");
}





