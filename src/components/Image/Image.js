// import { graphql} from "gatsby"
// // import Img from "gatsby-image"
// import { GatsbyImage } from "gatsby-plugin-image"
// import React from "react"
// import "./Image.css"


// const Image = ({data}) => {
// //   const data = useStaticQuery(graphql`
// //     query {
// //       allFile(
// //         filter: {
// //           extension: { regex: "/(jpg)/" }
// //           name: { nin: ["background", "background2"] }
// //         }
// //       ) {
// //         edges {
// //           node {
// //             base
// //             childImageSharp {
// //               fluid(maxHeight: 600, maxWidth: 600) {
// //                 ...GatsbyImageSharpFluid
// //               }
// //             }
// //           }
// //         }
// //       }
// //     }
// //   `)


// const query = graphql`
//   {
//     file(relativePath: { eq: "images/44.jpg" }) {
//       childImageSharp {
//         gatsbyImageData(layout: FIXED)
//       }
//     }
//   }
// `
//   return (
//     <div className="image-container">
//       <h1 className="image animate__animated animate__rubberBand">[Adventure Awaits]</h1>
//       <div className="image-grid">
      
    
  
//     <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} />
    
//     </div>
//     </div>
//       )
// }

// export default Image