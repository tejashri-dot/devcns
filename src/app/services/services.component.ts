
import { Component, OnInit,HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],

})
export class ServicesComponent   {
  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  isButtonVisible = false;

// Show button when the user scrolls down a certain distance





  activeTab: string = 'design'; // Default active tab

  tabs = [
    {
      id: 'design',
      name: 'Design',
      content: [
        {
          title: 'Web Design',
          description: 'Crafting visually stunning websites tailored to your brand\'s identity and vision.',
          image: 'https://devconsoftware.com/assets/img/work-with-us1.jpeg'
        },
        {
          title: 'Graphic Design',
          description: 'Elevating brands through captivating graphic design that resonates with audiences.',
          image: 'https://devconsoftware.com/assets/img/graphic-design.webp'
        },
        {
          title: 'User Experience Design',
          description: 'Creating seamless and intuitive user experiences that prioritize user satisfaction.',
          image: 'https://devconsoftware.com/assets/img/user-experiance1.webp'
        }
      ]
    },
    {
      id: 'management',
      name: 'Management',
      content: [
        {
          title: 'Product Management',
          description: '"Guiding product development with a strategic focus on user needs and trends."',
          image: 'https://devconsoftware.com/assets/img/product-managment.avif'
        },
        {
          title: 'IOT Services',
          description: '"Empowering businesses with innovative IoT solutions that integrate devices and data.""',
          image: 'https://devconsoftware.com/assets/img/iot-thumbnail.jpeg'
        },
        {
          title: 'Outsourcing',
          description: '"Streamlining operations and driving cost-efficiency through expert outsourcing solutions.',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv1TfGrVBMu_8oI0dHuw0JI7ufo2bAmpp7Fg&s'
        }
      ]
    },
    {
      id: 'digital marketing',
      name: 'Digital Marketing',
      content: [
        {
          title: 'Digital Marketing',
          description: '"Boosting brand visibility and driving targeted traffic through data-driven digital marketing strategies."',
          image: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/What_is_digital_marketing.jpg'
        },
        {
          title: 'Digital marketing Services',
          description: '"Digital marketing services encompass various strategies and techniques aimed at promoting businesses, products, or services online. These services typically include:"',
          image: 'https://www.digitalvidya.com/blog/wp-content/uploads/2017/10/Digital-Marketing-Services-banner.jpg'
        },

      ]
    },
    {
      id: ' it-cources',
      name: 'IT-Cources',
      content: [
        {
          title: 'Power-BI',
          description: '"Power BI is Microsofts data analysis and visualization tool. It helps create interactive reports and dashboards from different data sources, facilitating quick insights and informed decision-making.."',
          image: 'https://devconsoftware.com/assets/img/POWER-BI.png'
        },
        {
          title: 'Sales Force',
          description: ' "Salesforce is a cloud-based CRM platform that helps businesses manage sales, marketing, and customer interactions efficiently."',
          image: 'https://devconsoftware.com/assets/img/salse-force.jpeg'
        },
        {
          title: 'SAP',
          description: ' " SAP offers courses covering ERP basics, finance, sales, procurement, HR, analytics, and the latest S/4HANA software, tailored to different industries and job roles."',
          image: 'https://devconsoftware.com/assets/img/SAP_Locations_Walldorf_2012_014-1_3840x2160.webp'
        },

      ]
    },
    {
      id: 'cources',
      name: 'Cources',
      content: [
        {
          title: 'Software-Testing',
          description: ' "Software testing verifies that software meets quality standards and functions correctly by identifying defects or errors. It ensures reliability, performance, and user satisfaction."',
          image: 'https://devconsoftware.com/assets/img/software-testing.jpeg'
        },
        {
          title: 'Cloud-Computing',
          description: '"Cloud computing delivers computing services like storage, processing, and software over the internet, offering flexibility and scalability for businesses while reducing costs"',
          image: 'https://devconsoftware.com/assets/img/cloud-computing.jpeg'
        },
        {
          title: 'ASP.Net',
          description: '"ASP.NET is a Microsoft framework for building dynamic web applications and services, offering scalability and security features."',
          image: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/ASP.NET_logo.jpg'
        },

      ]
    },
    {
      id: 'development',
      name: 'Development',
      content: [
        {
          title: 'Web Development',
          description: '"Building dynamic, user-centric websites that drive engagement and deliver results."',
          image: 'https://devconsoftware.com/assets/img/web-development.webp'
        },
        {
          title: 'Mobile Apllication Development',
          description: '"Crafting intuitive mobile applications that enhance user experience and drive business growth."',
          image: 'https://devconsoftware.com/assets/img/android-app-developer-Specialist111.jpeg'
        },

      ]
    },
  ];
  ActiveTab = this.tabs[0]?.id || ''; // Set the default active tab

  constructor() {}

  ngOnInit(): void {}

  // Method to set active tab
  setActiveTab(tabId: string) {
    this.activeTab = tabId;
  }
}





export class ServicesModule {}



  /*tabs = [
    { key: 'design', display: 'Design' },
    { key: 'management', display: 'Management' },
    { key: 'digitalMarketing', display: 'Digital Marketing' },
    { key: 'development', display: 'Development' },
    { key: 'courses', display: 'Courses' },
  ];
  activeTab: string = 'design'; // Default active tab

  // Services data
  designServices = [
    {
      title: 'Web Design',
      description:
        "Crafting visually stunning websites tailored to your brand's identity and vision.",
      img: 'https://devconsoftware.com/assets/img/work-with-us1.jpeg',
    },
    {
      title: 'Graphic Design',
      description:
        'Elevating brands through captivating graphic design that resonates with audiences and leaves a lasting impression.',
      img: 'https://devconsoftware.com/assets/img/graphic-design.webp',
    },
    {
      title: 'User Experience Design',
      description:
        'Creating seamless and intuitive user experiences that prioritize user satisfaction and drive conversion.',
      img: 'https://devconsoftware.com/assets/img/user-experiance1.webp',
    },
  ];

  managementServices = [
    {
      title: 'Product Management',
      description:
        'Guiding product development with a strategic focus on user needs, innovation, and market success.',
      img: 'https://devconsoftware.com/assets/img/product-managment.avif',
    },
    {
      title: 'Business Consulting',
      description:
        'Providing strategic advice to optimize business operations and achieve growth.',
      img: 'https://devconsoftware.com/assets/img/business-consulting.jpg',
    },
  ];
  marketingText = "Boosting brand visibility and driving targeted traffic through data-driven digital marketing strategies.";
  serviceList = [
    "Search Engine Optimization (SEO)",
    "Search Engine Marketing (SEM)",
    "Content Marketing",
    "Pay-Per-Click Advertising (PPC)",
    "Analytics and Measurement"
  ];
 digitalMarketingServices = [
    {
      title: 'SEO Optimization',
      description:
        'Improving website visibility and search engine rankings to drive organic traffic.',
      img: 'https://devconsoftware.com/assets/img/seo.webp',
    },
    {
      title: 'Social Media Marketing',
      description:
        'Creating impactful campaigns to grow your social media presence and engagement.',
      img: 'https://devconsoftware.com/assets/img/social-media.jpg',
    },
  ];

  /*developmentServices = [
    {
      title: 'Web Development',
      description:
        'Building robust and scalable web applications tailored to your needs.',
      img: 'https://devconsoftware.com/assets/img/web-development.jpg',
    },
    {
      title: 'Mobile App Development',
      description:
        "Developing user-friendly mobile apps to enhance your brand's reach and engagement.",
      img: 'https://devconsoftware.com/assets/img/mobile-app.jpg',
    },
  ];

  courses = [
    {
      title: 'Web Development Bootcamp',
      description:
        'Learn full-stack web development from scratch with hands-on projects.',
      img: 'https://devconsoftware.com/assets/img/web-dev-bootcamp.jpg',
    },
    {
      title: 'Digital Marketing Masterclass',
      description:
        'Master digital marketing strategies to grow your business online.',
      img: 'https://devconsoftware.com/assets/img/digital-marketing-course.jpg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  // Method to set the active tab
  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

}

  activeTab: string = 'design';

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }
  services = [
    {
      title: 'Web Design',
      description:
        'Crafting visually stunning websites tailored to your brand\'s identity and vision.',
      imageUrl: 'https://devconsoftware.com/assets/img/work-with-us1.jpeg',
      link: '#',
    },
    {
      title: 'Graphic Design',
      description:
        'Elevating brands through captivating graphic design that resonates with audiences and leaves a lasting impression.',
      imageUrl: 'https://devconsoftware.com/assets/img/graphic-design.webp',
      link: '#',
    },
    {
      title: 'User Experience Design',
      description:
        'Creating seamless and intuitive user experiences that prioritize user satisfaction and drive conversion.',
      imageUrl: 'https://devconsoftware.com/assets/img/user-experiance1.webp',
      link: '#',
    },
  ];
}*/
// Set active tab

/*services = {
  design: {
    title: 'Design Services',
    description: 'Crafting visually stunning websites tailored to your brand.',
    imageUrl: 'https://devconsoftware.com/assets/img/work-with-us1.jpeg',
  },
  marketing: {
    title: 'Digital Marketing',
    description: 'Boosting brand visibility and driving targeted traffic.',
    imageUrl: 'https://devconsoftware.com/assets/img/marketing.webp',
  },
  development: {
    title: 'Development Services',
    description: 'Building robust and scalable web applications.',
    imageUrl: 'https://devconsoftware.com/assets/img/web-development.jpg',
  }
};



selectTab(index: number): void {
  this.selectTab = index;
}
}*/
