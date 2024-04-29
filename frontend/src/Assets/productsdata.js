import mImage1 from "./images/mImage1.png";
import mImage2 from "./images/mImage2.png";
import mImage3 from "./images/mImage3.png";
import mImage4 from "./images/mImage4.png";
import mImage5 from "./images/mImage5.png";
import mImage6 from "./images/mImage6.png";
import mImage7 from "./images/mImage7.png";
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
    name: "JBL Bar 5.1 550-Watt",
    description:
      "Bring everything you watch to life with 550 Watts of power and a 10' subwoofer: the driving bass of an action movie, the tension of a thriller or the beauty of a nature documentary. Built-in Chromecast and Airplay 2 lets you stream and manage online content, and Bluetooth means your streamed music sounds great, too.",
    price: 650,
    condition: "New",
    image: mImage7,
    incart: false,
    count: 1,
    rating: 5,
  },
];

export default Products_Data;
