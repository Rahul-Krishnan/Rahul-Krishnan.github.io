export interface ResumeData {
  name: string;
  city: string;
  phone: string;
  email: string;
  linkedin: string;
  technicalSkills: {
    proficient: Array<{
      name: string;
      link: string;
    }>;
    exposure: Array<{
      name: string;
      link: string;
    }>;
  };
  experience: Array<{
    company: string;
    link: string;
    title: string;
    location: string;
    dates: string;
    points: Array<string>;
  }>;
  education: Array<{
    school: string;
    link: string;
    degree: string;
    dates: string;
  }>;
  activities: Array<{
    description: string;
    link: string;
  }>;
}

export const resumeData: ResumeData = {
  name: "Rahul Krishnan",
  city: "San Francisco, CA",
  phone: "917.558.2174",
  email: "rk2211@gmail.com",
  linkedin: "linkedin.com/in/rahul-krishnan",
  technicalSkills: {
    proficient: [
      {
        name: "JavaScript",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
      },
      {
        name: "React",
        link: "https://reactjs.org/"
      },
      {
        name: "Redux",
        link: "https://redux.js.org/"
      },
      {
        name: "Redux-Saga",
        link: "https://redux-saga.js.org/"
      },
      {
        name: "Recompose",
        link: "https://github.com/acdlite/recompose"
      },
      {
        name: "Ruby on Rails",
        link: "https://rubyonrails.org/"
      },
      {
        name: "Python",
        link: "https://www.python.org/"
      },
      {
        name: "Django",
        link: "https://www.djangoproject.com/"
      },
      {
        name: "Elasticsearch",
        link: "https://www.elastic.co/elasticsearch/"
      },
      {
        name: "GraphQL",
        link: "https://graphql.org/"
      },
      {
        name: "SQL",
        link: "https://en.wikipedia.org/wiki/SQL"
      },
      {
        name: "PostgreSQL",
        link: "https://www.postgresql.org/"
      },
      {
        name: "AWS",
        link: "https://aws.amazon.com/"
      },
      {
        name: "Jest",
        link: "https://jestjs.io/"
      },
      {
        name: "React Testing Library",
        link: "https://testing-library.com/docs/react-testing-library/intro/"
      },
      {
        name: "Enzyme",
        link: "https://enzymejs.github.io/enzyme/"
      },
      {
        name: "RSpec",
        link: "https://rspec.info/"
      },
      {
        name: "HTML",
        link: "https://html.spec.whatwg.org/"
      },
      {
        name: "CSS",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS"
      },
      {
        name: "Git",
        link: "https://git-scm.com/"
      }
    ],
    exposure: [
      {
        name: "Node",
        link: "https://nodejs.org/"
      },
      {
        name: "Selenium",
        link: "https://www.selenium.dev/"
      },
      {
        name: "Sass",
        link: "https://sass-lang.com/"
      },
      {
        name: "Jasmine",
        link: "https://jasmine.github.io/"
      },
      {
        name: "Elixir",
        link: "https://elixir-lang.org/"
      },
      {
        name: "Phoenix",
        link: "https://www.phoenixframework.org/"
      },
      {
        name: "Google Cloud Platform (GCP)",
        link: "https://cloud.google.com/"
      },
      {
        name: "Postman",
        link: "https://www.postman.com/"
      },
      {
        name: "Heroku",
        link: "https://www.heroku.com/"
      }
    ]
  },
  experience: [
    {
      company: 'Alation',
      link: 'https://alation.com/',
      title: 'Software Engineer, Search Team',
      location: 'Redwood City, CA',
      dates: 'Apr 2020 - Present',
      points: [
        'Built Public Search API endpoint conforming to OAS 3.0 to allow integration into external apps, eg Chrome or Slack.',
        'Created Table View for Search results, leveraging reusable components, to give users a customizable table to suit their specific search needs and preserved across sessions.',
        'Expanded Accessibility by introducing keyboard navigation and alt text, giving impaired users a more meaningful Search experience, and giving power users shortcuts to improve their usage speed.',
        'Created Saved Search functionality, giving users a highly requested feature that lets them save, edit and share searches.',
        'Improved search request speed by implementing caching throughout Django serializers, eliminating N+1 errors, reducing overall latency by over 25% for more complex responses.',
        'Improved page load speed by splitting large single requests into multiple smaller component-driven requests where appropriate to improve user experience, loading most relevant sections over 50% faster.',
        'Added Multiselect capability to all search filters by refactoring shared components and Redux state, as well as tree traversal for multiselection at arbitrary depth, permitting any combination of facets.'
      ]
    },
    {
      company: 'Intrepid Pursuits',
      link: 'https://intrepid.io/',
      title: 'Software Engineer',
      location: 'San Francisco, CA',
      dates: 'Sep 2017 - Apr 2020',
      points: [
        'Created Student-Educator interaction and feedback multi-platform app for large university using JavaScript, React and Ruby on Rails, serving one of company\'s largest clients in 3-year multi-million dollar contract, supporting 400K users.',
        'Rebuilt education app authentication strategy using microservices (AWS Cognito, Lambdas) to implement OAuth, solving problems with existing login pages that required hourly auth server restarts for over 6 months.',
        'Resolved duplicate and missing mobile notifications, which made up over 10% of total notifications for Public Transit System mobile app, restructuring Rails server to implement AWS-based (SQS) and DB-based alternatives.',
        'Refactored bulk data importers using AWS SQS and by catching code inefficiencies, resulting in smoother job management, no known risk of lost jobs, and reducing total import time by over 50%.',
        'Restructured server to use microservices within AWS (Lambdas, EC2, CodePipeline, S3, SQS, SNS, SES) allowing improvements in CI/CD and more app customization and debugging without time-intensive redeployments.',
        'Migrated Ruby on Rails server away from REST endpoints to a single GraphQL interface, providing client apps much more flexibility in requests and response structure.'
      ]
    },
    {
      company: 'Societe Generale',
      link: 'https://www.societegenerale.com/en/home',
      title: 'Trader, Vice President',
      location: 'New York, NY',
      dates: 'Jun 2014 - Jun 2015',
      points: [
        'Grew Agency CMO team at firm with no pre-existing trading desk by leveraging industry relationships, market knowledge and derivatives expertise to maximize profitability while managing $200MM trading book.',
      ],
    },
  ],
  education: [
    {
      school: 'Columbia University',
      link: 'https://www.columbia.edu/',
      degree: 'Bachelor of Arts, Mathematics and Economics',
      dates: 'May 2008',
    },
  ],
  activities: [
    {
      description: 'Dog lover, instagram manager: @good_boy_lego',
      link: 'https://www.instagram.com/good_boy_lego/',
    },
    {
      description: '2nd Dan Black Belt, Hoi Jeon Moo Sool',
      link: 'https://en.wikipedia.org/wiki/Hoi_Jeon_Moo_Sool',
    },
    {
      description: 'Avid Lego builder',
      link: 'https://www.lego.com/',
    },
  ],
};

