import { Publication } from '../types/Publication'
import { IMAGES } from './images'

export const PUBLICATIONS: Publication[] = [
  {
    id: '6',
    title: 'From Prompt to Product — Why the Design Step Matters',
    description:
      'AI-assisted design tools work best when they are grounded in an existing design system rather than generating interfaces from scratch. This article walks through Google Stitch, Figma AI, and Claude Design, and shows why structuring visual properties as design tokens lets AI stay consistent with brand guidelines and component libraries on the path from prompt to product.',
    image: IMAGES.codecentricBlog,
    imageContain: true,
    url: 'https://www.codecentric.de/en/knowledge-hub/blog/from-prompt-to-product-why-the-design-step-matters',
    type: 'article',
    date: '2026-06-16'
  },
  {
    id: '5',
    title: 'React is dead, long live React — React 19 is here',
    description:
      'React 19 introduces a new compiler that automatically optimizes performance by eliminating the need for manual memoization hooks. Beyond the compiler, it brings Server Components for server-side rendering, Server Actions for asynchronous server-side function execution, and several new hooks to streamline modern development workflows.',
    image: IMAGES.codecentricBlog,
    imageContain: true,
    url: 'https://www.codecentric.de/en/knowledge-hub/blog/react-is-dead-long-live-react-react-19-is-here',
    type: 'article',
    date: '2024-07-19'
  },
  {
    id: '4',
    title: 'Simplicity through Digitalization',
    description:
      'Modern production environments face growing complexity from dozens of independent systems generating data in isolation. This article explores how a unified, distributed system — built around reusable connectors and exporters — aggregates production data across machines, scales dynamically with new nodes, and maintains local availability without a central server, reducing inefficiencies and simplifying factory-wide monitoring.',
    image: IMAGES.kuhn,
    imageContain: true,
    type: 'article',
    date: '2024-07-12'
  },
  {
    id: '1',
    title: 'Knowledge and Task Management in Notion',
    description:
      'Explore how Notion can revolutionize knowledge and task management in IT consultancy. Learn about the PARA method for organizing information and implementing a robust system in Notion, including relational databases and advanced features like dashboards and API integrations, to enhance productivity and organization.',
    image: IMAGES.codecentricBlog,
    imageContain: true,
    url: 'https://www.codecentric.de/wissens-hub/blog/knowledge-und-task-management-in-notion',
    type: 'article',
    date: '2023-07-26'
  },
  {
    id: '2',
    title: 'Development of edge-solutions with Balena',
    description:
      'I discussed how Balena provides a versatile solution for managing edge devices and gateways, enabling seamless connection to various platforms for data distribution. Highlighting its edge and software platform, I noted its suitability for all project stages, from proof-of-concept to full production, with features like OTA updates, remote access, and device diagnostics to support diverse application needs.',
    image: IMAGES.buildingIot,
    imageContain: true,
    type: 'talk',
    url: 'https://www.buildingiot.de/veranstaltung-14061-0-entwicklung-von-edge-loesungen-mit-balena-sponsored-talk.html',
    date: '2022-05-11'
  },
  {
    id: '3',
    title: 'Perspective-correct distance measurement between people',
    description:
      'The blog post "Smart DistancR" discusses a machine learning-based application developed to accurately measure distances between people in camera footage, ensuring adherence to social distancing guidelines. By utilizing techniques such as object detection and perspective correction, Smart DistancR computes distances in real-time without cloud connectivity, prioritizing privacy. Optimized for lightweight hardware like the Raspberry Pi 4 and Googles Coral Device, this solution addresses the need for effective social distancing tools during the ongoing pandemic.',
    image: IMAGES.codecentricBlog,
    imageContain: true,
    url: 'https://www.codecentric.de/wissens-hub/blog/smart-distancr',
    type: 'article',
    date: '2021-12-13'
  }
]
