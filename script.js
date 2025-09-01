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
                image: "assets/img/blog-images/BMain.jpg",
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
                image: "assets/img/blog-images/BMain.jpg"
            },
            {
                id: "12",
                title: "KPOPCON 12",
                date: "2024-12-29",
                image: "assets/img/blog-images/BMain2.JPG"
            },
            {
                id: "13",
                title: "Backyard Live",
                date: "2025-01-26",
                image: "assets/img/blog-images/BMain3.jpg"
            },
            {
                id: "14",
                title: "PINID National Arts Month",
                date: "2025-02-26",
                image: "assets/img/blog-images/BMain4.jpg"
            },
            {
                id: "15",
                title: "SHE SLAYS CON 2025",
                date: "2025-03-30",
                image: "assets/img/blog-images/BMain5.jpg"
            },
            {
                id: "16",
                title: "Vinfast PH KAIA's Meet and Greet",
                date: "2025-04-12",
                image: "assets/img/blog-images/profile2.jpg"
            },
            {
                id: "17",
                title: "KAIA's Anniversary Celebration",
                date: "2025-04-26",
                image: "assets/img/blog-images/profile2.jpg"
            },
            {
                id: "18",
                title: "Huawei Watch Fit 4 Series Launch",
                date: "2025-05-22",
                image: "assets/img/blog-images/profile2.jpg"
            },
            {
                id: "19",
                title: "Realme Mobile Legends Cup Grand Finals",
                date: "2025-06-07",
                image: "assets/img/blog-images/profile2.jpg"
            },
            {
                id: "20",
                title: "PPOPCON: Fete de la Musique",
                date: "2025-06-28",
                image: "assets/img/blog-images/profile2.jpg"
            },
            {
                id: "121",
                title: "Puregold: OPM CON 2025",
                date: "2025-07-05",
                image: "assets/img/blog-images/profile2.jpg"
            },
            {
                id: "122",
                title: "Ult Vibe Live",
                date: "2025-08-02",
                image: "assets/img/blog-images/profile2.jpg"
            },
            {
                id: "123",
                title: "Sophia's 24th Birthday",
                date: "2025-08-21",
                image: "assets/img/blog-images/profile2.jpg"
            },
            {
                id: "124",
                title: "Wish 11th Anniversary",
                date: "2025-08-29",
                image: "assets/img/blog-images/profile2.jpg"
            },
];

// Sub-entry content data
const subEntryContent = {
    "11": `
        <h1>Wish Bus: Walang Biruan</h1>
        <div class="date">October 29, 2024</div>
        <img src="assets/img/blog-images/BMain.jpg" alt="Wish Bus main photo">
        <p>What an incredible experience being part of the Wish Bus: Walang Biruan event! KAIA performed "Walang Biruan" and "You Did It" at Piazza Entrance, Venice Grand Canal, BGC Taguig last October 29, 2024. This was my first KAIA event that I experienced since I became a fan last October 12, 2024 when I discovered their songs through TikTok. The energy was absolutely amazing.</p>
        <div class="image-gallery container-bx5">
            <img src="assets/img/blog-images/B1.JPG">
            <img src="assets/img/blog-images/B2.JPG">
            <img src="assets/img/blog-images/B3.JPG">
            <img src="assets/img/blog-images/B4.JPG">
            <img src="assets/img/blog-images/B5.JPG">
        </div>
        <p>Meeting fellow fans and sharing the excitement together made this day truly special. I even got the chance to have a picture together with the 5 members of the group - Angela, Charice, Charlotte, Sophia, and Alexa! The performances were outstanding and the atmosphere was electric throughout the entire event.</p>
        <p>Here's their amazing performance from that day:</p>
        <div class="video-container">
            <iframe src="https://www.youtube.com/embed/iqySVDyhTVs" title="KAIA performs Walang Biruan LIVE on Wish 107.5 Bus" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <p>I also captured some moments from the event on my TikTok:</p>
        <div class="tiktok-container">
            <iframe src="https://www.tiktok.com/embed/v2/7431194594760461569" title="TikTok video from the event" frameborder="0" scrolling="no" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <p>One of the most heartwarming moments was when Charice actually said hi to me! As a new fan, I was completely starstruck and amazed by how genuine and friendly she was. It's these personal interactions that make you realize how down-to-earth and approachable the members are, despite their rising fame.</p>
        <div class="tiktok-container">
            <iframe src="https://www.tiktok.com/embed/v2/7431502265799806225" title="Charice saying hi - TikTok moment" frameborder="0" scrolling="no" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <p>Every moment was filled with joy, laughter, and unforgettable memories with amazing people. This event will always hold a special place in my heart.</p>
    `,
    "12": `
        <h1>KPOPCON 12</h1>
        <div class="date">December 29, 2024</div>
        <img src="assets/img/blog-images/BMain2.JPG" alt="KPOPCON12 KAIA Photo">
        <p>KPOP Convention 12 lit up SPACE, One Ayala Makati last December 29, 2024. Fans explored a wide variety of K-pop merchandise booths, enjoyed exciting games, and won fun prizes. The event featured high-energy performances from KAIA with Walang Biruan, Dalawa, and their cover of Touch by Katseye. Other amazing acts included PIXIE, 6sense, BILIB, New:ID, FirstOne, and HORIZON. It was a memorable day for every K-pop fan in attendance.</p>
        <div class="image-gallery container-bx2">
            <img src="assets/img/blog-images/B6.JPG" alt="KPOPCON12: Meet and Greet Image 1">
            <img src="assets/img/blog-images/B7.JPG" alt="KPOPCON12: Meet and Greet Image 2">
        </div>
         <p>Each artist had a meet and greet session. I was lucky enough to meet and have a short chat with them, especially KAIA. I gave them a simple gift, and I was genuinely touched by how heartfelt their reactions were. Since the TWICE album I gave Charlotte had Momo on the cover, I asked her who her bias in TWICE is. She told me it’s Dahyun. Interestingly, even though I gave her a Momo cover, I can really see her strong stage presence just like Momo. It was such a fun and meaningful interaction that made the entire experience even more unforgettable.</p>
        <div class="tiktok-container">
            <iframe src="https://www.tiktok.com/embed/v2/7544634435560312081" title="TikTok video from the event: Fanmeet" frameborder="0" scrolling="no" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div class="image-gallery ">
            <img src="assets/img/blog-images/B8.JPG" alt="KPOPCON12: Meet and Greet Image">
        </div>
        <p>These are the ZAIAs (fans) who gathered there for KAIA's meet and greet session. The excitement and support from the fan community was incredible to witness!</p>
         <p>I also captured some moments from the event on my TikTok, including their performances of Walang Biruan and Dalawa.</p>
        <div class="tiktok-container">
            <iframe src="https://www.tiktok.com/embed/v2/7454047107394129168" title="TikTok video from the event: Walang Biruan" frameborder="0" scrolling="no" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe src="https://www.tiktok.com/embed/v2/7454042018113686801" title="TikTok video from the event: Dalawa" frameborder="0" scrolling="no" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <p>KPOPCON 12 was truly an amazing experience that brought together fans from all over the Philippines. The energy, the performances, and the connections made that day will forever be cherished. Events like these remind us why we love K-pop so much - it's not just about the music, but the community and memories we create together.</p>
    `,
    "13": `
        <h1>Backyard Live</h1>
        <div class="date">January 26, 2025</div>
        <img src="assets/img/blog-images/BMain3.jpg" alt="BackyardLive KAIA Photo">
        <p>KAIA lit up the stage in the first-ever episode of Backyard Live, held in an intimate 360-session setup that brought fans closer than ever. Sharing the spotlight with talented artists like Toneejay, Tota, and Ena Mori, KAIA delivered powerful performances of Walang Biruan, Dalawa, You Did It, and KAYA—a set that truly showcased their growth and artistry. An unforgettable night of music and connection.</p>
        <div class="image-gallery container-bx5">
            <img src="assets/img/blog-images/B9.JPG">
            <img src="assets/img/blog-images/B10.JPG">
            <img src="assets/img/blog-images/B11.JPG">
            <img src="assets/img/blog-images/B12.JPG">
            <img src="assets/img/blog-images/B13.JPG">
        </div>
        <p>After the event, I got to take a photo and have a short interaction with the KAIA members. We even did their iconic line intro together: “5, 6, 7, 8... KAIA is here!” They were so warm, down to earth and truly close to their fans. An unforgettable night of music, connection, and genuine moments.</p>
        <p>I also captured some moments from the event on my TikTok:</p>
        <div class="tiktok-container">
            <iframe src="https://www.tiktok.com/embed/v2/7464292763194887441" title="TikTok video from the event: Backyard Live" frameborder="0" scrolling="no" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <p>Here's their amazing performance of Walang Biruan from that day:</p>
        <div class="video-container">
            <iframe src="https://www.youtube.com/embed/BWTRSFt1Q9Y" title="KAIA performs Walang Biruan Backyard Live" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div class="image-gallery container-bx2">
            <img src="assets/img/blog-images/B14.JPG">
            <img src="assets/img/blog-images/B15.JPG">
        </div>
        <p>Backyard Live was more than just a concert—it was a celebration of music, artistry, and the special bond between artists and fans. This intimate setting allowed everyone to experience KAIA's talent up close, creating memories that will last a lifetime.</p>
    `,
    "14": `
        <h1>PINID National Arts Month</h1>
        <div class="date">February 26, 2025</div>
        <img src="assets/img/blog-images/BMain4.jpg" alt="BackyardLive KAIA Photo">
        <p>Celebrating Filipino creativity and artistry during National Arts Month was truly inspiring! On February 26, 2025, KAIA took the stage at PINID: Ang Pagsasara sa Pagdiriwang ng Buwan ng mga Sining held at the Metropolitan Theater in Manila. They delivered powerful performances of "5678," "Kaya," "You Did It," "Walang Biruan," and "Dalawa."</p>
        <div class="image-gallery container-bx5">
            <img src="assets/img/blog-images/B16.JPG">
            <img src="assets/img/blog-images/B17.JPG">
            <img src="assets/img/blog-images/B18.JPG">
            <img src="assets/img/blog-images/B19.JPG">
            <img src="assets/img/blog-images/B20.JPG">
        </div>
        <p>I even got the chance to have a short interaction with KAIA after the event! We also took group photos with them and fellow fans. It was such a surreal and unforgettable moment. Truly grateful for the experience!</p>
        <p>Here's a special moment I captured from the event:</p>
        <div class="image-gallery container-bx1-small">
            <img src="assets/img/blog-images/B21.png">
        </div>
        <div class="video-container">
            <video controls style="width: 100%; height: 100%;">
                <source src="assets/img/blog-images/V1.mp4" type="video/quicktime">
                <source src="assets/img/blog-images/V1.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
        <p>I also captured some moments from the event on my TikTok:</p>
        <div class="tiktok-container">
            <iframe src="https://www.tiktok.com/embed/v2/7476045015421062416" title="TikTok video from the event: PINID" frameborder="0" scrolling="no" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <p>PINID National Arts Month was a beautiful celebration of Filipino talent and creativity. Witnessing KAIA perform at such a prestigious venue like the Metropolitan Theater was truly special. This event reminded me why supporting local artists and celebrating our cultural heritage is so important. Another unforgettable night with KAIA and the amazing ZAIA community!</p>
    
        `,
    "15": `
        <h1>She Slays Con</h1>
        <div class="date">February 26, 2025</div>
        <img src="assets/img/blog-images/BMain5.jpg" alt="BackyardLive KAIA Photo">
        <p>Sophia of KAIA took the spotlight at She Slays 2025: GirlCoded Convention’s Girl Talk: Tell-All Passion Panels, held last March 30, 2025 at One Ayala. She joined an empowering conversation alongside fellow P-pop idols Anne from Calista, and Joyden and Clara from Dione, in an exclusive live interview and fan experience that highlighted passion, purpose, and the spirit of the P-pop community."</p>
        <div class="image-gallery container-bx2">
            <img src="assets/img/blog-images/B22.JPG">
            <img src="assets/img/blog-images/B23.JPG">
        </div>
        <p>Right after the event, we had the amazing opportunity to join a group photo session with KAIA’s Sophia, along with other P-pop idols including Anne from Calista, and Joyden and Clara from Dione. It was a memorable way to wrap up an inspiring and empowering experience.</p>
        <div class="image-gallery container-bx1-small">
            <img src="assets/img/blog-images/B24.JPG">
        </div>
        <p>I got to take a photo and even film a TikTok video with KAIA’s Sophia during the event! We did the “Tanga” line verse together — definitely a highlight of the day!</p>
        <div class="tiktok-container">
            <iframe src="https://www.tiktok.com/embed/v2/7487569585642687761" title="TikTok video from the event: PINID" frameborder="0" scrolling="no" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <p>She Slays Con was an incredible celebration of female empowerment and P-pop talent. Meeting Sophia and the other amazing artists was truly inspiring, and being part of such an empowering event reminded me of the strength and passion within the P-pop community. Another unforgettable experience with KAIA!</p>
    `,
                                                            "202": `
        <h1>All Videos - KaiaClips</h1>
        <div class="date">9/1/2025</div>
        <p>Select a member to view their videos (30 total videos):</p>
        <div class="channel-link" style="margin-bottom: 20px;">
            <a href="https://www.youtube.com/@kaiaclips" target="_blank" rel="noopener noreferrer" style="display: inline-block; padding: 8px 16px; background-color: #ff69b4; color: white; text-decoration: none; border-radius: 6px; font-size: 14px;">Visit KaiaClips Channel</a>
        </div>
        <div class="thumbnails-grid">
            <div class="member-thumbnail" onclick="window.location.href='post.html?id=202Angela&type=sub&from=kaiaclips'">
                <img src="assets/img/blog-images/angela.JPG" alt="Angela">
                <div class="thumbnail-info">
                    <span class="thumbnail-title">Angela</span>
                    <span class="thumbnail-date">8 videos</span>
                </div>
            </div>
            <div class="member-thumbnail" onclick="window.location.href='post.html?id=202Charice&type=sub&from=kaiaclips'">
                <img src="assets/img/blog-images/charice.JPG" alt="Charice">
                <div class="thumbnail-info">
                    <span class="thumbnail-title">Charice</span>
                    <span class="thumbnail-date">1 videos</span>
                </div>
            </div>
            <div class="member-thumbnail" onclick="window.location.href='post.html?id=202Charlotte&type=sub&from=kaiaclips'">
                <img src="assets/img/blog-images/charlotte.JPG" alt="Charlotte">
                <div class="thumbnail-info">
                    <span class="thumbnail-title">Charlotte</span>
                    <span class="thumbnail-date">4 videos</span>
                </div>
            </div>
            <div class="member-thumbnail" onclick="window.location.href='post.html?id=202Alexa&type=sub&from=kaiaclips'">
                <img src="assets/img/blog-images/alexa.JPG" alt="Alexa">
                <div class="thumbnail-info">
                    <span class="thumbnail-title">Alexa</span>
                    <span class="thumbnail-date">5 videos</span>
                </div>
            </div>
            <div class="member-thumbnail" onclick="window.location.href='post.html?id=202Sophia&type=sub&from=kaiaclips'">
                <img src="assets/img/blog-images/sophia.JPG" alt="Sophia">
                <div class="thumbnail-info">
                    <span class="thumbnail-title">Sophia</span>
                    <span class="thumbnail-date">2 videos</span>
                </div>
            </div>
            <div class="member-thumbnail" onclick="window.location.href='post.html?id=202Other&type=sub&from=kaiaclips'">
                <img src="assets/img/blog-images/kaia.JPG" alt="Other">
                <div class="thumbnail-info">
                    <span class="thumbnail-title">Other</span>
                    <span class="thumbnail-date">10 videos</span>
                </div>
            </div>
        </div>
    `,
    "202Angela": `
        <h1>Angela - All Videos</h1>
        <div class="date">9/1/2025</div>
        <p>Angela's videos from KaiaClips (8 videos):</p>
        <div class="video-grid">
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/vQ5MYdfQfwk" title="KAIA Angela LIVE 25.08.19" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Angela LIVE 25.08.19</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/aLFhtqsznvg" title="KAIA Angela LIVE 25.08.07" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Angela LIVE 25.08.07</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/4ewi-gJsrJU" title="KAIA Angela LIVE 25.08.04" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Angela LIVE 25.08.04</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/YSX3mETALTc" title="KAIA Angela LIVE 25.07.23" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Angela LIVE 25.07.23</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/TqgCHzAQE6g" title="KAIA Angela LIVE 25.07.21" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Angela LIVE 25.07.21</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/BAmvwoZDvwc" title="KAIA Angela LIVE 25.07.19" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Angela LIVE 25.07.19</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/LHRO-0rhEvs" title="KAIA Angela LIVE 25.07.16" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Angela LIVE 25.07.16</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/3Gf0TtXkGLw" title="KAIA Angela LIVE 25.07.15" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Angela LIVE 25.07.15</h4>
            </div>
        </div>
    `,
    "202Charice": `
        <h1>Charice - All Videos</h1>
        <div class="date">9/1/2025</div>
        <p>Charice's videos from KaiaClips (1 videos):</p>
        <div class="video-grid">
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/PTTHGt8gWlw" title="KAIA Charice 25.07.13" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Charice 25.07.13</h4>
            </div>
        </div>
    `,
    "202Charlotte": `
        <h1>Charlotte - All Videos</h1>
        <div class="date">9/1/2025</div>
        <p>Charlotte's videos from KaiaClips (4 videos):</p>
        <div class="video-grid">
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/cgYP_qBTP8k" title="KAIA Charlotte LIVE 25.08.13" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Charlotte LIVE 25.08.13</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/RPzC1LxSzzU" title="KAIA Charlotte LIVE 25.08.07" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Charlotte LIVE 25.08.07</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/wwZ-tDIDnPs" title="KAIA Charlotte LIVE 25.07.25" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Charlotte LIVE 25.07.25</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/Egim05O9vv8" title="KAIA Charlotte LIVE 25.06.29" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Charlotte LIVE 25.06.29</h4>
            </div>
        </div>
    `,
    "202Alexa": `
        <h1>Alexa - All Videos</h1>
        <div class="date">9/1/2025</div>
        <p>Alexa's videos from KaiaClips (5 videos):</p>
        <div class="video-grid">
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/zvjTKBnmeQ0" title="KAIA Alexa LIVE 25.08.23" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Alexa LIVE 25.08.23</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/fanABZxIu7Y" title="KAIA Alexa LIVE 25.08.13" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Alexa LIVE 25.08.13</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/IO00grG400I" title="KAIA Alexa LIVE 25.07.21" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Alexa LIVE 25.07.21</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/Vds1UJTKZ90" title="KAIA Alexa LIVE 25.07.20" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Alexa LIVE 25.07.20</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/9U_kzXM9zoA" title="KAIA Alexa LIVE 25.07.16" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Alexa LIVE 25.07.16</h4>
            </div>
        </div>
    `,
    "202Sophia": `
        <h1>Sophia - All Videos</h1>
        <div class="date">9/1/2025</div>
        <p>Sophia's videos from KaiaClips (2 videos):</p>
        <div class="video-grid">
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/lt9Od_KIW9o" title="KAIA Sophia LIVE 25.08.21" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Sophia LIVE 25.08.21</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/bQ26YFSwrOE" title="KAIA Sophia 25.07.13" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Sophia 25.07.13</h4>
            </div>
        </div>
    `,
    "202Other": `
        <h1>Other - All Videos</h1>
        <div class="date">9/1/2025</div>
        <p>Other's videos from KaiaClips (10 videos):</p>
        <div class="video-grid">
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/6cZI44bHUxY" title="KAIA - The Asean Way at ASEAN Day Celebration 2025" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - The Asean Way at ASEAN Day Celebration 2025</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/1eujQoSIATc" title="KAIA - Walang Biruan at ASEAN Day Celebration 2025" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - Walang Biruan at ASEAN Day Celebration 2025</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/FcldKF9YabE" title="KAIA - Dalawa at ASEAN Day Celebration 2025" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - Dalawa at ASEAN Day Celebration 2025</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/Z9MQ7LaT5Oc" title="[ZAIA Vlog] KAIA at SONY ULT Launch [20250802]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>[ZAIA Vlog] KAIA at SONY ULT Launch [20250802]</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/Gh4Nsr7ymZY" title="[ZAIA Vlogs] KAIA at OPM CON 20250705" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>[ZAIA Vlogs] KAIA at OPM CON 20250705</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/mwji5C1uugM" title="[ZAIA Vlog] KAIA AT FETE DE LA MUSIQUE [20250628]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>[ZAIA Vlog] KAIA AT FETE DE LA MUSIQUE [20250628]</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/ib5X063cyNY" title="KAIA - Walang Biruan at DLSU Animusika" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - Walang Biruan at DLSU Animusika</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/4sIBMAX3I_I" title="KAIA - Dalawa at DLSU Animusika" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - Dalawa at DLSU Animusika</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/QYcrq_4X1yA" title="KAIA - Tanga at DLSU Animusika" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - Tanga at DLSU Animusika</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/zNKri28v-3E" title="KAIA - 5678 at DLSU Animusika" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - 5678 at DLSU Animusika</h4>
            </div>
        </div>
    `,
    "202Angela": `
        <h1>Angela - All Videos</h1>
        <div class="date">9/1/2025</div>
        <p>Angela's videos from KaiaClips (8 videos):</p>
        <div class="video-grid">
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/vQ5MYdfQfwk" title="KAIA Angela LIVE 25.08.19" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Angela LIVE 25.08.19</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/aLFhtqsznvg" title="KAIA Angela LIVE 25.08.07" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Angela LIVE 25.08.07</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/4ewi-gJsrJU" title="KAIA Angela LIVE 25.08.04" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Angela LIVE 25.08.04</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/YSX3mETALTc" title="KAIA Angela LIVE 25.07.23" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Angela LIVE 25.07.23</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/TqgCHzAQE6g" title="KAIA Angela LIVE 25.07.21" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Angela LIVE 25.07.21</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/BAmvwoZDvwc" title="KAIA Angela LIVE 25.07.19" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Angela LIVE 25.07.19</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/LHRO-0rhEvs" title="KAIA Angela LIVE 25.07.16" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Angela LIVE 25.07.16</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/3Gf0TtXkGLw" title="KAIA Angela LIVE 25.07.15" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Angela LIVE 25.07.15</h4>
            </div>
        </div>
    `,
    "202Charice": `
        <h1>Charice - All Videos</h1>
        <div class="date">9/1/2025</div>
        <p>Charice's videos from KaiaClips (1 videos):</p>
        <div class="video-grid">
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/PTTHGt8gWlw" title="KAIA Charice 25.07.13" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Charice 25.07.13</h4>
            </div>
        </div>
    `,
    "202Charlotte": `
        <h1>Charlotte - All Videos</h1>
        <div class="date">9/1/2025</div>
        <p>Charlotte's videos from KaiaClips (4 videos):</p>
        <div class="video-grid">
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/cgYP_qBTP8k" title="KAIA Charlotte LIVE 25.08.13" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Charlotte LIVE 25.08.13</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/RPzC1LxSzzU" title="KAIA Charlotte LIVE 25.08.07" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Charlotte LIVE 25.08.07</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/wwZ-tDIDnPs" title="KAIA Charlotte LIVE 25.07.25" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Charlotte LIVE 25.07.25</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/Egim05O9vv8" title="KAIA Charlotte LIVE 25.06.29" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Charlotte LIVE 25.06.29</h4>
            </div>
        </div>
    `,
    "202Alexa": `
        <h1>Alexa - All Videos</h1>
        <div class="date">9/1/2025</div>
        <p>Alexa's videos from KaiaClips (5 videos):</p>
        <div class="video-grid">
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/zvjTKBnmeQ0" title="KAIA Alexa LIVE 25.08.23" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Alexa LIVE 25.08.23</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/fanABZxIu7Y" title="KAIA Alexa LIVE 25.08.13" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Alexa LIVE 25.08.13</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/IO00grG400I" title="KAIA Alexa LIVE 25.07.21" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Alexa LIVE 25.07.21</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/Vds1UJTKZ90" title="KAIA Alexa LIVE 25.07.20" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Alexa LIVE 25.07.20</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/9U_kzXM9zoA" title="KAIA Alexa LIVE 25.07.16" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Alexa LIVE 25.07.16</h4>
            </div>
        </div>
    `,
    "202Sophia": `
        <h1>Sophia - All Videos</h1>
        <div class="date">9/1/2025</div>
        <p>Sophia's videos from KaiaClips (2 videos):</p>
        <div class="video-grid">
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/lt9Od_KIW9o" title="KAIA Sophia LIVE 25.08.21" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Sophia LIVE 25.08.21</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/bQ26YFSwrOE" title="KAIA Sophia 25.07.13" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Sophia 25.07.13</h4>
            </div>
        </div>
    `,
    "202Other": `
        <h1>Other - All Videos</h1>
        <div class="date">9/1/2025</div>
        <p>Other's videos from KaiaClips (10 videos):</p>
        <div class="video-grid">
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/6cZI44bHUxY" title="KAIA - The Asean Way at ASEAN Day Celebration 2025" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - The Asean Way at ASEAN Day Celebration 2025</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/1eujQoSIATc" title="KAIA - Walang Biruan at ASEAN Day Celebration 2025" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - Walang Biruan at ASEAN Day Celebration 2025</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/FcldKF9YabE" title="KAIA - Dalawa at ASEAN Day Celebration 2025" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - Dalawa at ASEAN Day Celebration 2025</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/Z9MQ7LaT5Oc" title="[ZAIA Vlog] KAIA at SONY ULT Launch [20250802]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>[ZAIA Vlog] KAIA at SONY ULT Launch [20250802]</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/Gh4Nsr7ymZY" title="[ZAIA Vlogs] KAIA at OPM CON 20250705" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>[ZAIA Vlogs] KAIA at OPM CON 20250705</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/mwji5C1uugM" title="[ZAIA Vlog] KAIA AT FETE DE LA MUSIQUE [20250628]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>[ZAIA Vlog] KAIA AT FETE DE LA MUSIQUE [20250628]</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/ib5X063cyNY" title="KAIA - Walang Biruan at DLSU Animusika" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - Walang Biruan at DLSU Animusika</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/4sIBMAX3I_I" title="KAIA - Dalawa at DLSU Animusika" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - Dalawa at DLSU Animusika</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/QYcrq_4X1yA" title="KAIA - Tanga at DLSU Animusika" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - Tanga at DLSU Animusika</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/zNKri28v-3E" title="KAIA - 5678 at DLSU Animusika" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - 5678 at DLSU Animusika</h4>
            </div>
        </div>
    `,
    "202Angela": `
        <h1>Angela - KAIA Videos</h1>
        <div class="date">9/1/2025</div>
        <p>Angela's videos from KaiaClips:</p>
        <div class="video-grid">
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/vQ5MYdfQfwk" title="KAIA Angela LIVE 25.08.19" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Angela LIVE 25.08.19</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/aLFhtqsznvg" title="KAIA Angela LIVE 25.08.07" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Angela LIVE 25.08.07</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/4ewi-gJsrJU" title="KAIA Angela LIVE 25.08.04" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Angela LIVE 25.08.04</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/YSX3mETALTc" title="KAIA Angela LIVE 25.07.23" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Angela LIVE 25.07.23</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/TqgCHzAQE6g" title="KAIA Angela LIVE 25.07.21" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Angela LIVE 25.07.21</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/BAmvwoZDvwc" title="KAIA Angela LIVE 25.07.19" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Angela LIVE 25.07.19</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/LHRO-0rhEvs" title="KAIA Angela LIVE 25.07.16" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Angela LIVE 25.07.16</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/3Gf0TtXkGLw" title="KAIA Angela LIVE 25.07.15" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Angela LIVE 25.07.15</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/wokCGoup8c8" title="KAIA Angela LIVE 25.06.14" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Angela LIVE 25.06.14</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/CKfN9kD9al0" title="KAIA Angela LIVE 25.06.10" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Angela LIVE 25.06.10</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/46qfotO8wT8" title="KAIA Angela LIVE 25.05.27" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Angela LIVE 25.05.27</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/Zcdk54LbQK8" title="KAIA Angela LIVE 25.05.24" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Angela LIVE 25.05.24</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/UzCKjaYepKM" title="KAIA Angela LIVE 25.05.19" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Angela LIVE 25.05.19</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/uFuk0246cSg" title="KAIA Angela LIVE 25.04.29" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Angela LIVE 25.04.29</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/nXXGMnxSAXg" title="KAIA Angela LIVE 25.02.28" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Angela LIVE 25.02.28</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/9Vquj3DW0dk" title="KAIA Angela X LIVE 25.02.09" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Angela X LIVE 25.02.09</h4>
            </div>
        </div>
    `,
    "202Charice": `
        <h1>Charice - KAIA Videos</h1>
        <div class="date">9/1/2025</div>
        <p>Charice's videos from KaiaClips:</p>
        <div class="video-grid">
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/PTTHGt8gWlw" title="KAIA Charice 25.07.13" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Charice 25.07.13</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/NOB_547MQfY" title="KAIA Charice LIVE 25.03.02" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Charice LIVE 25.03.02</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/GYUY7sle0lI" title="KAIA Charice X Live 25.02.10" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Charice X Live 25.02.10</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/AckFO61xcX0" title="KAIA Charice X LIVE 25.02.10" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Charice X LIVE 25.02.10</h4>
            </div>
        </div>
    `,
    "202Charlotte": `
        <h1>Charlotte - KAIA Videos</h1>
        <div class="date">9/1/2025</div>
        <p>Charlotte's videos from KaiaClips:</p>
        <div class="video-grid">
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/cgYP_qBTP8k" title="KAIA Charlotte LIVE 25.08.13" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Charlotte LIVE 25.08.13</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/RPzC1LxSzzU" title="KAIA Charlotte LIVE 25.08.07" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Charlotte LIVE 25.08.07</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/wwZ-tDIDnPs" title="KAIA Charlotte LIVE 25.07.25" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Charlotte LIVE 25.07.25</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/Egim05O9vv8" title="KAIA Charlotte LIVE 25.06.29" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Charlotte LIVE 25.06.29</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/C-l1DTVzVqY" title="KAIA Charlotte LIVE 25.05.30" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Charlotte LIVE 25.05.30</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/Vdw4m1i0kdw" title="KAIA Charlotte LIVE 25.04.24" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Charlotte LIVE 25.04.24</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/_p2Abz8wdYQ" title="KAIA Charlotte LIVE 25.04.12" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Charlotte LIVE 25.04.12</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/HoQxgNNY7l8" title="KAIA Charlotte LIVE 25.04.02" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Charlotte LIVE 25.04.02</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/Z59HKbvhrDk" title="KAIA Charlotte LIVE 25.03.25" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Charlotte LIVE 25.03.25</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/elrCpqr0us4" title="KAIA Charlotte LIVE 25.02.25" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Charlotte LIVE 25.02.25</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/AhRl78zU4NY" title="KAIA Charlotte LIVE 25.02.12" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Charlotte LIVE 25.02.12</h4>
            </div>
        </div>
    `,
    "202Alexa": `
        <h1>Alexa - KAIA Videos</h1>
        <div class="date">9/1/2025</div>
        <p>Alexa's videos from KaiaClips:</p>
        <div class="video-grid">
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/zvjTKBnmeQ0" title="KAIA Alexa LIVE 25.08.23" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Alexa LIVE 25.08.23</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/fanABZxIu7Y" title="KAIA Alexa LIVE 25.08.13" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Alexa LIVE 25.08.13</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/IO00grG400I" title="KAIA Alexa LIVE 25.07.21" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Alexa LIVE 25.07.21</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/Vds1UJTKZ90" title="KAIA Alexa LIVE 25.07.20" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Alexa LIVE 25.07.20</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/9U_kzXM9zoA" title="KAIA Alexa LIVE 25.07.16" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Alexa LIVE 25.07.16</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/9dCxN3_mFek" title="KAIA Alexa LIVE 25.06.11" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Alexa LIVE 25.06.11</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/I6bFy_v8_oY" title="KAIA Alexa LIVE 25.06.09" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Alexa LIVE 25.06.09</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/aXCDzoex9OM" title="KAIA Alexa LIVE 25.06.07" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Alexa LIVE 25.06.07</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/WLVPjIuG5uo" title="KAIA Alexa LIVE 25.05.29" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Alexa LIVE 25.05.29</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/TeGmuj7UlIY" title="KAIA Alexa LIVE 25.05.11" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Alexa LIVE 25.05.11</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/aXV6m16zUyA" title="KAIA Alexa LIVE 25.05.10" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Alexa LIVE 25.05.10</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/MqHnwG8Z0FY" title="KAIA Alexa LIVE 25.05.08" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Alexa LIVE 25.05.08</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/bblfW18YjE8" title="KAIA Alexa LIVE 25.05.01" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Alexa LIVE 25.05.01</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/x2SpUfzv0bI" title="KAIA Alexa LIVE 25.04.30" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Alexa LIVE 25.04.30</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/jDkdCKJTsHs" title="KAIA Alexa LIVE 25.04.24" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Alexa LIVE 25.04.24</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/C9u96cYb6Qk" title="KAIA Alexa LIVE 25.04.15" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Alexa LIVE 25.04.15</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/a88XT4gkA54" title="KAIA Alexa LIVE 25.04.14" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Alexa LIVE 25.04.14</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/SKJU56o50jk" title="KAIA Alexa LIVE 25.03.23" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Alexa LIVE 25.03.23</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/FVgxgm62tJA" title="KAIA Alexa LIVE 25.03.14" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Alexa LIVE 25.03.14</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/Ukj48uWrbQw" title="KAIA Alexa LIVE 25.03.08" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Alexa LIVE 25.03.08</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/_bJlUSTwnM0" title="KAIA Alexa LIVE 25.03.06" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Alexa LIVE 25.03.06</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/DAnx96O8d7s" title="KAIA Alexa LIVE 25.03.01" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Alexa LIVE 25.03.01</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/c8q7-s1gtg0" title="KAIA Alexa LIVE 25.02.21" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Alexa LIVE 25.02.21</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/rI6aS-84hN8" title="KAIA Alexa LIVE 25.02.17" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Alexa LIVE 25.02.17</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/vqeLlfHggOw" title="KAIA Alexa LIVE 24.02.15" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Alexa LIVE 24.02.15</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/_al_cI44Hs0" title="KAIA Alexa LIVE 25.02.14" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Alexa LIVE 25.02.14</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/EPfl-h7N3Ak" title="KAIA Alexa LIVE 25.02.12" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Alexa LIVE 25.02.12</h4>
            </div>
        </div>
    `,
    "202Sophia": `
        <h1>Sophia - KAIA Videos</h1>
        <div class="date">9/1/2025</div>
        <p>Sophia's videos from KaiaClips:</p>
        <div class="video-grid">
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/lt9Od_KIW9o" title="KAIA Sophia LIVE 25.08.21" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Sophia LIVE 25.08.21</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/bQ26YFSwrOE" title="KAIA Sophia 25.07.13" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Sophia 25.07.13</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/0s8h67Ra_ZI" title="KAIA Sophia LIVE 25.05.06" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Sophia LIVE 25.05.06</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/4mx0vcTkbwo" title="KAIA Sophia LIVE 25.03.26" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Sophia LIVE 25.03.26</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/R7kzSss8VNw" title="KAIA Sophia LIVE 25.02.18" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Sophia LIVE 25.02.18</h4>
            </div>
        </div>
    `,
    "202Other": `
        <h1>Other - KAIA Videos</h1>
        <div class="date">9/1/2025</div>
        <p>Other's videos from KaiaClips:</p>
        <div class="video-grid">
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/6cZI44bHUxY" title="KAIA - The Asean Way at ASEAN Day Celebration 2025" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - The Asean Way at ASEAN Day Celebration 2025</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/1eujQoSIATc" title="KAIA - Walang Biruan at ASEAN Day Celebration 2025" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - Walang Biruan at ASEAN Day Celebration 2025</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/FcldKF9YabE" title="KAIA - Dalawa at ASEAN Day Celebration 2025" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - Dalawa at ASEAN Day Celebration 2025</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/Z9MQ7LaT5Oc" title="[ZAIA Vlog] KAIA at SONY ULT Launch [20250802]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>[ZAIA Vlog] KAIA at SONY ULT Launch [20250802]</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/Gh4Nsr7ymZY" title="[ZAIA Vlogs] KAIA at OPM CON 20250705" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>[ZAIA Vlogs] KAIA at OPM CON 20250705</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/mwji5C1uugM" title="[ZAIA Vlog] KAIA AT FETE DE LA MUSIQUE [20250628]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>[ZAIA Vlog] KAIA AT FETE DE LA MUSIQUE [20250628]</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/ib5X063cyNY" title="KAIA - Walang Biruan at DLSU Animusika" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - Walang Biruan at DLSU Animusika</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/4sIBMAX3I_I" title="KAIA - Dalawa at DLSU Animusika" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - Dalawa at DLSU Animusika</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/QYcrq_4X1yA" title="KAIA - Tanga at DLSU Animusika" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - Tanga at DLSU Animusika</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/zNKri28v-3E" title="KAIA - 5678 at DLSU Animusika" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - 5678 at DLSU Animusika</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/ZBcP0xf_PNU" title="KAIA - You Did It at DLSU Animusika" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - You Did It at DLSU Animusika</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/dnBxqJSwRco" title="KAIA - Kaya at Toycon 2025" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - Kaya at Toycon 2025</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/b66nSKQE6Cg" title="KAIA - Walang Biruan at Toycon 2025" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - Walang Biruan at Toycon 2025</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/_j36IGQTCsc" title="KAIA - Dalawa at Toycon 2025" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - Dalawa at Toycon 2025</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/wBfiYRApO9o" title="KAIA - Tanga at Toycon 2025" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - Tanga at Toycon 2025</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/1r6nhHKSjbA" title="[ZAIA Vlog] KAIA AT TOYCON PH [20250614]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>[ZAIA Vlog] KAIA AT TOYCON PH [20250614]</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/UVR7NpNYnz0" title="KAIA - 5678 at realme Mobile Legends Cup" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - 5678 at realme Mobile Legends Cup</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/Z8KfYcdwU-U" title="KAIA - intro + Walang Biruan at realme Mobile Legends Cup" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - intro + Walang Biruan at realme Mobile Legends Cup</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/HcXLoZ1TwFU" title="KAIA - Tanga at realme Mobile Legends Cup" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - Tanga at realme Mobile Legends Cup</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/WCI_3KuSPto" title="KAIA - 5678 + Turn Up at Kaogma Festival 2025" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - 5678 + Turn Up at Kaogma Festival 2025</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/98d3XYT1Iaw" title="KAIA - Tanga at Kaogma Festival 2025" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - Tanga at Kaogma Festival 2025</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/l3hrE7F50kQ" title="KAIA - Walang Biruan at Kaogma Festival 2025" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - Walang Biruan at Kaogma Festival 2025</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/ElRsZL1c3XM" title="KAIA - You Did It at Kaogma Festival 2025" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - You Did It at Kaogma Festival 2025</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/fxK57B8BV1A" title="KAIA - Dalawa at Kaogma Festival 2025" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - Dalawa at Kaogma Festival 2025</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/ZXcYDFv3_VM" title="Kaia - Kaya at Binibining Pilipinas Press Presentation" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>Kaia - Kaya at Binibining Pilipinas Press Presentation</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/M43Vy2ieXoI" title="Kaia - 5678 at Binibining Pilipinas Press Presentation" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>Kaia - 5678 at Binibining Pilipinas Press Presentation</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/BB0mVhO5jnw" title="Kaia - 5678 Soundcheck at Balangay Festival" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>Kaia - 5678 Soundcheck at Balangay Festival</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/Q6Pomjpy1Ys" title="Kaia - Tanga Soundcheck at Balangay Festival" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>Kaia - Tanga Soundcheck at Balangay Festival</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/qbb-PGyibmM" title="Kaia - Kaya at Balangay Festival" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>Kaia - Kaya at Balangay Festival</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/CFBSlUsC8e8" title="KAIA - 5678 at Balangay Festival" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - 5678 at Balangay Festival</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/7Q-MAsNQlpI" title="KAIA - Dalawa at Balangay Festival" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - Dalawa at Balangay Festival</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/IcaKtb3fB5g" title="Kaia - Tanga at Balangay Festival" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>Kaia - Tanga at Balangay Festival</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/-T-YYJ9_oaw" title="KAIA - Kaya at San Jose Town Fiesta" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - Kaya at San Jose Town Fiesta</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/2ZXwX6f0nrg" title="KAIA - Walang Biruan at San Jose Town Fiesta" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - Walang Biruan at San Jose Town Fiesta</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/5oXMhlFYBhY" title="KAIA - Tanga at San Jose Town Fiesta" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - Tanga at San Jose Town Fiesta</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/IRcSLCUWrrE" title="[KAIA FULL] KFC Crave and Music Live" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>[KAIA FULL] KFC Crave and Music Live</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/7CwSbgWUKiI" title="KAIA Live on Qabayan Radio 94.3 [25.05.14]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Live on Qabayan Radio 94.3 [25.05.14]</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/ajEnQ8Qo-8g" title="KAIA Live on Magic 89.9 [25.05.14]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Live on Magic 89.9 [25.05.14]</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/CW0ub6NLDU0" title="Kaia - You Did It at Love Boracay Soundcheck" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>Kaia - You Did It at Love Boracay Soundcheck</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/QJGyxwSCeac" title="Kaia - Dalawa at Love Boracay Soundcheck" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>Kaia - Dalawa at Love Boracay Soundcheck</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/55ByXeZnOyw" title="Kaia - Tanga at Love Boracay Soundcheck" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>Kaia - Tanga at Love Boracay Soundcheck</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/rFD9HrnG94w" title="KAIA Live on Wish 107.5 [25.04.07]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Live on Wish 107.5 [25.04.07]</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/odN4G_jlxxE" title="KAIA TANGA SALUBONG" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA TANGA SALUBONG</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/FkKvmFGouYI" title="Kaia - Walkie Talkie at Davao" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>Kaia - Walkie Talkie at Davao</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/Rv8ac4R5QzY" title="KAIA Live on Wish 107.5 [25.02.24]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Live on Wish 107.5 [25.02.24]</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/uMcrc6iWnT8" title="KAIA - Kaya at NCCA's Sayaw Pinoy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - Kaya at NCCA's Sayaw Pinoy</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/Ns12Io-ZJU4" title="KAIA - Man in the Mirror at NCCA's Sayaw Pinoy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - Man in the Mirror at NCCA's Sayaw Pinoy</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/fAaNzV3wKH0" title="KAIA - Dalawa at NCCA's Sayaw Pinoy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - Dalawa at NCCA's Sayaw Pinoy</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/Hn10pmlCUB8" title="KAIA - You Did It at NCCA's Sayaw Pinoy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - You Did It at NCCA's Sayaw Pinoy</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/4U-KhU0qdzY" title="KAIA - Walang Biruan at NCCA’s Sayaw Pinoy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - Walang Biruan at NCCA’s Sayaw Pinoy</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/rYKsfX3r9o4" title="KAIA - Walang Biruan at Vedanta Udaipur World Music Festival 2025" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - Walang Biruan at Vedanta Udaipur World Music Festival 2025</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/ypuDWxlRORQ" title="KAIA - Man in the Mirror at Vedanta Udaipur World Music Festival 2025" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - Man in the Mirror at Vedanta Udaipur World Music Festival 2025</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/wQ_ZBozvtVQ" title="KAIA - 5678 at Vedanta Udaipur World Music Festival 2025" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - 5678 at Vedanta Udaipur World Music Festival 2025</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/meiYg_CMA1A" title="KAIA - You Did It at Vedanta Udaipur World Music Festival 2025" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - You Did It at Vedanta Udaipur World Music Festival 2025</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/FYTaEHkYNCw" title="KAIA - Dalawa at Vedanta Udaipur World Music Festival 2025" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - Dalawa at Vedanta Udaipur World Music Festival 2025</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/tQvPSIG7rCI" title="KAIA - Intro + Turn  Up at Vedanta Udaipur World Music Festival 2025" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - Intro + Turn  Up at Vedanta Udaipur World Music Festival 2025</h4>
            </div>
        </div>
    `,
    "202Angela": `
        <h1>Angela - KAIA Videos</h1>
        <div class="date">9/1/2025</div>
        <p>Angela's videos from KaiaClips:</p>
        <div class="video-grid">
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/vQ5MYdfQfwk" title="KAIA Angela LIVE 25.08.19" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Angela LIVE 25.08.19</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/aLFhtqsznvg" title="KAIA Angela LIVE 25.08.07" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Angela LIVE 25.08.07</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/4ewi-gJsrJU" title="KAIA Angela LIVE 25.08.04" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Angela LIVE 25.08.04</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/YSX3mETALTc" title="KAIA Angela LIVE 25.07.23" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Angela LIVE 25.07.23</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/TqgCHzAQE6g" title="KAIA Angela LIVE 25.07.21" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Angela LIVE 25.07.21</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/BAmvwoZDvwc" title="KAIA Angela LIVE 25.07.19" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Angela LIVE 25.07.19</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/LHRO-0rhEvs" title="KAIA Angela LIVE 25.07.16" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Angela LIVE 25.07.16</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/3Gf0TtXkGLw" title="KAIA Angela LIVE 25.07.15" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Angela LIVE 25.07.15</h4>
            </div>
        </div>
    `,
    "202Charice": `
        <h1>Charice - KAIA Videos</h1>
        <div class="date">9/1/2025</div>
        <p>Charice's videos from KaiaClips:</p>
        <div class="video-grid">
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/PTTHGt8gWlw" title="KAIA Charice 25.07.13" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Charice 25.07.13</h4>
            </div>
        </div>
    `,
    "202Charlotte": `
        <h1>Charlotte - KAIA Videos</h1>
        <div class="date">9/1/2025</div>
        <p>Charlotte's videos from KaiaClips:</p>
        <div class="video-grid">
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/cgYP_qBTP8k" title="KAIA Charlotte LIVE 25.08.13" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Charlotte LIVE 25.08.13</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/RPzC1LxSzzU" title="KAIA Charlotte LIVE 25.08.07" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Charlotte LIVE 25.08.07</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/wwZ-tDIDnPs" title="KAIA Charlotte LIVE 25.07.25" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Charlotte LIVE 25.07.25</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/Egim05O9vv8" title="KAIA Charlotte LIVE 25.06.29" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Charlotte LIVE 25.06.29</h4>
            </div>
        </div>
    `,
    "202Alexa": `
        <h1>Alexa - KAIA Videos</h1>
        <div class="date">9/1/2025</div>
        <p>Alexa's videos from KaiaClips:</p>
        <div class="video-grid">
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/zvjTKBnmeQ0" title="KAIA Alexa LIVE 25.08.23" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Alexa LIVE 25.08.23</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/fanABZxIu7Y" title="KAIA Alexa LIVE 25.08.13" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Alexa LIVE 25.08.13</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/IO00grG400I" title="KAIA Alexa LIVE 25.07.21" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Alexa LIVE 25.07.21</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/Vds1UJTKZ90" title="KAIA Alexa LIVE 25.07.20" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Alexa LIVE 25.07.20</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/9U_kzXM9zoA" title="KAIA Alexa LIVE 25.07.16" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Alexa LIVE 25.07.16</h4>
            </div>
        </div>
    `,
    "202Sophia": `
        <h1>Sophia - KAIA Videos</h1>
        <div class="date">9/1/2025</div>
        <p>Sophia's videos from KaiaClips:</p>
        <div class="video-grid">
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/lt9Od_KIW9o" title="KAIA Sophia LIVE 25.08.21" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Sophia LIVE 25.08.21</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/bQ26YFSwrOE" title="KAIA Sophia 25.07.13" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Sophia 25.07.13</h4>
            </div>
        </div>
    `,
    "202Other": `
        <h1>Other - KAIA Videos</h1>
        <div class="date">9/1/2025</div>
        <p>Other's videos from KaiaClips:</p>
        <div class="video-grid">
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/6cZI44bHUxY" title="KAIA - The Asean Way at ASEAN Day Celebration 2025" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - The Asean Way at ASEAN Day Celebration 2025</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/1eujQoSIATc" title="KAIA - Walang Biruan at ASEAN Day Celebration 2025" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - Walang Biruan at ASEAN Day Celebration 2025</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/FcldKF9YabE" title="KAIA - Dalawa at ASEAN Day Celebration 2025" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - Dalawa at ASEAN Day Celebration 2025</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/Z9MQ7LaT5Oc" title="[ZAIA Vlog] KAIA at SONY ULT Launch [20250802]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>[ZAIA Vlog] KAIA at SONY ULT Launch [20250802]</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/Gh4Nsr7ymZY" title="[ZAIA Vlogs] KAIA at OPM CON 20250705" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>[ZAIA Vlogs] KAIA at OPM CON 20250705</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/mwji5C1uugM" title="[ZAIA Vlog] KAIA AT FETE DE LA MUSIQUE [20250628]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>[ZAIA Vlog] KAIA AT FETE DE LA MUSIQUE [20250628]</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/ib5X063cyNY" title="KAIA - Walang Biruan at DLSU Animusika" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - Walang Biruan at DLSU Animusika</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/4sIBMAX3I_I" title="KAIA - Dalawa at DLSU Animusika" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - Dalawa at DLSU Animusika</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/QYcrq_4X1yA" title="KAIA - Tanga at DLSU Animusika" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - Tanga at DLSU Animusika</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/zNKri28v-3E" title="KAIA - 5678 at DLSU Animusika" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - 5678 at DLSU Animusika</h4>
            </div>
        </div>
    `,
    "202Angela": `
        <h1>Angela - KAIA Videos</h1>
        <div class="date">9/1/2025</div>
        <p>Angela's videos from KaiaClips:</p>
        <div class="video-grid">
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/vQ5MYdfQfwk" title="KAIA Angela LIVE 25.08.19" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Angela LIVE 25.08.19</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/aLFhtqsznvg" title="KAIA Angela LIVE 25.08.07" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Angela LIVE 25.08.07</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/4ewi-gJsrJU" title="KAIA Angela LIVE 25.08.04" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Angela LIVE 25.08.04</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/YSX3mETALTc" title="KAIA Angela LIVE 25.07.23" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Angela LIVE 25.07.23</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/TqgCHzAQE6g" title="KAIA Angela LIVE 25.07.21" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Angela LIVE 25.07.21</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/BAmvwoZDvwc" title="KAIA Angela LIVE 25.07.19" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Angela LIVE 25.07.19</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/LHRO-0rhEvs" title="KAIA Angela LIVE 25.07.16" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Angela LIVE 25.07.16</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/3Gf0TtXkGLw" title="KAIA Angela LIVE 25.07.15" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Angela LIVE 25.07.15</h4>
            </div>
        </div>
    `,
    "202Charice": `
        <h1>Charice - KAIA Videos</h1>
        <div class="date">9/1/2025</div>
        <p>Charice's videos from KaiaClips:</p>
        <div class="video-grid">
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/PTTHGt8gWlw" title="KAIA Charice 25.07.13" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Charice 25.07.13</h4>
            </div>
        </div>
    `,
    "202Charlotte": `
        <h1>Charlotte - KAIA Videos</h1>
        <div class="date">9/1/2025</div>
        <p>Charlotte's videos from KaiaClips:</p>
        <div class="video-grid">
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/cgYP_qBTP8k" title="KAIA Charlotte LIVE 25.08.13" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Charlotte LIVE 25.08.13</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/RPzC1LxSzzU" title="KAIA Charlotte LIVE 25.08.07" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Charlotte LIVE 25.08.07</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/wwZ-tDIDnPs" title="KAIA Charlotte LIVE 25.07.25" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Charlotte LIVE 25.07.25</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/Egim05O9vv8" title="KAIA Charlotte LIVE 25.06.29" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Charlotte LIVE 25.06.29</h4>
            </div>
        </div>
    `,
    "202Alexa": `
        <h1>Alexa - KAIA Videos</h1>
        <div class="date">9/1/2025</div>
        <p>Alexa's videos from KaiaClips:</p>
        <div class="video-grid">
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/zvjTKBnmeQ0" title="KAIA Alexa LIVE 25.08.23" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Alexa LIVE 25.08.23</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/fanABZxIu7Y" title="KAIA Alexa LIVE 25.08.13" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Alexa LIVE 25.08.13</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/IO00grG400I" title="KAIA Alexa LIVE 25.07.21" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Alexa LIVE 25.07.21</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/Vds1UJTKZ90" title="KAIA Alexa LIVE 25.07.20" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Alexa LIVE 25.07.20</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/9U_kzXM9zoA" title="KAIA Alexa LIVE 25.07.16" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Alexa LIVE 25.07.16</h4>
            </div>
        </div>
    `,
    "202Sophia": `
        <h1>Sophia - KAIA Videos</h1>
        <div class="date">9/1/2025</div>
        <p>Sophia's videos from KaiaClips:</p>
        <div class="video-grid">
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/lt9Od_KIW9o" title="KAIA Sophia LIVE 25.08.21" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Sophia LIVE 25.08.21</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/bQ26YFSwrOE" title="KAIA Sophia 25.07.13" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Sophia 25.07.13</h4>
            </div>
        </div>
    `,
    "202Other": `
        <h1>Other - KAIA Videos</h1>
        <div class="date">9/1/2025</div>
        <p>Other's videos from KaiaClips:</p>
        <div class="video-grid">
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/6cZI44bHUxY" title="KAIA - The Asean Way at ASEAN Day Celebration 2025" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - The Asean Way at ASEAN Day Celebration 2025</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/1eujQoSIATc" title="KAIA - Walang Biruan at ASEAN Day Celebration 2025" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - Walang Biruan at ASEAN Day Celebration 2025</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/FcldKF9YabE" title="KAIA - Dalawa at ASEAN Day Celebration 2025" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - Dalawa at ASEAN Day Celebration 2025</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/Z9MQ7LaT5Oc" title="[ZAIA Vlog] KAIA at SONY ULT Launch [20250802]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>[ZAIA Vlog] KAIA at SONY ULT Launch [20250802]</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/Gh4Nsr7ymZY" title="[ZAIA Vlogs] KAIA at OPM CON 20250705" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>[ZAIA Vlogs] KAIA at OPM CON 20250705</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/mwji5C1uugM" title="[ZAIA Vlog] KAIA AT FETE DE LA MUSIQUE [20250628]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>[ZAIA Vlog] KAIA AT FETE DE LA MUSIQUE [20250628]</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/ib5X063cyNY" title="KAIA - Walang Biruan at DLSU Animusika" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - Walang Biruan at DLSU Animusika</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/4sIBMAX3I_I" title="KAIA - Dalawa at DLSU Animusika" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - Dalawa at DLSU Animusika</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/QYcrq_4X1yA" title="KAIA - Tanga at DLSU Animusika" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - Tanga at DLSU Animusika</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/zNKri28v-3E" title="KAIA - 5678 at DLSU Animusika" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - 5678 at DLSU Animusika</h4>
            </div>
        </div>
    `,
    "202Angela": `
        <h1>Angela - KAIA Videos</h1>
        <div class="date">9/1/2025</div>
        <p>Angela's videos from KaiaClips:</p>
        <div class="video-grid">
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/vQ5MYdfQfwk" title="KAIA Angela LIVE 25.08.19" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Angela LIVE 25.08.19</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/aLFhtqsznvg" title="KAIA Angela LIVE 25.08.07" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Angela LIVE 25.08.07</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/4ewi-gJsrJU" title="KAIA Angela LIVE 25.08.04" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Angela LIVE 25.08.04</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/YSX3mETALTc" title="KAIA Angela LIVE 25.07.23" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Angela LIVE 25.07.23</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/TqgCHzAQE6g" title="KAIA Angela LIVE 25.07.21" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Angela LIVE 25.07.21</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/BAmvwoZDvwc" title="KAIA Angela LIVE 25.07.19" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Angela LIVE 25.07.19</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/LHRO-0rhEvs" title="KAIA Angela LIVE 25.07.16" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Angela LIVE 25.07.16</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/3Gf0TtXkGLw" title="KAIA Angela LIVE 25.07.15" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Angela LIVE 25.07.15</h4>
            </div>
        </div>
    `,
    "202Charice": `
        <h1>Charice - KAIA Videos</h1>
        <div class="date">9/1/2025</div>
        <p>Charice's videos from KaiaClips:</p>
        <div class="video-grid">
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/PTTHGt8gWlw" title="KAIA Charice 25.07.13" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Charice 25.07.13</h4>
            </div>
        </div>
    `,
    "202Charlotte": `
        <h1>Charlotte - KAIA Videos</h1>
        <div class="date">9/1/2025</div>
        <p>Charlotte's videos from KaiaClips:</p>
        <div class="video-grid">
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/cgYP_qBTP8k" title="KAIA Charlotte LIVE 25.08.13" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Charlotte LIVE 25.08.13</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/RPzC1LxSzzU" title="KAIA Charlotte LIVE 25.08.07" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Charlotte LIVE 25.08.07</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/wwZ-tDIDnPs" title="KAIA Charlotte LIVE 25.07.25" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Charlotte LIVE 25.07.25</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/Egim05O9vv8" title="KAIA Charlotte LIVE 25.06.29" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Charlotte LIVE 25.06.29</h4>
            </div>
        </div>
    `,
    "202Alexa": `
        <h1>Alexa - KAIA Videos</h1>
        <div class="date">9/1/2025</div>
        <p>Alexa's videos from KaiaClips:</p>
        <div class="video-grid">
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/zvjTKBnmeQ0" title="KAIA Alexa LIVE 25.08.23" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Alexa LIVE 25.08.23</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/fanABZxIu7Y" title="KAIA Alexa LIVE 25.08.13" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Alexa LIVE 25.08.13</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/IO00grG400I" title="KAIA Alexa LIVE 25.07.21" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Alexa LIVE 25.07.21</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/Vds1UJTKZ90" title="KAIA Alexa LIVE 25.07.20" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Alexa LIVE 25.07.20</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/9U_kzXM9zoA" title="KAIA Alexa LIVE 25.07.16" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Alexa LIVE 25.07.16</h4>
            </div>
        </div>
    `,
    "202Sophia": `
        <h1>Sophia - KAIA Videos</h1>
        <div class="date">9/1/2025</div>
        <p>Sophia's videos from KaiaClips:</p>
        <div class="video-grid">
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/lt9Od_KIW9o" title="KAIA Sophia LIVE 25.08.21" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Sophia LIVE 25.08.21</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/bQ26YFSwrOE" title="KAIA Sophia 25.07.13" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Sophia 25.07.13</h4>
            </div>
        </div>
    `,
    "202Other": `
        <h1>Other - KAIA Videos</h1>
        <div class="date">9/1/2025</div>
        <p>Other's videos from KaiaClips:</p>
        <div class="video-grid">
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/6cZI44bHUxY" title="KAIA - The Asean Way at ASEAN Day Celebration 2025" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - The Asean Way at ASEAN Day Celebration 2025</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/1eujQoSIATc" title="KAIA - Walang Biruan at ASEAN Day Celebration 2025" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - Walang Biruan at ASEAN Day Celebration 2025</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/FcldKF9YabE" title="KAIA - Dalawa at ASEAN Day Celebration 2025" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - Dalawa at ASEAN Day Celebration 2025</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/Z9MQ7LaT5Oc" title="[ZAIA Vlog] KAIA at SONY ULT Launch [20250802]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>[ZAIA Vlog] KAIA at SONY ULT Launch [20250802]</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/Gh4Nsr7ymZY" title="[ZAIA Vlogs] KAIA at OPM CON 20250705" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>[ZAIA Vlogs] KAIA at OPM CON 20250705</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/mwji5C1uugM" title="[ZAIA Vlog] KAIA AT FETE DE LA MUSIQUE [20250628]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>[ZAIA Vlog] KAIA AT FETE DE LA MUSIQUE [20250628]</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/ib5X063cyNY" title="KAIA - Walang Biruan at DLSU Animusika" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - Walang Biruan at DLSU Animusika</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/4sIBMAX3I_I" title="KAIA - Dalawa at DLSU Animusika" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - Dalawa at DLSU Animusika</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/QYcrq_4X1yA" title="KAIA - Tanga at DLSU Animusika" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - Tanga at DLSU Animusika</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/zNKri28v-3E" title="KAIA - 5678 at DLSU Animusika" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - 5678 at DLSU Animusika</h4>
            </div>
        </div>
    `,
    "202Angela": `
        <h1>Angela - KAIA Videos</h1>
        <div class="date">9/1/2025</div>
        <p>Angela's videos from KaiaClips:</p>
        <div class="video-grid">
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/vQ5MYdfQfwk" title="KAIA Angela LIVE 25.08.19" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Angela LIVE 25.08.19</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/aLFhtqsznvg" title="KAIA Angela LIVE 25.08.07" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Angela LIVE 25.08.07</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/4ewi-gJsrJU" title="KAIA Angela LIVE 25.08.04" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Angela LIVE 25.08.04</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/YSX3mETALTc" title="KAIA Angela LIVE 25.07.23" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Angela LIVE 25.07.23</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/TqgCHzAQE6g" title="KAIA Angela LIVE 25.07.21" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Angela LIVE 25.07.21</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/BAmvwoZDvwc" title="KAIA Angela LIVE 25.07.19" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Angela LIVE 25.07.19</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/LHRO-0rhEvs" title="KAIA Angela LIVE 25.07.16" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Angela LIVE 25.07.16</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/3Gf0TtXkGLw" title="KAIA Angela LIVE 25.07.15" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Angela LIVE 25.07.15</h4>
            </div>
        </div>
    `,
    "202Charice": `
        <h1>Charice - KAIA Videos</h1>
        <div class="date">9/1/2025</div>
        <p>Charice's videos from KaiaClips:</p>
        <div class="video-grid">
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/PTTHGt8gWlw" title="KAIA Charice 25.07.13" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Charice 25.07.13</h4>
            </div>
        </div>
    `,
    "202Charlotte": `
        <h1>Charlotte - KAIA Videos</h1>
        <div class="date">9/1/2025</div>
        <p>Charlotte's videos from KaiaClips:</p>
        <div class="video-grid">
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/cgYP_qBTP8k" title="KAIA Charlotte LIVE 25.08.13" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Charlotte LIVE 25.08.13</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/RPzC1LxSzzU" title="KAIA Charlotte LIVE 25.08.07" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Charlotte LIVE 25.08.07</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/wwZ-tDIDnPs" title="KAIA Charlotte LIVE 25.07.25" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Charlotte LIVE 25.07.25</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/Egim05O9vv8" title="KAIA Charlotte LIVE 25.06.29" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Charlotte LIVE 25.06.29</h4>
            </div>
        </div>
    `,
    "202Alexa": `
        <h1>Alexa - KAIA Videos</h1>
        <div class="date">9/1/2025</div>
        <p>Alexa's videos from KaiaClips:</p>
        <div class="video-grid">
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/zvjTKBnmeQ0" title="KAIA Alexa LIVE 25.08.23" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Alexa LIVE 25.08.23</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/fanABZxIu7Y" title="KAIA Alexa LIVE 25.08.13" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Alexa LIVE 25.08.13</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/IO00grG400I" title="KAIA Alexa LIVE 25.07.21" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Alexa LIVE 25.07.21</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/Vds1UJTKZ90" title="KAIA Alexa LIVE 25.07.20" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Alexa LIVE 25.07.20</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/9U_kzXM9zoA" title="KAIA Alexa LIVE 25.07.16" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Alexa LIVE 25.07.16</h4>
            </div>
        </div>
    `,
    "202Sophia": `
        <h1>Sophia - KAIA Videos</h1>
        <div class="date">9/1/2025</div>
        <p>Sophia's videos from KaiaClips:</p>
        <div class="video-grid">
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/lt9Od_KIW9o" title="KAIA Sophia LIVE 25.08.21" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Sophia LIVE 25.08.21</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/bQ26YFSwrOE" title="KAIA Sophia 25.07.13" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Sophia 25.07.13</h4>
            </div>
        </div>
    `,
    "202Other": `
        <h1>Other - KAIA Videos</h1>
        <div class="date">9/1/2025</div>
        <p>Other's videos from KaiaClips:</p>
        <div class="video-grid">
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/6cZI44bHUxY" title="KAIA - The Asean Way at ASEAN Day Celebration 2025" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - The Asean Way at ASEAN Day Celebration 2025</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/1eujQoSIATc" title="KAIA - Walang Biruan at ASEAN Day Celebration 2025" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - Walang Biruan at ASEAN Day Celebration 2025</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/FcldKF9YabE" title="KAIA - Dalawa at ASEAN Day Celebration 2025" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - Dalawa at ASEAN Day Celebration 2025</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/Z9MQ7LaT5Oc" title="[ZAIA Vlog] KAIA at SONY ULT Launch [20250802]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>[ZAIA Vlog] KAIA at SONY ULT Launch [20250802]</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/Gh4Nsr7ymZY" title="[ZAIA Vlogs] KAIA at OPM CON 20250705" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>[ZAIA Vlogs] KAIA at OPM CON 20250705</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/mwji5C1uugM" title="[ZAIA Vlog] KAIA AT FETE DE LA MUSIQUE [20250628]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>[ZAIA Vlog] KAIA AT FETE DE LA MUSIQUE [20250628]</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/ib5X063cyNY" title="KAIA - Walang Biruan at DLSU Animusika" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - Walang Biruan at DLSU Animusika</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/4sIBMAX3I_I" title="KAIA - Dalawa at DLSU Animusika" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - Dalawa at DLSU Animusika</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/QYcrq_4X1yA" title="KAIA - Tanga at DLSU Animusika" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - Tanga at DLSU Animusika</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/zNKri28v-3E" title="KAIA - 5678 at DLSU Animusika" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - 5678 at DLSU Animusika</h4>
            </div>
        </div>
    `,
    "202Angela": `
        <h1>Angela - KAIA Videos</h1>
        <div class="date">9/1/2025</div>
        <p>Angela's videos from KaiaClips:</p>
        <div class="video-grid">
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/vQ5MYdfQfwk" title="KAIA Angela LIVE 25.08.19" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Angela LIVE 25.08.19</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/aLFhtqsznvg" title="KAIA Angela LIVE 25.08.07" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Angela LIVE 25.08.07</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/4ewi-gJsrJU" title="KAIA Angela LIVE 25.08.04" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Angela LIVE 25.08.04</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/YSX3mETALTc" title="KAIA Angela LIVE 25.07.23" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Angela LIVE 25.07.23</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/TqgCHzAQE6g" title="KAIA Angela LIVE 25.07.21" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Angela LIVE 25.07.21</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/BAmvwoZDvwc" title="KAIA Angela LIVE 25.07.19" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Angela LIVE 25.07.19</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/LHRO-0rhEvs" title="KAIA Angela LIVE 25.07.16" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Angela LIVE 25.07.16</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/3Gf0TtXkGLw" title="KAIA Angela LIVE 25.07.15" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Angela LIVE 25.07.15</h4>
            </div>
        </div>
    `,
    "202Charice": `
        <h1>Charice - KAIA Videos</h1>
        <div class="date">9/1/2025</div>
        <p>Charice's videos from KaiaClips:</p>
        <div class="video-grid">
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/PTTHGt8gWlw" title="KAIA Charice 25.07.13" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Charice 25.07.13</h4>
            </div>
        </div>
    `,
    "202Charlotte": `
        <h1>Charlotte - KAIA Videos</h1>
        <div class="date">9/1/2025</div>
        <p>Charlotte's videos from KaiaClips:</p>
        <div class="video-grid">
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/cgYP_qBTP8k" title="KAIA Charlotte LIVE 25.08.13" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Charlotte LIVE 25.08.13</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/RPzC1LxSzzU" title="KAIA Charlotte LIVE 25.08.07" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Charlotte LIVE 25.08.07</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/wwZ-tDIDnPs" title="KAIA Charlotte LIVE 25.07.25" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Charlotte LIVE 25.07.25</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/Egim05O9vv8" title="KAIA Charlotte LIVE 25.06.29" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Charlotte LIVE 25.06.29</h4>
            </div>
        </div>
    `,
    "202Alexa": `
        <h1>Alexa - KAIA Videos</h1>
        <div class="date">9/1/2025</div>
        <p>Alexa's videos from KaiaClips:</p>
        <div class="video-grid">
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/zvjTKBnmeQ0" title="KAIA Alexa LIVE 25.08.23" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Alexa LIVE 25.08.23</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/fanABZxIu7Y" title="KAIA Alexa LIVE 25.08.13" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Alexa LIVE 25.08.13</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/IO00grG400I" title="KAIA Alexa LIVE 25.07.21" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Alexa LIVE 25.07.21</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/Vds1UJTKZ90" title="KAIA Alexa LIVE 25.07.20" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Alexa LIVE 25.07.20</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/9U_kzXM9zoA" title="KAIA Alexa LIVE 25.07.16" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Alexa LIVE 25.07.16</h4>
            </div>
        </div>
    `,
    "202Sophia": `
        <h1>Sophia - KAIA Videos</h1>
        <div class="date">9/1/2025</div>
        <p>Sophia's videos from KaiaClips:</p>
        <div class="video-grid">
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/lt9Od_KIW9o" title="KAIA Sophia LIVE 25.08.21" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Sophia LIVE 25.08.21</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/bQ26YFSwrOE" title="KAIA Sophia 25.07.13" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Sophia 25.07.13</h4>
            </div>
        </div>
    `,
    "202Other": `
        <h1>Other - KAIA Videos</h1>
        <div class="date">9/1/2025</div>
        <p>Other's videos from KaiaClips:</p>
        <div class="video-grid">
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/6cZI44bHUxY" title="KAIA - The Asean Way at ASEAN Day Celebration 2025" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - The Asean Way at ASEAN Day Celebration 2025</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/1eujQoSIATc" title="KAIA - Walang Biruan at ASEAN Day Celebration 2025" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - Walang Biruan at ASEAN Day Celebration 2025</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/FcldKF9YabE" title="KAIA - Dalawa at ASEAN Day Celebration 2025" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - Dalawa at ASEAN Day Celebration 2025</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/Z9MQ7LaT5Oc" title="[ZAIA Vlog] KAIA at SONY ULT Launch [20250802]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>[ZAIA Vlog] KAIA at SONY ULT Launch [20250802]</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/Gh4Nsr7ymZY" title="[ZAIA Vlogs] KAIA at OPM CON 20250705" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>[ZAIA Vlogs] KAIA at OPM CON 20250705</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/mwji5C1uugM" title="[ZAIA Vlog] KAIA AT FETE DE LA MUSIQUE [20250628]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>[ZAIA Vlog] KAIA AT FETE DE LA MUSIQUE [20250628]</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/ib5X063cyNY" title="KAIA - Walang Biruan at DLSU Animusika" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - Walang Biruan at DLSU Animusika</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/4sIBMAX3I_I" title="KAIA - Dalawa at DLSU Animusika" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - Dalawa at DLSU Animusika</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/QYcrq_4X1yA" title="KAIA - Tanga at DLSU Animusika" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - Tanga at DLSU Animusika</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/zNKri28v-3E" title="KAIA - 5678 at DLSU Animusika" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - 5678 at DLSU Animusika</h4>
            </div>
        </div>
    `,
    "202Angela": `
        <h1>Angela - KAIA Videos</h1>
        <div class="date">9/1/2025</div>
        <p>Angela's videos from KaiaClips:</p>
        <div class="video-grid">
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/vQ5MYdfQfwk" title="KAIA Angela LIVE 25.08.19" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Angela LIVE 25.08.19</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/aLFhtqsznvg" title="KAIA Angela LIVE 25.08.07" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Angela LIVE 25.08.07</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/4ewi-gJsrJU" title="KAIA Angela LIVE 25.08.04" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Angela LIVE 25.08.04</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/YSX3mETALTc" title="KAIA Angela LIVE 25.07.23" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Angela LIVE 25.07.23</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/TqgCHzAQE6g" title="KAIA Angela LIVE 25.07.21" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Angela LIVE 25.07.21</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/BAmvwoZDvwc" title="KAIA Angela LIVE 25.07.19" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Angela LIVE 25.07.19</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/LHRO-0rhEvs" title="KAIA Angela LIVE 25.07.16" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Angela LIVE 25.07.16</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/3Gf0TtXkGLw" title="KAIA Angela LIVE 25.07.15" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Angela LIVE 25.07.15</h4>
            </div>
        </div>
    `,
    "202Charice": `
        <h1>Charice - KAIA Videos</h1>
        <div class="date">9/1/2025</div>
        <p>Charice's videos from KaiaClips:</p>
        <div class="video-grid">
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/PTTHGt8gWlw" title="KAIA Charice 25.07.13" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Charice 25.07.13</h4>
            </div>
        </div>
    `,
    "202Charlotte": `
        <h1>Charlotte - KAIA Videos</h1>
        <div class="date">9/1/2025</div>
        <p>Charlotte's videos from KaiaClips:</p>
        <div class="video-grid">
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/cgYP_qBTP8k" title="KAIA Charlotte LIVE 25.08.13" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Charlotte LIVE 25.08.13</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/RPzC1LxSzzU" title="KAIA Charlotte LIVE 25.08.07" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Charlotte LIVE 25.08.07</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/wwZ-tDIDnPs" title="KAIA Charlotte LIVE 25.07.25" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Charlotte LIVE 25.07.25</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/Egim05O9vv8" title="KAIA Charlotte LIVE 25.06.29" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Charlotte LIVE 25.06.29</h4>
            </div>
        </div>
    `,
    "202Alexa": `
        <h1>Alexa - KAIA Videos</h1>
        <div class="date">9/1/2025</div>
        <p>Alexa's videos from KaiaClips:</p>
        <div class="video-grid">
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/zvjTKBnmeQ0" title="KAIA Alexa LIVE 25.08.23" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Alexa LIVE 25.08.23</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/fanABZxIu7Y" title="KAIA Alexa LIVE 25.08.13" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Alexa LIVE 25.08.13</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/IO00grG400I" title="KAIA Alexa LIVE 25.07.21" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Alexa LIVE 25.07.21</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/Vds1UJTKZ90" title="KAIA Alexa LIVE 25.07.20" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Alexa LIVE 25.07.20</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/9U_kzXM9zoA" title="KAIA Alexa LIVE 25.07.16" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Alexa LIVE 25.07.16</h4>
            </div>
        </div>
    `,
    "202Sophia": `
        <h1>Sophia - KAIA Videos</h1>
        <div class="date">9/1/2025</div>
        <p>Sophia's videos from KaiaClips:</p>
        <div class="video-grid">
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/lt9Od_KIW9o" title="KAIA Sophia LIVE 25.08.21" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Sophia LIVE 25.08.21</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/bQ26YFSwrOE" title="KAIA Sophia 25.07.13" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA Sophia 25.07.13</h4>
            </div>
        </div>
    `,
    "202Other": `
        <h1>Other - KAIA Videos</h1>
        <div class="date">9/1/2025</div>
        <p>Other's videos from KaiaClips:</p>
        <div class="video-grid">
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/6cZI44bHUxY" title="KAIA - The Asean Way at ASEAN Day Celebration 2025" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - The Asean Way at ASEAN Day Celebration 2025</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/1eujQoSIATc" title="KAIA - Walang Biruan at ASEAN Day Celebration 2025" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - Walang Biruan at ASEAN Day Celebration 2025</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/FcldKF9YabE" title="KAIA - Dalawa at ASEAN Day Celebration 2025" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - Dalawa at ASEAN Day Celebration 2025</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/Z9MQ7LaT5Oc" title="[ZAIA Vlog] KAIA at SONY ULT Launch [20250802]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>[ZAIA Vlog] KAIA at SONY ULT Launch [20250802]</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/Gh4Nsr7ymZY" title="[ZAIA Vlogs] KAIA at OPM CON 20250705" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>[ZAIA Vlogs] KAIA at OPM CON 20250705</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/mwji5C1uugM" title="[ZAIA Vlog] KAIA AT FETE DE LA MUSIQUE [20250628]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>[ZAIA Vlog] KAIA AT FETE DE LA MUSIQUE [20250628]</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/ib5X063cyNY" title="KAIA - Walang Biruan at DLSU Animusika" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - Walang Biruan at DLSU Animusika</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/4sIBMAX3I_I" title="KAIA - Dalawa at DLSU Animusika" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - Dalawa at DLSU Animusika</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/QYcrq_4X1yA" title="KAIA - Tanga at DLSU Animusika" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - Tanga at DLSU Animusika</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/zNKri28v-3E" title="KAIA - 5678 at DLSU Animusika" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAIA - 5678 at DLSU Animusika</h4>
            </div>
        </div>
    `,
                            "203": `
        <h1>KAIA Videos from MARL</h1>
        <div class="date">9/1/2025</div>
        <p class="last-update">Latest update: 9/1/2025</p>
        <p>All KAIA videos from MARL's channel (6 videos):</p>
        <div class="channel-link" style="margin-bottom: 20px;">
            <a href="https://www.youtube.com/@marlpantoja" target="_blank" rel="noopener noreferrer" style="display: inline-block; padding: 8px 16px; background-color: #ff69b4; color: white; text-decoration: none; border-radius: 6px; font-size: 14px;">Visit MARL's Channel</a>
        </div>
        <div class="video-grid">
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/Z0IEgMeNlJc" title="080225 KAIA - TURN UP FANCAM AT SONY ULT VIBE LIVE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>080225 KAIA - TURN UP FANCAM AT SONY ULT VIBE LIVE</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/98ikV1xT9YY" title="080225 KAIA - TANGA FANCAM AT SONY ULT VIBE LIVE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>080225 KAIA - TANGA FANCAM AT SONY ULT VIBE LIVE</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/o-2Tinw4WWI" title="080225 KAIA - DALAWA FANCAM AT SONY ULT VIBE LIVE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>080225 KAIA - DALAWA FANCAM AT SONY ULT VIBE LIVE</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/W2LBj7UnNCs" title="080225 KAIA - YOU DID IT FANCAM AT SONY ULT VIBE LIVE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>080225 KAIA - YOU DID IT FANCAM AT SONY ULT VIBE LIVE</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/maIv8faD3WI" title="250705 SB19 - DUNGKA (with RICO BLANCO, BINI SHEENA, KAIA & G22) AT PUREGOLD OPM CONCERT 2025" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>250705 SB19 - DUNGKA (with RICO BLANCO, BINI SHEENA, KAIA & G22) AT PUREGOLD OPM CONCERT 2025</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/gsPPVMiBMJ8" title="250705 KAIA - JOPAY (with Mayonnaise) + Encore AT PUREGOLD OPM CONCERT 2025" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>250705 KAIA - JOPAY (with Mayonnaise) + Encore AT PUREGOLD OPM CONCERT 2025</h4>
            </div>
        </div>
    `,
                                                        "201": `
        <h1>KAIA Videos from Anonnym111</h1>
        <div class="date">9/1/2025</div>
        <p class="last-update">Latest update: 9/1/2025</p>
        <p>All KAIA videos from the channel grouped by events:</p>
        <div class="channel-link" style="margin-bottom: 20px;">
            <a href="https://www.youtube.com/@anonnym111" target="_blank" rel="noopener noreferrer" style="display: inline-block; padding: 8px 16px; background-color: #ff69b4; color: white; text-decoration: none; border-radius: 6px; font-size: 14px;">Visit Anonnym111 Channel</a>
        </div>
        <h2>Puregold OPM CON 2025</h2>
        <div class="video-grid">
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/I7Jmkrhkm5Y" title="KAIA - Jopay | Puregold OPM CON 2025 [20250705]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>Jopay</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/kEY1OQsFcPc" title="KAIA - Turn Up + Tanga | Puregold OPM CON 2025 [20250705]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>Turn Up + Tanga</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/A77KrQUZBPE" title="KAIA - Dalawa + Walang Biruan | Puregold OPM CON 2025 [20250705]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>Dalawa + Walang Biruan</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/7h6g4Aefm9Y" title="KAIA - Intro + KAYA + You Did It | Puregold OPM CON 2025 [20250705]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>Intro + KAYA + You Did It</h4>
            </div>
        </div>

        <h2>Kitchie Nadal New Ground Manila</h2>
        <div class="video-grid">
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/Le096rm8OwY" title="KAIA - Ending Cut | Kitchie Nadal New Ground Manila [20250621]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>Ending Cut</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/gfNjzsK5iNg" title="KAIA - Classical Medley | Kitchie Nadal New Ground Manila [20250621]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>Classical Medley</h4>
            </div>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/rhQwn58j9Tk" title="KAIA - Tanga | Kitchie Nadal New Ground Manila [20250621]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>Tanga</h4>
            </div>
        </div>

        <h2>ToyCon PH</h2>
        <div class="video-grid">
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/AiXsARlPN4Y" title="KAIA - KAYA (Angela Focus) | ToyCon PH [20250614]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h4>KAYA (Angela Focus)</h4>
            </div>
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
    
    // Update back button based on context
    updateBackButton(postId, postType);
    
    if (postType === 'sub') {
        // Display sub-entry content
        const subId = urlParams.get('id');
        const content = subEntryContent[subId];
        if (content) {
            postContent.innerHTML = `<div class="post-content">${content}</div>`;
        } else {
            postContent.innerHTML = '<div class="post-content"><h1>Sub-entry not found</h1><p>The requested sub-entry could not be found.</p></div>';
        }
    } else {
        // Display main post content
        const post = blogPosts.find(p => p.id === postId);
        if (post) {
            postContent.innerHTML = `<div class="post-content">${post.content}</div>`;
        } else {
            postContent.innerHTML = '<div class="post-content"><h1>Post not found</h1><p>The requested post could not be found.</p></div>';
        }
    }
    
    // Add modal functionality for image gallery
    setupImageModal();
}

// Function to setup image modal
function setupImageModal() {
    // Create modal if it doesn't exist
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
    
    // Add click listeners to gallery images
    document.querySelectorAll('.image-gallery img').forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', () => {
            modal.style.display = 'block';
            modalImg.src = img.src;
            modalImg.alt = img.alt;
        });
    });
    
    // Close modal events
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

// Function to update back button based on context
function updateBackButton(postId, postType) {
    const backBtn = document.querySelector('.back-btn');
    if (!backBtn) return;
    
    const urlParams = new URLSearchParams(window.location.search);
    const fromParam = urlParams.get('from');
    
    if (postType === 'sub') {
        const subId = postId.toString();
        // Check if it's a member page (202Angela, 202Charice, etc.)
        if (subId.startsWith('202') && subId.length > 3) {
            if (fromParam === 'kaiaclips') {
                backBtn.href = 'post.html?id=202&type=sub';
                backBtn.textContent = '← Back to KaiaClips';
            } else {
                backBtn.href = 'post.html?id=202&type=sub';
                backBtn.textContent = '← Back to KaiaClips';
            }
        }
        // Check if coming from events
        else if (fromParam === 'events') {
            backBtn.href = 'index.html?view=events';
            backBtn.textContent = '← Back to Events';
        }
        // Other sub-entries
        else {
            backBtn.href = 'index.html';
            backBtn.textContent = '← Back to Home';
        }
    } else {
        backBtn.href = 'index.html';
        backBtn.textContent = '← Back to Home';
    }
}

// Function to show sub-entry content
function showSubEntry(subId) {
    window.location.href = `post.html?id=${subId}&type=sub`;
}

// Initialize the appropriate page
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('post.html')) {
        displayPost();
    } else {
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('view') === 'events') {
            showEventsGrid();
        } else {
            displayBlogPosts();
        }
    }
});
