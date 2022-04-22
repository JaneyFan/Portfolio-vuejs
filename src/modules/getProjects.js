import { ref } from 'vue'

export default function getProjects() {

  let projects = ref([
    {
      projectID: 1,
      projectTitle: "Project One",
      projectDescription: "marathon poster",
      projectURL: require("../assets/marathon poster.jpg"),
      projectCategory: "Poster"
    }, 
     {
      projectID: 2,
      projectTitle: "Project Two",
      projectDescription: "promo commercial for facebook",
      projectURL: require("../assets/promo commercial for facebook.mp4"),
      projectCategory: "Video"
    },
    {
      projectID: 3,  
      projectTitle: "Project Three",
      projectDescription: "Trapholt poster",
      projectURL: require("../assets/Trapholt poster.jpg"),
      projectCategory: "Poster"    
    },
    {
      projectID: 4,
      projectTitle: "Project Four",
      projectDescription: "Trapholt trifold",
      projectURL: require("../assets/Trapholt trifold front.jpg"),
      projectCategory: "Trifold"    
    }, 
    {
      projectID: 5,
      projectTitle: "Project Five",
      projectDescription: "Trapholt website",
      projectURL: "https://static.posters.cz/image/1300/image/750/fototapeter/waterfall-lake-i78441.jpg",
      projectCategory: "Web"    
    }

  ])

    return { projects }
  }