var profileApp = angular.module('profile', []);

profileApp.controller('ProfileCtrl', function ($scope, $http) {
  $scope.profile = {
    "associations": "",
    "currentShare": {
      "author": {
        "firstName": "Hasan",
        "lastName": "Abdel halim"
      },
      "comment": "a good & an essential  read",
      "id": "s5774241110666780675",
      "source": {
        "serviceProvider": {
          "name": "LINKEDIN"
        }
      },
      "timestamp": 1376686380000,
      "visibility": {
        "code": "anyone"
      }
    },
    "dateOfBirth": {
      "day": 7,
      "month": 7
    },
    "educations": {
      "_total": 2,
      "values": [{
        "degree": "Msc.",
        "endDate": {
          "year": 2008
        },
        "fieldOfStudy": "Media Informatics",
        "id": 60992030,
        "schoolName": "Rheinisch-Westfälische Technische Hochschule Aachen"
      }, {
        "activities": "",
        "degree": "Bsc.",
        "endDate": {
          "year": 2003
        },
        "fieldOfStudy": "Computer Engineering",
        "id": 60992053,
        "notes": "",
        "schoolName": "Eastern Mediterranean University",
        "startDate": {
          "year": 1999
        }
      }]
    },
    "firstName": "Hasan",
    "following": {
      "companies": {
        "_total": 1,
        "values": [{
          "id": 715279,
          "name": "souq.com"
        }]
      },
      "industries": {
        "_total": 2,
        "values": [{
          "id": 4
        }, {
          "id": 6
        }]
      },
      "people": {
        "_total": 0
      },
      "specialEditions": {
        "_total": 0
      }
    },
    "formattedName": "Hasan Abdel halim",
    "headline": "Senior Software Developer at Souq.com",
    "id": "aMDVVlbucg",
    "industry": "Computer Software",
    "interests": "",
    "jobBookmarks": {
      "_total": 0
    },
    "languages": {
      "_total": 4,
      "values": [{
        "id": 1,
        "language": {
          "name": "English"
        }
      }, {
        "id": 2,
        "language": {
          "name": "Arabic"
        }
      }, {
        "id": 3,
        "language": {
          "name": "German"
        }
      }, {
        "id": 4,
        "language": {
          "name": "Turkish"
        }
      }]
    },
    "lastModifiedTimestamp": 1399933639313,
    "lastName": "Abdel halim",
    "location": {
      "country": {
        "code": "jo"
      },
      "name": "Jordan"
    },
    "mfeedRssUrl": "http://www.linkedin.com/rss/mefeed?key=7XYnDzQ3tdByyFKhN9O8TKtLm4tibErY8gdt8wTvarP7veo7d7oA4AsIOVqENOp",
    "numConnections": 138,
    "numConnectionsCapped": false,
    "numRecommenders": 0,
    "pictureUrls": {
      "_total": 0
    },
    "positions": {
      "_total": 7,
      "values": [{
        "company": {
          "id": 715279,
          "industry": "Internet",
          "name": "souq.com",
          "size": "201-500 employees",
          "type": "Privately Held"
        },
        "id": 362456913,
        "isCurrent": true,
        "startDate": {
          "month": 1,
          "year": 2013
        },
        "summary": "Customization and development of Apache Opentaps-based ERP system, which includes but not limited to:\n\n- Adapting the opentaps ERP system for Souq's business needs.\n\n- The Design & Development of brand new services, which help in speeding the warehouse operations like (picking, packing, and shipping).\n\n- Optimization of core services like MRP, Inventory Movement and reservation logic.\n\n- Design & Development of system modules like API, Monitoring Alerts, and Dashboard that facilitate easy retrieval of ERP information through secured web interfaces using JSON, or XML.",
        "title": "Senior Java Developer"
      }, {
        "company": {
          "id": 243204,
          "industry": "Computer Software",
          "name": "Integrant Inc",
          "size": "51-200 employees",
          "type": "Privately Held"
        },
        "endDate": {
          "month": 1,
          "year": 2013
        },
        "id": 367491893,
        "isCurrent": false,
        "startDate": {
          "month": 11,
          "year": 2011
        },
        "summary": "- Development of Enterprise web applications and services using Java EE, Google Web Toolkit (GWT), GXT, Spring framework, and Hibernate.\n\n- Maintaining and enhancing an in house CRM solution that uses Apache Tapestry, Spring framework and Hibernate.\n\n- Development of backend processes using Java SE, and Hibernate that provide integration layer with third party services like Authorize.net, Hostopia, and Lyris EmailLabs. Additionally, performing business related functionalities like Billing, and generating reports.",
        "title": "Senior Java Developer"
      }, {
        "company": {
          "id": 1354148,
          "industry": "Computer Software",
          "name": "KeySoft L.L.C - Jordan",
          "size": "11-50 employees",
          "type": "Privately Held"
        },
        "endDate": {
          "month": 10,
          "year": 2011
        },
        "id": 211662504,
        "isCurrent": false,
        "startDate": {
          "month": 8,
          "year": 2011
        },
        "summary": "Insurance software system :\n\n- Eclipse's RCP for UI development.\n\n- Using Hibernate as persistence provider for database.\n\n- Spring for configuration, and system setup",
        "title": "Senior Java Developer"
      }, {
        "company": {
          "id": 658780,
          "industry": "Computer Software",
          "name": "Adaptive TechSoft",
          "size": "51-200 employees",
          "type": "Partnership"
        },
        "endDate": {
          "month": 8,
          "year": 2011
        },
        "id": 156848951,
        "isCurrent": false,
        "startDate": {
          "month": 7,
          "year": 2009
        },
        "summary": "- Senior Portal implementer and lead developer of Oracle Webcenter Suite, and Liferay Solutions.\n\n- Development of Enterprise web applications and services using Oracle ADF 11g and Oracle Fusion Middleware.\n\n- Development of Enterprise web applications using JSF2, EJB3, JPA2, and Hibernate. \n\n- Customization and Personalization of Oracle Webcenter Spaces including custom services and Taskflows, Site templates, Page templates, and extending existing services.\n\n- Integration with Oracle Universal Content Management (UCM) through JCR (JSR-170) standard and UCM’s CIS service.\n\n- Oracle SOA suite application development using BPEL.",
        "title": "Senior Java Developer"
      }, {
        "company": {
          "id": 166628,
          "industry": "Research",
          "name": "University of Bonn",
          "size": "1001-5000 employees",
          "type": "Educational Institution"
        },
        "endDate": {
          "month": 9,
          "year": 2007
        },
        "id": 168036030,
        "isCurrent": false,
        "startDate": {
          "month": 10,
          "year": 2006
        },
        "summary": "- Adapting and Integrating a Prolog based (TuProlog) backend with a Context-Sensitive Aspect Language (CSLogicAj) using Java and Prolog programming languages.\n\n- Creating Web Service Bundles for the Ditrios/OSGi SOA framework.\n\n- Context Information manipulation including Modeling (OWL), Querying and storing in a Prolog facts base.\n\n- Development of Eclipse Plug-in for a Prolog Development tool.",
        "title": "Java Developer"
      }, {
        "company": {
          "industry": "Computer Software",
          "name": "Qosmotec Software Solutions GmbH"
        },
        "endDate": {
          "month": 9,
          "year": 2006
        },
        "id": 156863133,
        "isCurrent": false,
        "startDate": {
          "month": 3,
          "year": 2005
        },
        "summary": "- Linux System administration and Customization for embedded devices which include creating installation scripts, compiling and optimizing system kernel and modules.\n\n- Development of software modules for mobile devices (C/C++).\n\n- Development of an Online Quality Management System using PHP and MySQL.\n\n- Maintenance and Enhancement of a Bugzilla-based  Bug Tracking System using Perl and MySQL.",
        "title": "Software and System Developer"
      }, {
        "company": {
          "industry": "Computer Software",
          "name": "E-G Software Development Gmbh"
        },
        "endDate": {
          "month": 9,
          "year": 2003
        },
        "id": 168036387,
        "isCurrent": false,
        "startDate": {
          "month": 1,
          "year": 2003
        },
        "summary": "- Development of core database modules (C/C++). \n\n- Implementation of software projects (C/C++).\n\n- Development of kernel modules (C/C++).\n\n- Specialized in Network and TCP/IP programming.",
        "title": "C/C++ Developer"
      }]
    },
    "publicProfileUrl": "http://www.linkedin.com/in/hasanabdelhalim",
    "recommendationsReceived": {
      "_total": 0
    },
    "relatedProfileViews": {
      "_total": 10,
      "values": [{
        "firstName": "Amjad",
        "id": "QnOEspX7rJ",
        "lastName": "Qasmieh"
      }, {
        "firstName": "Abdelrahman",
        "id": "E-ny9ZD5fW",
        "lastName": "samara"
      }, {
        "firstName": "Zaid",
        "id": "wT5D1RlrhJ",
        "lastName": "Aquel"
      }, {
        "firstName": "Hazem",
        "id": "ORSONDmOxM",
        "lastName": "Al-Tamimi"
      }, {
        "firstName": "Fadi",
        "id": "M98dVJzKBn",
        "lastName": "Salameh"
      }, {
        "firstName": "Mohammad",
        "id": "C7U1MEO0c-",
        "lastName": "Khateeb"
      }, {
        "firstName": "Abdelrahman J.",
        "id": "z4lXfcKbQ7",
        "lastName": "Najjar"
      }, {
        "firstName": "tareq",
        "id": "bz1A3-kM8u",
        "lastName": "qasem"
      }, {
        "firstName": "Yazan",
        "id": "-lJVMWcbZc",
        "lastName": "Flaifel"
      }, {
        "firstName": "Mohammad",
        "id": "uOskIYfIDX",
        "lastName": "Abu-Odeh"
      }]
    },
    "skills": {
      "_total": 50,
      "values": [{
        "id": 5,
        "skill": {
          "name": "Java"
        }
      }, {
        "id": 6,
        "skill": {
          "name": "C++"
        }
      }, {
        "id": 15,
        "skill": {
          "name": "XML"
        }
      }, {
        "id": 16,
        "skill": {
          "name": "SQL"
        }
      }, {
        "id": 18,
        "skill": {
          "name": "EJB"
        }
      }, {
        "id": 19,
        "skill": {
          "name": "JPA"
        }
      }, {
        "id": 20,
        "skill": {
          "name": "Spring"
        }
      }, {
        "id": 21,
        "skill": {
          "name": "Hibernate"
        }
      }, {
        "id": 22,
        "skill": {
          "name": "JSF"
        }
      }, {
        "id": 23,
        "skill": {
          "name": "ADF"
        }
      }, {
        "id": 24,
        "skill": {
          "name": "Servlets"
        }
      }, {
        "id": 31,
        "skill": {
          "name": "GWT"
        }
      }, {
        "id": 33,
        "skill": {
          "name": "Java Enterprise Edition"
        }
      }, {
        "id": 40,
        "skill": {
          "name": "Linux"
        }
      }, {
        "id": 54,
        "skill": {
          "name": "Web Services"
        }
      }, {
        "id": 55,
        "skill": {
          "name": "Apache Opentaps"
        }
      }, {
        "id": 56,
        "skill": {
          "name": "GXT"
        }
      }, {
        "id": 57,
        "skill": {
          "name": "CRM"
        }
      }, {
        "id": 58,
        "skill": {
          "name": "ERP"
        }
      }, {
        "id": 59,
        "skill": {
          "name": "Apache activeMQ"
        }
      }, {
        "id": 60,
        "skill": {
          "name": "Portlets"
        }
      }, {
        "id": 61,
        "skill": {
          "name": "PHP"
        }
      }, {
        "id": 62,
        "skill": {
          "name": "C"
        }
      }, {
        "id": 63,
        "skill": {
          "name": "XHTML"
        }
      }, {
        "id": 64,
        "skill": {
          "name": "JAXB"
        }
      }, {
        "id": 73,
        "skill": {
          "name": "Web Applications"
        }
      }, {
        "id": 74,
        "skill": {
          "name": "Eclipse"
        }
      }, {
        "id": 75,
        "skill": {
          "name": "SOA"
        }
      }, {
        "id": 76,
        "skill": {
          "name": "AJAX"
        }
      }, {
        "id": 77,
        "skill": {
          "name": "MySQL"
        }
      }, {
        "id": 78,
        "skill": {
          "name": "Tomcat"
        }
      }, {
        "id": 79,
        "skill": {
          "name": "Design Patterns"
        }
      }, {
        "id": 80,
        "skill": {
          "name": "Subversion"
        }
      }, {
        "id": 81,
        "skill": {
          "name": "JUnit"
        }
      }, {
        "id": 82,
        "skill": {
          "name": "OOP"
        }
      }, {
        "id": 83,
        "skill": {
          "name": "JMS"
        }
      }, {
        "id": 84,
        "skill": {
          "name": "Ant"
        }
      }, {
        "id": 85,
        "skill": {
          "name": "Weblogic"
        }
      }, {
        "id": 86,
        "skill": {
          "name": "JSON"
        }
      }, {
        "id": 87,
        "skill": {
          "name": "UML"
        }
      }, {
        "id": 88,
        "skill": {
          "name": "Maven"
        }
      }, {
        "id": 89,
        "skill": {
          "name": "Glassfish"
        }
      }, {
        "id": 90,
        "skill": {
          "name": "JBoss Application Server"
        }
      }, {
        "id": 91,
        "skill": {
          "name": "Git"
        }
      }, {
        "id": 92,
        "skill": {
          "name": "JDeveloper"
        }
      }, {
        "id": 93,
        "skill": {
          "name": "Liferay"
        }
      }, {
        "id": 96,
        "skill": {
          "name": "Apache"
        }
      }, {
        "id": 97,
        "skill": {
          "name": "JavaSE"
        }
      }, {
        "id": 102,
        "skill": {
          "name": "Apache ofbiz"
        }
      }, {
        "id": 103,
        "skill": {
          "name": "Python"
        }
      }]
    },
    "suggestions": {
      "toFollow": {
        "companies": {
          "_count": 10,
          "_start": 0,
          "values": [{
            "id": 1197717,
            "name": "Keysoft Solutions"
          }, {
            "id": 1065106,
            "name": "redbytes software"
          }, {
            "id": 295458,
            "name": "Buddhi Software"
          }, {
            "id": 364636,
            "name": "PERICENT TECHNOLOGIES (P) LIMITED"
          }, {
            "id": 2211693,
            "name": "Ikure Techsoft Pvt. Ltd."
          }, {
            "id": 1208253,
            "name": "PINNACLE SOLUTIONS"
          }, {
            "id": 50982,
            "name": "AXIT"
          }, {
            "id": 1598810,
            "name": "Emeldi Group"
          }, {
            "id": 218462,
            "name": "Astea Solutions AD"
          }, {
            "id": 67839,
            "name": "Eurosoftware"
          }]
        },
        "industries": {
          "_total": 0
        },
        "newsSources": {
          "_total": 0
        },
        "people": {
          "_total": 0
        }
      }
    },
    "summary": "I have produced systems for several environments, particularly Windows, Linux and embedded systems. I develop software in Java, C++, C and PHP. I have a great deal of experience of developing software for internet and intranet applications. This includes Web services, Portals and Web applications. I am familiar with most of the current internet technologies including AJAX, (X)HTML, CSS, SOAP, etc.\n\nI have worked on many developments on all stages of the development life-cycle, from analysis through design, programming and testing to installation. I have worked on one man projects and projects with 50 to 100 people. I have performed many roles, usually design or programming but also team leadership, support and testing.\n\nI have a good academic record and considerable experience in the computer industry. I work hard and can provide excellent references from previous clients.\n\nSpecialties: Java,  J2EE, EJB, JPA, Hibernate, GWT, GXT, C++, C , PHP, SQL, XML, XHTML"
  };

  $scope.profile.para = function () {
    return this.summary.split('\n\n');
  };

  var positions = $scope.profile['positions'].values;

  function Position(arr) {
    this.pos = arr;
    this.title = this.pos.title;
    this.company = this.pos.company.name.toUpperCase();
    this.isCurrent = this.pos.isCurrent;
    this.startDate = this.pos.startDate.year;
    this.summary = this.pos.summary.split('\n\n')[0];
    this.items = this.pos.summary.split('\n\n').filter(function (itm) {
      return itm[0] == '-';
    }).map(function (str) {
      return str.replace('-', '');
    });
  }

  $scope.positions = positions.map(function (arr) {
    return new Position(arr);
  });

});
