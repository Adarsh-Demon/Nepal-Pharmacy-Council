let images = [
  "images/mp1.jpeg",
  "images/mp2.jpeg",
  "images/mp3.jpeg",
  "images/mp4.jpeg",
];

let i = 0;

setInterval(function () {
  let slider = document.getElementById("slider");
  slider.style.transform = "translateX(-100%)";

  setTimeout(function () {
    i++;
    if (i >= images.length) {
      i = 0;
    }
    slider.style.transition = "none";
    slider.style.transform = "translateX(100%)";
    slider.src = images[i];

    setTimeout(function () {
      slider.style.transition = "transform 0.5s ease";
      slider.style.transform = "translateX(0)";
    }, 50);
  });
}, 2000);

function clock() {
  let date = new Date();
  let options = { day: "2-digit", month: "short", year: "numeric" };
  let formattedDate = date.toLocaleDateString("en-GB", options);

  document.getElementById("clock").innerHTML = formattedDate;
}
clock();
const news = [
  // Page 1
  {
    title:
      "नेपाल फार्मेसी परिषद्को ३१ औँ नाम दर्ता परीक्षा (फार्मासिस्ट) को नतिजा",
    date: "Sep 13, 2026",
    link: "https://nepalpharmacycouncil.org.np/news-details/129",
  },
  {
    title:
      "नेपाल फार्मेसी परिषद्को ३१ औ नाम दर्ता परीक्षा उतिर्ण फार्मेसी सहायकहरु को नाम दर्ता प्रमाण -पत्र वितरण सम्बन्धी जरुरी सूचना",
    date: "Sep 02, 2026",
    link: "https://nepalpharmacycouncil.org.np/news-details/128",
  },
  {
    title: "नेपाल फार्मेसी परिषद्को अत्यन्त जरुरी सूचना",
    date: "Aug 29, 2026",
    link: "https://nepalpharmacycouncil.org.np/news-details/127",
  },
  {
    title: "नेपाल फार्मेसी परिषद्को हार्दिक अपिल",
    date: "Aug 26, 2026",
    link: "https://nepalpharmacycouncil.org.np/news-details/126",
  },
  {
    title:
      "नेपाल फार्मेसी परिषद्को ३१ औँ नाम दर्ता परीक्षा (फार्मेसी सहायक) को नतिजा",
    date: "Aug 22, 2026",
    link: "https://nepalpharmacycouncil.org.np/news-details/125",
  },
  {
    title:
      "नेपाल फार्मेसी परिषद्को ३१ औं नाम दर्ता परीक्षा (फार्मेसी सहायक एवम् फर्मासिष्ट) सम्बन्धी अत्यन्त जरुरी सूचना",
    date: "Aug 07, 2026",
    link: "https://nepalpharmacycouncil.org.np/news-details/124",
  },
  {
    title: "नेपाल फार्मेसी परिषद्को अत्यन्त जरुरी सूचना",
    date: "Jun 03, 2026",
    link: "https://nepalpharmacycouncil.org.np/news-details/123",
  },
  {
    title:
      "नेपाल फार्मेसी परिषद्को ३१औ नाम दर्ता परीक्षा(फर्मासिष्ट तथा फार्मेसी सहायक) को आवेदन फारम भर्ने म्याद थप सम्बन्धी अत्यन्त जरुरी सूचना",
    date: "Apr 27, 2026",
    link: "https://nepalpharmacycouncil.org.np/news-details/122",
  },
  {
    title: "नेपाल फार्मेसी परिषद्को अत्यन्त जरुरी सूचना",
    date: "Apr 08, 2026",
    link: "https://nepalpharmacycouncil.org.np/news-details/121",
  },
  {
    title:
      "नेपाल फार्मेसी परिषद्को ३०औ नाम दर्ता परीक्षा (फार्मेसी सहायक) सम्बन्धी अत्यन्त जरुरी सूचना",
    date: "Mar 13, 2026",
    link: "https://nepalpharmacycouncil.org.np/news-details/120",
  },
  {
    title: "नेपाल फार्मेसी परिषद्को अत्यन्त जरुरी सूचना",
    date: "Feb 01, 2026",
    link: "https://nepalpharmacycouncil.org.np/news-details/119",
  },
  {
    title: "नेपाल फार्मेसी परिषद्को अत्यन्त जरुरी सूचना",
    date: "Jan 27, 2026",
    link: "https://nepalpharmacycouncil.org.np/news-details/118",
  },
  {
    title:
      "नेपाल फार्मेसी परिषद्को ३०औ नाम दर्ता परीक्षा (फर्मासिष्टको) तालिका सम्बन्धि अत्यन्त जरुरी सूचना",
    date: "Jan 21, 2026",
    link: "https://nepalpharmacycouncil.org.np/news-details/117",
  },
  {
    title: "नेपाल फार्मेसी परिषद्को अत्यन्त जरुरी सूचना",
    date: "Jan 12, 2026",
    link: "https://nepalpharmacycouncil.org.np/news-details/116",
  },
  {
    title:
      "नेपाल फार्मेसी परिषद्को ३० औ नाम दर्ता परीक्षाको दरखास्त फारम भर्ने सम्बन्धि अत्यन्त जरुरी सूचना",
    date: "Dec 20, 2025",
    link: "https://nepalpharmacycouncil.org.np/news-details/115",
  },
  {
    title:
      "नेपाल फार्मेसी परिषद्को २९औ नाम दर्ता परीक्षा उतिर्ण फार्मेसी सहायकहरु को नाम दर्ता प्रमाण -पत्र वितरण सम्बन्धी जरुरी सूचना",
    date: "Oct 06, 2025",
    link: "https://nepalpharmacycouncil.org.np/news-details/113",
  },
  {
    title:
      "नेपाल फार्मेसी परिषद्को २९ औ नाम दर्ता परीक्षा उतिर्ण फर्मासिष्टहरु को नाम दर्ता प्रमाण -पत्र वितरण सम्बन्धी जरुरी सूचना",
    date: "Sep 18, 2025",
    link: "https://nepalpharmacycouncil.org.np/news-details/112",
  },
  {
    title: "नेपाल फार्मेसी परिषदद्वारा सञ्चालन हुने तालिम सम्बन्धी सूचना",
    date: "Sep 14, 2025",
    link: "https://nepalpharmacycouncil.org.np/news-details/111",
  },
  {
    title:
      "नेपाल फार्मेसी परिषद्को २९औ नाम दर्ता परीक्षा (फार्मेसी सहायक) डिप्लोमा इन फार्मेसीको तालिका सम्बन्धि अत्यन्त जरुरी सूचना",
    date: "Sep 02, 2025",
    link: "https://nepalpharmacycouncil.org.np/news-details/110",
  },
  {
    title: "Notice for Roster Call of Trainers and Participant Call",
    date: "Aug 31, 2025",
    link: "https://nepalpharmacycouncil.org.np/news-details/109",
  },

  // Page 2
  {
    title:
      "नेपाल फार्मेसी परिषद्को २९औ नाम दर्ता परीक्षा (फर्मासिष्टको) तालिका सम्बन्धि अत्यन्त जरुरी सूचना",
    date: "Aug 27, 2025",
    link: "https://nepalpharmacycouncil.org.np/news-details/108",
  },
  {
    title:
      "नेपाल फार्मेसी परिषद्को दर्तावाला फार्मासिष्ट तथा फार्मेसी सहायकहरुलाइ सूचना",
    date: "Aug 19, 2025",
    link: "https://nepalpharmacycouncil.org.np/news-details/107",
  },
  {
    title: "२८ औ नाम दर्ता परीक्षाको पुन योग को नतिजा सम्बन्धि सूचना",
    date: "Aug 18, 2025",
    link: "https://nepalpharmacycouncil.org.np/news-details/106",
  },
  {
    title:
      "नेपाल फार्मेसी परिषदको आ.व.०८२/०८३को स्वीकृत बार्षिक कार्यक्रमको तालिका",
    date: "Jul 24, 2025",
    link: "https://nepalpharmacycouncil.org.np/news-details/105",
  },
  {
    title:
      "नेपाल फार्मेसी परिषद्को २९औ नाम दर्ता परीक्षाको दरखास्त फारम भर्ने सम्बन्धि अत्यन्त जरुरी सूचना",
    date: "Jul 22, 2025",
    link: "https://nepalpharmacycouncil.org.np/news-details/104",
  },
  {
    title:
      "नेपाल फार्मेसी परिषद्को २८ औ नाम दर्ता परीक्षा उतिर्ण फर्मासिष्टहरु को नाम दर्ता प्रमाण -पत्र वितरण सम्बन्धी जरुरी सूचना",
    date: "Jul 20, 2025",
    link: "https://nepalpharmacycouncil.org.np/news-details/103",
  },
  {
    title:
      "नेपाल फार्मेसी परिषद्को २८ औ नाम दर्ता परीक्षा उतिर्ण फार्मेसी सहायकहरु को नाम दर्ता प्रमाण -पत्र वितरण सम्बन्धी जरुरी सूचना",
    date: "Jul 09, 2025",
    link: "https://nepalpharmacycouncil.org.np/news-details/102",
  },
  {
    title:
      "नेपाल फार्मेसी परिषद्को २८ औ नाम दर्ता परीक्षा फर्मासिष्टको तालिका सम्बन्धी अत्यन्त जरुरी सूचना",
    date: "Jun 18, 2025",
    link: "https://nepalpharmacycouncil.org.np/news-details/101",
  },
  {
    title:
      "नेपाल फार्मेसी परिषद्को २८ औ नाम दर्ता परीक्षा फार्मेसी सहायकको तालिका सम्बन्धी अत्यन्त जरुरी सूचना",
    date: "Jun 13, 2025",
    link: "https://nepalpharmacycouncil.org.np/news-details/100",
  },
  {
    title:
      "नेपाल फार्मेसी परिषद्को २८ औ नाम दर्ता परीक्षा सम्बन्धी अत्यन्त जरुरी सूचना",
    date: "Jun 04, 2025",
    link: "https://nepalpharmacycouncil.org.np/news-details/99",
  },
  {
    title:
      "नेपाल फार्मेसी परिषद्को २८औ नाम दर्ता परीक्षाको दरखास्त फारम भर्ने सम्बन्धि अत्यन्त जरुरी सूचना",
    date: "May 02, 2025",
    link: "https://nepalpharmacycouncil.org.np/news-details/98",
  },
  {
    title: "पूर्णकालीन शैक्षिक जनशक्तिको विवरण उपलब्ध गराउने सम्बन्धमा सूचना",
    date: "Apr 04, 2025",
    link: "https://nepalpharmacycouncil.org.np/news-details/97",
  },
  {
    title: "२७ औ नाम दर्ता परीक्षाको पुन योग को नतिजा सम्बन्धि सूचना",
    date: "Apr 03, 2025",
    link: "https://nepalpharmacycouncil.org.np/news-details/96",
  },
  {
    title:
      "नेपाल फार्मेसी परिषद्को विशेषज्ञता विवरण अध्यावधिक गर्ने सम्बन्धि अत्यन्त जरूरी सूचना",
    date: "Apr 03, 2025",
    link: "https://nepalpharmacycouncil.org.np/news-details/95",
  },
  {
    title: "नेपाल फार्मेसी परिषद्को सूचना",
    date: "Apr 02, 2025",
    link: "https://nepalpharmacycouncil.org.np/news-details/94",
  },
  {
    title:
      "नेपाल फार्मेसी परिषद्को २७ औ नाम दर्ता परीक्षा उतिर्ण फार्मेसी सहायकहरु को नाम दर्ता प्रमाण -पत्र वितरण सम्बन्धी जरुरी सूचना",
    date: "Mar 05, 2025",
    link: "https://nepalpharmacycouncil.org.np/news-details/93",
  },
  {
    title:
      "नेपाल फार्मेसी परिषद्को २७ औ नाम दर्ता परीक्षा उतिर्ण फर्मासिष्टहरुको नाम दर्ता प्रमाण -पत्र वितरण सम्बन्धी जरुरी सूचना",
    date: "Feb 21, 2025",
    link: "https://nepalpharmacycouncil.org.np/news-details/92",
  },
  {
    title: "नेपाल फार्मेसी परिषद्को प्रेस - विज्ञाप्ति",
    date: "Feb 12, 2025",
    link: "https://nepalpharmacycouncil.org.np/news-details/91",
  },
  {
    title:
      "नेपाल फार्मेसी परिषद्को २७ औ नाम दर्ता परीक्षा फार्मेसी सहायक तर्फ को नतिजा सम्बन्धि अत्यन्त जरुरी सूचना",
    date: "Feb 08, 2025",
    link: "https://nepalpharmacycouncil.org.np/news-details/90",
  },
  {
    title:
      "नेपाल फार्मेसी परिषद्को २७ औ नाम दर्ता परीक्षा (फार्मेसी सहायक) सम्बन्धी अत्यन्त जरुरी सूचना",
    date: "Feb 06, 2025",
    link: "https://nepalpharmacycouncil.org.np/news-details/89",
  },

  // Page 3
  {
    title:
      "नेपाल फार्मेसी परिषद्को २७ औ नाम दर्ता परीक्षा (फर्मासिष्ट) सम्बन्धी अत्यन्त जरुरी सूचना",
    date: "Jan 24, 2025",
    link: "https://nepalpharmacycouncil.org.np/news-details/88",
  },
  {
    title:
      "नेपाल फार्मेसी परिषद्को (Good standing Letter) एबम (NOC) को अनलाइन सेवा सम्बन्धि अत्यन्त जरुरी सूचना",
    date: "Jan 16, 2025",
    link: "https://nepalpharmacycouncil.org.np/news-details/87",
  },
  {
    title:
      "नेपाल फार्मेसी परिषद्को २७ औ नाम दर्ता परीक्षा सम्बन्धी अत्यन्त जरुरी सूचना",
    date: "Jan 12, 2025",
    link: "https://nepalpharmacycouncil.org.np/news-details/86",
  },
  {
    title: "२६ औ नाम दर्ता परीक्षाको पुन योग को नतिजा सम्बन्धि सूचना",
    date: "Jan 07, 2025",
    link: "https://nepalpharmacycouncil.org.np/news-details/85",
  },
  {
    title:
      "नेपाल फार्मेसी परिषद्को २६ औ नाम दर्ता परीक्षामा उतिर्ण फार्मेसी सहायकहरु को प्रमाण - पत्र सम्बन्धि अत्यत जरुरी सूचना",
    date: "Dec 27, 2024",
    link: "https://nepalpharmacycouncil.org.np/news-details/84",
  },
  {
    title:
      "नेपाल फार्मेसी परिषद्को २७ औ नाम दर्ता परीक्षाको दरखास्त फारम भर्ने सम्बन्धि अत्यन्त जरुरी सूचना",
    date: "Dec 19, 2024",
    link: "https://nepalpharmacycouncil.org.np/news-details/83",
  },
  {
    title:
      "नेपाल फार्मेसी परिषद्को २६ औ नाम दर्ता परीक्षामा उतिर्ण फर्मासिष्टहरु को प्रमाण - पत्र सम्बन्धि अत्यत जरुरी सूचना",
    date: "Dec 10, 2024",
    link: "https://nepalpharmacycouncil.org.np/news-details/82",
  },
  {
    title:
      "नेपाल फार्मेसी परिषद्को २६ औ नाम दर्ता परीक्षा (फार्मेसी सहायक ) सम्बन्धी अत्यन्त जरुरी सूचना",
    date: "Dec 03, 2024",
    link: "https://nepalpharmacycouncil.org.np/news-details/81",
  },
  {
    title:
      "नेपाल फार्मेसी परिषद्को २६ औ नाम दर्ता परीक्षा (फर्मासिष्ट) सम्बन्धी अत्यन्त जरुरी सूचना",
    date: "Nov 26, 2024",
    link: "https://nepalpharmacycouncil.org.np/news-details/80",
  },
  {
    title: "नेपाल फार्मेसी परिषद्को अत्यन्त जरूरी सूचना",
    date: "Nov 22, 2024",
    link: "https://nepalpharmacycouncil.org.np/news-details/79",
  },
  {
    title: "नेपाल फार्मेसी परिषद्को अत्यन्त जरूरी सूचना",
    date: "Nov 20, 2024",
    link: "https://nepalpharmacycouncil.org.np/news-details/78",
  },
  {
    title: "नेपाल फार्मेसी परिषद्को अत्यन्त जरूरी सूचना",
    date: "Nov 13, 2024",
    link: "https://nepalpharmacycouncil.org.np/news-details/77",
  },
  {
    title:
      "नेपाल फार्मेसी परिषद द्वारा संचालन हुने २६ औ नाम दर्ता परीक्षा सम्बन्धि अत्यन्त जरुरी सूचना",
    date: "Nov 12, 2024",
    link: "https://nepalpharmacycouncil.org.np/news-details/74",
  },
  {
    title: "Notice of Office Relocation",
    date: "Oct 23, 2024",
    link: "https://nepalpharmacycouncil.org.np/news-details/73",
  },
  {
    title:
      "नेपाल फार्मेसी परिषद्को २६औ नाम दर्ता परीक्षाको दरखास्त फारम भर्ने सम्बन्धी अत्यन्त जरुरी सूचना",
    date: "Sep 22, 2024",
    link: "https://nepalpharmacycouncil.org.np/news-details/72",
  },
  {
    title:
      "2024-08-30 Participant list for CPD for (Dhangadhi ) Sudurpaschim Pradesh Dated 081-05-15",
    date: "Aug 29, 2024",
    link: "https://nepalpharmacycouncil.org.np/news-details/71",
  },
  {
    title: "CPD participant list for Nepalgunj dated 081/05/13",
    date: "Aug 28, 2024",
    link: "https://nepalpharmacycouncil.org.np/news-details/69",
  },
  {
    title:
      "२५ औ नाम दर्ता परीक्षा पुन योगको नतिजा सम्बन्धमा अत्यन्त जरूरी सूचना",
    date: "Aug 27, 2024",
    link: "https://nepalpharmacycouncil.org.np/news-details/68",
  },
  {
    title:
      "Participant Name list for CPD Training dated 081/05/11 (Province-6, Surkhet)",
    date: "Aug 25, 2024",
    link: "https://nepalpharmacycouncil.org.np/news-details/67",
  },
  {
    title: "Call For Participation",
    date: "Aug 23, 2024",
    link: "https://nepalpharmacycouncil.org.np/news-details/66",
  },

  // Page 4
  {
    title:
      "नेपाल फार्मेसी परिषदको २५ औ नाम दर्ता परीक्षामा उतिर्ण फार्मेसी सहायकहरुमा नाम दर्ता प्रमाणपत्र बितरण सम्बन्धी अत्यन्त जरुरी सूचना",
    date: "Jul 24, 2024",
    link: "https://nepalpharmacycouncil.org.np/news-details/65",
  },
  {
    title:
      "नेपाल फार्मेसी परिषदको २५ औ नाम दर्ता परीक्षा फार्मेसी सहायक /डी. फार्मेसीको परीक्षा तालिका सम्बन्धी अत्यन्त जरुरी सूचना",
    date: "Jul 05, 2024",
    link: "https://nepalpharmacycouncil.org.np/news-details/64",
  },
  {
    title:
      "नेपाल फार्मेसी परिषद्को २५औ नाम दर्ता परीक्षा (फार्मेसी सहायक/डिप्लोमा इन फार्मेसी) को प्रवेश पत्र सम्बन्धी अत्यन्त जरुरी सूचना",
    date: "Jul 04, 2024",
    link: "https://nepalpharmacycouncil.org.np/news-details/63",
  },
  {
    title:
      "नेपाल फार्मेसी परिषद्को २५औ नाम दर्ता परीक्षा (फार्मेसी सहायक/डिप्लोमा इन फार्मेसी) सम्बन्धी अत्यन्त जरुरी सूचना",
    date: "Jun 25, 2024",
    link: "https://nepalpharmacycouncil.org.np/news-details/62",
  },
  {
    title: "नाम दर्ता प्रमाणपत्र वितरण सम्बन्धी सूचना",
    date: "Jun 18, 2024",
    link: "https://nepalpharmacycouncil.org.np/news-details/61",
  },
  {
    title:
      "नेपाल फार्मेसी परिषद्को २५ औ नाम दर्ता परीक्षा (फर्मासिष्ट)को परीक्षा केन्द्र सम्बन्धी अत्यन्त जरुरी सूचना",
    date: "Jun 06, 2024",
    link: "https://nepalpharmacycouncil.org.np/news-details/59",
  },
  {
    title:
      "नेपाल फार्मेसी परिषद्को २५ औ नाम दर्ता परीक्षा (फर्मासिष्ट) सम्बन्धी अत्यन्त जरुरी सूचना",
    date: "Jun 02, 2024",
    link: "https://nepalpharmacycouncil.org.np/news-details/58",
  },
  {
    title:
      "नेपाल फार्मेसी परिषद्को फार्मेसी शिक्षा प्रदान गर्ने शिक्षण संस्थालाई अत्यन्त जरुरी सूचना",
    date: "May 19, 2024",
    link: "https://nepalpharmacycouncil.org.np/news-details/57",
  },
  {
    title:
      "नेपाल फार्मेसी परिषद्को २५ औ नाम दर्ता परीक्षाको दरखास्त फारम भर्ने सम्बन्धी अत्यन्त जरुरी सूचना",
    date: "Apr 29, 2024",
    link: "https://nepalpharmacycouncil.org.np/news-details/56",
  },
  {
    title:
      "नेपाल फार्मेसी परिषद्को २५ औ नाम दर्ता परीक्षाको दरखास्त फारम भर्ने सम्बन्धी अत्यन्त जरुरी सूचना",
    date: "Apr 29, 2024",
    link: "https://nepalpharmacycouncil.org.np/news-details/55",
  },
  {
    title: "Notice for CPD Pokhara ( Gandaki Pradesh)",
    date: "Apr 26, 2024",
    link: "https://nepalpharmacycouncil.org.np/news-details/54",
  },
  {
    title: "Notice for Continuous Professional Training at Province Level",
    date: "Apr 16, 2024",
    link: "https://nepalpharmacycouncil.org.np/news-details/53",
  },
  {
    title: "Call for Participation for CPD training Phase-2",
    date: "Apr 03, 2024",
    link: "https://nepalpharmacycouncil.org.np/news-details/52",
  },
  {
    title:
      "Result of retotaling 24th Name Registration Exam Pharmacy Assistant",
    date: "Apr 03, 2024",
    link: "https://nepalpharmacycouncil.org.np/news-details/51",
  },
  {
    title: "Result of retotaling 24th name registration exam Pharmacist",
    date: "Apr 03, 2024",
    link: "https://nepalpharmacycouncil.org.np/news-details/50",
  },
  {
    title:
      "२४औ नाम दर्ता परीक्षा फर्मासिष्ट(बि.फार्मेसी)को प्रमाण पत्र सम्बन्धि अत्यन्त जरुरी सूचना",
    date: "Mar 19, 2024",
    link: "https://nepalpharmacycouncil.org.np/news-details/49",
  },
  {
    title: "२४औ नाम दर्ता परीक्षा फर्मासिष्ट(बि.फार्मेसी)को सूचना",
    date: "Feb 17, 2024",
    link: "https://nepalpharmacycouncil.org.np/news-details/48",
  },
  {
    title: "२४ औ नाम दर्ता परीक्षा (वि. फार्मेसी) सम्बन्धि अत्यन्त जरुरी सूचना",
    date: "Feb 02, 2024",
    link: "https://nepalpharmacycouncil.org.np/news-details/47",
  },
  {
    title:
      "२४ औ नाम दर्ता परीक्षामा सफल फार्मेसी सहायक को कागजात बुझाउने एबम प्रमाण पत्र वितरण सम्बन्धमा अत्यन्त जरुरी सूचना",
    date: "Jan 31, 2024",
    link: "https://nepalpharmacycouncil.org.np/news-details/45",
  },
  {
    title: "Name list for CPD program",
    date: "Jan 08, 2024",
    link: "https://nepalpharmacycouncil.org.np/news-details/44",
  },

  // Page 5
  {
    title: "Call for Participation!",
    date: "Jan 03, 2024",
    link: "https://nepalpharmacycouncil.org.np/news-details/42",
  },
  {
    title: "24 औ नाम दर्ता परीक्षा फार्मेसी सहायक सम्बन्धि अत्यन्त जरुरी सूचना",
    date: "Dec 27, 2023",
    link: "https://nepalpharmacycouncil.org.np/news-details/40",
  },
  {
    title: "२४ औँ नाम दर्ता परीक्षाको आवेदन फारम सम्बन्धि अत्यन्त जरुरी सूचना",
    date: "Dec 10, 2023",
    link: "https://nepalpharmacycouncil.org.np/news-details/39",
  },
  {
    title: "Please Find Name Registration Application Form",
    date: "Nov 07, 2023",
    link: "https://nepalpharmacycouncil.org.np/news-details/38",
  },
  {
    title:
      "२३ औ नाम दर्ता परीक्षा फार्मेसी सहायकको उतिर्ण आवेदकहरुमा नाम दर्ता प्रमाण पत्र बितरण सम्बन्धि सूचना",
    date: "Nov 06, 2023",
    link: "https://nepalpharmacycouncil.org.np/news-details/37",
  },
  {
    title:
      "२३ औ नाम दर्ता परीक्षा फार्मेसी सहायकको रिटोटल एबम पुन परिक्षण सम्बन्धि सूचना",
    date: "Nov 06, 2023",
    link: "https://nepalpharmacycouncil.org.np/news-details/36",
  },
  {
    title: "Notice for Pharmacist Name Registration Certificate",
    date: "Oct 04, 2023",
    link: "https://nepalpharmacycouncil.org.np/news-details/35",
  },
  {
    title: "नेपाल फार्मेसी परिषद्को अत्यन्त जरुरी सूचना",
    date: "Sep 22, 2023",
    link: "https://nepalpharmacycouncil.org.np/news-details/34",
  },
  {
    title:
      "नेपाल फार्मेसी परिषद्को २३ औ नाम दर्ता परीक्षा फार्मेसी सहायकको सम्बन्धि अत्यन्त जरुरी सूचना",
    date: "Sep 15, 2023",
    link: "https://nepalpharmacycouncil.org.np/news-details/33",
  },
  {
    title:
      "Urgent Notice :Pharmacy Assistant Approved and Conditional List with Symbol number",
    date: "Sep 14, 2023",
    link: "https://nepalpharmacycouncil.org.np/news-details/29",
  },
  {
    title: "Urgent Notice for 23rd Name Registration Exam Pharmacist",
    date: "Sep 07, 2023",
    link: "https://nepalpharmacycouncil.org.np/news-details/28",
  },
  {
    title: "Urgent Notice for 23rd Name Registration Exam Pharmacist",
    date: "Sep 07, 2023",
    link: "https://nepalpharmacycouncil.org.np/news-details/27",
  },
  {
    title:
      "नेपाल फार्मेसी परिषद्को २३ औ नाम दर्ता परीक्षा सम्बन्धि अत्यन्त जरुरी सूचना",
    date: "Aug 25, 2023",
    link: "https://nepalpharmacycouncil.org.np/news-details/26",
  },
  {
    title: "नेपाल फार्मेसी परिषद्को अत्यन्त जरुरी सूचना",
    date: "Aug 03, 2023",
    link: "https://nepalpharmacycouncil.org.np/news-details/25",
  },
  {
    title:
      "नेपाल फार्मेसी परिषद्को २३ औ नाम दर्ता परीक्षाको आवेदन सम्बन्धि अत्यन्त जरुरी सूचना",
    date: "Aug 01, 2023",
    link: "https://nepalpharmacycouncil.org.np/news-details/24",
  },
  {
    title:
      "नेपाल फार्मेसी परिषद्को फार्मेसी शिक्षा प्रदान गर्ने शिक्षण संस्थाहरुको लागि अत्यन्त जरुरी सूचना",
    date: "Jul 06, 2023",
    link: "https://nepalpharmacycouncil.org.np/news-details/23",
  },
  {
    title:
      "नेपाल फार्मेसी परिषदको २२ औ नाम दर्ता परीक्षा फार्मेसी सहायकको नतिजा सम्बन्धि सूचना",
    date: "Jul 06, 2023",
    link: "https://nepalpharmacycouncil.org.np/news-details/21",
  },
  {
    title:
      "नेपाल फार्मेसी परिषदको २२ औ नाम दर्ता परीक्षा फार्मेसी सहायक तर्फको स्वीकृत एबम सशर्त स्वीकृत आवेदन :",
    date: "Jun 12, 2023",
    link: "https://nepalpharmacycouncil.org.np/news-details/18",
  },
  {
    title:
      "नेपाल फार्मेसी परिषदको २२ औ नाम दर्ता परीक्षा फार्मेसी सहायक तर्फको स्वीकृत एबम सशर्त स्वीकृत आवेदन,",
    date: "Jun 12, 2023",
    link: "https://nepalpharmacycouncil.org.np/news-details/15",
  },
  {
    title:
      "नेपाल फार्मेसी परिषद्को २२ औ नाम दर्ता परीक्षा फार्मेसी सहायकको अत्यन्त जरूरी सूचना",
    date: "Jun 05, 2023",
    link: "https://nepalpharmacycouncil.org.np/news-details/14",
  },

  // Page 6
  {
    title:
      "२२ औ नाम दर्ता परीक्षामा उतीर्ण परीक्षार्थीहरु(फर्मासिष्ट) को लागि अत्यन्त जरुरी सूचना",
    date: "Jun 05, 2023",
    link: "https://nepalpharmacycouncil.org.np/news-details/13",
  },
  {
    title: "Pharmacist(B.Pharmacy) 22nd Name Registration Exam Notice",
    date: "May 28, 2023",
    link: "https://nepalpharmacycouncil.org.np/news-details/12",
  },
  {
    title:
      "22nd Name Registration Exam B.Pharm Applicant list Approved and Conditional",
    date: "May 28, 2023",
    link: "https://nepalpharmacycouncil.org.np/news-details/11",
  },
  {
    title:
      "नेपाल फार्मेसी परिष्द्को २२ औ नाम दर्ता परीक्षा फर्मासिष्टतर्फको अत्यन्त जरुरी सूचना",
    date: "May 28, 2023",
    link: "https://nepalpharmacycouncil.org.np/news-details/10",
  },
  {
    title:
      "नेपाल फार्मेसी परिषद्को २१ औ नाम दर्ता परीक्षा (फार्मेसी सहायक ) तर्फको स्वीकृत नामावली सूचना",
    date: "May 28, 2023",
    link: "https://nepalpharmacycouncil.org.np/news-details/9",
  },
  {
    title:
      "नेपाल फार्मेसी परिषद्को नाम दर्ता अभिलेख अध्यावधिक सम्बन्धमा अत्यन्त जरूरी सूचना",
    date: "May 28, 2023",
    link: "https://nepalpharmacycouncil.org.np/news-details/8",
  },
  {
    title:
      "नेपाल फार्मेसी परिषद्को नाम दर्ता अभिलेख अध्यावधिक सम्बन्धमा अत्यन्त जरूरी सूचना",
    date: "May 28, 2023",
    link: "https://nepalpharmacycouncil.org.np/news-details/7",
  },
  {
    title: "२२ औ नाम दर्ता परीक्षाको आवेदन फारम सम्बन्धि अत्यन्त जरूरी सूचना",
    date: "May 28, 2023",
    link: "https://nepalpharmacycouncil.org.np/news-details/6",
  },
];
const newsList = document.querySelector(".News_id");
const paginationContainer = document.querySelector(".Pagination"); // fixed spelling
let currentPage = 1;
let newsPerPage = 20;

function display() {
  newsList.innerHTML = "";

  const start = (currentPage - 1) * newsPerPage;
  const end = start + newsPerPage;

  const currentNews = news.slice(start, end);

  currentNews.forEach((item) => {
    newsList.innerHTML += `
      <div class="News_item">
        <i class="fa fa-newspaper News_icon"></i>
        <a class="News_title" href="${item.link}" target="_blank">${item.title}</a>
        <p class="News_date">${item.date}</p>
      </div>`;
  });
}

function displayPagination() {
  paginationContainer.innerHTML = "";
  const totalPage = Math.ceil(news.length / newsPerPage);

  for (let i = 1; i <= totalPage; i++) {
    const button = document.createElement("button");
    button.innerText = i;

    if (i === currentPage) {
      button.style.backgroundColor = "blue";
      button.style.color = "white";
    }

    button.addEventListener("click", () => {
      currentPage = i;
      display();
      displayPagination();
    });

    paginationContainer.appendChild(button);
  }
}

display();
displayPagination();
