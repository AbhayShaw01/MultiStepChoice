
export interface TopicItem {
    Icon: string;
    desc: string;
  }


export const dataArray :TopicItem[]= [
    { Icon: "📈", desc: "Learning specific skills to advance my career" },
    { Icon: "🌏", desc: "Learning new technologies" },
    { Icon: "🛰️", desc: "Refreshing my math foundations" },
    { Icon: "🎯", desc: "Exercising my brain to stay sharp" },
    { Icon: "👀", desc: "Something else" },
  ];
  
export interface Profession{
    Icon:string,
    profession:string,
    desc?:string
}
  export const professional :Profession[]= [
    { Icon: "👧",profession:"Student", desc: "or soon to be enrolled" },
    { Icon: "🧑‍🏫",profession:"Professional", desc: "pursuing a career" },
    { Icon: "🧑‍🤝‍🧑",profession:"Parent", desc: "of a school-age child" },
    { Icon: "👨🏻‍🎓",profession:"Lifelong learner"  },
    { Icon: "👩🏻‍🏫",profession:"Teacher" },
    { Icon: "🧔🏻‍♂️",profession: "Other" },
  ];
  

 export interface mathList{
  image:string,
  content:string,
  category:string,
 } 
  export const mathData:mathList[]=[
    {image:"/assets/math1.png", content : "Arithmetic" , category:"Introductory" },
    {image:"/assets/linear.jpg", content : "Basic Algebra" , category:"Foundation" },
    {image:"/assets/formula.jpg", content : "Intermediate Algebra" , category:"Intermediate" },
    {image:"/assets/calculus.jpg", content : "Calculus" , category:"Advanced" }
  ]


  export interface greetingList{
    title:string,
    ratings:string,
    quote:string,
    writer:string
  }

  export const greetings:greetingList[]=[
    {
      title:`You're on your way!`,
      ratings:"★★★★★",
      quote:"Through its engaging and well-structured courses, Brilliant has taught me mathematical concepts that I previously struggled to understand. I now feel confident approaching both technical job interviews and real world problem solving situations.",
      writer:"- Jacob"

    }
  ]

  export interface OnYourWayData{
    title:string,
    description:string,
  
  }

  export const onYourWay:OnYourWayData[]=[
    {

      title:`You're in the right place`,
     description:"Brilliant gets you hands-on to help improve your professional skills and knowledge. You'll interact and solve fun problems in math, science, and computer science."

    }
  ]

  export interface pathData{
    heading:string,
    details:string
  }

  export const path:pathData[]=[
    {
      heading:"Foundational Math",
      details:"Build your foundational skills in algebra, geometry, and probability."

    },
    {
      heading:"Mathematical Thinking",
      details:"Build your foundational  skills in algebra, geometry, and probability."
    }
  ]