import styled, { css } from "styled-components";
import analitika from "../assets/icons/sidebar/analitika.svg?react";
import buyurtma from "../assets/icons/sidebar/buyurtma.svg?react";
import moliya from "../assets/icons/sidebar/moliya.svg?react";
import talaba from '../assets/icons/sidebar/talaba.svg?react';
import guruhlar from '../assets/icons/sidebar/guruhlar.svg?react';
import kurslar from '../assets/icons/sidebar/kurslar.svg?react';
import hr from '../assets/icons/sidebar/hr.svg?react';
import arrowRight from '../assets/icons/sidebar/arrowRight.svg?react'

export const Icon = styled.div``;

const common = css`
  width: 17px;
  height: 17px;
  margin-left: 27px;
`;

Icon.Analitika = styled(analitika)`
  ${common}
`;

Icon.Buyurtma = styled(buyurtma)`
  ${common}
`;

Icon.Moliya = styled(moliya)`
  ${common}
`;

Icon.Talaba = styled(talaba)`
  ${common}
`;

Icon.Guruhlar = styled(guruhlar)`
  ${common}
`;

Icon.Kurslar = styled(kurslar)`
  ${common}
`;

Icon.HR = styled(hr)`
  ${common}
`;

export const Arrow = styled(arrowRight)`
  position: absolute;
  right: 30px;
`

export const sidebarList = [
  {
    id: 1,
    name: "Analitika",
    icon: Icon.Analitika,
    arrow: Arrow
  },
  {
    id: 2,
    name: "Buyurtma",
    icon: Icon.Buyurtma,
    arrow: Arrow
  },
  {
    id: 3,
    name: "Moliya",
    icon: Icon.Moliya,
    arrow: Arrow
  },
  {
    id: 4,
    name: "Talaba",
    icon: Icon.Talaba,
    arrow: Arrow
  },
  {
    id: 5,
    name: "Guruhlar",
    icon: Icon.Guruhlar,
    arrow: Arrow
  },
  {
    id: 6,
    name: "Kurslar",
    icon: Icon.Kurslar,
    arrow: Arrow
  },
  {
    id: 7,
    name: "HR",
    icon: Icon.HR,
    arrow: Arrow
  },
];


export default sidebarList;
