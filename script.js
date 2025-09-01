// Blog data with nested entries
const blogPosts = [
    {
        id: 1,
        title: "Blogs",
        date: "",
        excerpt: "ZAIA fan sharing event experiences",
        hasSubEntries: true,
        image: "https://via.placeholder.com/200x200/ff69b4/ffffff?text=PC",
        subEntries: [
            {
                id: "events",
                title: "Paul Christian Tan - Blogs",
                date: "2025-08-29",
                image: "assets/img/blog-images/Bmain.jpg",
                isCategory: true
            }
        ],
        content: `
            <h1>Blogs of ZAIA</h1>
            <div class="date">Paul Christian Tan</div>
            <p>Sharing my KAIA event experiences and memories.</p>
        `
    },
    {
        id: 2,
        title: "Youtube Videos",
        date: "",
        excerpt: "YouTube channel featuring KAIA videos",
        hasSubEntries: true,
        image: "https://via.placeholder.com/200x200/ff69b4/ffffff?text=A",
        subEntries: [
            {
                id: "201",
                title: "Anonnym111 - KAIA Videos",
                date: "2025-07-05",
                image: "assets/img/blog-images/profile1.jpg"
            },
            {
                id: "202",
                title: "KaiaClips - KAIA Videos",
                date: "2025-08-23",
                image: "assets/img/blog-images/profile2.jpg"
            },
            {
                id: "203",
                title: "MARL - KAIA Videos",
                date: "2025-09-01",
                image: "assets/img/blog-images/profile1.jpg"
            }
        ],
        content: `
            <h1>Anonnym111</h1>
            <div class="date">YouTube Channel</div>
            <p>YouTube channel featuring KAIA performances and content.</p>
        `
    }
];

// Events data for Paul Christian Tan
const eventsData = [
            {
                id: "11",
                title: "Wish Bus: Walang Biruan",
                date: "2024-10-29",
                image: "assets/img/blog-images/Bmain.jpg"
            },
            {
                id: "12",
                title: "KPOPCON 12",
                date: "2024-12-29",
                image: "assets/img/blog-images/Bmain2.jpg"
            },
            {
                id: "13",
                title: "Backyard Live",
                date: "2025-01-26",
                image: "assets/img/blog-images/Bmain3.jpg"
            },
            {
                id: "14",
                title: "PINID National Arts Month",
                date: "2025-02-26",
                image: "assets/img/blog-images/Bmain4.jpg"
            },
            {
                id: "15",
                title: "SHE SLAYS CON 2025",
                date: "2025-03-30",
                image: "assets/img/blog-images/Bmain5.jpg"
            }
];

// Sub-entry content data
const subEntryContent = {
    "11": `
        <h1>Wish Bus: Walang Biruan</h1>
        <div class="date">October 29, 2024</div>
        <img src="assets/img/blog-images/Bmain.jpg" alt="Wish Bus main photo">
        <p>What an incredible experience being part of the Wish Bus: Walang Biruan event! KAIA performed "Walang Biruan" and "You Did It" at Piazza Entrance, Venice Grand Canal, BGC Taguig last October 29, 2024.</p>
        <div class="image-gallery container-bx5">
            <img src="assets/img/blog-images/B1.jpg">
            <img src="assets/img/blog-images/B2.jpg">
            <img src="assets/img/blog-images/B3.jpg">
            <img src="assets/img/blog-images/B4.jpg">
            <img src="assets/img/blog-images/B5.jpg">
        </div>
    `,
    "12": `
        <h1>KPOPCON 12</h1>
        <div class="date">December 29, 2024</div>
        <img src="assets/img/blog-images/Bmain2.jpg" alt="KPOPCON12 KAIA Photo">
        <p>KPOP Convention 12 lit up SPACE, One Ayala Makati last December 29, 2024.</p>
        <div class="image-gallery container-bx2">
            <img src="assets/img/blog-images/B6.jpg" alt="KPOPCON12: Meet and Greet Image 1">
            <img src="assets/img/blog-images/B7.jpg" alt="KPOPCON12: Meet and Greet Image 2">
        </div>
    `
};

// Function to display blog posts on the main page
function displayBlogPosts() {
    const postsContainer = document.getElementById('posts-container');
    if (!postsContainer) return;

    postsContainer.innerHTML = '';
    
    blogPosts.forEach(post => {
        const postCard = document.createElement('div');
        postCard.className = 'post-card';
        
        let subEntriesHtml = '';
        if (post.hasSubEntries && post.subEntries) {
            subEntriesHtml = `
                <div class="sub-entries">
                    <div class="thumbnails-grid">
                        ${post.subEntries.map(subEntry => `
                            <div class="thumbnail" data-id="${subEntry.id}">
                                <img src="${subEntry.image || 'https://via.placeholder.com/200x150/ff69b4/ffffff?text=No+Image'}" alt="${subEntry.title}">
                                <div class="thumbnail-info">
                                    <span class="thumbnail-title">${subEntry.title}</span>
                                    <span class="thumbnail-date">${formatDate(subEntry.date)}</span>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }
        
        postCard.innerHTML = `
            <h2 class="post-title">${post.title}</h2>
            <p class="post-excerpt">${post.excerpt}</p>
            ${subEntriesHtml}
        `;
        
        postCard.addEventListener('click', (e) => {
            if (e.target.closest('.thumbnail')) {
                const subId = e.target.closest('.thumbnail').dataset.id;
                if (subId === 'events') {
                    showEventsGrid();
                } else {
                    window.location.href = `post.html?id=${subId}&type=sub`;
                }
            } else if (!e.target.closest('.sub-entries')) {
                window.location.href = `post.html?id=${post.id}`;
            }
        });
        
        postsContainer.appendChild(postCard);
    });
}

// Function to display individual post
function displayPost() {
    const postContent = document.getElementById('post-content');
    if (!postContent) return;

    const urlParams = new URLSearchParams(window.location.search);
    const postId = parseInt(urlParams.get('id'));
    const postType = urlParams.get('type');
    
    if (postType === 'sub') {
        const subId = urlParams.get('id');
        const content = subEntryContent[subId];
        if (content) {
            postContent.innerHTML = `<div class="post-content">${content}</div>`;
        } else {
            postContent.innerHTML = '<div class="post-content"><h1>Sub-entry not found</h1><p>The requested sub-entry could not be found.</p></div>';
        }
    } else {
        const post = blogPosts.find(p => p.id === postId);
        if (post) {
            postContent.innerHTML = `<div class="post-content">${post.content}</div>`;
        } else {
            postContent.innerHTML = '<div class="post-content"><h1>Post not found</h1><p>The requested post could not be found.</p></div>';
        }
    }
    
    setupImageModal();
}

// Function to setup image modal
function setupImageModal() {
    if (!document.getElementById('image-modal')) {
        const modal = document.createElement('div');
        modal.id = 'image-modal';
        modal.className = 'image-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <img class="modal-image" src="" alt="">
            </div>
        `;
        document.body.appendChild(modal);
    }
    
    const modal = document.getElementById('image-modal');
    const modalImg = modal.querySelector('.modal-image');
    const closeBtn = modal.querySelector('.close-modal');
    
    document.querySelectorAll('.image-gallery img').forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', () => {
            modal.style.display = 'block';
            modalImg.src = img.src;
            modalImg.alt = img.alt;
        });
    });
    
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Function to format date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Function to show events grid
function showEventsGrid() {
    const postsContainer = document.getElementById('posts-container');
    if (!postsContainer) return;

    postsContainer.innerHTML = `
        <div class="back-button" onclick="displayBlogPosts()" style="margin-bottom: 20px; cursor: pointer; color: #ff69b4;">← Back to Profiles</div>
        <h1>Event Blogs by Paul Christian Tan</h1>
        <div class="thumbnails-grid">
            ${eventsData.map(event => `
                <div class="thumbnail" data-id="${event.id}" onclick="window.location.href='post.html?id=${event.id}&type=sub&from=events'">
                    <img src="${event.image || 'https://via.placeholder.com/200x150/ff69b4/ffffff?text=No+Image'}" alt="${event.title}">
                    <div class="thumbnail-info">
                        <span class="thumbnail-title">${event.title}</span>
                        <span class="thumbnail-date">${formatDate(event.date)}</span>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('posts-container')) {
        displayBlogPosts();
    } else if (document.getElementById('post-content')) {
        displayPost();
    }
});