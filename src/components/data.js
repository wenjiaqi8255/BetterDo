import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "Key Features",
  desc: " ",
  image: benefitOneImg,
  bullets: [
    {
      title: "Energy Level Tracking",
      desc: "Easily monitor and record your energy levels throughout the day to understand your natural productivity patterns.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Smart Rest Reminders",
      desc: "Get personalized rest suggestions based on your energy levels and work duration to maintain peak performance.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Intelligent Task Matching",
      desc: "Match tasks to your current energy level for optimal productivity and reduced burnout.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};

// // 建议在 components/data.ts 中定义
// export const appOverview = {
//   title: "Core Features That Make the Difference",
//   desc: "Experience a new way of task management that puts your energy first.",
//   image: appOverviewImg, // 需要准备图片
//   bullets: [
//     {
//       title: "Energy Level Tracking",
//       desc: "Easily monitor and record your energy levels throughout the day to understand your natural productivity patterns.",
//       icon: <EnergyIcon />
//     },
//     // ... 其他功能
//   ]
// };
