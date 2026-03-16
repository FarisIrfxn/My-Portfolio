import { Achievement } from "../types";

const R2_URL = "https://pub-bf3dd0628431475b81d6b32415920dc5.r2.dev/Achievements";

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Aurat Intelligence Went Viral on Instagram",
    description:
      "A reel showcasing Aurat Intelligence — my AI-powered modesty detection system — went viral on Instagram, gaining massive organic reach and sparking national conversation.",
    type: "video",
    link: "https://www.instagram.com/reel/C-7PuLGJ6wP/",
    date: "AUG 2024",
    source: "Instagram",
    images: [`${R2_URL}/Viral/image1.png`, `${R2_URL}/Viral/image2.png`, `${R2_URL}/Viral/image3.png`, `${R2_URL}/Viral/image4.png`]
  },
  {
    title: "Appeared on TV Sharing the Benefits of AI",
    description:
      "I was invited as a guest on national television to share insights on how AI can be ethically and practically applied in media, content production, and children's platforms.",
    type: "video",
    link: "https://www.instagram.com/p/DN-xTquE_Re/",
    date: "FEB 2026",
    source: "TV Appearance",
    images: [`${R2_URL}/RTM/image.png`]
  },
  {
    title: "Introduced Durioo Intelligence Before Investors & Media",
    description:
      "Had the privilege of presenting Durioo Intelligence — the company's AI suite — in front of a room of investors and media representatives, showcasing our technology vision.",
    type: "memory",
    date: "2024",
    source: "Investor Showcase",
    images: [`${R2_URL}/DuriooIntelligence/image1.jpg`, `${R2_URL}/DuriooIntelligence/image2.jpg`, `${R2_URL}/DuriooIntelligence/image3.JPG`]
  },
  {
    title: "Visited Google HQ Malaysia to Discuss Gemini API",
    description:
      "Attended an exclusive session at Google Malaysia HQ to explore and discuss integrating Google Gemini into Durioo's products — part of a strategic AI partnership initiative.",
    type: "memory",
    date: "2024",
    source: "Google Malaysia HQ",
    images: [`${R2_URL}/Google/image1.jpg`, `${R2_URL}/Google/image2.jpg`, `${R2_URL}/Google/image3.jpg`]
  },
  {
    title: "Industry Examination Panel for Politeknik Ibrahim Sultan",
    description:
      "Politeknik Ibrahim Sultan (PIS) shared and celebrated Duri AI Playground as an example of generative AI by a Malaysian alumni, inspiring their students with real-world AI applications.",
    type: "post",
    link: "https://www.facebook.com/100064499360195/posts/projek-generatif-kecerdasan-buatan-ai-hasil-tangan-alumni-pisprojek-duri-ai-play/1006331308193505/",
    date: "JAN 2025",
    source: "Politeknik Ibrahim Sultan",
    images: [`${R2_URL}/Politeknik/image2.jpg`, `${R2_URL}/Politeknik/image3.jpg`, `${R2_URL}/Politeknik/image4.jpg`]
  },
  {
    title: "Consulted & Validated AI Course Implementation for UTHM",
    description:
      "Had the opportunity to consult on and validate the implementation of an Artificial Intelligence learning course for Universiti Tun Hussein Onn Malaysia (UTHM), sharing practical industry insights to shape educational content.",
    type: "memory",
    date: "2024",
    source: "UTHM",
    images: [`${R2_URL}/UTHM/image.jpeg`]
  },
  {
    title: "AI Censorship on Cats Movie Featured by TV3 Buletin",
    description:
      "TV3 Buletin featured Durioo's AI-powered content censorship system used to make the international film 'Cats The Movie' safe and Islamically appropriate for Malaysian children.",
    type: "post",
    link: "https://www.buletintv3.my/nasional/filem-kanak-kanak-luar-negara-selamat-selepas-tapisan-ai/",
    date: "AUG 2023",
    source: "TV3 Buletin",
    images: [`${R2_URL}/BuletinTV3/images.png`]
  },
  {
    title: "AI Censorship on Cats Movie Covered by Kosmo",
    description:
      "Kosmo highlighted Durioo's landmark AI censorship pipeline, the first of its kind in Malaysia, used to deliver safe, family-friendly content to Muslim children on the platform.",
    type: "post",
    link: "https://www.kosmo.com.my/2023/09/15/saluran-kandungan-selamat-untuk-kanak-kanak/",
    date: "SEP 2023",
    source: "Kosmo",
    images: [`${R2_URL}/Kosmo/image.png`]
  },
  {
    title: "Duri AI Playground Discovered by Amanz",
    description:
      "Amanz covered the launch of Duri AI Playground — an on-platform generative AI tool letting kids create original AI artwork, built and engineered by me at Durioo.",
    type: "post",
    link: "https://amanz.my/2025498108",
    date: "JAN 2025",
    source: "Amanz",
    images: [`${R2_URL}/Amanz/image1.png`]
  },
  {
    title: "Duri AI Gen Featured in Durioo's Official Instagram Event",
    description:
      "Durioo Malaysia turned Duri AI Gen into a community event on their official Instagram, inviting followers to create AI-generated art — a direct outcome of my engineering work.",
    type: "video",
    link: "https://www.instagram.com/p/DEr5rV1SLa-/",
    date: "DEC 2024",
    source: "Instagram – @durioo",
    images: [`${R2_URL}/Durioo/image.png`]
  },
  {
    title: "AI Censorship Technology Covered by Amanz",
    description:
      "Amanz featured our AI censorship innovation at Durioo, detailing how machine learning pipelines were used to automatically filter non-compliant content from kids' media.",
    type: "post",
    link: "https://amanz.my/2023409897",
    date: "AUG 2023",
    source: "Amanz",
    images: [`${R2_URL}/Amanz/image2.png`]
  },
  {
    title: "AI Censorship on Cats Movie Reported by Ikiim FM",
    description:
      "Ikiim FM radio station broadcasted a feature on Durioo's AI-driven content moderation used in the Cats Movie premiere, drawing national attention to the technology.",
    type: "post",
    link: "https://ikimfm.my/penggunaan-teknologi-ai-untuk-memastikan-filem-antarabangsa-yang-dibawa-masuk-selamat-untuk-kanak-kanak-muslim/",
    date: "AUG 2023",
    source: "Ikiim FM",
    images: [`${R2_URL}/IkimFM/image.png`]
  },
  {
    title: "Duri AI Gen Covered by Tech Samana on Facebook",
    description:
      "Tech Samana — a leading Malaysian tech media page — reported on Duri AI Playground introduced by Durioo Malaysia, spotlighting the generative AI feature I built.",
    type: "post",
    link: "https://www.facebook.com/techsamana/photos/durioo-malaysia-memperkenalkan-ciri-terbarunya-duri-ai-playground-yang-menggunak/1161742345954041/",
    date: "JAN 2025",
    source: "Tech Samana",
    images: [`${R2_URL}/Techsamana/image.png`]
  },
  {
    title: "CEO Sinan Ismail Shared Aurat Intelligence on LinkedIn",
    description:
      "Durioo CEO Sinan Ismail shared a LinkedIn post praising Aurat Intelligence, recognising it as a breakthrough AI modesty solution built in-house at Durioo.",
    type: "post",
    link: "https://www.linkedin.com/posts/sinanismail_ai-in-durioo-ai-awrat-intelligence-activity-7232401259255754753-7q-I/",
    date: "AUG 2024",
    source: "LinkedIn – Sinan Ismail",
    images: [`${R2_URL}/LinkedIn/image.png`]
  },
  {
    title: "Alif Satar Praised Aurat Intelligence",
    description:
      "Malaysian celebrity and activist Alif Satar publicly praised Aurat Intelligence on Instagram, calling it a meaningful step forward in protecting modesty through technology.",
    type: "video",
    link: "https://www.instagram.com/reel/C-2dOnkyfwO/",
    date: "AUG 2024",
    source: "Instagram – Alif Satar",
    images: [`${R2_URL}/AlifSatar/image.png`]
  },
  {
    title: "AI Censorship on Cats Movie Featured by Azlinda Alin",
    description:
      "Blogger Azlinda Alin wrote a detailed feature on Cats The Movie and the AI censorship technology by Durioo, explaining how character modesty was AI-corrected for Muslim audiences.",
    type: "post",
    link: "https://www.azlindaalin.com/2023/08/cat-movie-teknologi-ai-dari-durioo.html",
    date: "AUG 2023",
    source: "Azlinda Alin Blog",
    images: [`${R2_URL}/AzlindaAlin/image.png`]
  },
  {
    title: "TV9 Aired News on AI Censorship for Cats Movie",
    description:
      "TV9 broadcast a news segment on Durioo's efforts using AI technology to ensure Cats The Movie met Islamic content standards — marking a milestone in AI-driven broadcast media.",
    type: "video",
    link: "https://www.facebook.com/DuriooPlus/videos/tv9-menyiarkan-berita-usaha-durioo-menggunakan-teknologi-ai-untuk-filem-cats-the/23949324451325387/",
    date: "AUG 2023",
    source: "TV9",
    images: [`${R2_URL}/BuletinTV9/image.png`]
  },
  {
    title: "Duri AI Gen Covered by Politeknik Ibrahim Sultan",
    description:
      "Politeknik Ibrahim Sultan (PIS) shared and celebrated Duri AI Playground as an example of generative AI by a Malaysian alumni, inspiring their students with real-world AI applications.",
    type: "post",
    link: "https://www.facebook.com/100064499360195/posts/projek-generatif-kecerdasan-buatan-ai-hasil-tangan-alumni-pisprojek-duri-ai-play/1006331308193505/",
    date: "JAN 2025",
    source: "Politeknik Ibrahim Sultan",
    images: [`${R2_URL}/Politeknik/image1.png`]
  },
  {
    title: "Met Syahril Hamdan – former Malaysian Politician",
    description:
      "Had the privilege of meeting Syahril Hamdan, former Malaysian politician — a meaningful networking opportunity that broadened my understanding of technology's role in public life.",
    type: "memory",
    date: "2024",
    source: "Personal Milestone",
    images: [`${R2_URL}/ShahrilHamdan/image.jpeg`]
  },
  {
    title: "Met Bront Palarae – Malaysian Actor & Filmmaker",
    description:
      "Had the honour of meeting celebrated Malaysian actor and director Bront Palarae, connecting over the intersection of technology and storytelling in the local creative industry.",
    type: "memory",
    date: "2024",
    source: "Personal Milestone",
    images: [`${R2_URL}/BrontPalarae/image.jpg`]
  }

];
