// import React from 'react'
// import {Helmet} from "react-helmet-async";

// const Title = ({title="Chat App",description="This is the Chat App called ChatU",}) => {
//   return (
//     <Helmet>
//         <title>{title}</title>
//         <meta name="description" content={description} />
//     </Helmet>
//   );
// };
// ;
// export default Title;

import React from "react";
import { Helmet } from "react-helmet-async";

const Title = ({
  title = "Chat App",
  description = "this is the Chat App called Chattu",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default Title;