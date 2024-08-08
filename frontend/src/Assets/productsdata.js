import mImage1 from "./images/mImage1.png";
import mImage2 from "./images/mImage2.png";
import mImage3 from "./images/mImage3.png";
import mImage4 from "./images/mImage4.png";
import mImage5 from "./images/mImage5.png";
import mImage6 from "./images/mImage6.png";
import mImage7 from "./images/mImage7.png";
import mImage8 from "./images/mImage8.png";
import mImage9 from "./images/mImage9.png";
import mImage10 from "./images/mImage10.png";
import mImage11 from "./images/mImage11.png";
import mImage12 from "./images/mImage12.png";

const Products_Data = [
  {
    id: 1,
    name: "Iphone 12 ProMax",
    description:
      "The iPhone 12 Pro Max has a 6.7-inch screen (slightly larger than the 6.5 on the iPhone 11 Pro Max). It arrives in the same choice of colors: silver, graphite, gold and the new blue option, and it is also offered in the same storage capacities: 128GB, 256GB, and 512GB. ",
    color: ["Gold", "Graphite", "Silver", "Blue"],
    price: 900,
    condition: "New",
    capacity: `Variant:  128GB , 256GB , 512GB, 1TB`,
    image: mImage1,
    incart: false,
    count: 1,
    rating: 5,
  },
  {
    id: 2,
    name: "Iphone 14 ProMax",
    description:
      "The iPhone 14 Pro Max comes with 6.7-inch OLED display with 120Hz refresh rate and Apple's improved Bionic A16 processor. On the back there is a Triple camera setup with 48MP main camera.",
    color: ["Natural", "Black", "Blue"],
    price: 1500,
    capacity: `Variant:  128GB , 256GB , 512GB, 1TB`,
    condition: "New",
    image: mImage2,
    incart: false,
    count: 1,
    rating: 5,
  },
  {
    id: 3,
    name: "ASUS ROG G13 Gaming PC Tower",
    description:
      "Discover the gaming champion within, thanks to the ASUS ROG Strix G13 gaming PC. Its Intel Core i5 CPU and NVIDIA RTX GPU give you the speed and power necessary for smooth gaming action and lightning-fast reaction times in your e-sports battles. From USB 2.0 to USB 3.2 Gen 2 ports, this gaming PC offers plenty of connectivity for various peripherals.",
    price: 1500,
    condition: "New",
    image: mImage3,
    incart: false,
    count: 1,
    rating: 5,
  },

  {
    id: 4,
    name: "Intel Core i9-13900KS",
    description:
      "Core i9 13th Gen Raptor Lake 24-Core (8P+16E) 3.2 GHz LGA 1700 - Intel UHD Graphics 770 - Unlocked Desktop Processor BX8071513900KS. It is part of the Core i9 lineup, using the Raptor Lake architecture with Socket 1700. Intel Hyper-Threading technology is available and effectly doubles the core-count of the P-Cores, to a total of 32 threads.",
    price: 875,
    condition: "New ",
    image: mImage4,
    incart: false,
    count: 1,
    rating: 5,
  },

  {
    id: 5,
    name: "GIGABYTE GEForce RTX 4070 12GB",
    description:
      "DR6X PCI Express 4.0 x16 ATX Video Card GV-N4070WF3OC-12GD. Built on the 5 nm process, and based on the AD104 graphics processor, in its AD104-250-A1 variant, the card supports DirectX 12 Ultimate.",
    price: 850,
    condition: "New ",
    image: mImage5,
    incart: false,
    count: 1,
    rating: 5,
  },
  {
    id: 6,
    name: "JBL Bar 5.1 550-Watt",
    description:
      "Bring everything you watch to life with 550 Watts of power and a 10' subwoofer: the driving bass of an action movie, the tension of a thriller or the beauty of a nature documentary. Built-in Chromecast and Airplay 2 lets you stream and manage online content, and Bluetooth means your streamed music sounds great, too.",
    price: 650,
    condition: "New",
    image: mImage6,
    incart: false,
    count: 1,
    rating: 5,
  },
  {
    id: 7,
    name: "MacBook-Pro 14-Inch M2Max 2023",
    description:
      "The new MacBook-Pro 14-Inch 2023 raises the bar for laptop performance , with the M2 pro chip delivering incredible speed in our testing.The M2 Max is even faster, especially when it comes to graphics performance. It also includes a WI-FI 6E connection and a beefed-up HDMI port that can support up to 8K displays. ",
    price: 2150,
    condition: "New",
    image: mImage7,
    incart: false,
    count: 1,
    rating: 5,
  },
  {
    id: 8,
    name: "Razer Raptor 27 -144Hz",
    description:
      "Offering up to 165Hz QHD resolution, the new Raptor 27 gives you more frames to push your competitive advantage. Combined with a 1ms response time, thanks to ultra low motion blur technology, you will have an unmatched gaming exprience with sharper images and extraordinarily smooth frame rates",
    price: 999,
    condition: "New",
    image: mImage8,
    incart: false,
    count: 1,
    rating: 5,
  },
  {
    id: 9,
    name: "Alienware Aurora R16 Gaming Desktop ",
    description:
      "The Aurora R16 represents a new direction for Alienware's gaming desktops, moving away from the spaceship looks of alienware aurora R15 and those before it. R16 has a liquid-cooled Intel core i7-13700f CPU, an Nvidia GeForce RTX 4070 graphics card, 32GB of RAM and two 1TB SSDs(not RAID)",
    price: 2799,
    condition: "New",
    image: mImage9,
    incart: false,
    count: 1,
    rating: 5,
  },
  {
    id: 10,
    name: "Razer Blackwidow V4 pro gaming keyboard ",
    description:
      "Empower your play with a centerpiece htat elevates your entire setup. Enter the next phase of battlestation evolution with the ultimate mechanical gaming keyboard. Take full command with the set of features designed for advanced control, and enhance your immersion with full-blown Razer chroma RGB",
    price: 319,
    condition: "New",
    image: mImage10,
    incart: false,
    count: 1,
    rating: 5,
  },
  {
    id: 11,
    name: "Logitech Astro A50 X",
    description:
      "A50 X connects directly to your PC or mac via USB-C for immersive ultra HD audio with dolby atmos or windows sonic, game/chat mixing, Logitech G HUB customization and more. Just tap the button on your headset to switch to PC",
    price: 499,
    condition: "New",
    image: mImage11,
    incart: false,
    count: 1,
    rating: 5,
  },
  {
    id: 12,
    name: "Corsair Dark Core RGB pro",
    description:
      "Helps you win without wires, boasting sub-1ms SLIPSTREAM WIRELESS, a custom 18,000 DPI optical sensor optimized for wireless mice, and hyper-polling technology up to 1,000hz",
    price: 129,
    condition: "New",
    image: mImage12,
    incart: false,
    count: 1,
    rating: 5,
  },
  {
    id: 13,
    name: "Alienware Aurora R16 Gaming Desktop ",
    description: "",
    price: 2799,
    condition: "New",
    image: mImage9,
    incart: false,
    count: 1,
    rating: 5,
  },
  {
    id: 15,
    name: "Alienware Aurora R16 Gaming Desktop ",
    description:
      "The Aurora R16 represents a new direction for Alienware's gaming desktops, moving away from the spaceship looks of alienware aurora R15 and those before it. R16 has a liquid-cooled Intel core i7-13700f CPU, an Nvidia GeForce RTX 4070 graphics card, 32GB of RAM and two 1TB SSDs(not RAID)",
    price: 2799,
    condition: "New",
    image: mImage9,
    incart: false,
    count: 1,
    rating: 5,
  },
  {
    id: 16,
    name: "Alienware Aurora R16 Gaming Desktop ",
    description:
      "The Aurora R16 represents a new direction for Alienware's gaming desktops, moving away from the spaceship looks of alienware aurora R15 and those before it. R16 has a liquid-cooled Intel core i7-13700f CPU, an Nvidia GeForce RTX 4070 graphics card, 32GB of RAM and two 1TB SSDs(not RAID)",
    price: 2799,
    condition: "New",
    image: mImage9,
    incart: false,
    count: 1,
    rating: 5,
  },
  {
    id: 17,
    name: "Alienware Aurora R16 Gaming Desktop ",
    description:
      "The Aurora R16 represents a new direction for Alienware's gaming desktops, moving away from the spaceship looks of alienware aurora R15 and those before it. R16 has a liquid-cooled Intel core i7-13700f CPU, an Nvidia GeForce RTX 4070 graphics card, 32GB of RAM and two 1TB SSDs(not RAID)",
    price: 2799,
    condition: "New",
    image: mImage9,
    incart: false,
    count: 1,
    rating: 5,
  },
  {
    id: 18,
    name: "Alienware Aurora R16 Gaming Desktop ",
    description:
      "The Aurora R16 represents a new direction for Alienware's gaming desktops, moving away from the spaceship looks of alienware aurora R15 and those before it. R16 has a liquid-cooled Intel core i7-13700f CPU, an Nvidia GeForce RTX 4070 graphics card, 32GB of RAM and two 1TB SSDs(not RAID)",
    price: 2799,
    condition: "New",
    image: mImage9,
    incart: false,
    count: 1,
    rating: 5,
  },
  {
    id: 19,
    name: "Alienware Aurora R16 Gaming Desktop ",
    description:
      "The Aurora R16 represents a new direction for Alienware's gaming desktops, moving away from the spaceship looks of alienware aurora R15 and those before it. R16 has a liquid-cooled Intel core i7-13700f CPU, an Nvidia GeForce RTX 4070 graphics card, 32GB of RAM and two 1TB SSDs(not RAID)",
    price: 2799,
    condition: "New",
    image: mImage9,
    incart: false,
    count: 1,
    rating: 5,
  },
];

export default Products_Data;
