import styled from 'styled-components';

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
`;

export const Title = styled.h2`
  font-size: 38px;
  margin-bottom: 25px;
  text-align: center;
`;

export const Backs = styled.div`

      padding-right: 2rem;
      padding-bottom:2rem;
`;
export const BackSpan = styled.span`
      padding-right: 2rem;
`

// .category-container {
//     display: grid;
//     grid-template-columns: repeat(4, 1fr);
//     column-gap: 20px;
//     row-gap: 50px;

// }

// .category-title{
//     font-size: 38px;
//     margin-bottom: 25px;
// }

// .backs{
//     span{
//         padding-right: 2rem;

//     }
// }

