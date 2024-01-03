import uniqid from "uniqid";

const data = {
  personalInfo: {
    fullName: "Jane Doe",
    email: "jane.doe@gmail.com",
    phoneNumber: "(123) 456-7890",
    location: "Los Angeles, CA",
  },

  sections: {
    educations: [
      {
        degree: "Bachelors in Mathematics",
        schoolName: "London City University",
        location: "New York City, US",
        startDate: "08/2020",
        endDate: "present",
        id: uniqid(),
      },
    ],

    experiences: [
      {
        companyName: "Random Company Inc.",
        positionTitle: "Designer",
        location: "New York City, US",
        description: "test job description",
        startDate: "08/2020",
        endDate: "present",
        id: uniqid(),
      },
    ],
  },
};

export default data;
